"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

let instance: Lenis | null = null;

/**
 * Wraps every premium page. Lenis gives the weighted, inertial scroll these
 * sites are known for; it drives the native scroll position, so sticky
 * positioning and Motion's useScroll keep working unchanged.
 *
 * Visitors who ask for reduced motion keep native scrolling, and Motion's
 * "user" mode drops transform animations while keeping opacity fades.
 */
export function PremiumProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, anchors: { offset: 0 }, autoRaf: true });
    instance = lenis;
    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Freeze page scrolling, for modals. Works with or without Lenis. */
export function lockScroll(locked: boolean) {
  if (instance) {
    if (locked) instance.stop();
    else instance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/** Smooth-scroll to a selector, falling back to native scrolling. */
export function scrollToTarget(target: string) {
  if (instance) {
    instance.scrollTo(target, { offset: 0 });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}
