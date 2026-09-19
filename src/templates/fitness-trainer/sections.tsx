import Link from "next/link";
import { Award, Check, Dumbbell, Mail, MapPin, MessageCircle, Phone, Quote } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, waLink } from "@/lib/utils";
import {
  about,
  certifications,
  coach,
  enquiryGoals,
  faqs,
  hero,
  location,
  navLinks,
  nutrition,
  programs,
  research,
  stats,
  testimonials,
} from "./content";

const telHref = `tel:${coach.phone.replace(/[\s+]/g, "")}`;
const wa = waLink(coach.whatsapp, hero.whatsappMessage);

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className="grid h-9 w-9 place-items-center rounded-card bg-accent text-accent-fg"
        aria-hidden
      >
        <Dumbbell className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold uppercase tracking-tight">{coach.brand}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.2em]",
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
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "WhatsApp me", href: wa }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        className="absolute -right-24 -top-32 h-[460px] w-[460px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #A3E635, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-bold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            <ul className="mt-8 space-y-3">
              {hero.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-card bg-accent px-6 text-sm font-bold text-accent-fg transition hover:bg-accent/90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp me
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center rounded-card border border-line px-6 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Book a free consultation
              </Link>
            </div>
          </div>

          {/* Coach card — replace the block with a photograph */}
          <div className="rounded-card border border-line bg-surface p-6">
            <div className="aspect-[4/5] rounded-card bg-subtle" aria-hidden />
            <div className="mt-5">
              <p className="text-lg font-bold text-ink">{coach.name}</p>
              <p className="mt-0.5 text-sm text-accent">{coach.title}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {coach.gym}
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-4 py-6 text-center">
              <dt className="text-2xl font-bold text-accent">{stat.value}</dt>
              <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ── Training Programs ─────────────────────────────────────────────── */
export function Programs() {
  return (
    <Section id="programs">
      <SectionHeading
        eyebrow="Training programs"
        title="Six ways to work with me"
        description="Every one starts with the same free consultation and movement screen. Pricing is published because asking should not be awkward."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.name}
            className={cn(
              "flex flex-col rounded-card border bg-surface p-7",
              program.featured ? "border-accent" : "border-line",
            )}
          >
            {program.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-fg">
                Most booked
              </span>
            ) : null}

            <h3 className="text-lg font-bold text-ink">{program.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{program.mode}</p>
            <p className="mt-4 text-xl font-bold text-accent">{program.price}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{program.detail}</p>

            <ul className="mt-5 space-y-2 border-t border-line pt-4">
              {program.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={wa}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-card text-sm font-semibold transition",
                program.featured
                  ? "bg-accent text-accent-fg hover:bg-accent/90"
                  : "border border-line text-ink hover:border-accent hover:text-accent",
              )}
            >
              <MessageCircle className="h-4 w-4" />
              Ask about this
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── About Me + Certifications ─────────────────────────────────────── */
export function About() {
  return (
    <Section id="about" tone="surface">
      <div className="grid gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About me" title={about.title} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-sm leading-[1.8] text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {about.background.map((item) => (
              <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.14em] text-accent">{item.label}</dt>
                <dd className="text-sm text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="certifications" className="scroll-mt-16">
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Award className="h-4 w-4" />
            Certifications
          </h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-card border border-line bg-line">
            {certifications.map((certification) => (
              <li key={certification.title} className="bg-bg p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-bold text-ink">{certification.title}</p>
                  <span className="shrink-0 text-xs tabular-nums text-muted">
                    {certification.year}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-accent">
                  {certification.body}
                </p>
                <p className="mt-1.5 text-sm text-muted">{certification.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Certificates are available to view on request. First aid and CPR are renewed every two
            years and kept current.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export function Nutrition() {
  return (
    <Section id="nutrition">
      <SectionHeading eyebrow="Nutrition & diet" title={nutrition.title} description={nutrition.body} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {nutrition.principles.map((principle) => (
          <article key={principle.title} className="rounded-card border border-line bg-surface p-6">
            <h3 className="text-base font-bold text-ink">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-card border border-line bg-subtle p-5 text-sm leading-relaxed text-muted">
        {nutrition.note}
      </p>
    </Section>
  );
}

/* ── Research & Knowledge ──────────────────────────────────────────── */
export function Research() {
  return (
    <Section id="research" tone="surface">
      <SectionHeading eyebrow="Research & knowledge" title={research.title} description={research.body} />

      <div className="mt-10 divide-y divide-line border-y border-line">
        {research.articles.map((article) => (
          <article key={article.title} className="grid gap-2 py-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
            <div>
              <h3 className="text-base font-bold text-ink">{article.title}</h3>
              <span className="mt-2 inline-block rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent">
                {article.tag}
              </span>
            </div>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{article.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Client Testimonials ───────────────────────────────────────────── */
export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Client testimonials"
        title="Results, with the timeline attached"
        description="Shared with permission. Timeframes are real, which is why none of them say thirty days."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="flex flex-col rounded-card border border-line bg-surface p-7"
          >
            <Quote className="h-5 w-5 text-accent" aria-hidden />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <span className="block text-sm font-bold text-ink">{testimonial.author}</span>
              <span className="block text-xs text-accent">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Location & service areas ──────────────────────────────────────── */
export function Location() {
  return (
    <Section id="location" tone="surface" space="compact">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Location"
          title={location.title}
          description={`In-person sessions run out of ${coach.gym}. ${coach.hours}.`}
        />

        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {location.areas.map((item) => (
            <li key={item.area} className="bg-bg p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {item.area}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── WhatsApp ──────────────────────────────────────────────────────── */
export function WhatsAppBand() {
  return (
    <Section id="whatsapp" space="compact">
      <div className="flex flex-col items-start gap-6 rounded-card border border-accent/40 bg-accent-soft p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-ink sm:text-2xl">
            Quickest way to reach me is WhatsApp
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Message me with your goal and your schedule. I reply to every enquiry myself, usually
            within a few hours between 06:00 and 21:00.
          </p>
        </div>
        <Link
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-card bg-accent px-6 text-sm font-bold text-accent-fg transition hover:bg-accent/90"
        >
          <MessageCircle className="h-4 w-4" />
          {coach.whatsapp}
        </Link>
      </div>
    </Section>
  );
}

/* ── Contact Me ────────────────────────────────────────────────────── */
export function Contact() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-11 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you get in touch" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5">
                  <a href={wa} target="_blank" rel="noreferrer" className="text-ink transition hover:text-accent">
                    {coach.whatsapp}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Call</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {coach.phone}
                  </a>
                </dd>
              </div>
            </div>
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
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Train here</dt>
                <dd className="mt-0.5 text-ink">
                  {coach.address.line1}, {coach.address.line2}
                  <br />
                  {coach.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-bg p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Coaching enquiry"
        >
          <h2 className="text-2xl font-bold text-ink">Contact me</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            The first consultation and movement screen are free and take about forty minutes. No
            obligation to sign up at the end of it.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="ft-name">
              <Input id="ft-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone" htmlFor="ft-phone">
              <Input id="ft-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98220 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="ft-email" className="mt-5">
            <Input id="ft-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>

          <Field label="What is the goal?" htmlFor="ft-goal" className="mt-5">
            <Select id="ft-goal" name="goal" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {enquiryGoals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label="Anything I should know?"
            htmlFor="ft-notes"
            hint="Injuries, medical conditions, training history, and the days you can realistically train."
            className="mt-5"
          >
            <Textarea
              id="ft-notes"
              name="notes"
              rows={4}
              placeholder="Desk job, free before 8am, old knee injury from football..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Send enquiry
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Prefer WhatsApp? Message {coach.whatsapp} instead.
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
      blurb={`${coach.title} in Pune since ${coach.since}. In-person coaching at ${coach.gym}, online coaching anywhere.`}
      columns={[
        {
          title: "Programs",
          links: [
            { label: "Personal training", href: "#programs" },
            { label: "Online training", href: "#programs" },
            { label: "Weight loss", href: "#programs" },
            { label: "Muscle building", href: "#programs" },
            { label: "Female fitness", href: "#programs" },
            { label: "Special populations", href: "#programs" },
          ],
        },
        {
          title: "More",
          links: [
            { label: "About me", href: "#about" },
            { label: "Certifications", href: "#certifications" },
            { label: "Nutrition & diet", href: "#nutrition" },
            { label: "Research & knowledge", href: "#research" },
            { label: "Location", href: "#location" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: `WhatsApp ${coach.whatsapp}`, href: wa },
            { label: coach.phone, href: telHref },
            { label: coach.email, href: `mailto:${coach.email}` },
            { label: coach.address.city, href: "#location" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${coach.brand}. Coaching is not medical advice. Clients with a medical condition must train with written clearance from their treating doctor.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
