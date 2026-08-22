import Link from "next/link";
import {
  Check,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  anxious,
  bookingReasons,
  faqs,
  hero,
  navLinks,
  practice,
  results,
  technology,
  testimonials,
  treatments,
  visitSteps,
} from "./content";

const telHref = `tel:${practice.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand text-brand-fg" aria-hidden>
        <Smile className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{practice.name}</span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.16em]",
            inverted ? "text-brand-fg/60" : "text-muted",
          )}
        >
          Bandra West
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book a visit", href: "#book" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-subtle">
      <div
        className="absolute -right-32 -top-24 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #bfe4ff, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#book"
                className="inline-flex h-12 items-center gap-2 rounded-card bg-brand px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
              >
                Book an appointment
              </Link>
              <Link
                href={telHref}
                className="inline-flex h-12 items-center gap-2 rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                {practice.phone}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {hero.trustMarkers.map((marker) => (
                <div key={marker.label}>
                  <dt className="text-2xl font-bold text-brand">{marker.value}</dt>
                  <dd className="mt-0.5 text-xs text-muted">{marker.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up rounded-card border border-line bg-bg p-7 shadow-soft sm:p-8">
            <h2 className="text-lg font-bold text-ink">In pain right now?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Do not use the form. Call the studio — emergency slots are held every morning and
              evening, and someone answers between 10:00 and 20:00.
            </p>
            <Link
              href={telHref}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-card bg-accent text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              <Phone className="h-4 w-4" />
              Call {practice.phone}
            </Link>
            <Link
              href="#book"
              className="mt-2.5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-card border border-line text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {practice.whatsapp}
            </Link>

            <dl className="mt-7 space-y-4 border-t border-line pt-6 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <dt className="font-medium text-ink">Opening hours</dt>
                  <dd className="text-muted">{practice.hours}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <div>
                  <dt className="font-medium text-ink">Studio</dt>
                  <dd className="text-muted">
                    {practice.address.line1}, {practice.address.line2}, {practice.address.city}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Treatments() {
  return (
    <Section id="treatments">
      <SectionHeading
        eyebrow="Treatments & indicative pricing"
        title="Every price published, because nobody enjoys asking"
        description="Ranges reflect complexity and materials. Your written plan after examination gives the exact figure, and it does not move unless the clinical picture does."
      />

      <div className="mt-12 space-y-10">
        {treatments.map((group) => (
          <div key={group.group}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {group.group}
            </h3>
            <div className="overflow-x-auto rounded-card border border-line">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">{group.group} treatments and indicative pricing</caption>
                <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Treatment</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Indicative cost</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Sittings</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-bg">
                  {group.items.map((item) => (
                    <tr key={item.name}>
                      <th scope="row" className="px-5 py-4 text-left font-medium text-ink">
                        {item.name}
                      </th>
                      <td className="px-5 py-4 font-semibold text-brand">{item.price}</td>
                      <td className="px-5 py-4 text-muted">{item.sittings}</td>
                      <td className="px-5 py-4 text-muted">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 rounded-card bg-subtle p-5 text-sm leading-relaxed text-muted">
        Treatments above ₹20,000 can be paid over three, six or nine months at zero interest. Ask
        when the plan is written, not at the counter.
      </p>
    </Section>
  );
}

export function Visit() {
  return (
    <Section id="visit" tone="subtle">
      <SectionHeading
        align="center"
        eyebrow="Your visit"
        title="Four steps, and you know all of them in advance"
      />

      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {visitSteps.map((step) => (
          <li key={step.step} className="rounded-card border border-line bg-bg p-7">
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-brand-fg">
                {step.step}
              </span>
              <span className="text-xs font-medium text-accent">{step.duration}</span>
            </div>
            <h3 className="mt-5 text-base font-bold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Technology() {
  return (
    <Section id="technology">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Technology"
          title="Equipment that shortens the visit, not the bill"
          description="Every item below exists to cut chair time, radiation or guesswork. None of it is charged as a separate line."
        />
        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {technology.map((item) => (
            <li key={item.name} className="bg-bg p-6">
              <h3 className="text-sm font-bold text-ink">{item.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Anxious() {
  return (
    <Section id="anxious" tone="brand">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading inverted eyebrow="Nervous patients" title={anxious.title} description={anxious.body} />
          <Link
            href="#book"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
          >
            <Heart className="h-4 w-4" />
            Book an examination only
          </Link>
        </div>

        <ul className="space-y-3.5">
          {anxious.promises.map((promise) => (
            <li key={promise} className="flex items-start gap-3 text-sm leading-relaxed text-brand-fg/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Results() {
  return (
    <Section id="results">
      <SectionHeading
        eyebrow="Recent work"
        title="Before and after"
        description="Photographs are published only with written patient consent. Replace these placeholders with your own clinical images."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((item) => (
          <figure key={item.title} className="overflow-hidden rounded-card border border-line bg-surface">
            <div className="grid aspect-[4/3] grid-cols-2 gap-px bg-line">
              {["Before", "After"].map((label) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center justify-center text-xs font-semibold uppercase tracking-wide",
                    label === "Before" ? "bg-subtle text-muted" : "bg-brand-soft text-brand",
                  )}
                >
                  {label}
                </div>
              ))}
            </div>
            <figcaption className="p-5">
              <h3 className="text-sm font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-xs text-muted">{item.detail}</p>
              <p className="mt-2 text-xs font-medium text-accent">{item.duration}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col rounded-card border border-line bg-surface p-7">
            <div className="flex gap-0.5 text-accent" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
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

export function Book() {
  return (
    <Section id="book" tone="subtle">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you book" />
          <Accordion items={faqs} className="mt-8" />
        </div>

        <form
          className="rounded-card border border-line bg-bg p-7 shadow-soft sm:p-8"
          action="#"
          method="post"
          aria-label="Appointment booking"
        >
          <h2 className="text-xl font-bold text-ink">Book an appointment</h2>
          <p className="mt-2 text-sm text-muted">
            The studio confirms by phone within a few hours. For pain, please call instead.
          </p>

          <Field label="Name" htmlFor="dd-name" className="mt-6">
            <Input id="dd-name" name="name" autoComplete="name" placeholder="Your name" required />
          </Field>
          <Field label="Phone" htmlFor="dd-phone" className="mt-5">
            <Input id="dd-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98200 00000" required />
          </Field>
          <Field label="What do you need?" htmlFor="dd-reason" className="mt-5">
            <Select id="dd-reason" name="reason" defaultValue="">
              <option value="" disabled>
                Select a treatment
              </option>
              {bookingReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Preferred day" htmlFor="dd-date" className="mt-5">
            <Input id="dd-date" name="date" type="date" />
          </Field>
          <Field
            label="Anything we should know?"
            htmlFor="dd-notes"
            hint="Nervous about treatment? Say so here and we will plan the visit around it."
            className="mt-5"
          >
            <Textarea id="dd-notes" name="notes" rows={3} placeholder="Optional" />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-7 w-full">
            Request appointment
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
      blurb={`${practice.lead}, ${practice.qualifications}. ${practice.registration}. A two-chair dental studio in Bandra West.`}
      columns={[
        {
          title: "Treatments",
          links: [
            { label: "Cleaning & fillings", href: "#treatments" },
            { label: "Root canal & crowns", href: "#treatments" },
            { label: "Implants", href: "#treatments" },
            { label: "Aligners & braces", href: "#treatments" },
            { label: "Whitening & veneers", href: "#treatments" },
          ],
        },
        {
          title: "The studio",
          links: [
            { label: "Your visit", href: "#visit" },
            { label: "Technology", href: "#technology" },
            { label: "Nervous patients", href: "#anxious" },
            { label: "Results & reviews", href: "#results" },
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
      legal={`© ${new Date().getFullYear()} ${practice.name}. Indicative pricing is not a quotation; a written plan follows examination.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
