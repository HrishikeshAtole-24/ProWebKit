import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { hero, practiceAreas, stats } from "../content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgb(255 255 255 / 0.6) 0 1px, transparent 1px 96px)",
        }}
        aria-hidden
      />

      <Container className="relative py-14 sm:py-20">
        <div className="max-w-4xl animate-fade-up">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1 className="mt-8 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-brand-fg/70 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2.5 border-b border-accent pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-accent transition hover:gap-4"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-medium text-brand-fg/70 transition hover:border-brand-fg/40 hover:text-brand-fg"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Practice-area ticker doubles as an index of the section below */}
        <ul className="mt-20 flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-fg/15 pt-6 text-xs uppercase tracking-[0.16em] text-brand-fg/45">
          {practiceAreas.map((area) => (
            <li key={area.title}>{area.title}</li>
          ))}
        </ul>
      </Container>

      <div className="relative border-t border-brand-fg/15">
        <Container>
          <dl className="grid grid-cols-2 divide-brand-fg/10 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-8 sm:px-8">
                <dt className="font-serif text-3xl font-semibold text-accent">{stat.value}</dt>
                <dd className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-brand-fg/50">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
