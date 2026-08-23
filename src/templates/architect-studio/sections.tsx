import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  enquiryTypes,
  hero,
  navLinks,
  people,
  practice,
  press,
  process,
  recognition,
  services,
  studio,
  works,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-tight">
      <span className="block text-[15px] font-semibold uppercase tracking-[0.2em]">
        {studio.name}
      </span>
      <span
        className={cn(
          "block text-[9px] uppercase tracking-[0.24em]",
          inverted ? "text-brand-fg/50" : "text-muted",
        )}
      >
        {studio.discipline}
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Enquire", href: "#enquiry" }} />;
}

/**
 * Full-bleed hero. The "image" is a layered concrete field built from CSS —
 * replace the inner div with a photograph when you have one.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgb(255 255 255 / 0.35) 0 1px, transparent 1px 42px)",
        }}
        aria-hidden
      />
      <Container className="relative flex min-h-[68vh] flex-col justify-end py-14 sm:py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-accent">
          Est. {studio.founded} · Bengaluru
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.statement}
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-[1.9] text-brand-fg/60 sm:text-base">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-brand-fg/20 pt-8">
          <Link
            href="#works"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-fg transition hover:text-accent"
          >
            View works
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#enquiry"
            className="text-xs uppercase tracking-[0.2em] text-brand-fg/55 transition hover:text-brand-fg"
          >
            Project enquiries
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function Works() {
  return (
    <Section id="works">
      <SectionHeading
        eyebrow="Selected works"
        title="Twenty-eight built works. Six shown."
        description="Each project below is complete and occupied. Drawings and full photo sets are available on request."
      />

      <ol className="mt-11 divide-y divide-line border-y border-line">
        {works.map((work) => (
          <li key={work.index} className="group grid gap-4 py-8 lg:grid-cols-[4rem_1.1fr_1fr] lg:gap-10">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">{work.index}</span>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">{work.title}</h3>
              <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-muted">
                {work.typology} · {work.location}
              </p>
            </div>

            <div className="lg:text-right">
              <p className="max-w-prose text-sm leading-relaxed text-muted lg:ml-auto">{work.note}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
                {work.year} · {work.area}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Image grid placeholder — swap each tile for a project photograph */}
      <div className="mt-11 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {works.slice(0, 4).map((work) => (
          <div key={work.index} className="aspect-[4/5] bg-subtle p-5">
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              {work.index} / {work.title}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">Replace these tiles with project photography.</p>
    </Section>
  );
}

export function Practice() {
  return (
    <Section id="practice" tone="subtle">
      <div className="grid gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Practice" title={practice.title} />
          <div className="mt-8 space-y-5">
            {practice.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-sm leading-[1.9] text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {practice.positions.map((position) => (
            <div key={position.label} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-accent">{position.label}</dt>
              <dd className="text-sm leading-relaxed text-muted">{position.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading eyebrow="Services" title="Three areas of work" />

      <div className="mt-11 grid gap-px border border-line bg-line md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="bg-bg p-8">
            <h3 className="text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
            <ul className="mt-6 space-y-3 border-t border-line pt-5">
              {service.scope.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" tone="brand">
      <SectionHeading
        inverted
        eyebrow="Process"
        title="Five phases, and you are told the duration of each"
        description="Timelines below are typical for a private residence. Larger projects scale proportionally and are set out in the appointment."
      />

      <ol className="mt-11 divide-y divide-brand-fg/15 border-y border-brand-fg/15">
        {process.map((phase) => (
          <li key={phase.phase} className="grid gap-3 py-6 lg:grid-cols-[4rem_1fr_9rem_1.4fr] lg:items-baseline lg:gap-8">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">{phase.phase}</span>
            <h3 className="text-lg font-semibold text-brand-fg">{phase.title}</h3>
            <span className="text-xs uppercase tracking-[0.14em] text-brand-fg/45">
              {phase.duration}
            </span>
            <p className="text-sm leading-relaxed text-brand-fg/65">{phase.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Recognition() {
  return (
    <Section id="recognition" space="compact">
      <div className="grid gap-11 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading eyebrow="Recognition" title="Awards" />
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {recognition.map((item) => (
              <div key={item.award + item.year} className="grid gap-1 py-5 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.16em] text-accent">{item.year}</dt>
                <dd>
                  <p className="text-sm font-semibold text-ink">{item.award}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <SectionHeading eyebrow="Press" title="Published" />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {press.map((item) => (
              <li key={item} className="py-5 text-sm leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Studio() {
  return (
    <Section id="studio" tone="subtle">
      <SectionHeading
        eyebrow="Studio"
        title="Eleven people in Richmond Town"
        description="The studio is deliberately small. Every project is led by a principal or an associate who stays on it through completion."
      />

      <div className="mt-11 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <article key={person.name} className="bg-bg p-7">
            <div className="mb-5 aspect-square bg-subtle" aria-hidden />
            <h3 className="text-sm font-semibold text-ink">{person.name}</h3>
            <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-accent">{person.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{person.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Enquiry() {
  return (
    <Section id="enquiry">
      <div className="grid gap-11 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Enquiries"
            title="The studio takes on four to six projects a year"
            description="Write with the site, the budget range and the intended timeline. A principal replies to every serious enquiry, including the ones we cannot take."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Studio</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {studio.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${studio.email}`} className="text-ink transition hover:text-accent">
                    {studio.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Address</dt>
                <dd className="mt-0.5 text-ink">
                  {studio.address.line1}, {studio.address.line2}
                  <br />
                  {studio.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form className="border border-line bg-surface p-8 sm:p-10" action="#" method="post" aria-label="Project enquiry">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="as-name">
              <Input id="as-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Email" htmlFor="as-email">
              <Input id="as-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </Field>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Project type" htmlFor="as-type">
              <Select id="as-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select a type
                </option>
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Site location" htmlFor="as-site">
              <Input id="as-site" name="site" placeholder="City or district" />
            </Field>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Built area (approx.)" htmlFor="as-area">
              <Input id="as-area" name="area" placeholder="4,000 sq ft" />
            </Field>
            <Field label="Construction budget" htmlFor="as-budget">
              <Input id="as-budget" name="budget" placeholder="₹2.5 – 3 crore" />
            </Field>
          </div>

          <Field
            label="Tell us about the project"
            htmlFor="as-brief"
            hint="Site conditions, who will live or work there, and what has prompted the project."
            className="mt-6"
          >
            <Textarea
              id="as-brief"
              name="brief"
              rows={5}
              placeholder="A sloping half-acre plot outside Chikkamagaluru, for a family of four..."
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-8 w-full">
            Send enquiry
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
      blurb={`${studio.discipline} practice founded in ${studio.founded}. Principal: ${studio.principal}. ${studio.registration}.`}
      columns={[
        {
          title: "Work",
          links: [
            { label: "Selected works", href: "#works" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Recognition", href: "#recognition" },
          ],
        },
        {
          title: "Studio",
          links: [
            { label: "Practice statement", href: "#practice" },
            { label: "People", href: "#studio" },
            { label: "Enquiries", href: "#enquiry" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: studio.phone, href: telHref },
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.address.city, href: "#enquiry" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.name}. All project imagery and drawings remain the property of the studio.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
