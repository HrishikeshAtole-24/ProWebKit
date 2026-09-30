import Link from "next/link";
import { ArrowRight, Aperture, Check, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  briefTypes,
  clients,
  facilities,
  faqs,
  hero,
  licensing,
  navLinks,
  process,
  rateNotes,
  rates,
  stats,
  studio,
  work,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[\s+]/g, "")}`;

const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Aperture className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold tracking-[-0.015em]">Northlight</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.2em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Studio · Bengaluru
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Brief us", href: "#brief" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 0%, #000 20%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 0%, #000 20%, transparent 100%)",
        }}
      />
      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p
              className="pk-fade flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-accent"
              style={delay(0)}
            >
              <span aria-hidden className="h-px w-7 bg-accent" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-7 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[3.75rem]">
              {hero.titleLines.map((line, index) => (
                <span key={line} className="pk-clip block" style={delay(140 + index * 120)}>
                  {index === hero.titleLines.length - 1 ? (
                    <span className="text-accent">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="pk-fade mt-7 max-w-xl text-[17px] leading-[1.7] text-muted" style={delay(520)}>
              {hero.subtitle}
            </p>

            <div className="pk-fade mt-9 flex flex-wrap gap-3" style={delay(620)}>
              <Link
                href="#brief"
                className="pk-sheen group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-card bg-brand px-6 text-sm font-medium text-brand-fg transition-opacity hover:opacity-95"
              >
                Send a brief
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#rates"
                className="inline-flex h-12 items-center rounded-card border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                See day rates
              </Link>
            </div>
          </div>

          {/* Contact sheet — replace each frame with a photograph. */}
          <div className="pk-fade grid grid-cols-3 gap-1.5" style={delay(360)}>
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className={cn(
                  "block aspect-square",
                  index % 4 === 0 ? "bg-brand-soft" : index % 3 === 0 ? "bg-accent-soft" : "bg-subtle",
                )}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </Container>

      <div className="relative border-t border-line bg-surface">
        <Container>
          <dl className="pk-stagger grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
            {stats.map((stat, index) => (
              <div key={stat.label} style={stagger(index)} className="px-2 py-7 sm:px-6">
                <dt className="text-[1.75rem] font-semibold tabular-nums tracking-[-0.03em] text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-muted">
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

/* ── What we shoot ─────────────────────────────────────────────────── */
export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="What we shoot"
        title="Six disciplines, one floor"
        description="Daily volumes are published because they are the number that decides your budget, and because a studio that will not quote them has not measured them."
      />

      <div className="pk-stagger mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item, index) => (
          <article key={item.name} style={stagger(index)} className="bg-bg p-7">
            <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">{item.name}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{item.detail}</p>
            <p className="mt-5 border-t border-line pt-3.5 text-[11px] uppercase tracking-[0.14em] text-accent">
              {item.volume}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Day rates ─────────────────────────────────────────────────────── */
export function Rates() {
  return (
    <Section id="rates" tone="surface">
      <SectionHeading
        eyebrow="Day rates"
        title="Published, so you can budget before you call"
        description="These cover the making of the photographs. Licensing is the section below, priced separately and just as openly."
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
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-accent">{rate.hours}</p>

            <p className="mt-6 text-[2rem] font-semibold tabular-nums tracking-[-0.03em] text-ink">
              {rate.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{rate.suits}</p>

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

      <ul className="mt-8 grid gap-2.5 rounded-card border border-line bg-bg p-6 sm:grid-cols-2">
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

/* ── Licensing ─────────────────────────────────────────────────────── */
export function Licensing() {
  return (
    <Section id="licensing" tone="brand">
      <SectionHeading inverted eyebrow="Licensing" title={licensing.title} description={licensing.body} />

      <div className="mt-10 overflow-x-auto rounded-card border border-brand-fg/15">
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Licensing tiers, scope, term and price</caption>
          <thead className="bg-brand-fg/[0.07] text-[10px] uppercase tracking-[0.18em] text-brand-fg/55">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">Tier</th>
              <th scope="col" className="px-5 py-4 font-semibold">Scope</th>
              <th scope="col" className="px-5 py-4 font-semibold">Term</th>
              <th scope="col" className="px-5 py-4 font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-fg/10">
            {licensing.tiers.map((tier) => (
              <tr key={tier.tier}>
                <th scope="row" className="px-5 py-4 text-left font-medium text-brand-fg">
                  {tier.tier}
                </th>
                <td className="px-5 py-4 text-brand-fg/70">{tier.scope}</td>
                <td className="px-5 py-4 text-brand-fg/70">{tier.term}</td>
                <td className="px-5 py-4 font-semibold text-accent">{tier.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-brand-fg/60">{licensing.note}</p>
    </Section>
  );
}

/* ── Process ───────────────────────────────────────────────────────── */
export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How a shoot runs"
        title="Five stages, and you know the date at each one"
      />

      <ol className="relative mt-12 pl-10 sm:pl-14">
        <span
          aria-hidden
          className="pk-rail absolute left-[0.6875rem] top-2 h-[calc(100%-1rem)] w-px bg-accent/40 sm:left-[1.1875rem]"
        />
        <div className="pk-stagger">
          {process.map((item, index) => (
            <li key={item.step} style={stagger(index)} className="relative list-none pb-9 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-10 top-0.5 grid h-6 w-6 place-items-center rounded-full border border-accent/50 bg-bg text-[10px] font-semibold tabular-nums text-accent sm:-left-14 sm:h-8 sm:w-8 sm:text-xs"
              >
                {item.step}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">{item.title}</h3>
                <span className="text-[11px] uppercase tracking-[0.14em] text-accent">{item.when}</span>
              </div>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </div>
      </ol>
    </Section>
  );
}

/* ── Studio & kit ──────────────────────────────────────────────────── */
export function Studio() {
  return (
    <Section id="studio" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Studio & kit"
            title="The floor you are hiring"
            description={studio.spec}
          />

          <div className="pk-zoom mt-9 overflow-hidden rounded-card border border-line bg-subtle">
            <span className="block aspect-[4/3] w-full bg-brand-soft" aria-hidden />
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            {studio.address.line1}, {studio.address.line2}, {studio.address.city}
          </p>
        </div>

        <div>
          <ul className="pk-stagger grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {facilities.map((facility, index) => (
              <li
                key={facility}
                style={stagger(index)}
                className="flex items-start gap-2.5 bg-bg p-5 text-sm text-ink"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {facility}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Who we shoot for
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {clients.map((client) => (
              <li
                key={client}
                className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                {client}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Named references are shared at quote stage with client consent.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ── Brief ─────────────────────────────────────────────────────────── */
export function Brief() {
  return (
    <Section id="brief">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions" title="Asked by every marketing team" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Bookings</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${studio.email}`} className="pk-link text-ink">
                    {studio.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Studio</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="pk-link text-ink">
                    {studio.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Shoot brief"
        >
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">Send a brief</h2>
          <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
            Give us the count and the usage and you will have a fixed quote, licensing included,
            within a working day.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="pc-name">
              <Input id="pc-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Brand or agency" htmlFor="pc-org">
              <Input id="pc-org" name="organisation" autoComplete="organization" placeholder="Company" required />
            </Field>
            <Field label="Work email" htmlFor="pc-email">
              <Input id="pc-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </Field>
            <Field label="Phone" htmlFor="pc-phone">
              <Input id="pc-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98450 00000" />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <Field label="What are we shooting?" htmlFor="pc-type" className="sm:col-span-2">
              <Select id="pc-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {briefTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="SKU count" htmlFor="pc-count">
              <Input id="pc-count" name="count" type="number" min={1} placeholder="60" />
            </Field>
          </div>

          <Field
            label="Usage and deadline"
            htmlFor="pc-usage"
            hint="Where the images will run and when you need them. Usage decides the licensing line on the quote."
            className="mt-5"
          >
            <Textarea
              id="pc-usage"
              name="usage"
              rows={4}
              placeholder="Website, Amazon and Myntra listings, plus paid social for a six-week launch in November…"
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
      blurb={`${studio.discipline} since ${studio.since}. ${studio.spec}. Led by ${studio.lead}.`}
      columns={[
        {
          title: "Studio",
          links: [
            { label: "What we shoot", href: "#work" },
            { label: "Day rates", href: "#rates" },
            { label: "Licensing", href: "#licensing" },
            { label: "Studio & kit", href: "#studio" },
          ],
        },
        {
          title: "Working with us",
          links: [
            { label: "How a shoot runs", href: "#process" },
            { label: "Questions", href: "#brief" },
            { label: "Send a brief", href: "#brief" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.phone, href: telHref },
            { label: studio.address.city, href: "#studio" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.name}. Copyright in all photographs remains with the studio; clients receive the licence purchased. Raw files are not released.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
