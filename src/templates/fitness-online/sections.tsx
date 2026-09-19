import Link from "next/link";
import { Award, Check, Globe2, Mail, MessageCircle, Phone, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, initials, waLink } from "@/lib/utils";
import {
  about,
  applyGoals,
  certifications,
  coach,
  faqs,
  hero,
  how,
  navLinks,
  nutrition,
  programs,
  research,
  results,
  serviceAreas,
  specialisms,
  stats,
  testimonials,
} from "./content";

const telHref = `tel:${coach.phone.replace(/[\s+]/g, "")}`;
const wa = waLink(coach.whatsapp, hero.whatsappMessage);

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
        <Zap className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{coach.brand}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          {coach.name}
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Apply", href: "#apply" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-subtle">
      <Container className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-bg px-3.5 py-1.5 text-xs font-semibold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="#apply"
              className="inline-flex h-12 items-center rounded-card bg-brand px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
            >
              Apply for coaching
            </Link>
            <Link
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp me
            </Link>
          </div>

          <p className="mt-6 text-sm text-accent">
            <span className="font-semibold">{hero.highlight.value}</span> — {hero.highlight.detail}
          </p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
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

/* ── How online coaching runs ──────────────────────────────────────── */
export function How() {
  return (
    <Section id="how">
      <SectionHeading align="center" eyebrow="How online coaching runs" title={how.title} description={how.body} />

      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {how.week.map((item) => (
          <li key={item.day} className="rounded-card border border-line bg-surface p-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.day}</span>
            <h3 className="mt-4 text-base font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {how.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted"
          >
            {tool}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── Training Programs ─────────────────────────────────────────────── */
export function Programs() {
  return (
    <Section id="programs" tone="surface">
      <SectionHeading
        align="center"
        eyebrow="Training programs"
        title="Three plans, priced monthly"
        description="Three-month minimum on every plan, because body composition does not change in four weeks and a one-month subscription mostly sells hope."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
        {programs.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-8",
              plan.featured ? "border-brand shadow-lift lg:-mt-4 lg:pb-12" : "border-line",
            )}
          >
            {plan.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                Most clients
              </span>
            ) : null}

            <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{plan.audience}</p>
            <p className="mt-3 text-sm text-muted">{plan.detail}</p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand">{plan.price}</span>
              <span className="text-sm text-muted">{plan.cadence}</span>
            </p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#apply"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                plan.featured
                  ? "bg-brand text-brand-fg hover:bg-brand/90"
                  : "border border-line text-ink hover:border-brand hover:text-brand",
              )}
            >
              Apply for {plan.name}
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          What I specialise in
        </h3>
        <div className="mt-5 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {specialisms.map((item) => (
            <article key={item.name} className="bg-bg p-6">
              <h4 className="text-sm font-bold text-ink">{item.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export function Nutrition() {
  return (
    <Section id="nutrition" tone="brand">
      <SectionHeading inverted eyebrow="Nutrition & diet" title={nutrition.title} description={nutrition.body} />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-2 lg:grid-cols-4">
        {nutrition.pillars.map((pillar) => (
          <article key={pillar.title} className="bg-brand p-6">
            <h3 className="text-base font-bold text-brand-fg">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-fg/75">{pillar.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-brand-fg/70">{nutrition.note}</p>
    </Section>
  );
}

/* ── About Me & Certifications ─────────────────────────────────────── */
export function About() {
  return (
    <Section id="about">
      <div className="grid gap-11 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About me" title={about.title} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-sm leading-[1.8] text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-accent">{coach.base}</p>
        </div>

        <div id="certifications" className="scroll-mt-16">
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Award className="h-4 w-4" />
            Certifications
          </h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {certifications.map((certification) => (
              <li key={certification.title} className="flex items-baseline justify-between gap-4 py-3.5">
                <span>
                  <span className="block text-sm font-semibold text-ink">{certification.title}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted">
                    {certification.body}
                  </span>
                </span>
                <span className="shrink-0 text-xs tabular-nums text-muted">{certification.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ── Research & Knowledge ──────────────────────────────────────────── */
export function Research() {
  return (
    <Section id="research" tone="surface">
      <div className="grid gap-11 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading eyebrow="Research & knowledge" title={research.title} description={research.body} />
        <dl className="divide-y divide-line border-y border-line">
          {research.positions.map((item) => (
            <div key={item.q} className="py-5">
              <dt className="text-base font-semibold text-ink">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ── Client Testimonials ───────────────────────────────────────────── */
export function Results() {
  return (
    <Section id="results">
      <SectionHeading
        eyebrow="Client testimonials"
        title="Transformations, with the timeline attached"
        description="Shared with written permission. Every one of these took months, which is the honest part most transformation posts leave out."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-card border border-line bg-surface">
            <div className="grid aspect-[4/3] grid-cols-2 gap-px bg-line" aria-hidden>
              <div className="flex items-center justify-center bg-subtle text-xs font-semibold uppercase tracking-wide text-muted">
                Before
              </div>
              <div className="flex items-center justify-center bg-brand-soft text-xs font-semibold uppercase tracking-wide text-brand">
                After
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold text-ink">{item.name}</h3>
                <span className="shrink-0 text-xs font-semibold text-accent">{item.stat}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
              <p className="mt-2 text-xs text-muted">{item.note}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col rounded-card border border-line bg-surface p-7">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span
                className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand"
                aria-hidden
              >
                {initials(testimonial.author)}
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

/* ── Location & service areas ──────────────────────────────────────── */
export function ServiceAreas() {
  return (
    <Section id="location" tone="surface" space="compact">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Location & service areas"
          title={serviceAreas.title}
          description={serviceAreas.body}
        />
        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {serviceAreas.regions.map((region) => (
            <li key={region.region} className="bg-bg p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Globe2 className="h-3.5 w-3.5 text-accent" />
                  {region.region}
                </h3>
                <span className="shrink-0 text-xs text-accent">{region.zone}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{region.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── WhatsApp & Contact Me ─────────────────────────────────────────── */
export function Apply() {
  return (
    <Section id="contact">
      <div className="grid gap-11 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you apply" />
          <Accordion items={faqs} className="mt-8" />

          <div id="whatsapp" className="mt-10 scroll-mt-16 rounded-card border border-accent/30 bg-accent-soft p-6">
            <h3 className="text-base font-bold text-ink">Prefer to just message?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              WhatsApp is the fastest route. Send your goal and I will tell you honestly whether
              coaching is the right call for it.
            </p>
            <Link
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-card bg-accent px-5 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {coach.whatsapp}
            </Link>
          </div>

          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${coach.email}`} className="text-ink transition hover:text-accent">
                    {coach.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Phone</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {coach.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          id="apply"
          className="h-fit scroll-mt-16 rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Coaching application"
        >
          <h2 className="text-2xl font-bold text-ink">Contact me</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Applications are reviewed personally. If it is not a fit you will be told, with a
            recommendation for what would be.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="fo-name">
              <Input id="fo-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="WhatsApp number" htmlFor="fo-phone">
              <Input id="fo-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98111 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="fo-email" className="mt-5">
            <Input id="fo-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Primary goal" htmlFor="fo-goal">
              <Select id="fo-goal" name="goal" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {applyGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Where are you based?" htmlFor="fo-location">
              <Input id="fo-location" name="location" placeholder="City & country" />
            </Field>
          </div>

          <Field
            label="Equipment & training history"
            htmlFor="fo-history"
            hint="What you have access to, how long you have trained, and anything medical I should know."
            className="mt-5"
          >
            <Textarea
              id="fo-history"
              name="history"
              rows={4}
              placeholder="Full commercial gym, lifting on and off for 2 years, diagnosed PCOS..."
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-7 w-full">
            Submit application
          </Button>

          <p className="mt-4 text-center text-xs text-muted">{coach.hours}</p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${coach.title}. Remote strength and nutrition coaching since ${coach.since}, currently with clients in 14 countries.`}
      columns={[
        {
          title: "Coaching",
          links: [
            { label: "How it works", href: "#how" },
            { label: "Plans & pricing", href: "#programs" },
            { label: "Nutrition & diet", href: "#nutrition" },
            { label: "Apply", href: "#apply" },
          ],
        },
        {
          title: "More",
          links: [
            { label: "About me", href: "#about" },
            { label: "Certifications", href: "#certifications" },
            { label: "Research & knowledge", href: "#research" },
            { label: "Client testimonials", href: "#results" },
            { label: "Service areas", href: "#location" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: `WhatsApp ${coach.whatsapp}`, href: wa },
            { label: coach.phone, href: telHref },
            { label: coach.email, href: `mailto:${coach.email}` },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${coach.brand}. Coaching is not medical or clinical dietetic advice. Anything requiring a therapeutic diet is referred to a registered dietitian.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
