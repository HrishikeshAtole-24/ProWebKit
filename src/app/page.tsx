import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Blocks,
  Briefcase,
  Building2,
  CalendarCheck,
  Gauge,
  Github,
  Palette,
  PhoneCall,
  Receipt,
  Search,
  Smartphone,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { TemplateBrowser } from "@/components/gallery/template-browser";
import { ReadingProgress } from "@/components/layout/reading-progress";
import { categoryOrder, templates } from "@/lib/registry";

const REPO = "https://github.com/HrishikeshAtole-24/ProWebKit";

/** What a practice actually gets, framed as outcomes rather than components. */
const included = [
  {
    icon: PhoneCall,
    title: "A page built to get you contacted",
    description:
      "Every template is organised around one action — book the appointment, request the consultation, send the enquiry — and repeats it where a visitor is most likely to act.",
  },
  {
    icon: Receipt,
    title: "Your pricing, in public",
    description:
      "Fee tables, treatment costs, package prices, commission rates. Publishing the number most practices hide is the strongest trust signal a small firm has.",
  },
  {
    icon: UserRound,
    title: "Credibility that reads as real",
    description:
      "Credentials, registration numbers, lineage, case records, delivery history — the specifics a client checks before they pick up the phone.",
  },
  {
    icon: CalendarCheck,
    title: "Forms ready to wire up",
    description:
      "Semantic, labelled markup with the right field names and input types. Point it at a server action, Formspree or Resend and it works.",
  },
  {
    icon: Search,
    title: "Found on search, shared cleanly",
    description:
      "Per-page titles, descriptions and Open Graph tags written for the profession, plus a sitemap and robots.txt generated from the registry.",
  },
  {
    icon: Accessibility,
    title: "Compliance notes where they matter",
    description:
      "ICAI advertising limits for accountants, Bar Council solicitation rules for advocates, emergency notices for clinics — written into the demos, not bolted on.",
  },
];

/** Who the kit is for. */
const audiences = [
  {
    icon: Briefcase,
    who: "Practices & firms",
    body: "A chartered accountant, doctor, advocate or architect who needs a credible site this month, not a six-week agency engagement.",
    detail: "Fork it, rewrite one file, deploy.",
  },
  {
    icon: Building2,
    who: "Agencies & freelancers",
    body: "Studios building client sites repeatedly for the same professions, tired of rebuilding the same appointment card and fee table.",
    detail: "One codebase, one deploy, a new client in a day.",
  },
  {
    icon: Blocks,
    who: "Developers",
    body: "Anyone who wants a real, opinionated Next.js reference — server components, token theming, accessible patterns — instead of another dashboard demo.",
    detail: "MIT licensed, no attribution required.",
  },
];

/** Engineering credibility, kept after the product story rather than before it. */
const engineering = [
  {
    icon: Palette,
    title: "Nine variables per brand",
    description:
      "A template palette is nine CSS custom properties on a wrapper class. Rebranding is one block of CSS, not forty component edits.",
  },
  {
    icon: Blocks,
    title: "Shared primitives, distinct designs",
    description:
      "Buttons, sections and forms come from one set of primitives, but every template composes its own sections — so no two look reskinned.",
  },
  {
    icon: Gauge,
    title: "Server-rendered, near-zero JS",
    description:
      "Templates are React Server Components. Only navigation and the gallery filter ship client JS; FAQs use native details elements.",
  },
  {
    icon: Smartphone,
    title: "Responsive to 320px",
    description:
      "Mobile-first layouts with a real navigation sheet and a numbered section index, not a desktop grid squeezed down.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick the practice",
    body: "Choose a profession in the gallery and open the template. Every one is a complete page, hero to footer.",
  },
  {
    number: "02",
    title: "Rewrite one file",
    body: "All copy lives in that template's content.ts — name, services, people, fees, FAQs, contact details. No JSX edits.",
  },
  {
    number: "03",
    title: "Swap nine colours",
    body: "Change the theme block in globals.css to the client's brand and every shared component re-skins itself.",
  },
  {
    number: "04",
    title: "Deploy",
    body: "It is a stock Next.js app. Push to Vercel, set NEXT_PUBLIC_SITE_URL, and the sitemap resolves itself.",
  },
];

const stats: Array<[string, string]> = [
  [String(templates.length), "Ready templates"],
  [String(categoryOrder.length), "Professions covered"],
  ["100%", "TypeScript · MIT"],
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
              href="#included"
              className="hidden rounded-card px-3 py-2 text-muted hover:text-ink sm:block"
            >
              What you get
            </Link>
            <Link
              href="#start"
              className="hidden rounded-card px-3 py-2 text-muted hover:text-ink sm:block"
            >
              How it works
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
                {templates.length} templates · {categoryOrder.length} professions · MIT licensed
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Digital presence for
                <br />
                <span className="text-muted">professionals and businesses.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Most practices are one badly-built website away from losing a client who was ready
                to call. ProWebKit is a library of complete, production-ready sites for the
                professions that need credibility online and rarely get it — accountants, doctors,
                lawyers, architects, developers, coaching institutes and designers.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#templates" variant="primary" size="lg">
                  Browse the library
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={REPO} target="_blank" rel="noreferrer" variant="outline" size="lg">
                  <Github className="h-4 w-4" />
                  View on GitHub
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
        <Section id="templates" noReveal className="border-b border-line/70">
          <SectionHeading
            eyebrow="The library"
            title="Pick a profession, get a finished site"
            description="Each template is a complete, deployable page — hero to footer, with real content structure, working navigation and forms ready to wire up. Not a hero section and three cards."
          />

          <div className="mt-10">
            <TemplateBrowser />
          </div>
        </Section>

        {/* What every template includes */}
        <Section id="included" className="border-b border-line/70">
          <SectionHeading
            eyebrow="What you get"
            title="Written for the client, not for the portfolio"
            description="The demo copy is specific to each profession, because generic copy is exactly what makes most professional websites forgettable."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {included.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-bg p-7">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Audiences */}
        <Section id="who" className="border-b border-line/70">
          <SectionHeading eyebrow="Who it is for" title="Three kinds of people use this" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, who, body, detail }) => (
              <article key={who} className="rounded-card border border-line bg-surface p-7">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{who}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                <p className="mt-4 border-t border-line pt-4 text-sm font-medium text-accent">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="start" className="border-b border-line/70">
          <SectionHeading
            eyebrow="How it works"
            title="A client site in an afternoon"
            description="The architecture exists to make this four steps rather than a rebuild. Copy lives in one file per template; the palette lives in one CSS block."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <ol className="grid gap-6 sm:grid-cols-2">
              {steps.map((step) => (
                <li key={step.number} className="rounded-card border border-line bg-surface p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>

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

        {/* Engineering */}
        <Section id="engineering">
          <SectionHeading
            eyebrow="Built properly"
            title="Opinionated where it saves you time"
            description="One app, one design system, one deploy — so template number thirty costs about as much to add as template number three."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {engineering.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-bg p-7">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-line/70">
        <Container className="flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            ProWebKit — MIT licensed. Demo names, figures, credentials and testimonials are
            fictional.
          </p>
          <Link href={REPO} target="_blank" rel="noreferrer" className="hover:text-ink">
            github.com/HrishikeshAtole-24/ProWebKit
          </Link>
        </Container>
      </footer>
    </div>
  );
}
