"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from "motion/react";

type Offset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

/**
 * Scroll progress through `target`, 0 → 1, as a plain motion value.
 *
 * Motion can hand range transforms of useScroll to the browser's native
 * ViewTimeline. That path mis-maps offsets on tall sticky sections, so the
 * premium kit opts out: a function transform is never accelerated, and the
 * choreography stays in lock-step with what the WebGL scene reads.
 */
export function useScrollProgress(target: React.RefObject<HTMLElement | null>, offset?: Offset) {
  const { scrollYProgress } = useScroll({ target, offset });
  return useTransform(scrollYProgress, (v) => v);
}

/**
 * Pinned horizontal scroll: vertical scrolling moves a track sideways while
 * the section is held in place. The section's height is set from the
 * track's measured width, so the pin lasts exactly as long as the track.
 *
 * Below 768px, and for reduced motion, it becomes a native swipeable row
 * with scroll snapping instead of hijacking vertical scroll on a phone.
 */
export function HorizontalScroll({
  id,
  header,
  children,
  className,
  trackClassName,
}: {
  id?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);
  const dist = useMotionValue(0);

  const scrollYProgress = useScrollProgress(section, ["start start", "end end"]);
  const x = useTransform(() => -scrollYProgress.get() * dist.get());

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const measure = () => {
      const node = track.current;
      if (!mq.matches || !node?.parentElement) {
        setPinned(false);
        dist.set(0);
        return;
      }
      setPinned(true);
      const d = Math.max(0, node.scrollWidth - node.parentElement.clientWidth);
      setDistance(d);
      dist.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [dist]);

  return (
    <section
      id={id}
      ref={section}
      className={`relative ${className ?? ""}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-20"}>
        {header}
        <motion.div
          ref={track}
          style={pinned ? { x } : undefined}
          className={`flex ${pinned ? "w-max" : "snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none]"} ${trackClassName ?? ""}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

/**
 * A paragraph whose words light up in reading order as it scrolls through
 * the viewport. The full sentence is always in the DOM, so it reads
 * correctly to assistive technology and without JavaScript.
 */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const scrollYProgress = useScrollProgress(ref, ["start 0.85", "end 0.45"]);
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

/** Endless ticker. Content is duplicated once; the copy is hidden from AT. */
export function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="pm-marquee flex w-max">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
