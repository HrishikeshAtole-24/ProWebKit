import Link from "next/link";
import { ArrowRight, Check, CircleCheck, Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  company,
  demoTopics,
  diligence,
  faqs,
  hero,
  integrations,
  navLinks,
  pricing,
  stack,
  stats,
  testimonials,
} from "./content";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-fg" aria-hidden>
        <Zap className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className={cn("text-[15px] font-bold tracking-tight", inverted && "text-brand-fg")}>
        {company.name}
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book a demo", href: "#demo" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-subtle">
      <div
        className="absolute left-1/2 top-[-12rem] h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #c7d2fe, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl animate-fade-up text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-bg px-3.5 py-1.5 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.badge}
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center gap-2 rounded-card bg-brand px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-4 py-6 text-center">
              <dt className="text-2xl font-bold text-brand">{stat.value}</dt>
              <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeading
        align="center"
        eyebrow="What you get"
        title="Six things, done every single month"
        description="Not a menu you assemble. The whole finance function ships as one subscription, on a fixed calendar."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stack.map(({ icon: Icon, title, description, points }) => (
          <article
            key={title}
            className="rounded-card border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
          >
            <span className="grid h-11 w-11 place-items-center rounded-card bg-brand-soft text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            {points ? (
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" tone="subtle">
      <SectionHeading
        align="center"
        eyebrow="Pricing"
        title="Priced by stage, not by hours"
        description="No hourly billing, no per-filing surprises. Move up a plan when you raise, not when we feel like it."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
        {pricing.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-8",
              plan.featured
                ? "border-brand shadow-lift lg:-mt-4 lg:pb-12"
                : "border-line",
            )}
          >
            {plan.featured ? (
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                Most chosen
              </span>
            ) : null}

            <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
            <p className="mt-1.5 text-sm text-muted">{plan.blurb}</p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-ink">{plan.price}</span>
              <span className="text-sm text-muted">{plan.cadence}</span>
            </p>

            <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-6">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#demo"
              className={cn(
                "mt-8 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                plan.featured
                  ? "bg-brand text-brand-fg hover:bg-brand/90"
                  : "border border-line text-ink hover:border-brand hover:text-brand",
              )}
            >
              {plan.price === "Custom" ? "Talk to us" : "Start with " + plan.name}
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        All plans are billed quarterly in advance. Onboarding and historical clean-up are quoted
        separately after a records review.
      </p>
    </Section>
  );
}

export function Diligence() {
  return (
    <Section id="diligence" tone="brand">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <SectionHeading inverted eyebrow="Diligence readiness" title={diligence.title} description={diligence.body} />

        <ul className="divide-y divide-brand-fg/15 overflow-hidden rounded-card border border-brand-fg/15">
          {diligence.checklist.map((item) => (
            <li key={item.label} className="flex items-center justify-between gap-6 bg-brand-fg/[0.06] px-5 py-4">
              <span className="flex items-center gap-3 text-sm font-medium text-brand-fg">
                <CircleCheck className="h-4 w-4 shrink-0 text-accent" />
                {item.label}
              </span>
              <span className="shrink-0 text-xs text-brand-fg/55">{item.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Integrations() {
  return (
    <Section id="integrations">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Integrations"
          title="It plugs into the stack you already run"
          description="No migration project. We work inside your existing books, banking and messaging tools."
        />
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {integrations.map((name) => (
            <li key={name} className="bg-surface px-4 py-6 text-center text-sm font-medium text-muted">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Customers() {
  return (
    <Section id="customers" tone="subtle">
      <SectionHeading align="center" eyebrow="Customers" title="Founders who stopped thinking about compliance" />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col rounded-card border border-line bg-bg p-7">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand" aria-hidden>
                {testimonial.author.split(" ").map((part) => part[0]).join("")}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{testimonial.author}</span>
                <span className="block text-xs text-muted">{testimonial.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading eyebrow="FAQ" title="The questions founders actually ask" />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

export function Demo() {
  return (
    <Section id="demo" tone="subtle">
      <div className="mx-auto max-w-2xl rounded-card border border-line bg-bg p-8 shadow-soft sm:p-10">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">Book a 20-minute demo</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
          We will look at your current setup, tell you what is missing, and show you the close
          calendar. No deck.
        </p>

        <form className="mt-8" action="#" method="post" aria-label="Demo request">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="cas-name">
              <Input id="cas-name" name="name" autoComplete="name" placeholder="Ananya Bose" required />
            </Field>
            <Field label="Company" htmlFor="cas-company">
              <Input id="cas-company" name="company" autoComplete="organization" placeholder="Fernway" required />
            </Field>
            <Field label="Work email" htmlFor="cas-email">
              <Input id="cas-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </Field>
            <Field label="Phone" htmlFor="cas-phone">
              <Input id="cas-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98450 00000" />
            </Field>
          </div>

          <Field label="Stage" htmlFor="cas-stage" className="mt-5">
            <Select id="cas-stage" name="stage" defaultValue="">
              <option value="" disabled>
                Where are you today?
              </option>
              {demoTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </Select>
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-7 w-full">
            Book the demo
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            We reply within one business day. No sales sequence, no cold calls.
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
      blurb={`${company.tagline}. Books closed by the seventh, compliance filed on time, and a data room that is always ready.`}
      columns={[
        {
          title: "Product",
          links: [
            { label: "What you get", href: "#stack" },
            { label: "Pricing", href: "#pricing" },
            { label: "Diligence readiness", href: "#diligence" },
            { label: "Integrations", href: "#integrations" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "Customers", href: "#customers" },
            { label: "FAQ", href: "#faq" },
            { label: "Book a demo", href: "#demo" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: company.phone, href: `tel:${company.phone.replace(/[\s+]/g, "")}` },
            { label: company.email, href: `mailto:${company.email}` },
            { label: company.address.city, href: "#demo" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${company.name}. Services are delivered by an independent chartered accountancy practice.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
