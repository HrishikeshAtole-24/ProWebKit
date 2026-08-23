import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Minus, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { chamber, enquiryTopics, faqs, fees, fit, hero, navLinks, principles, work } from "./content";

const telHref = `tel:${chamber.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-tight">
      <span className="block font-serif text-base font-semibold tracking-tight">{chamber.name}</span>
      <span
        className={
          inverted
            ? "block text-[10px] uppercase tracking-[0.2em] text-brand-fg/55"
            : "block text-[10px] uppercase tracking-[0.2em] text-muted"
        }
      >
        {chamber.practitioner}
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Enquire", href: "#enquire" }} />;
}

/** Letter-style hero: no image, no gradient — just a signed note. */
export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <Container size="narrow" className="py-14 sm:py-20">
        <div className="animate-fade-up">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-accent">
            <Minus className="h-4 w-8" strokeWidth={1.5} aria-hidden />
            {hero.greeting}
          </p>

          <h1 className="mt-8 font-serif text-3xl leading-[1.25] tracking-tight text-ink sm:text-[2.6rem]">
            {chamber.tagline}.
          </h1>

          <div className="mt-8 space-y-5">
            {hero.body.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-base leading-[1.8] text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-10 font-serif text-lg text-ink">{hero.signoff}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{chamber.credentials}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href={hero.cta.href}
              className="group inline-flex items-center gap-2.5 border-b border-accent pb-1 text-sm font-semibold text-accent transition hover:gap-4"
            >
              {hero.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={telHref} className="text-sm text-muted transition hover:text-ink">
              {chamber.phone}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Principles() {
  return (
    <Section id="chamber">
      <SectionHeading
        eyebrow="How the chamber works"
        title="Four rules, kept for eighteen years"
        description={chamber.capacity}
      />

      <div className="mt-11 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {principles.map((principle) => (
          <article key={principle.number} className="border-t border-line pt-6">
            <p className="font-serif text-sm text-accent">{principle.number}</p>
            <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{principle.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{principle.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Work() {
  return (
    <Section id="work" tone="subtle">
      <SectionHeading
        eyebrow="Work undertaken"
        title="Direct tax, and what sits next to it"
        description="The chamber is deliberately narrow. Everything below is argued personally; everything else is referred out."
      />

      <ul className="mt-11 divide-y divide-line border-y border-line">
        {work.map((item) => (
          <li key={item.title} className="grid gap-2 py-6 sm:grid-cols-[16rem_1fr] sm:gap-10">
            <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Fit() {
  return (
    <Section id="fit">
      <SectionHeading
        eyebrow="Who it suits"
        title="An honest fit check before you write"
        description="A chamber this size is the right answer for some problems and the wrong answer for others. Both lists below are real."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
        <div className="bg-bg p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            A good fit
          </h3>
          <ul className="mt-5 space-y-3.5">
            {fit.suits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-subtle p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Not offered here
          </h3>
          <ul className="mt-5 space-y-3.5">
            {fit.doesNotSuit.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                {item}
              </li>
            ))}
          </ul>
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
        title="Published, because asking should not be awkward"
        description="Indicative figures. A precise quote follows the first conversation, in writing, before any work starts."
      />

      <dl className="mt-11 grid gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-2 lg:grid-cols-4">
        {fees.map((fee) => (
          <div key={fee.label} className="bg-brand p-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-fg/55">
              {fee.label}
            </dt>
            <dd>
              <p className="mt-4 font-serif text-2xl font-semibold text-accent">{fee.amount}</p>
              <p className="text-xs text-brand-fg/50">{fee.unit}</p>
              <p className="mt-4 border-t border-brand-fg/15 pt-4 text-sm leading-relaxed text-brand-fg/70">
                {fee.detail}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading eyebrow="Questions" title="Asked before the first meeting" />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

export function Enquire() {
  return (
    <Section id="enquire" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Enquire"
            title="Write, and you will get a considered reply"
            description="Not a callback from a sales desk. The reply comes from the chamber, usually within two working days."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Chamber</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {chamber.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${chamber.email}`} className="text-ink transition hover:text-accent">
                    {chamber.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Address</dt>
                <dd className="mt-0.5 text-ink">
                  {chamber.address.line1}, {chamber.address.line2}
                  <br />
                  {chamber.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-bg p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Chamber enquiry"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="cab-name">
              <Input id="cab-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone" htmlFor="cab-phone">
              <Input id="cab-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98250 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="cab-email" className="mt-6">
            <Input id="cab-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </Field>

          <Field label="What is this about?" htmlFor="cab-topic" className="mt-6">
            <Select id="cab-topic" name="topic" defaultValue="">
              <option value="" disabled>
                Select a subject
              </option>
              {enquiryTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label="Tell the chamber what happened"
            htmlFor="cab-note"
            hint="If a notice has been issued, mention the section and the date. Do not attach documents yet."
            className="mt-6"
          >
            <Textarea
              id="cab-note"
              name="note"
              rows={5}
              placeholder="We received a notice under Section 148 last week concerning AY 2019-20..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-8 w-full">
            Send to the chamber
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Nothing here is professional advice, and writing in does not create an engagement.
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
      blurb={`${chamber.credentials}. A direct-tax chamber in Ahmedabad. ${chamber.capacity}`}
      columns={[
        {
          title: "Work",
          links: [
            { label: "Assessment & scrutiny", href: "#work" },
            { label: "Appeals & tribunal", href: "#work" },
            { label: "Capital gains", href: "#work" },
            { label: "Second opinions", href: "#work" },
          ],
        },
        {
          title: "Chamber",
          links: [
            { label: "How it works", href: "#chamber" },
            { label: "Who it suits", href: "#fit" },
            { label: "Fees", href: "#fees" },
            { label: "Questions", href: "#faq" },
          ],
        },
        {
          title: "Reach",
          links: [
            { label: chamber.phone, href: telHref },
            { label: chamber.email, href: `mailto:${chamber.email}` },
            { label: chamber.address.city, href: "#enquire" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${chamber.name}. ICAI rules restrict advertising by chartered accountants; this site is informational only.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
