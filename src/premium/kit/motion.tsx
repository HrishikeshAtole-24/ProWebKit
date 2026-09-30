"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/** The house curve: a long, decelerating ease that reads as expensive. */
export const EASE = [0.16, 1, 0.3, 1] as const;

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

/**
 * Line-and-word reveal for display type. Each word rises out of its own
 * clipped line. Screen readers get the plain sentence once; the animated
 * copy is hidden from them so words are not announced one by one.
 */
export function SplitText({
  lines,
  as = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.06,
  onView = true,
  play,
}: {
  lines: string[];
  as?: Tag;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** false = play on mount (heroes); true = play when scrolled into view. */
  onView?: boolean;
  /** When set, overrides both: the reveal plays when this becomes true. */
  play?: boolean;
}) {
  const Comp = motion[as];
  const controlled = play !== undefined;
  let wordIndex = 0;

  return (
    <Comp
      className={className}
      initial="hidden"
      animate={controlled ? (play ? "shown" : "hidden") : onView ? undefined : "shown"}
      whileInView={!controlled && onView ? "shown" : undefined}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line, li) => (
        <span key={li} aria-hidden className={`block overflow-hidden pb-[0.08em] ${lineClassName ?? ""}`}>
          {line.split(" ").map((word, wi) => {
            const i = wordIndex++;
            return (
              <motion.span
                key={wi}
                className="inline-block will-change-transform"
                variants={{
                  hidden: { y: "110%", rotate: 4 },
                  shown: {
                    y: "0%",
                    rotate: 0,
                    transition: { duration: 1.1, ease: EASE, delay: delay + i * stagger },
                  },
                }}
              >
                {word}
                {wi < line.split(" ").length - 1 ? " " : ""}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Comp>
  );
}

/** Rise and fade, for body copy and small furniture. */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 24,
  onView = true,
  play,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  onView?: boolean;
  play?: boolean;
}) {
  const shown = { opacity: 1, y: 0, transition: { duration: 1, ease: EASE, delay } };
  const controlled = play !== undefined;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={controlled ? (play ? shown : { opacity: 0, y }) : onView ? undefined : shown}
      whileInView={!controlled && onView ? shown : undefined}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Image mask reveal: the plate uncovers from one edge while the picture
 * inside settles from a slight over-scale, like a shutter opening.
 */
export function MaskReveal({
  children,
  className,
  from = "bottom",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right" | "top";
  delay?: number;
}) {
  const hidden = {
    bottom: "inset(100% 0% 0% 0%)",
    top: "inset(0% 0% 100% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
  }[from];

  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: hidden }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.4, ease: EASE, delay }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.8, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Moves its child against the scroll. `amount` is in pixels each way. */
export function Parallax({
  children,
  className,
  amount = 80,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Function form: never handed to the native ViewTimeline (see useScrollProgress).
  const y = useTransform(scrollYProgress, (v) => (v * 2 - 1) * amount);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y, height: `calc(100% + ${amount * 2}px)`, marginTop: -amount }} className="w-full">
        {children}
      </motion.div>
    </div>
  );
}

/** Counts up to a number once it scrolls into view. */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2.2,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const format = (n: number) =>
    `${prefix}${n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    if (reduce) {
      node.textContent = format(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => (node.textContent = format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to]);

  // Server and no-JS render the final figure, so the number is never wrong.
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {format(to)}
    </span>
  );
}

/**
 * Pulls its child toward the pointer while hovered. Only reacts to a fine
 * pointer, so touch devices get a normal, still button.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
