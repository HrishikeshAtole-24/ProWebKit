"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/template";

interface NavbarProps {
  brand: React.ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  /** "solid" sits on a background; "overlay" starts transparent over a dark hero. */
  variant?: "solid" | "overlay";
  className?: string;
}

export function Navbar({ brand, links, cta, variant = "solid", className }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const floating = variant === "overlay" && !scrolled && !open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        floating
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="#top"
          className={cn("flex items-center gap-2.5", floating && "text-brand-fg")}
          onClick={() => setOpen(false)}
        >
          {brand}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-card px-3 py-2 text-sm font-medium transition-colors",
                floating
                  ? "text-brand-fg/80 hover:text-brand-fg"
                  : "text-muted hover:bg-subtle hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {cta ? (
            <Link
              href={cta.href}
              className="hidden h-10 items-center rounded-card bg-accent px-4 text-sm font-semibold text-accent-fg transition hover:bg-accent/90 sm:inline-flex"
            >
              {cta.label}
            </Link>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-card border transition lg:hidden",
              floating ? "border-brand-fg/25 text-brand-fg" : "border-line text-ink hover:bg-subtle",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3.5 text-base font-medium text-ink last:border-0"
              >
                {link.label}
              </Link>
            ))}
            {cta ? (
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-card bg-accent text-sm font-semibold text-accent-fg"
              >
                {cta.label}
              </Link>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
