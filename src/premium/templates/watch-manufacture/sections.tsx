"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Counter, EASE, FadeUp, Magnetic, MaskReveal, Parallax, SplitText } from "@/premium/kit/motion";
import { HorizontalScroll, Marquee, ScrollWords, useScrollProgress } from "@/premium/kit/scroll";
import { useIntroDone } from "@/premium/kit/intro";
import { Photo } from "@/premium/kit/photo";
import { supportsWebGL } from "@/premium/kit/webgl";
import { lockScroll, scrollToTarget } from "@/premium/kit/premium-provider";
import { DialArt } from "./dial-art";
import {
  anatomy,
  appointment,
  boutiques,
  brand,
  calibre,
  collections,
  finale,
  footer,
  hero,
  heritage,
  manifesto,
  manufacture,
  marquee,
  nav,
  photos,
  valley,
  type Reference,
} from "./content";

/* Token shorthands. Premium palettes live in --pm-* variables. */
const c = {
  bg: "bg-[rgb(var(--pm-bg))]",
  surface: "bg-[rgb(var(--pm-surface))]",
  ink: "text-[rgb(var(--pm-ink))]",
  muted: "text-[rgb(var(--pm-muted))]",
  accent: "text-[rgb(var(--pm-accent))]",
  line: "border-[rgb(var(--pm-line))]",
};

const INTEREST_EVENT = "valdere:interest";

/* ── Header ─────────────────────────────────────────────────────────── */

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ready = useIntroDone();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > 240 && y > prev);
  });

  useEffect(() => {
    lockScroll(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    lockScroll(false);
    scrollToTarget(href);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden && !open ? -100 : 0, opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="mx-auto grid h-20 grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-10">
          <nav aria-label="Primary" className="hidden gap-7 lg:flex">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="pm-caps pm-link pb-1">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="pm-caps flex items-center gap-2 justify-self-start lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="valdere-menu"
          >
            <Menu className="h-4 w-4" aria-hidden /> Menu
          </button>
          <a href="#top" className="pm-display text-2xl tracking-[0.3em] sm:text-3xl" aria-label={`${brand.full}, back to top`}>
            VALDÈRE
          </a>
          <a href="#appointment" className="pm-caps pm-link justify-self-end pb-1">
            <span className="hidden sm:inline">Book a </span>viewing
          </a>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="valdere-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-lenis-prevent
            className={`fixed inset-0 z-[60] flex flex-col ${c.bg} ${c.ink} px-5 pb-10 sm:px-10`}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="flex h-20 items-center justify-between">
              <span className="pm-display text-2xl tracking-[0.3em]">VALDÈRE</span>
              <button type="button" className="pm-caps flex items-center gap-2" onClick={() => setOpen(false)} autoFocus>
                Close <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <nav aria-label="Menu" className="mt-10 flex flex-1 flex-col justify-center gap-2">
              {[...nav, { label: "Book a viewing", href: "#appointment" }].map((l, i) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.button
                    type="button"
                    onClick={() => go(l.href)}
                    className="pm-display flex w-full items-baseline gap-5 py-1 text-left text-5xl sm:text-7xl"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.06 }}
                  >
                    <span className={`pm-caps ${c.accent}`}>0{i + 1}</span>
                    {l.label}
                  </motion.button>
                </div>
              ))}
            </nav>
            <p className={`pm-caps ${c.muted}`}>
              {brand.place} · {brand.phone}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Stage: hero + scroll-driven anatomy of the watch ─────────────── */

const WatchCanvas = dynamic(() => import("./watch-canvas"), {
  ssr: false,
  loading: () => <StageFallback />,
});

function StageFallback() {
  return (
    <div className="absolute inset-x-0 bottom-[6svh] flex justify-center md:inset-y-0 md:bottom-auto md:left-auto md:right-[7vw] md:items-center">
      <DialArt
        uid="stage"
        art={collections[0].art}
        complication="time"
        className="w-[72vw] max-w-[560px] -rotate-6 drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] md:w-[38vw]"
      />
    </div>
  );
}

function Chapter({
  progress,
  range,
  children,
  className,
  hold = false,
}: {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: React.ReactNode;
  className?: string;
  /** Stay visible at the end instead of fading out. */
  hold?: boolean;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, hold ? 1 : 0]);
  const y = useTransform(progress, range, [40, 0, 0, hold ? 0 : -40]);
  const visibility = useTransform(opacity, (o) => (o < 0.02 ? "hidden" : "visible"));
  return (
    <motion.div style={{ opacity, y, visibility }} className={className}>
      {children}
    </motion.div>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Zurich",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time || "—"}</span>;
}

export function Stage({ displayFont, bodyFont }: { displayFont: string; bodyFont: string }) {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();
  const reduce = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const scrollYProgress = useScrollProgress(ref, ["start start", "end end"]);

  useEffect(() => setWebgl(supportsWebGL()), []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.16], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.16], [0, -60]);
  const heroEvents = useTransform(heroOpacity, (o) => (o > 0.5 ? "auto" : "none"));
  const rail = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 0.76, 1], [0.55, 0.9, 0.7, 0.55]);

  const centres = [0.3, 0.52, 0.76];

  return (
    <section id="top" ref={ref} className="relative h-[520vh]" aria-label="Heure Bleue, in detail">
      <div className="pm-grain sticky top-0 h-[100svh] overflow-hidden">
        {/* Warm studio glow behind the watch */}
        <motion.div
          aria-hidden
          style={{ opacity: glow }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_75%,rgb(var(--pm-accent)/0.22),transparent_55%)] md:bg-[radial-gradient(ellipse_at_72%_50%,rgb(var(--pm-accent)/0.2),transparent_50%)]"
        />

        {webgl ? (
          <WatchCanvas
            progress={scrollYProgress}
            display={displayFont}
            body={bodyFont}
            still={!!reduce}
            className="absolute inset-0"
          />
        ) : (
          <StageFallback />
        )}

        {/* Phones: keep chapter copy legible over the strap */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-[rgb(var(--pm-bg))] via-[rgb(var(--pm-bg)/0.75)] to-transparent md:hidden"
        />

        {/* Hero */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroEvents }}
          className="absolute inset-x-0 top-0 px-5 pt-28 sm:px-10 md:bottom-0 md:top-auto md:max-w-[52vw] md:pb-[12vh]"
        >
          <FadeUp play={ready} delay={0.1} y={12}>
            <p className={`pm-caps ${c.accent}`}>{hero.eyebrow}</p>
          </FadeUp>
          <SplitText
            as="h1"
            lines={hero.titleLines}
            play={ready}
            delay={0.2}
            className="pm-display mt-5 text-[clamp(3.4rem,9vw,9.5rem)]"
          />
          <FadeUp play={ready} delay={0.7}>
            <p className={`mt-6 max-w-md text-base leading-relaxed sm:text-lg ${c.muted}`}>{hero.body}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Magnetic>
                <a
                  href="#appointment"
                  data-cursor="Book"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[rgb(var(--pm-accent)/0.5)] px-7 py-4 text-sm tracking-wide"
                >
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-[rgb(var(--pm-accent))] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                  <span className="relative transition-colors duration-700 group-hover:text-[rgb(var(--pm-accent-fg))]">
                    {hero.cta}
                  </span>
                  <ArrowRight className="relative h-4 w-4 transition-colors duration-700 group-hover:text-[rgb(var(--pm-accent-fg))]" aria-hidden />
                </a>
              </Magnetic>
              <a href="#collections" className={`pm-caps pm-link pb-1 ${c.muted}`}>
                The collection
              </a>
            </div>
          </FadeUp>
        </motion.div>

        {/* Anatomy chapters */}
        {anatomy.map((ch, i) => (
          <Chapter
            key={ch.label}
            progress={scrollYProgress}
            range={[centres[i] - 0.1, centres[i] - 0.05, centres[i] + 0.05, centres[i] + 0.1]}
            className="pointer-events-none absolute inset-x-0 top-0 px-5 pt-28 sm:px-10 md:inset-y-0 md:flex md:max-w-[40vw] md:flex-col md:justify-center md:pt-0"
          >
            <p className={`pm-caps flex items-center gap-4 ${c.accent}`}>
              <span className="pm-display text-2xl normal-case tracking-normal">{ch.index}</span>
              <span className="h-px w-10 bg-[rgb(var(--pm-accent)/0.5)]" aria-hidden />
              {ch.label}
            </p>
            <h2 className="pm-display mt-5 text-[clamp(2.2rem,4.4vw,4.6rem)]">{ch.title}</h2>
            <p className={`mt-5 max-w-md text-sm leading-relaxed sm:text-base ${c.muted}`}>{ch.body}</p>
          </Chapter>
        ))}

        {/* Finale */}
        <Chapter
          progress={scrollYProgress}
          range={[0.86, 0.93, 0.99, 1]}
          hold
          className="pointer-events-none absolute inset-x-0 top-0 px-5 pt-28 sm:px-10 md:inset-y-0 md:flex md:max-w-[46vw] md:flex-col md:justify-center md:pt-0"
        >
          <h2 className="pm-display text-[clamp(2.4rem,5vw,5.2rem)]">{finale.title}</h2>
          <p className={`mt-5 max-w-md leading-relaxed ${c.muted}`}>{finale.body}</p>
        </Chapter>

        {/* Furniture: local time, progress rail, scroll cue */}
        <div className={`pm-caps pointer-events-none absolute bottom-6 left-5 hidden sm:left-10 md:block ${c.muted}`}>
          Le Brassus · <LocalTime />
        </div>
        <div className="absolute bottom-6 right-5 flex items-center gap-4 sm:right-10" aria-hidden>
          <span className={`pm-caps ${c.muted}`}>Scroll</span>
          <span className="relative h-px w-24 bg-[rgb(var(--pm-line))]">
            <motion.span style={{ width: rail }} className="absolute inset-y-0 left-0 bg-[rgb(var(--pm-accent))]" />
          </span>
          <ArrowDown className={`h-3.5 w-3.5 ${c.muted}`} />
        </div>
      </div>
    </section>
  );
}

/* ── Manifesto ─────────────────────────────────────────────────────── */

export function Manifesto() {
  return (
    <section className={`relative py-24 sm:py-40 ${c.bg}`}>
      <Marquee className={`border-y py-6 ${c.line}`}>
        {marquee.map((m) => (
          <span key={m} className="pm-display flex items-center gap-10 pr-10 text-4xl italic sm:text-6xl">
            {m}
            <span className={`text-lg not-italic ${c.accent}`} aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </Marquee>
      <div className="mx-auto mt-24 max-w-6xl px-5 sm:mt-36 sm:px-10">
        <p className={`pm-caps mb-10 ${c.accent}`}>Notre manière</p>
        <ScrollWords text={manifesto} className="pm-display text-[clamp(2rem,4.6vw,4.4rem)] !leading-[1.08]" />
      </div>
    </section>
  );
}

/* ── Collections ───────────────────────────────────────────────────── */

function ReferenceCard({ item, index, onOpen }: { item: Reference; index: number; onOpen: () => void }) {
  return (
    <article className="group w-[82vw] shrink-0 snap-center sm:w-[52vw] md:w-[34vw] lg:w-[27vw]">
      <button
        type="button"
        onClick={onOpen}
        data-cursor="Discover"
        className="block w-full text-left"
        aria-label={`${item.name}, ${item.ref} — view details`}
      >
        <motion.div
          layoutId={`dial-${item.ref}`}
          className={`relative aspect-[4/5] overflow-hidden ${c.surface}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgb(var(--pm-accent)/0.16),transparent_60%)] transition-opacity duration-700 group-hover:opacity-100 md:opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center p-[12%] transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-105">
            <DialArt uid={`card-${index}`} art={item.art} complication={item.complication} className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]" />
          </div>
          <span className={`pm-caps absolute left-5 top-5 ${c.muted}`}>0{index + 1}</span>
          <span className={`pm-caps absolute right-5 top-5 ${c.muted}`}>{item.ref}</span>
        </motion.div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="pm-display text-3xl sm:text-4xl">{item.name}</h3>
            <p className={`mt-2 text-sm ${c.muted}`}>{item.case}</p>
          </div>
          <p className={`pm-caps mt-3 shrink-0 ${c.accent}`}>{item.price}</p>
        </div>
      </button>
    </article>
  );
}

function ReferenceDialog({ item, onClose }: { item: Reference; onClose: () => void }) {
  const close = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    lockScroll(true);
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  const request = () => {
    window.dispatchEvent(new CustomEvent(INTEREST_EVENT, { detail: item.name }));
    onClose();
    window.setTimeout(() => scrollToTarget("#appointment"), 350);
  };

  const rows: Array<[string, string]> = [
    ["Reference", item.ref],
    ["Case", item.case],
    ["Dial", item.dial],
    ["Calibre", "VD·1871, hand-wound"],
    ["Power reserve", "72 hours"],
    ["Price", item.price],
  ];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      data-lenis-prevent
      className={`fixed inset-0 z-[70] overflow-y-auto ${c.bg} ${c.ink}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
    >
      <div className="grid min-h-full md:grid-cols-2">
        <motion.div
          layoutId={`dial-${item.ref}`}
          className={`relative flex min-h-[55svh] items-center justify-center ${c.surface}`}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgb(var(--pm-accent)/0.2),transparent_60%)]" />
          <DialArt uid="dialog" art={item.art} complication={item.complication} className="relative w-[70%] max-w-[520px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]" />
        </motion.div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          >
            <p className={`pm-caps ${c.accent}`}>{item.ref}</p>
            <h2 className="pm-display mt-4 text-5xl sm:text-7xl">{item.name}</h2>
            <p className={`mt-6 max-w-md leading-relaxed ${c.muted}`}>{item.line}</p>
            <dl className={`mt-10 border-t ${c.line}`}>
              {rows.map(([k, v]) => (
                <div key={k} className={`flex justify-between gap-6 border-b py-4 text-sm ${c.line}`}>
                  <dt className={c.muted}>{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={request}
                className="inline-flex items-center gap-3 rounded-full bg-[rgb(var(--pm-accent))] px-7 py-4 text-sm tracking-wide text-[rgb(var(--pm-accent-fg))] transition-opacity hover:opacity-90"
              >
                Request a viewing <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <button ref={close} type="button" onClick={onClose} className="pm-caps pm-link flex items-center gap-2 pb-1">
                <X className="h-3.5 w-3.5" aria-hidden /> Close
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Collections() {
  const [open, setOpen] = useState<Reference | null>(null);

  return (
    <>
      <HorizontalScroll
        id="collections"
        className={c.bg}
        header={
          <div className="mb-10 flex items-end justify-between gap-6 px-5 sm:px-10 md:mb-14">
            <div>
              <p className={`pm-caps ${c.accent}`}>Les collections</p>
              <SplitText lines={["Five references."]} className="pm-display mt-4 text-[clamp(2.6rem,6vw,6rem)]" />
            </div>
            <p className={`hidden max-w-xs text-sm leading-relaxed md:block ${c.muted}`}>
              Each made in editions of fewer than two hundred a year. Select a reference to see it closer.
            </p>
          </div>
        }
        trackClassName="gap-5 px-5 sm:gap-8 sm:px-10"
      >
        {collections.map((item, i) => (
          <ReferenceCard key={item.ref} item={item} index={i} onOpen={() => setOpen(item)} />
        ))}
        <article className="flex w-[82vw] shrink-0 snap-center flex-col justify-between border border-[rgb(var(--pm-line))] p-8 sm:w-[52vw] md:w-[34vw] lg:w-[27vw]">
          <p className={`pm-caps ${c.accent}`}>Pièce unique</p>
          <div>
            <h3 className="pm-display text-4xl sm:text-5xl">A watch that exists once.</h3>
            <p className={`mt-4 text-sm leading-relaxed ${c.muted}`}>
              Bespoke commissions take eighteen months to three years, from the first drawing to the day we bring it to you.
            </p>
            <a href="#appointment" className="pm-caps pm-link mt-8 inline-flex items-center gap-2 pb-1">
              Begin a commission <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </article>
      </HorizontalScroll>
      <AnimatePresence>{open && <ReferenceDialog item={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </>
  );
}

/* ── Manufacture ───────────────────────────────────────────────────── */

export function Manufacture() {
  return (
    <section id="manufacture" className={`relative py-24 sm:py-40 ${c.bg}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className={`pm-caps ${c.accent}`}>{manufacture.eyebrow}</p>
            <SplitText lines={manufacture.titleLines} className="pm-display mt-5 text-[clamp(3rem,7vw,7rem)]" />
          </div>
          <FadeUp className="md:col-span-4 md:col-start-9 md:self-end">
            <p className={`leading-relaxed ${c.muted}`}>{manufacture.body}</p>
          </FadeUp>
        </div>

        <MaskReveal className="relative mt-16 aspect-[16/10] sm:mt-24 sm:aspect-[21/9]">
          <Parallax className="absolute inset-0" amount={70}>
            <div className="relative h-full w-full">
              <Photo id={photos.movementGilt} alt="A hand-finished gilt movement photographed on black" sizes="100vw" />
            </div>
          </Parallax>
        </MaskReveal>

        <div className="mt-24 space-y-24 sm:mt-40 sm:space-y-40">
          {manufacture.crafts.map((craft, i) => (
            <div key={craft.name} className="grid items-center gap-10 md:grid-cols-12">
              <MaskReveal
                from={i % 2 ? "right" : "left"}
                className={`relative aspect-[4/5] md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}
              >
                <Photo id={photos[craft.photo]} alt={`${craft.name}, detail`} sizes="(min-width: 768px) 40vw, 100vw" />
              </MaskReveal>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1 md:col-start-2" : "md:col-start-8"}`}>
                <FadeUp>
                  <p className={`pm-display text-7xl ${c.accent}`}>0{i + 1}</p>
                  <h3 className="pm-display mt-6 text-4xl sm:text-6xl">{craft.name}</h3>
                  <p className={`mt-6 max-w-md leading-relaxed ${c.muted}`}>{craft.body}</p>
                </FadeUp>
              </div>
            </div>
          ))}
        </div>

        <dl className={`mt-24 grid grid-cols-2 border-t sm:mt-40 lg:grid-cols-4 ${c.line}`}>
          {manufacture.stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col border-b py-10 pr-6 lg:border-b-0 ${i > 0 ? `lg:border-l lg:pl-8 ${c.line}` : ""} ${c.line}`}>
              <dt className={`pm-caps order-2 mt-4 block ${c.muted}`}>{s.label}</dt>
              <dd className="pm-display -order-1 text-6xl sm:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── Calibre (ivory interlude) ────────────────────────────────────── */

export function Calibre() {
  return (
    <section
      id="calibre"
      className="relative bg-[rgb(var(--pm-ivory))] py-24 text-[rgb(var(--pm-ivory-ink))] sm:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="pm-caps text-[rgb(var(--pm-bronze))]">{calibre.eyebrow}</p>
            <SplitText lines={[calibre.title]} className="pm-display mt-5 text-[clamp(3rem,6vw,6rem)]" />
            <p className="mt-6 max-w-sm leading-relaxed text-[rgb(var(--pm-ivory-muted))]">{calibre.body}</p>
            <div className="relative mt-12 aspect-square w-full max-w-sm overflow-hidden rounded-full">
              <div className="pm-spin absolute inset-0">
                <Photo id={photos.wheels} alt="Watch wheels and pinions in black and white" sizes="400px" className="grayscale" />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
        <dl className="border-t border-[rgb(var(--pm-ivory-ink)/0.15)] lg:col-span-6 lg:col-start-7">
          {calibre.specs.map(([k, v], i) => (
            <FadeUp key={k} delay={Math.min(i, 6) * 0.04} y={16}>
              <div className="grid grid-cols-[1fr_1.4fr] gap-6 border-b border-[rgb(var(--pm-ivory-ink)/0.15)] py-6">
                <dt className="pm-caps self-center text-[rgb(var(--pm-ivory-muted))]">{k}</dt>
                <dd className="pm-display text-2xl sm:text-3xl">{v}</dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── Heritage ──────────────────────────────────────────────────────── */

function Milestone({
  item,
  index,
  onActive,
}: {
  item: (typeof heritage)[number];
  index: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} className="flex min-h-[40vh] flex-col justify-center py-10 lg:min-h-[70vh]">
      <p className={`pm-display text-6xl lg:hidden ${c.accent}`}>{item.year}</p>
      <FadeUp>
        <h3 className="pm-display mt-4 text-4xl sm:text-5xl">{item.title}</h3>
        <p className={`mt-5 max-w-lg leading-relaxed ${c.muted}`}>{item.body}</p>
      </FadeUp>
    </li>
  );
}

export function Heritage() {
  const [active, setActive] = useState(0);

  return (
    <section id="heritage" className={`relative py-24 sm:py-32 ${c.bg}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
            <p className={`pm-caps ${c.accent}`}>Héritage</p>
            <h2 className="pm-display mt-5 text-[clamp(2.6rem,5vw,5rem)]">Five dates, one family.</h2>
            <div className="relative mt-10 hidden h-[clamp(8rem,17vw,16rem)] overflow-hidden lg:block" aria-hidden>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={heritage[active].year}
                  className={`pm-display absolute inset-0 text-[clamp(8rem,17vw,16rem)] !leading-none ${c.accent}`}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  {heritage[active].year}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="mt-8 hidden gap-2 lg:flex" aria-hidden>
              {heritage.map((h, i) => (
                <span
                  key={h.year}
                  className={`h-px flex-1 transition-colors duration-700 ${i <= active ? "bg-[rgb(var(--pm-accent))]" : "bg-[rgb(var(--pm-line))]"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <ol className="lg:col-span-5 lg:col-start-8">
          {heritage.map((item, i) => (
            <Milestone key={item.year} item={item} index={i} onActive={setActive} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── The valley ────────────────────────────────────────────────────── */

export function Valley() {
  return (
    <section className="relative h-[110svh] overflow-hidden" aria-label="The Vallée de Joux">
      <Parallax className="absolute inset-0" amount={120}>
        <div className="relative h-full w-full">
          <Photo id={photos.valley} alt="A lake beneath mountains in the Swiss Jura" sizes="100vw" />
        </div>
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--pm-bg))] via-[rgb(var(--pm-bg)/0.35)] to-[rgb(var(--pm-bg)/0.6)]" />
      <div className="relative flex h-full flex-col items-center justify-end px-5 pb-[14vh] text-center sm:px-10">
        <p className={`pm-caps ${c.accent}`}>La Vallée de Joux</p>
        <SplitText
          as="p"
          lines={[valley.quote]}
          stagger={0.03}
          className="pm-display mx-auto mt-6 max-w-5xl text-[clamp(2rem,4.4vw,4.4rem)] italic !leading-[1.1]"
        />
        <FadeUp delay={0.4}>
          <p className={`pm-caps mt-8 ${c.muted}`}>— {valley.credit}</p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Boutiques ─────────────────────────────────────────────────────── */

export function Boutiques() {
  const area = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  return (
    <section id="boutiques" className={`relative py-24 sm:py-40 ${c.bg}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className={`pm-caps ${c.accent}`}>Boutiques</p>
            <SplitText lines={["Where to find us."]} className="pm-display mt-5 text-[clamp(2.6rem,6vw,6rem)]" />
          </div>
          <p className={`max-w-xs text-sm leading-relaxed ${c.muted}`}>
            Every boutique keeps the full collection and a watchmaker on the premises.
          </p>
        </div>

        <div
          ref={area}
          className="relative mt-16"
          onPointerMove={(e) => {
            if (e.pointerType !== "mouse" || !area.current) return;
            const r = area.current.getBoundingClientRect();
            x.set(e.clientX - r.left);
            y.set(e.clientY - r.top);
          }}
          onPointerLeave={() => setActive(null)}
        >
          <ul className={`border-t ${c.line}`}>
            {boutiques.map((b, i) => (
              <li key={b.city} onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}>
                <a
                  href="#appointment"
                  className={`group grid grid-cols-[1fr_auto] items-center gap-4 border-b py-7 transition-colors duration-500 sm:grid-cols-[1.2fr_1fr_1fr_auto] sm:py-9 ${c.line} ${
                    active !== null && active !== i ? "opacity-40" : ""
                  }`}
                >
                  <span className="pm-display text-4xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 sm:text-6xl">
                    {b.city}
                  </span>
                  <span className={`col-span-2 row-start-2 text-sm sm:col-span-1 sm:row-start-auto ${c.muted}`}>{b.address}</span>
                  <span className={`pm-caps hidden sm:block ${c.muted}`}>{b.note}</span>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${c.accent}`}
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Pointer-following preview, desktop only */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-80 w-60 overflow-hidden md:block"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.8 : 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {boutiques.map((b, i) => (
              <motion.div
                key={b.city}
                className="absolute inset-0"
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.15 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Photo id={photos[b.photo]} alt="" sizes="240px" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Appointment ───────────────────────────────────────────────────── */

export function Appointment() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(appointment.interests[0]);

  useEffect(() => {
    const onInterest = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (appointment.interests.includes(detail)) setInterest(detail);
    };
    window.addEventListener(INTEREST_EVENT, onInterest);
    return () => window.removeEventListener(INTEREST_EVENT, onInterest);
  }, []);

  const label = `pm-caps mb-1 block ${c.muted}`;

  return (
    <section id="appointment" className={`relative py-24 sm:py-40 ${c.surface}`}>
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className={`pm-caps ${c.accent}`}>{appointment.eyebrow}</p>
          <SplitText lines={appointment.titleLines} className="pm-display mt-5 text-[clamp(3rem,6.5vw,6.5rem)]" />
          <FadeUp>
            <p className={`mt-8 max-w-md leading-relaxed ${c.muted}`}>{appointment.body}</p>
            <dl className={`mt-12 space-y-5 border-t pt-8 text-sm ${c.line}`}>
              <div>
                <dt className={label}>Telephone</dt>
                <dd>
                  <a className="pm-link" href={`tel:${brand.phone.replace(/\s/g, "")}`}>
                    {brand.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={label}>Write to us</dt>
                <dd>
                  <a className="pm-link" href={`mailto:${brand.email}`}>
                    {brand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={label}>The Manufacture</dt>
                <dd>{brand.place}</dd>
              </div>
            </dl>
          </FadeUp>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="thanks"
                role="status"
                className="flex h-full min-h-[420px] flex-col justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE }}
              >
                <p className={`pm-display text-8xl ${c.accent}`}>✦</p>
                <p className="pm-display mt-8 text-3xl leading-snug sm:text-4xl">{appointment.thanks}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 sm:grid-cols-2"
                aria-label="Request a private viewing"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="vd-name" className={label}>
                    Name
                  </label>
                  <input id="vd-name" name="name" required autoComplete="name" className="pm-field" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="vd-email" className={label}>
                    Email
                  </label>
                  <input id="vd-email" name="email" type="email" required autoComplete="email" className="pm-field" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="vd-phone" className={label}>
                    Telephone
                  </label>
                  <input id="vd-phone" name="phone" type="tel" autoComplete="tel" className="pm-field" placeholder="Optional" />
                </div>
                <div>
                  <label htmlFor="vd-date" className={label}>
                    Preferred date
                  </label>
                  <input id="vd-date" name="date" type="date" className="pm-field [color-scheme:dark]" />
                </div>
                <div>
                  <label htmlFor="vd-boutique" className={label}>
                    Boutique
                  </label>
                  <select id="vd-boutique" name="boutique" className="pm-field" defaultValue={boutiques[1].city}>
                    {boutiques.map((b) => (
                      <option key={b.city}>{b.city}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="vd-interest" className={label}>
                    Reference
                  </label>
                  <select
                    id="vd-interest"
                    name="interest"
                    className="pm-field"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    {appointment.interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="vd-note" className={label}>
                    Anything we should know
                  </label>
                  <textarea
                    id="vd-note"
                    name="message"
                    rows={3}
                    className="pm-field resize-none"
                    placeholder="A wrist size, an occasion, a watch you already own…"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-6 sm:col-span-2">
                  <p className={`max-w-xs text-xs leading-relaxed ${c.muted}`}>
                    We reply personally, within one working day. Your details are never shared.
                  </p>
                  <Magnetic>
                    <button
                      type="submit"
                      data-cursor="Send"
                      className="inline-flex items-center gap-3 rounded-full bg-[rgb(var(--pm-accent))] px-8 py-4 text-sm tracking-wide text-[rgb(var(--pm-accent-fg))] transition-opacity hover:opacity-90"
                    >
                      Request a viewing <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                  </Magnetic>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className={`relative overflow-hidden pt-24 ${c.bg}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="pm-display text-3xl sm:text-4xl">News from the valley, four times a year.</p>
          <form
            className={`mt-8 flex items-center border-b ${c.line}`}
            aria-label="Newsletter"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="vd-news" className="sr-only">
              Email address
            </label>
            <input id="vd-news" type="email" required placeholder="Email address" className="pm-field border-0" />
            <button type="submit" aria-label="Subscribe" className={`p-2 ${c.accent}`}>
              <ArrowRight className="h-5 w-5" aria-hidden />
            </button>
          </form>
        </div>
        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <ul className="space-y-3 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="pm-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={`space-y-3 text-sm md:col-span-3 ${c.muted}`}>
          {footer.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="pm-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p
        aria-hidden
        className="pm-display mt-20 select-none whitespace-nowrap bg-gradient-to-b from-[rgb(var(--pm-accent))] to-[rgb(var(--pm-accent)/0.05)] bg-clip-text text-center text-[23vw] !leading-[0.8] text-transparent"
      >
        Valdère
      </p>

      <div className={`mx-auto flex max-w-7xl flex-col gap-3 border-t px-5 py-8 text-xs sm:flex-row sm:justify-between sm:px-10 ${c.line} ${c.muted}`}>
        <p>
          © {new Date().getFullYear()} {brand.full} · {footer.legal}
        </p>
        <Link href="/premium" className="pm-link self-start">
          ProWebKit Premium — all templates
        </Link>
      </div>
    </footer>
  );
}
