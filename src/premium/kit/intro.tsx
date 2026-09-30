"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "motion/react";
import { EASE } from "./motion";

const IntroContext = createContext(true);

/** True once the preloader has lifted; heroes wait for it before playing. */
export function useIntroDone() {
  return useContext(IntroContext);
}

/**
 * A short curtain on the first visit of a session: the house name and a
 * count to 100, then the curtain lifts and the hero plays. Repeat visits and
 * reduced-motion visitors skip straight in. If JavaScript never runs, a CSS
 * failsafe hides the curtain after four seconds.
 */
export function Intro({
  name,
  tagline,
  children,
}: {
  name: string;
  tagline: string;
  children: React.ReactNode;
}) {
  const [showing, setShowing] = useState(true);
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = `pm-intro:${name}`;
    let seen = false;
    try {
      seen = sessionStorage.getItem(key) === "1";
      sessionStorage.setItem(key, "1");
    } catch {
      /* storage unavailable: play the intro */
    }
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || still) {
      setShowing(false);
      setDone(true);
      return;
    }
    const controls = animate(0, 100, {
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        setShowing(false);
        // The hero plays while the curtain lifts, not after it has gone.
        window.setTimeout(() => setDone(true), 350);
      },
    });
    // Never hold the page hostage to a slow device: lift after 3.5s regardless.
    const bail = window.setTimeout(() => {
      setShowing(false);
      setDone(true);
    }, 3500);
    return () => {
      controls.stop();
      window.clearTimeout(bail);
    };
  }, [name]);

  return (
    <IntroContext.Provider value={done}>
      <AnimatePresence>
        {showing && (
          <motion.div
            key="intro"
            className="pm-intro fixed inset-0 z-[90] flex flex-col justify-between bg-[rgb(var(--pm-bg))] p-6 text-[rgb(var(--pm-ink))] sm:p-10"
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <p className="pm-caps text-[rgb(var(--pm-muted))]">{tagline}</p>
            <div className="overflow-hidden">
              <motion.p
                className="pm-display text-[clamp(4rem,16vw,14rem)]"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: EASE }}
              >
                {name}
              </motion.p>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-px flex-1 bg-[rgb(var(--pm-line))]">
                <div
                  className="h-px bg-[rgb(var(--pm-accent))]"
                  style={{ width: `${count}%` }}
                />
              </div>
              <p className="pm-display ml-6 w-24 text-right text-4xl tabular-nums">{count}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
