"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "motion/react";
import { Stage } from "@/premium/kit/stage";

/*
 * A fully procedural haute-horlogerie watch: no model file, no textures
 * downloaded. The case is a lathe profile, the dial and movement are drawn
 * onto canvases, and the hands keep the visitor's local time with an 8-beat
 * sweep (28,800 vph), like the calibre described on the page.
 *
 * Units: 1 = case radius (19.5 mm on a 39 mm case). The watch faces +Z.
 */

const TAU = Math.PI * 2;
const MOVEMENT_R = 0.84; // movement plate radius, in watch units

/* ── Canvas artwork ─────────────────────────────────────────────────── */

function spaced(g: CanvasRenderingContext2D, text: string, y: number, spacing: number) {
  const widths = [...text].map((ch) => g.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (text.length - 1);
  let x = -total / 2;
  [...text].forEach((ch, i) => {
    g.fillText(ch, x + widths[i] / 2, y);
    x += widths[i] + spacing;
  });
}

function drawDial(canvas: HTMLCanvasElement, display: string, body: string) {
  const S = canvas.width;
  const R = S / 2;
  const g = canvas.getContext("2d")!;
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.clearRect(0, 0, S, S);
  g.translate(R, R);

  // Midnight enamel base, lit from above.
  const base = g.createRadialGradient(0, -R * 0.3, 0, 0, 0, R);
  base.addColorStop(0, "#23396a");
  base.addColorStop(0.55, "#152852");
  base.addColorStop(1, "#070e1f");
  g.fillStyle = base;
  g.beginPath();
  g.arc(0, 0, R, 0, TAU);
  g.fill();

  // Sunburst: two soft light lobes plus fine radial brushing.
  if ("createConicGradient" in g) {
    const cg = g.createConicGradient(-Math.PI / 3, 0, 0);
    const lobes = [0, 0.14, 0.25, 0.5, 0.64, 0.75, 1];
    const alpha = [0.0, 0.16, 0.0, 0.0, 0.12, 0.0, 0.0];
    lobes.forEach((t, i) => cg.addColorStop(t, `rgba(170,200,255,${alpha[i]})`));
    g.fillStyle = cg;
    g.beginPath();
    g.arc(0, 0, R, 0, TAU);
    g.fill();
  }
  for (let i = 0; i < 1440; i++) {
    const a = (i / 1440) * TAU;
    g.strokeStyle = `rgba(255,255,255,${0.012 + ((i * 7919) % 13) / 400})`;
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(Math.cos(a) * R * 0.05, Math.sin(a) * R * 0.05);
    g.lineTo(Math.cos(a) * R, Math.sin(a) * R);
    g.stroke();
  }

  // Hand-turned guilloché rosette in the centre.
  g.save();
  g.beginPath();
  g.arc(0, 0, R * 0.46, 0, TAU);
  g.clip();
  g.strokeStyle = "rgba(210,225,255,0.07)";
  g.lineWidth = 2;
  for (let k = 0; k < 96; k++) {
    const a = (k / 96) * TAU;
    g.beginPath();
    g.arc(Math.cos(a) * R * 0.2, Math.sin(a) * R * 0.2, R * 0.24, 0, TAU);
    g.stroke();
  }
  g.restore();
  g.strokeStyle = "rgba(216,189,138,0.35)";
  g.lineWidth = 3;
  g.beginPath();
  g.arc(0, 0, R * 0.46, 0, TAU);
  g.stroke();

  // Railway minute track.
  g.strokeStyle = "rgba(216,189,138,0.8)";
  g.lineWidth = 3;
  [0.905, 0.965].forEach((r) => {
    g.beginPath();
    g.arc(0, 0, R * r, 0, TAU);
    g.stroke();
  });
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * TAU;
    const five = i % 5 === 0;
    g.lineWidth = five ? 7 : 3;
    g.beginPath();
    g.moveTo(Math.sin(a) * R * 0.905, -Math.cos(a) * R * 0.905);
    g.lineTo(Math.sin(a) * R * (five ? 0.985 : 0.965), -Math.cos(a) * R * (five ? 0.985 : 0.965));
    g.stroke();
  }

  // Printing.
  g.fillStyle = "#dcc28f";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = `400 ${R * 0.13}px ${display}`;
  spaced(g, "VALDÈRE", -R * 0.36, R * 0.03);
  g.font = `500 ${R * 0.032}px ${body}`;
  spaced(g, "LE BRASSUS", -R * 0.245, R * 0.022);
  g.font = `italic 400 ${R * 0.075}px ${display}`;
  g.fillText("Heure Bleue", 0, R * 0.3);
  g.font = `500 ${R * 0.024}px ${body}`;
  spaced(g, "SWISS MADE", R * 0.87, R * 0.014);
}

function drawMovement(canvas: HTMLCanvasElement, display: string, body: string) {
  const S = canvas.width;
  const R = S / 2;
  const u = R / MOVEMENT_R; // canvas px per watch unit
  const g = canvas.getContext("2d")!;
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.clearRect(0, 0, S, S);
  g.translate(R, R);
  const at = (x: number, y: number) => [x * u, -y * u] as const;

  // Bridges: Côtes de Genève bands across the whole plate.
  g.save();
  g.beginPath();
  g.arc(0, 0, R, 0, TAU);
  g.clip();
  g.fillStyle = "#b8955c";
  g.fillRect(-R, -R, S, S);
  g.rotate(-0.5);
  const band = R * 0.11;
  for (let x = -R * 1.5; x < R * 1.5; x += band) {
    const lg = g.createLinearGradient(x, 0, x + band, 0);
    lg.addColorStop(0, "#8f6d3b");
    lg.addColorStop(0.45, "#e6c98f");
    lg.addColorStop(0.55, "#f0d9a6");
    lg.addColorStop(1, "#8f6d3b");
    g.fillStyle = lg;
    g.fillRect(x, -R * 1.5, band, R * 3);
  }
  g.restore();

  // Recesses in the plate, finished with perlage, with polished bevels.
  const recess = (cx: number, cy: number, r: number) => {
    const [x, y] = at(cx, cy);
    g.save();
    g.beginPath();
    g.arc(x, y, r * u, 0, TAU);
    g.clip();
    g.fillStyle = "#a88752";
    g.fillRect(x - r * u, y - r * u, r * u * 2, r * u * 2);
    const step = R * 0.05;
    for (let py = y - r * u; py < y + r * u + step; py += step * 0.8) {
      for (let px = x - r * u; px < x + r * u + step; px += step * 0.8) {
        const pg = g.createRadialGradient(px - step * 0.15, py - step * 0.15, 0, px, py, step * 0.6);
        pg.addColorStop(0, "rgba(255,236,190,0.55)");
        pg.addColorStop(0.6, "rgba(160,125,70,0.2)");
        pg.addColorStop(1, "rgba(90,65,30,0.35)");
        g.fillStyle = pg;
        g.beginPath();
        g.arc(px, py, step * 0.6, 0, TAU);
        g.fill();
      }
    }
    g.restore();
    const bevel = g.createLinearGradient(x - r * u, y - r * u, x + r * u, y + r * u);
    bevel.addColorStop(0, "#fff2cf");
    bevel.addColorStop(0.5, "#9c7b46");
    bevel.addColorStop(1, "#fbe7b8");
    g.strokeStyle = bevel;
    g.lineWidth = R * 0.018;
    g.beginPath();
    g.arc(x, y, r * u, 0, TAU);
    g.stroke();
  };
  recess(0.26, -0.2, 0.21); // balance
  recess(-0.2, -0.36, 0.12); // fourth wheel
  recess(-0.34, 0.26, 0.2); // barrel

  // Wheels visible in the recesses.
  const wheel = (cx: number, cy: number, r: number, teeth: number) => {
    const [x, y] = at(cx, cy);
    g.fillStyle = "#d9b77a";
    g.beginPath();
    for (let i = 0; i < teeth * 2; i++) {
      const a = (i / (teeth * 2)) * TAU;
      const rr = (i % 2 ? r : r * 0.93) * u;
      g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    g.closePath();
    g.fill();
    g.fillStyle = "#a88752";
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * TAU + 0.4;
      g.beginPath();
      g.moveTo(x, y);
      g.arc(x, y, r * u * 0.72, a + 0.25, a + TAU / 4 - 0.25);
      g.closePath();
      g.fill();
    }
  };
  wheel(-0.2, -0.36, 0.1, 60);
  wheel(-0.34, 0.26, 0.17, 80);

  // Jewels in polished gold chatons, and blued screws.
  const jewels: Array<[number, number]> = [
    [-0.2, -0.36], [-0.34, 0.26], [0.02, 0.05], [0.12, 0.42], [-0.52, -0.1], [0.5, 0.22], [0.02, -0.55],
  ];
  jewels.forEach(([jx, jy]) => {
    const [x, y] = at(jx, jy);
    const ring = g.createRadialGradient(x, y, 0, x, y, R * 0.05);
    ring.addColorStop(0.5, "#fbe6b4");
    ring.addColorStop(1, "#8d6b39");
    g.fillStyle = ring;
    g.beginPath();
    g.arc(x, y, R * 0.045, 0, TAU);
    g.fill();
    const ruby = g.createRadialGradient(x - R * 0.006, y - R * 0.006, 0, x, y, R * 0.022);
    ruby.addColorStop(0, "#ff8a9b");
    ruby.addColorStop(0.5, "#b3122e");
    ruby.addColorStop(1, "#4a0612");
    g.fillStyle = ruby;
    g.beginPath();
    g.arc(x, y, R * 0.022, 0, TAU);
    g.fill();
  });
  const screws: Array<[number, number]> = [
    [-0.66, 0.2], [-0.12, 0.66], [0.44, 0.52], [0.66, -0.02], [-0.5, -0.46], [-0.02, -0.28],
  ];
  screws.forEach(([sx, sy], i) => {
    const [x, y] = at(sx, sy);
    const blue = g.createRadialGradient(x - R * 0.01, y - R * 0.01, 0, x, y, R * 0.035);
    blue.addColorStop(0, "#8fb2ff");
    blue.addColorStop(0.5, "#2c4f9e");
    blue.addColorStop(1, "#0f1f47");
    g.fillStyle = blue;
    g.beginPath();
    g.arc(x, y, R * 0.034, 0, TAU);
    g.fill();
    g.strokeStyle = "#0a142e";
    g.lineWidth = R * 0.008;
    const a = i * 0.9;
    g.beginPath();
    g.moveTo(x - Math.cos(a) * R * 0.03, y - Math.sin(a) * R * 0.03);
    g.lineTo(x + Math.cos(a) * R * 0.03, y + Math.sin(a) * R * 0.03);
    g.stroke();
  });

  // Hand-engraved lettering, gold-filled.
  g.fillStyle = "#4b3517";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.save();
  g.translate(...at(-0.08, 0.5));
  g.rotate(-0.5);
  g.font = `400 ${R * 0.085}px ${display}`;
  spaced(g, "VALDÈRE", 0, R * 0.02);
  g.font = `500 ${R * 0.03}px ${body}`;
  spaced(g, "CALIBRE VD · 1871", R * 0.08, R * 0.012);
  g.restore();
  g.save();
  g.translate(...at(-0.1, -0.62));
  g.font = `500 ${R * 0.028}px ${body}`;
  spaced(g, "TRENTE-ET-UN RUBIS · SUISSE", 0, R * 0.01);
  g.restore();
}

function drawStrap(canvas: HTMLCanvasElement) {
  const W = canvas.width;
  const H = canvas.height;
  const g = canvas.getContext("2d")!;
  g.fillStyle = "#1c130e";
  g.fillRect(0, 0, W, H);
  // Alligator scales: a large central column flanked by smaller ones.
  let y = 0;
  let row = 0;
  while (y < H) {
    const h = 34 + ((row * 37) % 22);
    const cols = [0.12, 0.2, 0.36, 0.2, 0.12];
    let x = 0;
    cols.forEach((w, c) => {
      const cw = W * w;
      const lum = 48 + ((row * 13 + c * 29) % 26);
      g.fillStyle = `rgb(${lum},${lum * 0.72},${lum * 0.55})`;
      g.beginPath();
      g.roundRect(x + 3, y + 3, cw - 6, h - 6, 9);
      g.fill();
      x += cw;
    });
    y += h;
    row++;
  }
}

/* ── Geometry helpers ───────────────────────────────────────────────── */

function dauphine(length: number, width: number, tail: number) {
  const s = new THREE.Shape();
  s.moveTo(0, -tail);
  s.lineTo(width / 2, 0);
  s.lineTo(0, length);
  s.lineTo(-width / 2, 0);
  s.closePath();
  return new THREE.ExtrudeGeometry(s, {
    depth: 0.006,
    bevelEnabled: true,
    bevelThickness: 0.004,
    bevelSize: 0.004,
    bevelSegments: 2,
  });
}

function roundedRect(w: number, h: number, r: number, taper = 0) {
  const s = new THREE.Shape();
  const top = w / 2 - taper;
  s.moveTo(-w / 2 + r, 0);
  s.lineTo(w / 2 - r, 0);
  s.quadraticCurveTo(w / 2, 0, w / 2, r);
  s.lineTo(top, h - r);
  s.quadraticCurveTo(top, h, top - r, h);
  s.lineTo(-top + r, h);
  s.quadraticCurveTo(-top, h, -top, h - r);
  s.lineTo(-w / 2, r);
  s.quadraticCurveTo(-w / 2, 0, -w / 2 + r, 0);
  return s;
}

/* ── Choreography ───────────────────────────────────────────────────── */

type Pose = { p: number; pos: [number, number, number]; rot: [number, number, number] };

// Hero → case profile → dial close-up → movement → back to the hero angle.
// Each view holds while its chapter text is fully visible (centre ± 0.05).
const HERO: Omit<Pose, "p"> = { pos: [1.05, -0.05, 0], rot: [-0.32, -0.5, 0.12] };
const CASE: Omit<Pose, "p"> = { pos: [0.95, 0, 0.35], rot: [0.08, -1.32, 0.02] };
const DIAL: Omit<Pose, "p"> = { pos: [0.8, 0, 1.75], rot: [0, 0, 0] };
const BACK: Omit<Pose, "p"> = { pos: [0.95, 0, 0.9], rot: [0.14, Math.PI, 0] };
const HOME: Omit<Pose, "p"> = { pos: HERO.pos, rot: [HERO.rot[0], TAU + HERO.rot[1], HERO.rot[2]] };
const POSES: Pose[] = [
  { p: 0.0, ...HERO },
  { p: 0.1, ...HERO },
  { p: 0.25, ...CASE },
  { p: 0.35, ...CASE },
  { p: 0.47, ...DIAL },
  { p: 0.57, ...DIAL },
  { p: 0.71, ...BACK },
  { p: 0.81, ...BACK },
  { p: 0.93, ...HOME },
  { p: 1.0, ...HOME },
];

const smooth = (t: number) => t * t * (3 - 2 * t);

function poseAt(p: number) {
  const k = Math.max(0, Math.min(1, p));
  let i = 0;
  while (i < POSES.length - 2 && k > POSES[i + 1].p) i++;
  const a = POSES[i];
  const b = POSES[i + 1];
  const t = smooth(Math.max(0, Math.min(1, (k - a.p) / (b.p - a.p || 1))));
  return {
    pos: a.pos.map((v, j) => v + (b.pos[j] - v) * t) as [number, number, number],
    rot: a.rot.map((v, j) => v + (b.rot[j] - v) * t) as [number, number, number],
  };
}

/* ── The watch ──────────────────────────────────────────────────────── */

function Watch({
  progress,
  display,
  body,
  still,
}: {
  progress: MotionValue<number>;
  display: string;
  body: string;
  still: boolean;
}) {
  const { gl, size } = useThree();
  const root = useRef<THREE.Group>(null);
  const hour = useRef<THREE.Mesh>(null);
  const minute = useRef<THREE.Mesh>(null);
  const second = useRef<THREE.Group>(null);
  const balance = useRef<THREE.Group>(null);
  const escape = useRef<THREE.Mesh>(null);

  const art = useMemo(() => {
    const dialCanvas = Object.assign(document.createElement("canvas"), { width: 2048, height: 2048 });
    const moveCanvas = Object.assign(document.createElement("canvas"), { width: 2048, height: 2048 });
    const strapCanvas = Object.assign(document.createElement("canvas"), { width: 512, height: 2048 });
    drawDial(dialCanvas, "Georgia, serif", "sans-serif");
    drawMovement(moveCanvas, "Georgia, serif", "sans-serif");
    drawStrap(strapCanvas);
    const tex = (c: HTMLCanvasElement) => {
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = gl.capabilities.getMaxAnisotropy();
      return t;
    };
    const strap = tex(strapCanvas);
    strap.wrapS = strap.wrapT = THREE.RepeatWrapping;
    return {
      dialCanvas,
      moveCanvas,
      dial: tex(dialCanvas),
      movement: tex(moveCanvas),
      strap,
    };
  }, [gl]);

  // Redraw the printing once the brand typefaces have actually loaded.
  useEffect(() => {
    let cancelled = false;
    Promise.all([
      document.fonts.load(`400 100px ${display}`),
      document.fonts.load(`italic 400 100px ${display}`),
      document.fonts.load(`500 40px ${body}`),
    ])
      .catch(() => undefined)
      .then(() => {
        if (cancelled) return;
        drawDial(art.dialCanvas, display, body);
        drawMovement(art.moveCanvas, display, body);
        art.dial.needsUpdate = true;
        art.movement.needsUpdate = true;
      });
    return () => {
      cancelled = true;
    };
  }, [art, display, body]);

  useEffect(
    () => () => {
      art.dial.dispose();
      art.movement.dispose();
      art.strap.dispose();
    },
    [art],
  );

  const geo = useMemo(() => {
    const profile = [
      [0.64, -0.19], [0.665, -0.215], [0.9, -0.215], [0.97, -0.19], [1.0, -0.13], [1.012, -0.05],
      [1.012, 0.07], [0.995, 0.13], [0.962, 0.16], [0.948, 0.172], [0.936, 0.2], [0.906, 0.226],
      [0.876, 0.229], [0.865, 0.215], [0.865, 0.1],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    const lug = new THREE.ExtrudeGeometry(roundedRect(0.15, 0.44, 0.05), {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3,
    });
    lug.translate(0, 0, -0.06);
    const strap = new THREE.ExtrudeGeometry(roundedRect(0.9, 2.5, 0.12, 0.08), {
      depth: 0.06,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.015,
      bevelSegments: 3,
    });
    strap.translate(0, 0, -0.03);
    // Extrude UVs are in shape units; normalise them to the strap texture.
    const uv = strap.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 0.9 + 0.5, uv.getY(i) / 2.5);

    const spiral: THREE.Vector3[] = [];
    for (let i = 0; i <= 360; i++) {
      const t = (i / 360) * TAU * 9;
      const r = 0.018 + (i / 360) * 0.1;
      spiral.push(new THREE.Vector3(Math.cos(t) * r, Math.sin(t) * r, 0));
    }

    // Escape wheel: twenty hooked teeth, stepping forward on every beat.
    const esc = new THREE.Shape();
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * TAU;
      const b = ((i + 0.7) / 20) * TAU;
      esc.lineTo(Math.cos(a) * 0.052, Math.sin(a) * 0.052);
      esc.lineTo(Math.cos(a + 0.05) * 0.075, Math.sin(a + 0.05) * 0.075);
      esc.lineTo(Math.cos(b) * 0.052, Math.sin(b) * 0.052);
    }
    const hub = new THREE.Path();
    hub.absarc(0, 0, 0.03, 0, TAU, true);
    esc.holes.push(hub);

    return {
      case: new THREE.LatheGeometry(profile, 160),
      escape: new THREE.ExtrudeGeometry(esc, { depth: 0.008, bevelEnabled: false }),
      lug,
      strap,
      hour: dauphine(0.46, 0.075, 0.08),
      minute: dauphine(0.74, 0.058, 0.1),
      hairspring: new THREE.BufferGeometry().setFromPoints(spiral),
    };
  }, []);

  const mat = useMemo(
    () => ({
      gold: new THREE.MeshPhysicalMaterial({ color: "#e2bf85", metalness: 1, roughness: 0.2, side: THREE.DoubleSide }),
      polished: new THREE.MeshPhysicalMaterial({ color: "#f0d29c", metalness: 1, roughness: 0.08 }),
      brushed: new THREE.MeshPhysicalMaterial({ color: "#d8b479", metalness: 1, roughness: 0.38 }),
      blued: new THREE.MeshPhysicalMaterial({ color: "#3656a8", metalness: 1, roughness: 0.22 }),
      ruby: new THREE.MeshPhysicalMaterial({ color: "#b3122e", metalness: 0, roughness: 0.05, clearcoat: 1 }),
      dial: new THREE.MeshPhysicalMaterial({
        map: art.dial,
        metalness: 0.25,
        roughness: 0.32,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
      }),
      movement: new THREE.MeshPhysicalMaterial({ map: art.movement, metalness: 0.7, roughness: 0.3 }),
      strap: new THREE.MeshPhysicalMaterial({
        map: art.strap,
        bumpMap: art.strap,
        bumpScale: 4,
        roughness: 0.55,
        sheen: 0.4,
        sheenColor: new THREE.Color("#5a3a26"),
        clearcoat: 0.35,
        clearcoatRoughness: 0.4,
      }),
      crystal: new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        metalness: 0,
        roughness: 0,
        transparent: true,
        opacity: 0.1,
        depthWrite: false,
      }),
      hairspring: new THREE.LineBasicMaterial({ color: "#8aa6d8" }),
    }),
    [art],
  );

  useEffect(
    () => () => {
      Object.values(geo).forEach((g) => g.dispose());
      Object.values(mat).forEach((m) => m.dispose());
    },
    [geo, mat],
  );

  const target = useMemo(() => ({ pos: new THREE.Vector3(), rot: new THREE.Euler() }), []);

  useFrame((state, dt) => {
    // Time. Seconds advance in eighths, as a 4 Hz movement does.
    const now = new Date();
    const s = now.getSeconds() + now.getMilliseconds() / 1000;
    const sec = still ? Math.floor(s) : Math.floor(s * 8) / 8;
    const min = now.getMinutes() + s / 60;
    const hr = (now.getHours() % 12) + min / 60;
    if (second.current) second.current.rotation.z = -(sec / 60) * TAU;
    if (minute.current) minute.current.rotation.z = -(min / 60) * TAU;
    if (hour.current) hour.current.rotation.z = -(hr / 12) * TAU;

    const t = state.clock.elapsedTime;
    if (!still) {
      if (balance.current) balance.current.rotation.z = Math.sin(t * TAU * 4) * 2.3;
      if (escape.current) escape.current.rotation.z = -Math.floor(t * 8) * (TAU / 120);
    }

    // Scroll choreography, eased towards the target pose.
    const g = root.current;
    if (!g) return;
    const narrow = size.width < 768;
    const pose = poseAt(still ? 0 : progress.get());
    const pointer = narrow || still ? 0 : 1;
    const float = still ? 0 : Math.sin(t * 0.7) * 0.03;
    if (narrow) {
      // Phones: fit the head to ~70% of the screen width, in the lower half,
      // below the chapter text. Zoom poses (z > 0) scale up a little.
      const vp = state.viewport.getCurrentViewport(state.camera, new THREE.Vector3(0, 0, 0));
      const fit = Math.min(1, (vp.width * 0.7) / 2.1) * (1 + Math.max(0, pose.pos[2]) * 0.12);
      g.scale.setScalar(g.scale.x + (fit - g.scale.x) * Math.min(1, dt * 4.5));
      target.pos.set(0, -vp.height * 0.24 + float, 0);
    } else {
      if (g.scale.x !== 1) g.scale.setScalar(1);
      target.pos.set(pose.pos[0], pose.pos[1] + float, pose.pos[2]);
    }
    target.rot.set(
      pose.rot[0] - state.pointer.y * 0.12 * pointer,
      pose.rot[1] + state.pointer.x * 0.18 * pointer,
      pose.rot[2],
    );
    const k = 1 - Math.exp(-dt * 4.5);
    g.position.lerp(target.pos, k);
    g.rotation.x += (target.rot.x - g.rotation.x) * k;
    g.rotation.y += (target.rot.y - g.rotation.y) * k;
    g.rotation.z += (target.rot.z - g.rotation.z) * k;
  });

  const lugs: Array<[number, number]> = [
    [-0.55, 1],
    [0.55, 1],
    [-0.55, -1],
    [0.55, -1],
  ];

  return (
    <group ref={root}>
      {/* Case, bezel and caseback ring */}
      <mesh geometry={geo.case} material={mat.gold} rotation={[Math.PI / 2, 0, 0]} />

      {/* Lugs, curving down towards the wrist */}
      {lugs.map(([x, side], i) => (
        <mesh
          key={i}
          geometry={geo.lug}
          material={mat.gold}
          position={[x, side * 0.82, -0.03]}
          rotation={[side * -0.2, 0, side < 0 ? Math.PI : 0]}
        />
      ))}

      {/* Crown with fluted edge */}
      <mesh position={[1.07, 0, -0.02]} rotation={[0, 0, Math.PI / 2]} material={mat.gold}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 24]} />
      </mesh>
      <mesh position={[1.14, 0, -0.02]} rotation={[0, 0, Math.PI / 2]} material={mat.polished}>
        <cylinderGeometry args={[0.085, 0.085, 0.09, 28, 1]} />
      </mesh>

      {/* Straps */}
      <group position={[0, 1.1, -0.1]} rotation={[-0.42, 0, 0]}>
        <mesh geometry={geo.strap} material={mat.strap} />
      </group>
      <group position={[0, -1.1, -0.1]} rotation={[0.42, 0, Math.PI]}>
        <mesh geometry={geo.strap} material={mat.strap} />
      </group>

      {/* Dial */}
      <mesh position={[0, 0, 0.1]} material={mat.dial}>
        <circleGeometry args={[0.866, 128]} />
      </mesh>

      {/* Applied indices; a double baton at twelve */}
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * TAU;
        const r = 0.66;
        const pieces = i === 0 ? [-0.032, 0.032] : [0];
        return pieces.map((off, j) => (
          <mesh
            key={`${i}-${j}`}
            material={mat.polished}
            position={[Math.sin(a) * r + Math.cos(a) * off, Math.cos(a) * r - Math.sin(a) * off, 0.114]}
            rotation={[0, 0, -a]}
          >
            <boxGeometry args={[0.036, i % 3 === 0 ? 0.16 : 0.13, 0.024]} />
          </mesh>
        ));
      })}

      {/* Hands */}
      <mesh ref={hour} geometry={geo.hour} material={mat.polished} position={[0, 0, 0.13]} />
      <mesh ref={minute} geometry={geo.minute} material={mat.polished} position={[0, 0, 0.145]} />
      <group ref={second} position={[0, 0, 0.162]}>
        <mesh position={[0, 0.3, 0]} material={mat.blued}>
          <boxGeometry args={[0.01, 0.98, 0.006]} />
        </mesh>
        <mesh position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]} material={mat.blued}>
          <cylinderGeometry args={[0.03, 0.03, 0.006, 32]} />
        </mesh>
      </group>
      <mesh position={[0, 0, 0.17]} rotation={[Math.PI / 2, 0, 0]} material={mat.polished}>
        <cylinderGeometry args={[0.032, 0.032, 0.03, 32]} />
      </mesh>

      {/* Sapphire crystal */}
      <mesh position={[0, 0, 0.222]} material={mat.crystal}>
        <circleGeometry args={[0.87, 96]} />
      </mesh>

      {/* Movement, seen through the caseback. Its group faces the back. */}
      <group position={[0, 0, -0.12]} rotation={[0, Math.PI, 0]}>
        <mesh material={mat.movement}>
          <circleGeometry args={[MOVEMENT_R, 128]} />
        </mesh>
        <group ref={balance} position={[0.26, -0.2, 0.025]}>
          <mesh material={mat.polished}>
            <torusGeometry args={[0.16, 0.012, 16, 96]} />
          </mesh>
          {[0, 1, 2].map((k) => (
            <mesh key={k} rotation={[0, 0, (k / 3) * TAU]} position={[0, 0, 0]} material={mat.gold}>
              <boxGeometry args={[0.32, 0.012, 0.008]} />
            </mesh>
          ))}
          {Array.from({ length: 8 }, (_, k) => {
            const a = (k / 8) * TAU;
            return (
              <mesh key={k} position={[Math.cos(a) * 0.172, Math.sin(a) * 0.172, 0]} material={mat.polished}>
                <sphereGeometry args={[0.009, 12, 12]} />
              </mesh>
            );
          })}
          <lineLoop geometry={geo.hairspring} material={mat.hairspring} position={[0, 0, 0.012]} />
        </group>
        <mesh ref={escape} geometry={geo.escape} position={[0.02, -0.46, 0.012]} material={mat.brushed} />
        {/* Balance cock, with its jewel over the staff */}
        <mesh position={[0.4, -0.3, 0.05]} rotation={[0, 0, -0.6]} material={mat.brushed}>
          <boxGeometry args={[0.07, 0.3, 0.02]} />
        </mesh>
        <mesh position={[0.26, -0.2, 0.062]} rotation={[Math.PI / 2, 0, 0]} material={mat.ruby}>
          <cylinderGeometry args={[0.018, 0.018, 0.01, 24]} />
        </mesh>
      </group>

      {/* Sapphire caseback */}
      <mesh position={[0, 0, -0.205]} rotation={[0, Math.PI, 0]} material={mat.crystal}>
        <circleGeometry args={[0.66, 96]} />
      </mesh>
    </group>
  );
}

export default function WatchCanvas({
  progress,
  display,
  body,
  still,
  className,
}: {
  progress: MotionValue<number>;
  display: string;
  body: string;
  still: boolean;
  className?: string;
}) {
  return (
    <Stage className={className} fov={30} distance={6} envIntensity={1.1}>
      <directionalLight position={[3, 5, 6]} intensity={1.4} color="#fff4e2" />
      <pointLight position={[-4, 2, -3]} intensity={18} color="#ffc98a" />
      <pointLight position={[3, -3, 2]} intensity={6} color="#9fb6ff" />
      <Watch progress={progress} display={display} body={body} still={still} />
    </Stage>
  );
}
