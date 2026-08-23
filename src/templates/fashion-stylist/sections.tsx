import Link from "next/link";
import { Check, Mail, MapPin, MessageCircle, Phone, Shirt } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  audit,
  bookingServices,
  clients,
  corporate,
  faqs,
  hero,
  navLinks,
  practice,
  process,
  services,
  stats,
} from "./content";

const telHref = `tel:${practice.phone.replace(/[\s+]/g, "")}`;

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
        <Shirt className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-base font-semibold tracking-tight">
          {practice.name}
        </span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.2em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          {practice.stylist}
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book a call", href: "#book" }} />;
}

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-subtle">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">{hero.eyebrow}</p>

            <h1 className="mt-6 font-serif text-4xl leading-[1.14] tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.85] text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center rounded-card bg-brand px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-2xl font-semibold text-brand">{stat.value}</dt>
                  <dd className="mt-0.5 text-xs leading-snug text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait placeholder — swap for a photograph of the stylist */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-card bg-brand-soft" aria-hidden />
            <div className="absolute -bottom-5 left-5 right-5 rounded-card border border-line bg-bg p-5 shadow-soft">
              <p className="font-serif text-base font-semibold text-ink">{practice.stylist}</p>
              <p className="mt-0.5 text-xs text-muted">{practice.coverage}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Services() {
  return (
    <Section id="services" className="pt-24 sm:pt-32">
      <SectionHeading
        eyebrow="Services & pricing"
        title="Four ways to work together, all priced per session"
        description="No retainers, no packages you have to grow into. Most people book the audit, take the gap list and are done for a year."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.name}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-8",
              service.featured ? "border-brand shadow-soft" : "border-line",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink">{service.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  {service.duration}
                </p>
              </div>
              {service.featured ? (
                <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                  Start here
                </span>
              ) : null}
            </div>

            <p className="mt-4 text-sm text-muted">{service.blurb}</p>
            <p className="mt-5 font-serif text-2xl font-semibold text-accent">{service.price}</p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#book"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                service.featured
                  ? "bg-accent text-accent-fg hover:bg-accent/90"
                  : "border border-line text-ink hover:border-brand hover:text-brand",
              )}
            >
              Book {service.name}
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" tone="subtle">
      <SectionHeading
        eyebrow="How it works"
        title="Five steps, and step four is optional"
        description="Plenty of clients take the gap list and shop themselves. That is a good outcome, not a lost sale."
      />

      <ol className="mt-10 divide-y divide-line border-y border-line">
        {process.map((step) => (
          <li key={step.step} className="grid gap-3 py-6 lg:grid-cols-[3rem_1fr_9rem_1.4fr] lg:items-baseline lg:gap-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {step.step}
            </span>
            <h3 className="font-serif text-lg font-semibold text-ink">{step.title}</h3>
            <span className="text-xs uppercase tracking-[0.14em] text-muted">{step.duration}</span>
            <p className="text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Audit() {
  return (
    <Section id="audit" tone="brand">
      <SectionHeading inverted eyebrow="The wardrobe audit" title={audit.title} description={audit.body} />

      <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-2 lg:grid-cols-4">
        {audit.findings.map((finding) => (
          <div key={finding.label} className="bg-brand p-7">
            <dt className="font-serif text-3xl font-semibold text-accent">{finding.stat}</dt>
            <dd>
              <p className="mt-2 text-sm leading-snug text-brand-fg">{finding.label}</p>
              <p className="mt-1.5 text-xs text-brand-fg/50">{finding.note}</p>
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand-fg/55">
        What you can count on
      </h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {audit.truths.map((truth) => (
          <li key={truth} className="flex items-start gap-3 text-sm leading-relaxed text-brand-fg/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {truth}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Corporate() {
  return (
    <Section id="corporate">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading eyebrow="For companies" title={corporate.title} description={corporate.body} />

        <div className="grid gap-6 sm:grid-cols-3">
          {corporate.offerings.map((offering) => (
            <article key={offering.name} className="flex flex-col rounded-card border border-line bg-surface p-6">
              <h3 className="font-serif text-base font-semibold text-ink">{offering.name}</h3>
              <p className="mt-3 font-serif text-xl font-semibold text-accent">{offering.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{offering.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Clients() {
  return (
    <Section id="clients" tone="subtle">
      <SectionHeading
        align="center"
        eyebrow="Clients"
        title="Shared with permission, names shortened on request"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {clients.map((client) => (
          <figure key={client.author} className="flex flex-col rounded-card border border-line bg-bg p-7">
            <blockquote className="flex-1 text-sm leading-[1.8] text-ink">{client.quote}</blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <span className="block text-sm font-semibold text-ink">{client.author}</span>
              <span className="block text-xs text-muted">{client.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Book() {
  return (
    <Section id="book">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Questions" title="Asked before every first call" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Studio</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {practice.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5 text-ink">{practice.whatsapp}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${practice.email}`} className="text-ink transition hover:text-accent">
                    {practice.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Based in</dt>
                <dd className="mt-0.5 text-ink">
                  {practice.address.line1}, {practice.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Consultation booking"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink">Book a consultation</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            The first thirty-minute call is free and involves no clothes at all. It is just to work
            out whether this is worth your money.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="fs-name">
              <Input id="fs-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone" htmlFor="fs-phone">
              <Input id="fs-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 99000 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="fs-email" className="mt-5">
            <Input id="fs-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </Field>

          <Field label="Which service?" htmlFor="fs-service" className="mt-5">
            <Select id="fs-service" name="service" defaultValue="">
              <option value="" disabled>
                Select one, or ask on the call
              </option>
              {bookingServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
              <option value="Corporate workshop">Corporate workshop</option>
              <option value="Not sure yet">Not sure yet</option>
            </Select>
          </Field>

          <Field
            label="What made you look for a stylist?"
            htmlFor="fs-reason"
            hint="A new role, a wedding, a body change, or just being sick of the wardrobe. All equally common."
            className="mt-5"
          >
            <Textarea
              id="fs-reason"
              name="reason"
              rows={4}
              placeholder="Moved into a client-facing role and everything I own feels wrong for it..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Book the free call
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
      blurb={`${practice.discipline} by ${practice.stylist}, since ${practice.founded}. ${practice.coverage}. No brand commissions, ever.`}
      columns={[
        {
          title: "Services",
          links: [
            { label: "Wardrobe audit", href: "#services" },
            { label: "Personal shopping", href: "#services" },
            { label: "Signature style", href: "#services" },
            { label: "Virtual styling", href: "#services" },
          ],
        },
        {
          title: "More",
          links: [
            { label: "How it works", href: "#process" },
            { label: "Inside an audit", href: "#audit" },
            { label: "For companies", href: "#corporate" },
            { label: "Clients", href: "#clients" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: practice.phone, href: telHref },
            { label: `WhatsApp ${practice.whatsapp}`, href: "#book" },
            { label: practice.email, href: `mailto:${practice.email}` },
            { label: practice.address.city, href: "#book" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${practice.name}. Fees are per engagement and exclude the cost of any clothing purchased.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
