import Link from "next/link";
import { ArrowRight, Check, Mail, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  audience,
  caseStudy,
  creator,
  enquiryTypes,
  faqs,
  hero,
  navLinks,
  pillars,
  press,
  principles,
  rateNotes,
  rates,
  stats,
  work,
} from "./content";

const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Bars grow with the section as it scrolls in, via the shared rail keyframe. */
const bar = (percent: number, index: number) =>
  ({ "--i": index, width: `${percent}%` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-full",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Sparkles className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold tracking-[-0.015em]">{creator.name}</span>
        <span
          className={cn(
            "block text-[10px] tracking-[0.06em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          {creator.handle}
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Work with me", href: "#enquire" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-subtle">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[620px] w-[620px] rounded-full opacity-[0.13] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #B4188E, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <p
          className="pk-fade inline-flex items-center gap-2 rounded-full border border-brand/15 bg-bg px-3.5 py-1.5 text-[11px] font-medium text-brand"
          style={delay(0)}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </p>

        <h1 className="mt-8 max-w-[16ch] text-[2.6rem] font-semibold leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]">
          {hero.titleLines.map((line, index) => (
            <span key={line} className="pk-clip block" style={delay(140 + index * 130)}>
              {index === hero.titleLines.length - 1 ? <span className="text-accent">{line}</span> : line}
            </span>
          ))}
        </h1>

        <p className="pk-fade mt-8 max-w-xl text-[17px] leading-[1.7] text-muted" style={delay(560)}>
          {hero.subtitle}
        </p>

        <div className="pk-fade mt-10 flex flex-wrap gap-3" style={delay(660)}>
          <Link
            href="#rates"
            className="pk-sheen group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-card bg-brand px-6 text-sm font-medium text-brand-fg transition-opacity hover:opacity-95"
          >
            See the rate card
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#enquire"
            className="inline-flex h-12 items-center rounded-card border border-line bg-bg px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Send a brief
          </Link>
        </div>

        <dl className="pk-stagger mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} style={stagger(index)} className="bg-bg px-4 py-6">
              <dt className="text-[1.75rem] font-semibold tabular-nums tracking-[-0.03em] text-brand">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ── Audience ──────────────────────────────────────────────────────── */
export function Audience() {
  return (
    <Section id="audience">
      <SectionHeading eyebrow="Audience" title={audience.title} description={audience.body} />

      <div className="pk-stagger mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {audience.platforms.map((platform, index) => (
          <article key={platform.name} style={stagger(index)} className="bg-bg p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[15px] font-semibold text-ink">{platform.name}</h3>
              <span className="text-xs tabular-nums text-accent">{platform.engagement}</span>
            </div>
            <p className="mt-3 text-[1.6rem] font-semibold tabular-nums tracking-[-0.03em] text-brand">
              {platform.followers}
            </p>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-subtle" aria-hidden>
              <span className="block h-full rounded-full bg-accent" style={{ width: `${platform.share}%` }} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{platform.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Who they are
          </h3>
          <dl className="mt-6 space-y-5">
            {audience.demographics.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[15px] text-ink">{item.label}</dt>
                  <dd className="text-sm tabular-nums text-muted">{item.value}%</dd>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-subtle" aria-hidden>
                  <span
                    className="block h-full rounded-full bg-brand transition-[width] duration-700"
                    style={bar(item.value, index)}
                  />
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Where they are
          </h3>
          <dl className="mt-6 space-y-5">
            {audience.geography.map((item, index) => (
              <div key={item.place}>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[15px] text-ink">{item.place}</dt>
                  <dd className="text-sm tabular-nums text-muted">{item.value}%</dd>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-subtle" aria-hidden>
                  <span
                    className="block h-full rounded-full bg-accent transition-[width] duration-700"
                    style={bar(item.value, index)}
                  />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

/* ── Content pillars ───────────────────────────────────────────────── */
export function Pillars() {
  return (
    <Section id="pillars" tone="surface">
      <SectionHeading
        eyebrow="Content pillars"
        title="Four formats, and brand work lives inside them"
        description="Nothing is made that would not exist without the brand attached. That is the entire reason the engagement rate holds."
      />

      <div className="pk-stagger mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.name}
            style={stagger(index)}
            className="flex flex-col rounded-card border border-line bg-bg p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">{pillar.name}</h3>
            <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{pillar.detail}</p>
            <p className="mt-5 border-t border-line pt-3.5 text-[11px] uppercase tracking-[0.14em] text-accent">
              {pillar.cadence}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Selected collaborations ───────────────────────────────────────── */
export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected collaborations"
        title="With the numbers attached"
        description="Results are as reported in native analytics 30 days after publication, shared with each brand's permission."
      />

      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">Selected brand collaborations and results</caption>
          <thead className="bg-surface text-[10px] uppercase tracking-[0.16em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">Year</th>
              <th scope="col" className="px-5 py-4 font-semibold">Brand</th>
              <th scope="col" className="px-5 py-4 font-semibold">Format</th>
              <th scope="col" className="px-5 py-4 font-semibold">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {work.map((item) => (
              <tr key={`${item.year}-${item.brand}`} className="transition-colors hover:bg-surface">
                <th scope="row" className="px-5 py-4 text-left tabular-nums font-medium text-accent">
                  {item.year}
                </th>
                <td className="px-5 py-4 text-[15px] font-medium text-ink">{item.brand}</td>
                <td className="px-5 py-4 text-muted">{item.format}</td>
                <td className="px-5 py-4 tabular-nums text-muted">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ── Case study ────────────────────────────────────────────────────── */
export function CaseStudy() {
  return (
    <Section id="case" tone="brand">
      <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
        Case study · {caseStudy.client}
      </p>
      <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-brand-fg sm:text-[2.5rem] sm:leading-[1.08]">
        {caseStudy.title}
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.18em] text-brand-fg/50">The brief</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-fg/80">{caseStudy.brief}</p>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.18em] text-brand-fg/50">What we made</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-fg/80">{caseStudy.approach}</p>
        </div>
      </div>

      <dl className="pk-stagger mt-10 grid gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-4">
        {caseStudy.metrics.map((metric, index) => (
          <div key={metric.label} style={stagger(index)} className="bg-brand p-6">
            <dt className="text-[1.6rem] font-semibold tabular-nums tracking-[-0.03em] text-accent">
              {metric.value}
            </dt>
            <dd className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-brand-fg/55">
              {metric.label}
            </dd>
          </div>
        ))}
      </dl>

      <figure className="mt-10 border-l border-accent pl-7">
        <blockquote className="max-w-3xl text-lg leading-[1.7] text-brand-fg">
          {caseStudy.quote.line}
        </blockquote>
        <figcaption className="mt-4 text-[11px] uppercase tracking-[0.18em] text-brand-fg/50">
          {caseStudy.quote.person}
        </figcaption>
      </figure>
    </Section>
  );
}

/* ── Rate card ─────────────────────────────────────────────────────── */
export function Rates() {
  return (
    <Section id="rates">
      <SectionHeading
        eyebrow="Rate card"
        title="Published, so the first email can be about the idea"
        description="Most creator negotiations spend two weeks establishing a number. Here it is, and we can spend that fortnight on the work instead."
      />

      <div className="pk-stagger mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-start">
        {rates.map((rate, index) => (
          <article
            key={rate.name}
            style={stagger(index)}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-7 transition-transform duration-300 hover:-translate-y-1",
              rate.featured ? "border-accent shadow-lift" : "border-line",
            )}
          >
            {rate.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-fg">
                Most booked
              </span>
            ) : null}

            <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">{rate.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-accent">{rate.scope}</p>

            <p className="mt-6 text-[1.9rem] font-semibold tabular-nums tracking-[-0.03em] text-brand">
              {rate.price}
            </p>

            <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
              {rate.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <ul className="mt-8 grid gap-2.5 rounded-card border border-line bg-surface p-6 sm:grid-cols-2">
        {rateNotes.map((note) => (
          <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {note}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── How I work with brands ────────────────────────────────────────── */
export function Principles() {
  return (
    <Section id="principles" tone="surface" space="compact">
      <div className="grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="How I work with brands"
          title="Four terms, stated before the brief"
        />

        <dl className="pk-stagger divide-y divide-line border-y border-line">
          {principles.map((principle, index) => (
            <div key={principle.title} style={stagger(index)} className="grid gap-2 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className="text-[15px] font-semibold text-ink">{principle.title}</dt>
              <dd className="text-[15px] leading-relaxed text-muted">{principle.body}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {press.map((item) => (
          <figure key={item.source} className="border-t border-accent/40 pt-5">
            <blockquote className="text-lg leading-[1.7] text-ink">{item.line}</blockquote>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted">
              {item.source} · {item.year}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Enquire ───────────────────────────────────────────────────────── */
export function Enquire() {
  return (
    <Section id="enquire">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions" title="Asked by every brand team" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Management</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${creator.manager.email}`} className="pk-link text-ink">
                    {creator.manager.email}
                  </a>
                  <span className="mt-1 block text-xs text-muted">
                    {creator.manager.name} · {creator.manager.agency}
                  </span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Direct</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${creator.email}`} className="pk-link text-ink">
                    {creator.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Brand enquiry"
        >
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">Send a brief</h2>
          <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
            Include the usage and the budget range. Briefs with both get a reply the same week;
            briefs with neither take considerably longer.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="tc-name">
              <Input id="tc-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Brand or agency" htmlFor="tc-brand">
              <Input id="tc-brand" name="brand" autoComplete="organization" placeholder="Company" required />
            </Field>
          </div>

          <Field label="Work email" htmlFor="tc-email" className="mt-5">
            <Input id="tc-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="What are you after?" htmlFor="tc-type">
              <Select id="tc-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Budget range" htmlFor="tc-budget">
              <Input id="tc-budget" name="budget" placeholder="₹8–12 lakh" />
            </Field>
          </div>

          <Field
            label="The brief"
            htmlFor="tc-brief"
            hint="What the campaign is for, where it will run, and the usage term you need."
            className="mt-5"
          >
            <Textarea
              id="tc-brief"
              name="brief"
              rows={4}
              placeholder="Launching a regional spice range in January. One long-form film plus cut-downs, India only, six months…"
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="pk-sheen relative mt-7 w-full overflow-hidden">
            Send the brief
          </Button>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${creator.discipline} · ${creator.handle}. Based in ${creator.based}, making short documentary food films since ${creator.since}.`}
      columns={[
        {
          title: "Media kit",
          links: [
            { label: "Audience", href: "#audience" },
            { label: "Content pillars", href: "#pillars" },
            { label: "Collaborations", href: "#work" },
            { label: "Case study", href: "#case" },
          ],
        },
        {
          title: "Working together",
          links: [
            { label: "Rate card", href: "#rates" },
            { label: "How I work with brands", href: "#principles" },
            { label: "Questions", href: "#enquire" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: creator.manager.email, href: `mailto:${creator.manager.email}` },
            { label: creator.email, href: `mailto:${creator.email}` },
            { label: creator.based, href: "#enquire" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${creator.name}. Figures are as reported in native platform analytics on the date stated; screenshots are supplied with every proposal.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
