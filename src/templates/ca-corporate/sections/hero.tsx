import Link from "next/link";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { firm, hero, stats } from "../content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div className="grid-lines absolute inset-0 opacity-[0.07]" aria-hidden />
      <div
        className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #B08A3C, transparent)" }}
        aria-hidden
      />

      <Container className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="grid gap-11 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-fg/20 px-3 py-1 text-xs font-medium text-brand-fg/80">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-fg/75 sm:text-lg">
              {hero.subtitle}
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {hero.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-fg/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center gap-2 rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`tel:${firm.phone.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center gap-2 rounded-card border border-brand-fg/25 px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand-fg/10"
              >
                <Phone className="h-4 w-4" />
                {firm.phone}
              </Link>
            </div>
          </div>

          {/* Compliance calendar card — the visual anchor, no image required */}
          <div className="relative animate-fade-up rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-baseline justify-between border-b border-brand-fg/15 pb-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-fg/60">
                Compliance calendar
              </h2>
              <span className="text-xs text-accent">This quarter</span>
            </div>

            <ul className="mt-5 space-y-4">
              {[
                { date: "11 Oct", title: "GSTR-1", note: "Outward supplies — monthly filers" },
                { date: "20 Oct", title: "GSTR-3B", note: "Summary return & tax payment" },
                { date: "31 Oct", title: "Tax audit u/s 44AB", note: "Form 3CA/3CB & 3CD" },
                { date: "07 Nov", title: "TDS deposit", note: "Challan 281 for October" },
                { date: "30 Nov", title: "Transfer pricing", note: "Form 3CEB filers" },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="w-16 shrink-0 rounded-md bg-brand-fg/10 px-2 py-1 text-center text-xs font-semibold text-accent">
                    {item.date}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-brand-fg">{item.title}</span>
                    <span className="block truncate text-xs text-brand-fg/55">{item.note}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-brand-fg/15 pt-4 text-xs leading-relaxed text-brand-fg/55">
              Every retainer client gets this calendar shared, with reminders seven days before each
              due date.
            </p>
          </div>
        </div>
      </Container>

      {/* Credibility band */}
      <div className="relative border-t border-brand-fg/15 bg-brand-fg/[0.04]">
        <Container>
          <dl className="grid grid-cols-2 divide-brand-fg/10 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-7 text-center sm:px-6">
                <dt className="font-serif text-2xl font-semibold text-brand-fg sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-fg/55">
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
