import Link from "next/link";
import { Check, Music, Phone, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, initials } from "@/lib/utils";
import {
  academy,
  disciplines,
  faqs,
  feeNotes,
  fees,
  grades,
  gurus,
  hero,
  navLinks,
  outcomes,
  recital,
  stats,
  trialDisciplines,
} from "./content";

const telHref = `tel:${academy.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Music className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-base font-semibold tracking-tight">
          {academy.name}
        </span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Mylapore, Chennai
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Trial class", href: "#trial" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute -left-24 -bottom-32 h-[440px] w-[440px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #0E7C7B, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{hero.eyebrow}</p>

          <h1 className="mt-6 font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-[1.85] text-brand-fg/70 sm:text-lg">
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

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-brand px-4 py-6 text-center">
              <dt className="font-serif text-2xl font-semibold text-accent">{stat.value}</dt>
              <dd className="mt-1 text-xs text-brand-fg/55">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function Disciplines() {
  return (
    <Section id="disciplines">
      <SectionHeading
        eyebrow="Disciplines"
        title="Six disciplines, one guru each"
        description="A student stays with the same guru through their training. Faculty do not rotate between batches at this academy, and that is deliberate."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((discipline) => (
          <article
            key={discipline.name}
            className="flex flex-col rounded-card border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
          >
            <h3 className="font-serif text-xl font-semibold text-ink">{discipline.name}</h3>
            <p className="mt-1.5 text-sm text-accent">{discipline.guru}</p>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{discipline.detail}</p>

            <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 text-xs">
              <div>
                <dt className="uppercase tracking-wide text-muted">Ages</dt>
                <dd className="mt-0.5 font-semibold text-ink">{discipline.ages}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-muted">Format</dt>
                <dd className="mt-0.5 font-semibold text-ink">{discipline.format}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Grades() {
  return (
    <Section id="grades" tone="subtle">
      <SectionHeading eyebrow="Graded examinations" title={grades.title} description={grades.body} />

      <div className="mt-12 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[760px] text-left text-sm">
          <caption className="sr-only">Levels, duration, syllabus and examinations</caption>
          <thead className="bg-bg text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Level</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Typically</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">What is covered</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Examination</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {grades.levels.map((level) => (
              <tr key={level.level}>
                <th scope="row" className="px-5 py-4 text-left font-serif text-base font-semibold text-brand">
                  {level.level}
                </th>
                <td className="px-5 py-4 text-muted">{level.years}</td>
                <td className="px-5 py-4 text-ink">{level.covers}</td>
                <td className="px-5 py-4 text-accent">{level.exam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Gurus() {
  return (
    <Section id="gurus">
      <SectionHeading
        eyebrow="Gurus"
        title="Lineage, named"
        description="In this tradition the bani a guru trained in tells you more than a certificate does. Ours are published."
      />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {gurus.map((guru) => (
          <article key={guru.name} className="grid gap-5 py-7 lg:grid-cols-[auto_1fr_1.2fr] lg:gap-10">
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft font-serif text-base font-semibold text-brand"
              aria-hidden
            >
              {initials(guru.name)}
            </span>

            <div>
              <h3 className="font-serif text-xl font-semibold text-ink">{guru.name}</h3>
              <p className="mt-1 text-sm text-accent">{guru.discipline}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{guru.years}</p>
            </div>

            <div>
              <p className="text-sm leading-relaxed text-muted">{guru.detail}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">{guru.lineage}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Fees() {
  return (
    <Section id="fees" tone="subtle">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Class formats & fees"
            title="Quarterly, published, and that is the whole cost"
            description="No admission fee, no annual charge, and no fee for participating in the recital."
          />

          <div className="mt-10 overflow-hidden rounded-card border border-line">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Quarterly fees by discipline</caption>
              <thead className="bg-bg text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Discipline</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Per quarter</th>
                  <th scope="col" className="hidden px-5 py-3.5 font-semibold sm:table-cell">Sessions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-bg">
                {fees.map((fee) => (
                  <tr key={fee.discipline}>
                    <th scope="row" className="px-5 py-4 text-left font-medium text-ink">
                      {fee.discipline}
                      <span className="mt-0.5 block text-xs font-normal text-muted">{fee.note}</span>
                    </th>
                    <td className="px-5 py-4 font-serif text-lg font-semibold text-brand">
                      {fee.quarterly}
                    </td>
                    <td className="hidden px-5 py-4 text-muted sm:table-cell">{fee.sessions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-card border border-line bg-bg p-7">
          <h3 className="font-serif text-lg font-semibold text-ink">Good to know</h3>
          <ul className="mt-5 space-y-3.5">
            {feeNotes.map((note) => (
              <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {note}
              </li>
            ))}
          </ul>
          <Link
            href="#trial"
            className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-card bg-brand text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
          >
            Book a trial class
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function Recital() {
  return (
    <Section id="recital" tone="brand">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading inverted eyebrow="The annual recital" title={recital.title} description={recital.body} />
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg">
            <Sparkles className="h-4 w-4" />
            Recital 2026 · Second week of December
          </p>
        </div>

        <dl className="divide-y divide-brand-fg/15 border-y border-brand-fg/15">
          {recital.facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.18em] text-accent">{fact.label}</dt>
              <dd className="text-sm leading-relaxed text-brand-fg/75">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Trial() {
  return (
    <Section id="trial">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="What families ask first" />
          <Accordion items={faqs} className="mt-8" />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {outcomes.map((outcome) => (
              <figure key={outcome.author} className="rounded-card bg-subtle p-5">
                <blockquote className="text-sm leading-relaxed text-ink">{outcome.quote}</blockquote>
                <figcaption className="mt-4 text-xs">
                  <span className="block font-semibold text-ink">{outcome.author}</span>
                  <span className="block text-muted">{outcome.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Trial class request"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink">Book a trial class</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            One free class, sitting in with a running batch. There is no audition and no assessment
            — it is for the student and the guru to meet.
          </p>

          <Field label="Student name" htmlFor="ea-student" className="mt-7">
            <Input id="ea-student" name="student" autoComplete="name" placeholder="Student name" required />
          </Field>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Age" htmlFor="ea-age">
              <Input id="ea-age" name="age" type="number" min={4} max={99} placeholder="8" />
            </Field>
            <Field label="Phone" htmlFor="ea-phone">
              <Input id="ea-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98410 00000" required />
            </Field>
          </div>
          <Field label="Discipline" htmlFor="ea-discipline" className="mt-5">
            <Select id="ea-discipline" name="discipline" defaultValue="">
              <option value="" disabled>
                Select a discipline
              </option>
              {trialDisciplines.map((discipline) => (
                <option key={discipline} value={discipline}>
                  {discipline}
                </option>
              ))}
            </Select>
          </Field>
          <Field
            label="Any previous training?"
            htmlFor="ea-background"
            hint="None at all is the most common answer, and it is completely fine."
            className="mt-5"
          >
            <Textarea id="ea-background" name="background" rows={3} placeholder="Two years of vocal at school, stopped in 2023..." />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Request a trial class
          </Button>

          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
            <Phone className="h-3.5 w-3.5 text-accent" />
            Office {academy.phone} · {academy.hours}
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
      blurb={`${academy.tagline}. Founded ${academy.founded} in Mylapore by ${academy.principal}. Every student performs at the annual recital, from their first year.`}
      columns={[
        {
          title: "Learn",
          links: [
            { label: "Carnatic vocal", href: "#disciplines" },
            { label: "Veena & violin", href: "#disciplines" },
            { label: "Mridangam", href: "#disciplines" },
            { label: "Bharatanatyam", href: "#disciplines" },
            { label: "Adult beginners", href: "#disciplines" },
          ],
        },
        {
          title: "Academy",
          links: [
            { label: "Graded examinations", href: "#grades" },
            { label: "Gurus", href: "#gurus" },
            { label: "Fees", href: "#fees" },
            { label: "Annual recital", href: "#recital" },
          ],
        },
        {
          title: "Visit",
          links: [
            { label: academy.phone, href: telHref },
            { label: `WhatsApp ${academy.whatsapp}`, href: "#trial" },
            { label: academy.email, href: `mailto:${academy.email}` },
            { label: academy.address.city, href: "#trial" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${academy.name}. ${academy.address.line1}, ${academy.address.city}.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
