import Link from "next/link";
import { Building2, Check, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  amenities,
  configurations,
  construction,
  developer,
  faqs,
  hero,
  legal,
  navLinks,
  projects,
  stats,
  testimonials,
  visitProjects,
  why,
} from "./content";

const telHref = `tel:${developer.phone.replace(/[\s+]/g, "")}`;

const statusTone: Record<string, string> = {
  "Ready to move": "bg-accent-soft text-accent",
  "Under construction": "bg-brand-soft text-brand",
  "New launch": "bg-subtle text-muted",
};

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-card",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Building2 className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{developer.name}</span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.16em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Hyderabad
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book a site visit", href: "#visit" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div className="grid-lines absolute inset-0 opacity-[0.07]" aria-hidden />
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{hero.eyebrow}</p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-fg/70 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center rounded-card border border-brand-fg/25 px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand-fg/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-brand-fg/15 bg-brand-fg/[0.04]">
        <Container>
          <dl className="grid grid-cols-2 divide-brand-fg/10 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-7 text-center sm:px-6">
                <dt className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</dt>
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

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Current projects"
        title="Four projects, every number published"
        description="Price, size, possession date and RERA number on every card. If a figure is not here, ask and it will be — nothing about a home purchase should require a phone call to discover."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            {/* Replace with a project render or site photograph */}
            <div className="relative aspect-[16/9] bg-subtle">
              <span
                className={cn(
                  "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold",
                  statusTone[project.status] ?? "bg-subtle text-muted",
                )}
              >
                {project.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-xl font-bold text-ink">{project.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Configurations</dt>
                  <dd className="mt-0.5 font-medium text-ink">{project.configurations}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Sizes</dt>
                  <dd className="mt-0.5 font-medium text-ink">{project.sizes}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Price</dt>
                  <dd className="mt-0.5 font-bold text-brand">{project.price}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Possession</dt>
                  <dd className="mt-0.5 font-medium text-ink">{project.possession}</dd>
                </div>
              </dl>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.highlight}</p>

              <p className="mt-4 text-xs text-muted">
                {project.towers}
                <span className="mx-2 text-line">·</span>
                RERA {project.rera}
              </p>

              <Link
                href="#visit"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-card bg-brand text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
              >
                Book a site visit
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Configurations() {
  return (
    <Section id="configurations" tone="surface">
      <SectionHeading
        eyebrow="Configurations & pricing"
        title="Carpet area stated first, because that is what you live in"
        description="Built-up area is shown alongside for comparison. Prices exclude registration, stamp duty, GST and corpus, all of which are itemised in the cost sheet."
      />

      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Configurations, areas and price ranges</caption>
          <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Configuration</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Carpet area</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Built-up</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Baths</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Price range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {configurations.map((config) => (
              <tr key={config.type}>
                <th scope="row" className="px-5 py-4 text-left font-semibold text-ink">
                  {config.type}
                </th>
                <td className="px-5 py-4 text-ink">{config.carpet}</td>
                <td className="px-5 py-4 text-muted">{config.built}</td>
                <td className="px-5 py-4 text-muted">{config.baths}</td>
                <td className="px-5 py-4 font-semibold text-brand">{config.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Amenities() {
  return (
    <Section id="amenities">
      <SectionHeading
        eyebrow="Amenities"
        title="Built and handed over with the towers"
        description="Clubhouse and common infrastructure are completed before the first family moves in, not two years after."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((group) => (
          <article key={group.group} className="bg-bg p-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {group.group}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
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

export function Construction() {
  return (
    <Section id="construction" tone="brand">
      <SectionHeading
        inverted
        eyebrow="Construction status"
        title="Updated on the first working day of every month"
        description="Progress is measured against the approved construction programme, not against a marketing schedule. When something slips, it appears here first."
      />

      <ul className="mt-10 space-y-5">
        {construction.map((item) => (
          <li key={item.project} className="rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-base font-semibold text-brand-fg">{item.project}</h3>
              <span className="text-xs text-brand-fg/50">Updated {item.updated}</span>
            </div>
            <p className="mt-1.5 text-sm text-brand-fg/70">{item.milestone}</p>

            <div className="mt-4 flex items-center gap-4">
              <div
                className="h-2 flex-1 overflow-hidden rounded-full bg-brand-fg/15"
                role="progressbar"
                aria-valuenow={item.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${item.project} construction progress`}
              >
                <div className="h-full rounded-full bg-accent" style={{ width: `${item.progress}%` }} />
              </div>
              <span className="w-12 shrink-0 text-right text-sm font-semibold text-accent">
                {item.progress}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Why() {
  return (
    <Section id="why">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Meridian"
          title="Four commitments, all of them checkable"
          description="Anyone can claim quality. These are the four things you can independently verify before you pay anything."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {why.map((item) => (
            <article key={item.title} className="rounded-card border border-line bg-surface p-6">
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-11 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col rounded-card bg-subtle p-7">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <span className="block text-sm font-semibold text-ink">{testimonial.author}</span>
              <span className="block text-xs text-muted">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Legal() {
  return (
    <Section id="legal" tone="surface" space="compact">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="RERA & legal"
          title="Paperwork you can hand to your own lawyer"
          description={developer.reraNote}
        />
        <dl className="divide-y divide-line border-y border-line">
          {legal.map((item) => (
            <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <dt className="flex items-start gap-2 text-sm font-semibold text-ink">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item.label}
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Visit() {
  return (
    <Section id="visit">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you book" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Sales</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {developer.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5 text-ink">{developer.whatsapp}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Corporate office</dt>
                <dd className="mt-0.5 text-ink">
                  {developer.address.line1}, {developer.address.line2}
                  <br />
                  {developer.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Site visit request"
        >
          <h2 className="text-2xl font-bold text-ink">Book a site visit</h2>
          <p className="mt-2 text-sm text-muted">
            Seven days a week, 10:00 to 18:00. Safety gear provided for towers under construction.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="rd-name">
              <Input id="rd-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone" htmlFor="rd-phone">
              <Input id="rd-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 90000 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="rd-email" className="mt-5">
            <Input id="rd-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Project" htmlFor="rd-project">
              <Select id="rd-project" name="project" defaultValue="">
                <option value="" disabled>
                  Select a project
                </option>
                {visitProjects.map((project) => (
                  <option key={project} value={project}>
                    {project}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Preferred date" htmlFor="rd-date">
              <Input id="rd-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Budget & configuration"
            htmlFor="rd-notes"
            hint="Telling us the budget up front means you are shown homes you can actually buy."
            className="mt-5"
          >
            <Textarea id="rd-notes" name="notes" rows={3} placeholder="Looking at a 3 BHK, budget around ₹1.8 crore..." />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Request a site visit
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            No pre-launch bookings are accepted before RERA registration.
          </p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${developer.tagline}. 41 projects delivered and 6,800 homes handed over across Hyderabad. ${developer.reraNote}`}
      columns={[
        {
          title: "Projects",
          links: [
            { label: "Meridian Ridgeview", href: "#projects" },
            { label: "Meridian Canopy", href: "#projects" },
            { label: "Meridian Row", href: "#projects" },
            { label: "Meridian Aster", href: "#projects" },
          ],
        },
        {
          title: "Buyers",
          links: [
            { label: "Configurations & pricing", href: "#configurations" },
            { label: "Construction status", href: "#construction" },
            { label: "RERA & legal", href: "#legal" },
            { label: "Book a site visit", href: "#visit" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: developer.phone, href: telHref },
            { label: `WhatsApp ${developer.whatsapp}`, href: "#visit" },
            { label: developer.email, href: `mailto:${developer.email}` },
            { label: developer.address.city, href: "#visit" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${developer.name}. Renders are artistic impressions. Prices, areas and specifications are indicative and subject to the registered agreement for sale.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
