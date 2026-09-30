"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { EASE, FadeUp, SplitText } from "@/premium/kit/motion";
import { Photo } from "@/premium/kit/photo";
import {
  livePremiumTemplates,
  premiumCategoryLabels,
  premiumCategoryOrder,
  premiumTemplates,
  type PremiumTemplate,
} from "@/premium/registry";

const muted = "text-[rgb(var(--pm-muted))]";
const line = "border-[rgb(var(--pm-line))]";

function Cover({ t, priority = false }: { t: PremiumTemplate; priority?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[rgb(var(--pm-surface))]">
      {t.cover ? (
        <div className="absolute inset-0 transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
          <Photo id={t.cover} alt="" sizes="(min-width: 1024px) 60vw, 100vw" priority={priority} />
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 90% at 20% 10%, ${t.swatch[1]}33, transparent 55%), linear-gradient(160deg, ${t.swatch[0]}, #000)`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    </div>
  );
}

function AtelierCard({ t, index }: { t: PremiumTemplate; index: number }) {
  const live = t.status === "live";
  const inner = (
    <>
      <div className="relative aspect-[4/3]">
        <Cover t={t} />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="pm-caps text-white/70">{String(index + 1).padStart(2, "0")}</span>
          <span
            className={`pm-caps rounded-full px-3 py-1.5 ${
              live ? "bg-[rgb(var(--pm-accent))] text-[rgb(var(--pm-accent-fg))]" : "border border-white/20 text-white/70"
            }`}
          >
            {live ? "Live" : "In the atelier"}
          </span>
        </div>
        <p className="pm-display absolute bottom-5 left-5 text-3xl text-white sm:text-4xl">{t.demoBrand}</p>
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <h3 className="text-sm font-medium">{t.name}</h3>
          <p className={`mt-1.5 text-sm leading-relaxed ${muted}`}>{t.angle}</p>
        </div>
        {live && <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />}
      </div>
    </>
  );

  return live ? (
    <Link href={t.href} className="group block" data-cursor="Enter">
      {inner}
    </Link>
  ) : (
    <div className="opacity-80" aria-label={`${t.name}, in production`}>
      {inner}
    </div>
  );
}

export function PremiumGallery() {
  const featured = livePremiumTemplates[0];

  return (
    <>
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-10">
        <Link href="/" className="pm-caps pm-link flex items-center gap-2 pb-1">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> ProWebKit
        </Link>
        <span className={`pm-caps ${muted}`}>
          {livePremiumTemplates.length} live · {premiumTemplates.length} in the collection
        </span>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-28">
          <FadeUp onView={false}>
            <p className="pm-caps text-[rgb(var(--pm-accent))]">ProWebKit Premium</p>
          </FadeUp>
          <SplitText
            as="h1"
            onView={false}
            delay={0.1}
            lines={["The Private", "Collection."]}
            className="pm-display mt-6 text-[clamp(3.6rem,11vw,11rem)]"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <FadeUp onView={false} delay={0.5} className="md:col-span-6">
              <p className={`text-lg leading-relaxed ${muted}`}>
                Websites for houses, marques and names where the site is part of the product. Real-time 3D, choreographed
                scroll, licensed photography and copy written like a brand book — for watchmakers, jewellers, fashion
                houses, car marques, artists and the people who run empires.
              </p>
            </FadeUp>
            <FadeUp onView={false} delay={0.6} className="md:col-span-5 md:col-start-8">
              <dl className={`grid grid-cols-3 border-t ${line}`}>
                {[
                  [String(premiumTemplates.length), "Templates"],
                  [String(premiumCategoryOrder.length), "Disciplines"],
                  ["3D", "Where it earns it"],
                ].map(([v, k]) => (
                  <div key={k} className="pt-5">
                    <dd className="pm-display text-5xl">{v}</dd>
                    <dt className={`pm-caps mt-2 ${muted}`}>{k}</dt>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>
        </section>

        {featured && (
          <section className="mx-auto max-w-7xl px-5 sm:px-10" aria-label="Featured template">
            <motion.div
              initial={{ clipPath: "inset(12% 8% 12% 8%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.7 }}
            >
              <Link href={featured.href} className="group grid overflow-hidden lg:grid-cols-12" data-cursor="Enter">
                <div className="relative aspect-[16/11] lg:col-span-8 lg:aspect-auto lg:min-h-[560px]">
                  <Cover t={featured} priority />
                  <p className="pm-caps absolute left-6 top-6 rounded-full bg-[rgb(var(--pm-accent))] px-3 py-1.5 text-[rgb(var(--pm-accent-fg))]">
                    New · Pilot
                  </p>
                </div>
                <div className={`flex flex-col justify-between gap-10 border p-8 sm:p-10 lg:col-span-4 lg:border-l-0 ${line}`}>
                  <div>
                    <p className={`pm-caps ${muted}`}>{premiumCategoryLabels[featured.category]}</p>
                    <h2 className="pm-display mt-4 text-5xl sm:text-6xl">{featured.demoBrand}</h2>
                    <p className="mt-2 text-sm">{featured.name}</p>
                    <p className={`mt-6 leading-relaxed ${muted}`}>{featured.angle}</p>
                  </div>
                  <ul className={`space-y-2.5 border-t pt-6 text-sm ${line}`}>
                    {featured.features?.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="text-[rgb(var(--pm-accent))]" aria-hidden>
                          ✦
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-sm">
                    Enter the site
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.div>
          </section>
        )}

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-36" aria-label="The collection">
          {premiumCategoryOrder.map((cat) => {
            const items = premiumTemplates.filter((t) => t.category === cat);
            return (
              <div key={cat} className={`border-t py-14 first:border-t-0 first:pt-0 sm:py-20 ${line}`}>
                <div className="mb-10 flex items-baseline justify-between gap-6">
                  <SplitText lines={[premiumCategoryLabels[cat]]} className="pm-display text-4xl sm:text-6xl" />
                  <span className={`pm-caps ${muted}`}>
                    {items.filter((t) => t.status === "live").length}/{items.length} live
                  </span>
                </div>
                <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((t, i) => (
                    <FadeUp key={t.slug} delay={i * 0.08}>
                      <AtelierCard t={t} index={i} />
                    </FadeUp>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <footer className={`mx-auto flex max-w-7xl flex-col gap-3 border-t px-5 py-10 text-xs sm:flex-row sm:justify-between sm:px-10 ${line} ${muted}`}>
        <p>Every brand and person in these demos is fictional. Photography via Unsplash.</p>
        <Link href="/" className="pm-link self-start">
          Standard templates for professionals →
        </Link>
      </footer>
    </>
  );
}
