import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TemplateBrowser } from "@/components/gallery/template-browser";
import { ReadingProgress } from "@/components/layout/reading-progress";
import { categoryOrder, templates } from "@/lib/registry";

const REPO = "https://github.com/HrishikeshAtole-24/ProWebKit";

/** What a practice gets, as outcomes. Rendered as an editorial list. */
const included = [
  {
    title: "A page built to get you contacted",
    body: "Each template is organised around one action — book the appointment, request the consultation, send the enquiry — repeated where a visitor is most likely to act.",
  },
  {
    title: "Your pricing, in public",
    body: "Fee tables, treatment costs, package prices, per-seat rates, brokerage commission. Publishing the number most practices hide is the strongest trust signal a small firm has.",
  },
  {
    title: "Credibility that reads as real",
    body: "Registration numbers, credentials, guru lineage, reported matters, delivery history, safety records — the specifics a client checks before they call.",
  },
  {
    title: "Forms ready to wire up",
    body: "Semantic, labelled markup with correct field names and input types. Point it at a server action, Formspree or Resend and it works.",
  },
  {
    title: "Found on search, shared cleanly",
    body: "Per-page titles, descriptions and Open Graph tags written for the profession, plus a sitemap and robots.txt generated from the registry.",
  },
  {
    title: "Compliance notes where they matter",
    body: "ICAI advertising limits for accountants, Bar Council solicitation rules for advocates, emergency notices for clinics — written into the demos, not bolted on.",
  },
];

const audiences = [
  {
    who: "Practices & firms",
    body: "An accountant, doctor, advocate or architect who needs a credible site this month, not a six-week engagement.",
    outcome: "Fork it, rewrite one file, deploy.",
  },
  {
    who: "Agencies & freelancers",
    body: "Studios building for the same professions repeatedly, tired of rebuilding the same appointment card and fee table.",
    outcome: "One codebase, a new client in a day.",
  },
  {
    who: "Developers",
    body: "An opinionated Next.js reference — server components, token theming, accessible patterns — instead of another dashboard demo.",
    outcome: "MIT, no attribution required.",
  },
];

const steps = [
  { n: "01", title: "Pick the practice", body: "Choose a profession and open the template. Every one is a complete page." },
  { n: "02", title: "Rewrite one file", body: "All copy lives in that template's content.ts. No JSX edits." },
  { n: "03", title: "Swap nine colours", body: "Change the theme block and every shared component re-skins itself." },
  { n: "04", title: "Deploy", body: "A stock Next.js app. Push to Vercel and the sitemap resolves itself." },
];

const engineering = [
  { k: "Theming", v: "Nine CSS custom properties per brand. Rebranding is one block of CSS, not forty component edits." },
  { k: "Composition", v: "Shared primitives, but each template composes its own sections — so no two look reskinned." },
  { k: "Rendering", v: "React Server Components. Only navigation and this filter ship client JS; FAQs use native details." },
  { k: "Responsive", v: "Mobile-first to 320px, with a real navigation sheet and a numbered section index." },
];

const stats: Array<[string, string]> = [
  [String(templates.length), "Templates"],
  [String(categoryOrder.length), "Professions"],
  ["MIT", "Licence"],
];

/** Small letterspaced caps used to open each section. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="kit-label flex items-center gap-3 text-muted">
      <span aria-hidden className="h-px w-6 bg-line" />
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="theme-kit min-h-screen bg-bg text-ink antialiased">
      <ReadingProgress />

      <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
        <Container size="wide" className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-md bg-ink text-[13px] font-bold leading-none text-bg"
            >
              P
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.01em]">ProWebKit</span>
          </Link>

          <nav className="flex items-center gap-1" aria-label="Primary">
            {[
              ["Templates", "#templates"],
              ["What you get", "#included"],
              ["How it works", "#start"],
            ].map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink ${
                  index > 0 ? "hidden sm:block" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex h-8 items-center gap-1.5 rounded-md border border-line px-3 text-sm text-ink transition-colors hover:border-muted/60"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </nav>
        </Container>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="kit-grid pointer-events-none absolute inset-0" aria-hidden />
          <Container size="wide" className="relative pb-20 pt-24 sm:pb-28 sm:pt-32">
            <div className="animate-fade-up">
              <p className="kit-label flex items-center gap-2.5 text-muted">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {templates.length} templates · {categoryOrder.length} professions · open source
              </p>

              <h1 className="mt-8 max-w-[19ch] text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Digital presence for professionals and businesses.
              </h1>

              <p className="mt-7 max-w-xl text-[17px] leading-[1.65] text-muted">
                Most practices are one badly-built website away from losing a client who was ready
                to call. ProWebKit is a library of complete, production-ready sites for the
                professions that need credibility online and rarely get it.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="#templates"
                  className="group inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  Browse the library
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={REPO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-muted/60"
                >
                  <Github className="h-4 w-4" />
                  View source
                </Link>
              </div>
            </div>
          </Container>

          {/* Stat rail — hairline separated, tabular figures */}
          <div className="relative border-t border-line">
            <Container size="wide">
              <dl className="grid grid-cols-3 divide-x divide-line">
                {stats.map(([value, label], index) => (
                  <div key={label} className={index === 0 ? "py-6 pr-6" : "px-6 py-6"}>
                    <dt className="text-2xl font-medium tabular-nums tracking-[-0.02em]">{value}</dt>
                    <dd className="kit-label mt-2 text-muted">{label}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </div>
        </section>

        {/* ── Library ──────────────────────────────────────────── */}
        <section id="templates" className="scroll-mt-16 border-b border-line py-20 sm:py-28">
          <Container size="wide">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <Eyebrow>The library</Eyebrow>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.5rem] sm:leading-[1.05]">
                  Pick a profession, get a finished site
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-relaxed text-muted">
                Each template is a complete, deployable page — hero to footer, with real content
                structure, working navigation and forms ready to wire up.
              </p>
            </div>

            <div className="mt-12">
              <TemplateBrowser />
            </div>
          </Container>
        </section>

        {/* ── What you get — editorial list, no cards ──────────── */}
        <section id="included" className="scroll-mt-16 border-b border-line py-20 sm:py-28">
          <Container size="wide">
            <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Eyebrow>What you get</Eyebrow>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.25rem] sm:leading-[1.08]">
                  Written for the client, not for the portfolio
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  The demo copy is specific to each profession, because generic copy is exactly what
                  makes most professional websites forgettable.
                </p>
              </div>

              <ol className="-mt-6">
                {included.map((item, index) => (
                  <li
                    key={item.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-6 last:border-0 sm:gap-x-8"
                  >
                    <span className="pt-1 text-sm tabular-nums text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-medium tracking-[-0.01em]">{item.title}</h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* ── Who it is for — three columns, rules not boxes ───── */}
        <section id="who" className="scroll-mt-16 border-b border-line py-20 sm:py-24">
          <Container size="wide">
            <Eyebrow>Who it is for</Eyebrow>
            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {audiences.map((item) => (
                <div key={item.who} className="border-t border-ink/25 pt-6">
                  <h3 className="text-[17px] font-medium tracking-[-0.01em]">{item.who}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
                  <p className="mt-5 text-[15px] text-accent">{item.outcome}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── How it works — stepper rail + terminal ───────────── */}
        <section id="start" className="scroll-mt-16 border-b border-line py-20 sm:py-28">
          <Container size="wide">
            <div className="max-w-xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.25rem] sm:leading-[1.08]">
                A client site in an afternoon
              </h2>
            </div>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li key={step.n} className="kit-edge bg-surface p-6">
                  <span className="text-sm tabular-nums text-accent">{step.n}</span>
                  <h3 className="mt-4 text-[15px] font-medium tracking-[-0.01em]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-6 overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <span className="kit-label text-muted">Terminal</span>
                <span className="kit-label text-muted">bash</span>
              </div>
              <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-[1.9] text-muted">
                <code>
                  <span className="select-none text-muted">$ </span>
                  git clone {REPO}.git{"\n"}
                  <span className="select-none text-muted">$ </span>cd ProWebKit{"\n"}
                  <span className="select-none text-muted">$ </span>npm install{"\n"}
                  <span className="select-none text-muted">$ </span>
                  <span className="text-ink">npm run dev</span>
                  {"\n\n"}
                  <span className="text-muted"># http://localhost:3000</span>
                </code>
              </pre>
            </div>
          </Container>
        </section>

        {/* ── Built properly — definition list, small type ─────── */}
        <section className="py-20 sm:py-24">
          <Container size="wide">
            <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-20">
              <div>
                <Eyebrow>Built properly</Eyebrow>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.25rem] sm:leading-[1.08]">
                  Opinionated where it saves you time
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  One app, one design system, one deploy — so template number thirty costs about as
                  much to add as template number three.
                </p>
              </div>

              <dl className="-mt-5">
                {engineering.map((item) => (
                  <div
                    key={item.k}
                    className="grid gap-1 border-b border-line py-5 last:border-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
                  >
                    <dt className="kit-label pt-1 text-muted">{item.k}</dt>
                    <dd className="max-w-2xl text-[15px] leading-relaxed text-ink/85">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-line">
        <Container size="wide" className="py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="grid h-6 w-6 place-items-center rounded bg-ink text-[11px] font-bold leading-none text-bg"
                >
                  P
                </span>
                <span className="text-sm font-semibold tracking-[-0.01em]">ProWebKit</span>
              </div>
              <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-muted">
                Complete, production-ready websites for professionals and businesses. Demo names,
                figures, credentials and testimonials are fictional.
              </p>
            </div>

            <Link
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
            >
              github.com/HrishikeshAtole-24/ProWebKit
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <p className="kit-label mt-10 border-t border-line pt-6 text-muted">
            MIT licensed · {new Date().getFullYear()}
          </p>
        </Container>
      </footer>
    </div>
  );
}
