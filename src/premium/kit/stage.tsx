"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

/**
 * Studio lighting with no downloaded assets: three's procedural
 * RoomEnvironment, pre-filtered once into an environment map. Polished metal
 * needs something to reflect, and this gives it soft boxes and a floor.
 */
function StudioEnvironment({ intensity = 1 }: { intensity?: number }) {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.035).texture;
    scene.environment = env;
    scene.environmentIntensity = intensity;
    return () => {
      scene.environment = null;
      env.dispose();
      room.dispose();
      pmrem.dispose();
    };
  }, [gl, scene, intensity]);

  return null;
}

/**
 * The shared WebGL stage for premium heroes. Renders only while on screen,
 * caps pixel ratio for phones, and keeps a transparent background so the
 * section's own gradient shows through.
 */
export function Stage({
  children,
  className,
  fov = 30,
  distance = 6,
  envIntensity = 1,
  exposure = 1.05,
}: {
  children: React.ReactNode;
  className?: string;
  fov?: number;
  distance?: number;
  envIntensity?: number;
  exposure?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "200px 0px",
    });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ fov, position: [0, 0, distance], near: 0.1, far: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = exposure;
        }}
      >
        <StudioEnvironment intensity={envIntensity} />
        {children}
      </Canvas>
    </div>
  );
}
