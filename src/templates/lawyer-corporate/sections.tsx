import Link from "next/link";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone, Timer } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, initials } from "@/lib/utils";
import {
  enquiryTypes,
  faqs,
  firm,
  hero,
  navLinks,
  packages,
  sectors,
  services,
  stats,
  team,
  testimonials,
  transactions,
} from "./content";

const telHref = `tel:${firm.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-sm text-xs font-bold tracking-tight",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        SL
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{firm.name}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.2em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          {firm.offices}
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Discuss a deal", href: "#contact" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.5) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1.5 text-xs font-semibold text-accent-fg">
            <Timer className="h-3.5 w-3.5" />
            {hero.badge}
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-fg/70 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center gap-2 rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
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
              <div key={stat.label} className="px-2 py-7 sm:px-6">
                <dt className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-fg/50">
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

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Organised by company stage, not by practice group"
        description="You do not have a corporate law problem. You have a round to close, a contract to sign or an acquirer at the table."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.stage} className="bg-bg p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {service.stage}
            </p>
            <h3 className="mt-4 text-base font-bold text-ink">{service.title}</h3>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
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

export function Transactions() {
  return (
    <Section id="transactions" tone="subtle">
      <SectionHeading
        eyebrow="Selected transactions"
        title="A deal sheet, not a client logo wall"
        description="Published with client consent. Values are aggregate transaction size, not fees."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {transactions.map((deal) => (
          <article key={deal.detail} className="bg-bg p-7">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-2xl font-bold text-brand">{deal.value}</p>
              <span className="text-xs text-muted">{deal.year}</span>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {deal.type}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{deal.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Sectors() {
  return (
    <Section id="sectors">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Sectors"
          title="Where the regulator matters as much as the contract"
          description="Sector coverage exists because a lending licence, a clinical data rule or an export control changes the whole document — not because it looks good on a website."
        />
        <ul className="divide-y divide-line border-y border-line">
          {sectors.map((sector) => (
            <li key={sector.name} className="grid gap-1 py-5 sm:grid-cols-[15rem_1fr] sm:gap-8">
              <h3 className="text-sm font-bold text-ink">{sector.name}</h3>
              <p className="text-sm text-muted">{sector.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Packages() {
  return (
    <Section id="packages" tone="brand">
      <SectionHeading
        inverted
        align="center"
        eyebrow="Fixed-fee packages"
        title="The work that should never be billed hourly"
        description="Standard mandates at a published price with a turnaround commitment. Complex or contested transactions are scoped separately."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
        {packages.map((pack) => (
          <article
            key={pack.name}
            className={cn(
              "flex flex-col rounded-card border p-8",
              pack.featured
                ? "border-accent bg-brand-fg/[0.09] lg:-mt-4 lg:pb-12"
                : "border-brand-fg/15 bg-brand-fg/[0.05]",
            )}
          >
            {pack.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-sm bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-fg">
                Most requested
              </span>
            ) : null}

            <h3 className="text-lg font-bold text-brand-fg">{pack.name}</h3>
            <p className="mt-1.5 text-sm text-brand-fg/60">{pack.blurb}</p>

            <p className="mt-6 text-3xl font-bold text-accent">{pack.price}</p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-brand-fg/55">
              <Clock className="h-3.5 w-3.5" />
              {pack.turnaround}
            </p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-brand-fg/15 pt-5">
              {pack.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-fg/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                pack.featured
                  ? "bg-accent text-accent-fg hover:bg-accent/90"
                  : "border border-brand-fg/25 text-brand-fg hover:bg-brand-fg/10",
              )}
            >
              Enquire about {pack.name}
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Team() {
  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title="Partners who are on the call, not on the letterhead"
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
        {team.map((person) => (
          <article key={person.name} className="bg-bg p-7">
            <div className="flex items-start gap-4">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-card bg-brand-soft text-sm font-bold text-brand"
                aria-hidden
              >
                {initials(person.name)}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-ink">{person.name}</h3>
                <p className="text-sm text-accent">{person.role}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-muted">{person.focus}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">{person.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.role} className="flex flex-col rounded-card border border-line bg-surface p-7">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4 text-xs">
              <span className="block font-semibold text-ink">{testimonial.author}</span>
              <span className="block text-muted">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" tone="subtle">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading eyebrow="FAQ" title="Asked before the engagement letter" />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about the transaction"
            description="A partner reviews every enquiry. If there is a term sheet on the table, say so — those are triaged first."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Telephone</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {firm.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${firm.email}`} className="text-ink transition hover:text-accent">
                    {firm.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Principal office</dt>
                <dd className="mt-0.5 text-ink">
                  {firm.address.line1}, {firm.address.line2}
                  <br />
                  {firm.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-surface p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Transaction enquiry"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="lc-name">
              <Input id="lc-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Company / fund" htmlFor="lc-org">
              <Input id="lc-org" name="organisation" autoComplete="organization" placeholder="Entity name" required />
            </Field>
            <Field label="Work email" htmlFor="lc-email">
              <Input id="lc-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </Field>
            <Field label="Phone" htmlFor="lc-phone">
              <Input id="lc-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98200 00000" />
            </Field>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Type of matter" htmlFor="lc-type">
              <Select id="lc-type" name="type" defaultValue="">
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
            <Field label="Target closing date" htmlFor="lc-date">
              <Input id="lc-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Brief summary"
            htmlFor="lc-summary"
            hint="Include counterparty names so a conflict check can run. Do not attach the term sheet yet."
            className="mt-6"
          >
            <Textarea
              id="lc-summary"
              name="summary"
              rows={5}
              placeholder="We have a signed term sheet for a ₹120cr Series B led by..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-8 w-full">
            Send enquiry
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Enquiries are confidential. An engagement begins only on a signed engagement letter after
            a conflict check.
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
      blurb={`${firm.tagline} for founders, funds and acquirers. ${firm.offices}.`}
      columns={[
        {
          title: "Services",
          links: [
            { label: "Fundraising", href: "#services" },
            { label: "M&A and secondaries", href: "#services" },
            { label: "Commercial contracts", href: "#services" },
            { label: "ESOP schemes", href: "#packages" },
          ],
        },
        {
          title: "Firm",
          links: [
            { label: "Transactions", href: "#transactions" },
            { label: "Sectors", href: "#sectors" },
            { label: "Team", href: "#team" },
            { label: "FAQ", href: "#faq" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: firm.phone, href: telHref },
            { label: firm.email, href: `mailto:${firm.email}` },
            { label: firm.offices, href: "#contact" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${firm.name}. Advocates may not solicit work under the Bar Council of India Rules; this site is informational only.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
