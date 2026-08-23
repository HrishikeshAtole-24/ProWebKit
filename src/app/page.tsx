import Link from "next/link";
import {
  Accessibility,
  Blocks,
  Gauge,
  Github,
  Palette,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { TemplateCard } from "@/components/gallery/template-card";
import { ReadingProgress } from "@/components/layout/reading-progress";
import { categoryLabels, categoryOrder, templates, templatesByCategory } from "@/lib/registry";

const REPO = "https://github.com/HrishikeshAtole-24/ProWebKit";

const features = [
  {
    icon: Blocks,
    title: "Shared primitives, distinct designs",
    description:
      "Buttons, sections and forms come from one set of primitives — but every template composes its own sections, so no two look like the same site reskinned.",
  },
  {
    icon: Palette,
    title: "Token-based theming",
    description:
      "A whole palette is nine CSS variables on a wrapper class. Change the brand colour in one place, not in forty components.",
  },
  {
    icon: Smartphone,
    title: "Responsive to 320px",
    description:
      "Every layout is built mobile-first with a real mobile navigation sheet, not a desktop grid squeezed down.",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    description:
      "Semantic landmarks, labelled form controls, visible focus rings, and a reduced-motion escape hatch.",
  },
  {
    icon: Search,
    title: "SEO metadata per template",
    description:
      "Each template exports its own Next.js Metadata — title, description, Open Graph — instead of inheriting a generic one.",
  },
  {
    icon: Gauge,
    title: "Server-rendered, near-zero JS",
    description:
      "Templates are React Server Components. Only the navigation ships client JS; FAQ accordions use native details elements.",
  },
];

const stats: Array<[string, string]> = [
  ["100%", "TypeScript"],
  [String(categoryOrder.length), "Professions covered"],
  ["0", "UI dependencies"],
];

export default function HomePage() {
  return (
    <div className="theme-kit min-h-screen bg-bg text-ink">
      <ReadingProgress />
      <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-fg">
              <Sparkles className="h-4 w-4" />
            </span>
            ProWebKit
          </Link>
          <nav className="flex items-center gap-1 text-sm" aria-label="Primary">
            <Link href="#templates" className="rounded-card px-3 py-2 text-muted hover:text-ink">
              Templates
            </Link>
            <Link
              href="#features"
              className="hidden rounded-card px-3 py-2 text-muted hover:text-ink sm:block"
            >
              Features
            </Link>
            <Link
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex h-9 items-center gap-1.5 rounded-card border border-line px-3 font-medium transition hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </nav>
        </Container>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line/70">
          <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
          <div
            className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #6366f1, transparent)" }}
            aria-hidden
          />
          <Container className="relative py-20 sm:py-28">
            <div className="max-w-3xl animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {templates.length} templates · MIT licensed
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Professional websites,
                <br />
                <span className="text-muted">without starting from a blank page.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Production-ready Next.js templates for the practices that need a serious web
                presence and rarely get one — accountants, doctors, lawyers, architects,
                developers, coaching institutes and designers. Typed, themeable, accessible,
                and yours to fork.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#templates" variant="primary" size="lg">
                  Browse templates
                </ButtonLink>
                <ButtonLink href={REPO} target="_blank" rel="noreferrer" variant="outline" size="lg">
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </ButtonLink>
              </div>

              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
                {stats.map(([value, label]) => (
                  <div key={label}>
                    <dt className="text-2xl font-semibold text-ink">{value}</dt>
                    <dd className="mt-1 text-sm text-muted">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        {/* Template library */}
        <Section id="templates" className="border-b border-line/70">
          <SectionHeading
            eyebrow="The library"
            title="Pick a practice, get a complete site"
            description="Each template is a full, deployable page — not a hero section and three cards. Open one and scroll all the way to the footer."
          />

          <div className="mt-12 space-y-16">
            {categoryOrder.map((category) => {
              const items = templatesByCategory(category);
              return (
                <div key={category}>
                  <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                      {categoryLabels[category]}
                    </h3>
                    <span className="text-xs text-muted">
                      {items.length} template{items.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((template) => (
                      <TemplateCard key={template.slug} template={template} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Features */}
        <Section id="features" className="border-b border-line/70">
          <SectionHeading
            eyebrow="How it is built"
            title="Opinionated where it saves you time"
            description="The constraints are deliberate: one app, one design system, one deploy — so template number twenty costs about as much as template number three."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-bg p-7">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Getting started */}
        <Section id="start">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Get started"
              title="Clone it, edit one content file, ship it"
              description="Every template keeps its copy in a single content.ts. Swap the strings, swap the nine theme tokens, and you have a client site."
            />
            <div className="overflow-hidden rounded-card border border-line bg-surface">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-2 text-xs text-muted">terminal</span>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-muted">
                <code>{`git clone ${REPO}.git
cd ProWebKit
npm install
npm run dev

# open http://localhost:3000`}</code>
              </pre>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line/70">
        <Container className="flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>ProWebKit — MIT licensed. Demo names, figures and testimonials are fictional.</p>
          <Link href={REPO} target="_blank" rel="noreferrer" className="hover:text-ink">
            github.com/HrishikeshAtole-24/ProWebKit
          </Link>
        </Container>
      </footer>
    </div>
  );
}
