import Link from "next/link";
import { Check, Landmark, Lock, Mail, MapPin, Phone, Scale } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  about,
  advocate,
  enquiryMatters,
  faqs,
  fees,
  hero,
  matters,
  navLinks,
  process,
  testimonials,
} from "./content";

const telHref = `tel:${advocate.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-md",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Scale className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-[15px] font-semibold tracking-tight">
          {advocate.name}
        </span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.16em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Advocate · Kochi
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book a consultation", href: "#contact" }} />;
}

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">{hero.eyebrow}</p>

            <h1 className="mt-6 font-serif text-3xl leading-[1.2] tracking-tight text-ink sm:text-[2.75rem]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-[1.75] text-muted">{hero.subtitle}</p>

            <ul className="mt-8 space-y-3">
              {hero.reassurances.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center rounded-card bg-brand px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
              >
                Book a consultation
              </Link>
              <Link
                href={telHref}
                className="inline-flex h-12 items-center gap-2 rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                {advocate.phone}
              </Link>
            </div>
          </div>

          <aside className="rounded-card border border-line bg-bg p-7">
            <h2 className="font-serif text-lg font-semibold text-ink">If it is urgent</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              An arrest, a protection order, or a hearing in the next 48 hours is not something to
              put in a form. Call the office directly — someone answers between 09:00 and 20:00, and
              urgent matters are taken outside those hours.
            </p>
            <Link
              href={telHref}
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-card bg-accent text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              <Phone className="h-4 w-4" />
              Call the office
            </Link>

            <p className="mt-6 flex gap-2.5 border-t border-line pt-5 text-xs leading-relaxed text-muted">
              <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              Everything you say is privileged from the first call, whether or not you engage the
              practice.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function Matters() {
  return (
    <Section id="matters">
      <SectionHeading
        eyebrow="Matters handled"
        title="Six areas, all of them about people"
        description="The practice does not take corporate retainers or commercial arbitration. Every matter below involves an individual or a family."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {matters.map((matter) => (
          <article
            key={matter.title}
            className="flex flex-col rounded-card border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
          >
            <h3 className="font-serif text-lg font-semibold text-ink">{matter.title}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{matter.body}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
              {matter.covers.map((cover) => (
                <li
                  key={cover}
                  className="rounded-full bg-subtle px-2.5 py-1 text-[11px] font-medium text-muted"
                >
                  {cover}
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
    <Section id="process" tone="subtle">
      <SectionHeading
        align="center"
        eyebrow="What happens first"
        title="Four steps, and no surprises in any of them"
      />

      <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {process.map((item, index) => (
          <li key={item.step} className="relative">
            {index < process.length - 1 ? (
              <span className="absolute left-11 top-5 hidden h-px w-[calc(100%-1.5rem)] bg-line lg:block" aria-hidden />
            ) : null}
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-bg font-serif text-sm font-semibold text-accent">
              {item.step}
            </span>
            <h3 className="mt-5 font-serif text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About" title={`A note from ${advocate.name}`} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-sm leading-[1.8] text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-8 border-t border-line pt-5 text-xs uppercase tracking-[0.16em] text-muted">
            {advocate.enrolment} · {advocate.languages}
          </p>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Landmark className="h-4 w-4" />
            Courts of practice
          </h3>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {about.courts.map((court) => (
              <div key={court.name} className="py-4">
                <dt className="font-serif text-base font-semibold text-ink">{court.name}</dt>
                <dd className="mt-1 text-sm text-muted">{court.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-5">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.role} className="rounded-card bg-subtle p-6">
                <blockquote className="text-sm leading-relaxed text-ink">{testimonial.quote}</blockquote>
                <figcaption className="mt-3 text-xs text-muted">
                  {testimonial.author} · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Fees() {
  return (
    <Section id="fees" tone="brand">
      <SectionHeading
        inverted
        eyebrow="Fees"
        title="Published, so nobody has to ask awkwardly"
        description="Indicative figures excluding court fees and out-of-pocket expenses. Your engagement letter carries the precise number, agreed before anything is filed."
      />

      <div className="mt-10 overflow-hidden rounded-card border border-brand-fg/15">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Indicative fee schedule</caption>
          <thead className="bg-brand-fg/[0.08] text-xs uppercase tracking-[0.14em] text-brand-fg/60">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Service</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Fee</th>
              <th scope="col" className="hidden px-5 py-3.5 font-semibold sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-fg/10">
            {fees.map((fee) => (
              <tr key={fee.item}>
                <th scope="row" className="px-5 py-4 text-left font-medium text-brand-fg">
                  {fee.item}
                </th>
                <td className="px-5 py-4 font-semibold text-accent">{fee.amount}</td>
                <td className="hidden px-5 py-4 text-brand-fg/65 sm:table-cell">{fee.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-brand-fg/65">
        If the fees are beyond reach, say so at the first call. Payment can often be staged, and you
        may be entitled to free legal aid through the District Legal Services Authority — you will be
        told if you are.
      </p>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading eyebrow="Questions" title="What clients ask before they call" />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Write, and you will hear back within a day"
            description="Give only as much detail as you are comfortable putting in writing. The rest can wait for the consultation."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Office</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {advocate.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${advocate.email}`} className="text-ink transition hover:text-accent">
                    {advocate.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Chambers</dt>
                <dd className="mt-0.5 text-ink">
                  {advocate.address.line1}, {advocate.address.line2}
                  <br />
                  {advocate.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-bg p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Confidential enquiry"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name" htmlFor="la-name">
              <Input id="la-name" name="name" autoComplete="name" placeholder="Name" required />
            </Field>
            <Field label="Phone" htmlFor="la-phone">
              <Input id="la-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98470 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="la-email" className="mt-6">
            <Input id="la-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>

          <Field label="What is the matter about?" htmlFor="la-matter" className="mt-6">
            <Select id="la-matter" name="matter" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {enquiryMatters.map((matter) => (
                <option key={matter} value={matter}>
                  {matter}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label="Anything you want to say now"
            htmlFor="la-note"
            hint="Optional. Do not send documents or the names of other parties until after the conflict check."
            className="mt-6"
          >
            <Textarea id="la-note" name="note" rows={4} placeholder="Optional" />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-8 w-full">
            Send enquiry
          </Button>

          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
            Enquiries are privileged. An advocate-client relationship begins only when the practice
            confirms engagement in writing after a conflict check.
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
      blurb={`${advocate.tagline}. ${advocate.enrolment}. ${advocate.languages}.`}
      columns={[
        {
          title: "Matters",
          links: [
            { label: "Divorce & separation", href: "#matters" },
            { label: "Custody & maintenance", href: "#matters" },
            { label: "Domestic violence", href: "#matters" },
            { label: "Criminal defence", href: "#matters" },
          ],
        },
        {
          title: "Practice",
          links: [
            { label: "What happens first", href: "#process" },
            { label: "About", href: "#about" },
            { label: "Fees", href: "#fees" },
            { label: "Questions", href: "#faq" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: advocate.phone, href: telHref },
            { label: advocate.email, href: `mailto:${advocate.email}` },
            { label: advocate.address.city, href: "#contact" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${advocate.practice}. Advocates may not solicit work under the Bar Council of India Rules; this site is informational and does not advertise or solicit.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
