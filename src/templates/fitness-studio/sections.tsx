import Link from "next/link";
import { Check, Clock, Hexagon, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
  coaches,
  facilities,
  faqs,
  hero,
  navLinks,
  nutrition,
  programs,
  research,
  stats,
  studio,
  testimonials,
  timetable,
  trialInterests,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[\s+]/g, "")}`;
const wa = waLink(studio.whatsapp, hero.whatsappMessage);

/** Women-only and beginner slots get picked out of the timetable grid. */
const slotTone: Record<string, string> = {
  "Women only": "text-brand",
  Beginners: "text-accent",
  "Open gym": "text-muted",
  "—": "text-muted",
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
        <Hexagon className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold uppercase tracking-tight">{studio.name}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Indiranagar, Bengaluru
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Free trial", href: "#contact" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div className="grid-lines absolute inset-0 opacity-[0.08]" aria-hidden />
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-fg/75 sm:text-lg">
            {hero.subtitle}
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-3">
            {hero.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-brand-fg/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-card bg-accent px-6 text-sm font-bold text-accent-fg transition hover:bg-accent/90"
            >
              Book a free trial
            </Link>
            <Link
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-card border border-brand-fg/25 px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand-fg/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </Link>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-brand-fg/15 bg-brand-fg/[0.05]">
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

/* ── Training Programs ─────────────────────────────────────────────── */
export function Programs() {
  return (
    <Section id="programs">
      <SectionHeading
        eyebrow="Training programs"
        title="Seven ways to train here"
        description="Every membership is monthly, with no joining fee and no annual contract. Open-gym access is included in all of them."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.name}
            className={cn("flex flex-col bg-bg p-7", program.featured && "bg-brand-soft")}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-ink">{program.name}</h3>
              <span className="shrink-0 rounded-card bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted">
                {program.format}
              </span>
            </div>

            <p className="mt-3 text-xl font-bold text-brand">{program.price}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{program.detail}</p>

            <ul className="mt-5 space-y-2 border-t border-line pt-4">
              {program.includes.map((item) => (
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

/* ── Weekly timetable ──────────────────────────────────────────────── */
export function Timetable() {
  return (
    <Section id="timetable" tone="surface">
      <SectionHeading
        eyebrow="Weekly timetable"
        title="Every class, capped at eight"
        description={`${studio.hours}. ${studio.capacity}. Women-only slots are marked, and the beginners class runs four times a week.`}
      />

      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[820px] text-left text-sm">
          <caption className="sr-only">Weekly class timetable</caption>
          <thead className="bg-bg text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-4 py-3.5 font-semibold">
                Time
              </th>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                <th key={day} scope="col" className="px-4 py-3.5 font-semibold">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {timetable.map((row) => (
              <tr key={row.slot}>
                <th
                  scope="row"
                  className="whitespace-nowrap px-4 py-4 text-left font-bold tabular-nums text-brand"
                >
                  {row.slot}
                </th>
                {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cell, index) => (
                  <td key={index} className={cn("px-4 py-4 font-medium", slotTone[cell] ?? "text-ink")}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ── About ─────────────────────────────────────────────────────────── */
export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About" title={about.title} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-sm leading-[1.8] text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {about.timeline.map((item) => (
            <li key={item.year} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {item.year}
              </span>
              <span className="text-sm text-muted">{item.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ── Coaches & certifications ──────────────────────────────────────── */
export function Coaches() {
  return (
    <Section id="coaches" tone="surface">
      <span id="certifications" className="sr-only" />
      <SectionHeading
        eyebrow="Coaches & certifications"
        title="Who is actually on the floor"
        description="Six certified coaches, four of them full time. Certifications are listed because in this industry they are not a given."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
        {coaches.map((coach) => (
          <article key={coach.name} className="bg-bg p-7">
            <div className="flex items-start gap-4">
              <span
                className="grid h-14 w-14 shrink-0 place-items-center rounded-card bg-brand-soft text-base font-bold text-brand"
                aria-hidden
              >
                {initials(coach.name)}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-ink">{coach.name}</h3>
                <p className="text-sm text-accent">{coach.role}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                  {coach.focus} · {coach.experience}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">{coach.bio}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
              {coach.certifications.map((certification) => (
                <li
                  key={certification}
                  className="rounded-card bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export function Nutrition() {
  return (
    <Section id="nutrition">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading eyebrow="Nutrition & diet" title={nutrition.title} description={nutrition.body} />
        <div>
          <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {nutrition.offering.map((item) => (
              <article key={item.title} className="bg-bg p-6">
                <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">{nutrition.note}</p>
        </div>
      </div>
    </Section>
  );
}

/* ── Research & Knowledge ──────────────────────────────────────────── */
export function Research() {
  return (
    <Section id="research" tone="surface">
      <SectionHeading eyebrow="Research & knowledge" title={research.title} description={research.body} />

      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {research.principles.map((principle, index) => (
          <li key={principle.title} className="rounded-card border border-line bg-bg p-6">
            <span className="text-sm font-bold tabular-nums text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-bold text-ink">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ── Member testimonials ───────────────────────────────────────────── */
export function Testimonials() {
  return (
    <Section id="testimonials" tone="brand">
      <SectionHeading inverted align="center" eyebrow="Client testimonials" title="Why people stay" />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="flex flex-col rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-7"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-brand-fg/85">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-brand-fg/15 pt-4">
              <span className="block text-sm font-bold text-brand-fg">{testimonial.author}</span>
              <span className="block text-xs text-accent">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Location & facilities, with WhatsApp ──────────────────────────── */
export function Location() {
  return (
    <Section id="location">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Location"
            title="Indiranagar, off 5th Cross"
            description="Two-wheeler and car parking on site. Ten minutes from Indiranagar metro."
          />

          {/* Map placeholder — drop in an embed or a static map image */}
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-card border border-line bg-subtle">
            <div className="grid-lines flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <MapPin className="h-8 w-8 text-brand" />
              <p className="text-sm font-medium text-ink">
                {studio.address.line1}
                <br />
                {studio.address.line2}
                <br />
                {studio.address.city}
              </p>
              <p className="text-xs text-muted">Replace with a Google Maps embed</p>
            </div>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4 text-accent" />
            {studio.hours}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            On the floor
          </h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {facilities.map((facility) => (
              <li key={facility} className="flex items-start gap-2.5 bg-bg p-5 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {facility}
              </li>
            ))}
          </ul>

          <div
            id="whatsapp"
            className="mt-8 scroll-mt-16 rounded-card border border-accent/30 bg-accent-soft p-6"
          >
            <h3 className="text-base font-bold text-ink">Questions before you visit?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              WhatsApp the front desk. Someone answers between 06:00 and 21:00, and we will hold a
              trial slot for you.
            </p>
            <Link
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-card bg-accent px-5 text-sm font-bold text-accent-fg transition hover:bg-accent/90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {studio.whatsapp}
            </Link>
          </div>
        </div>
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
          <SectionHeading eyebrow="Questions" title="Before you book" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5">
                  <a href={wa} target="_blank" rel="noreferrer" className="text-ink transition hover:text-accent">
                    {studio.whatsapp}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Front desk</dt>
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
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
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
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Studio</dt>
                <dd className="mt-0.5 text-ink">
                  {studio.address.line1}, {studio.address.line2}
                  <br />
                  {studio.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-bg p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Free trial booking"
        >
          <h2 className="text-2xl font-bold text-ink">Book a free trial</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            One full class with a coach, no card and no commitment. Come in training clothes.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="fs-name">
              <Input id="fs-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone / WhatsApp" htmlFor="fs-phone">
              <Input id="fs-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 99450 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="fs-email" className="mt-5">
            <Input id="fs-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Interested in" htmlFor="fs-interest">
              <Select id="fs-interest" name="interest" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {trialInterests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Preferred slot" htmlFor="fs-slot">
              <Input id="fs-slot" name="slot" placeholder="e.g. 07:00 or 19:30" />
            </Field>
          </div>

          <Field
            label="Training history or injuries"
            htmlFor="fs-notes"
            hint="Anything medical, so the right coach takes your trial session."
            className="mt-5"
          >
            <Textarea
              id="fs-notes"
              name="notes"
              rows={3}
              placeholder="Never lifted before, lower back issue two years ago..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Book my trial session
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Prefer WhatsApp? Message {studio.whatsapp} instead.
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
      blurb={`${studio.descriptor} in Indiranagar since ${studio.since}, founded by ${studio.founder}. ${studio.capacity}.`}
      columns={[
        {
          title: "Train",
          links: [
            { label: "Small group strength", href: "#programs" },
            { label: "Personal training", href: "#programs" },
            { label: "Online training", href: "#programs" },
            { label: "Women-only classes", href: "#programs" },
            { label: "Special populations", href: "#programs" },
            { label: "Timetable", href: "#timetable" },
          ],
        },
        {
          title: "Studio",
          links: [
            { label: "About", href: "#about" },
            { label: "Coaches & certifications", href: "#coaches" },
            { label: "Nutrition & diet", href: "#nutrition" },
            { label: "Research & knowledge", href: "#research" },
            { label: "Location", href: "#location" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: `WhatsApp ${studio.whatsapp}`, href: wa },
            { label: studio.phone, href: telHref },
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.address.city, href: "#location" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.name}. Coaching is not medical advice. Members with a medical condition train with written clearance from their treating doctor.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
