import Link from "next/link";
import { Award, Check, GraduationCap, Trophy } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, initials } from "@/lib/utils";
import {
  admissionCourses,
  courses,
  faculty,
  faqs,
  fees,
  hero,
  institute,
  navLinks,
  results,
  scholarships,
  stats,
  testimonials,
  tests,
} from "./content";

const telHref = `tel:${institute.admissions.replace(/[\s+]/g, "")}`;

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
        <GraduationCap className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{institute.name}</span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.16em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          JEE · NEET · Jaipur
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Apply now", href: "#admission" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #e4620c, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-fg">
              <Trophy className="h-3.5 w-3.5" />
              {hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-fg/75 sm:text-lg">
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

          {/* Topper board */}
          <div className="rounded-card border border-brand-fg/15 bg-brand-fg/[0.07] p-6 sm:p-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-fg/55">
              Top ranks, 2025
            </h2>
            <ul className="mt-5 space-y-4">
              {results.toppers.map((topper) => (
                <li key={topper.name} className="flex items-center gap-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-fg/10 text-xs font-bold text-accent"
                    aria-hidden
                  >
                    {initials(topper.name)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-brand-fg">{topper.name}</p>
                    <p className="truncate text-xs text-brand-fg/55">{topper.exam}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-accent">{topper.rank}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-11 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-brand px-4 py-6 text-center">
              <dt className="text-2xl font-bold text-accent">{stat.value}</dt>
              <dd className="mt-1 text-xs text-brand-fg/55">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function Results() {
  return (
    <Section id="results">
      <SectionHeading eyebrow="Results" title={results.headline} description={results.note} />

      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[560px] text-left text-sm">
          <caption className="sr-only">2025 selection breakdown by examination</caption>
          <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Examination</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Qualified</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Appeared</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Success rate</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Under AIR 1000</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {results.breakdown.map((row) => (
              <tr key={row.exam}>
                <th scope="row" className="px-5 py-4 text-left font-semibold text-ink">
                  {row.exam}
                </th>
                <td className="px-5 py-4 font-bold text-brand">{row.qualified}</td>
                <td className="px-5 py-4 text-muted">{row.total}</td>
                <td className="px-5 py-4 text-accent">
                  {Math.round((row.qualified / row.total) * 100)}%
                </td>
                <td className="px-5 py-4 text-muted">{row.top1000}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Courses() {
  return (
    <Section id="courses" tone="surface">
      <SectionHeading
        eyebrow="Courses & batches"
        title="Four programmes, one faculty pool"
        description="There is no premium section. Whichever batch you join, the same teachers walk into the room."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <article
            key={course.name}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-7",
              course.featured ? "border-brand shadow-soft" : "border-line",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-ink">{course.name}</h3>
                <p className="mt-0.5 text-sm text-accent">{course.classes}</p>
              </div>
              {course.featured ? (
                <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                  Core programme
                </span>
              ) : null}
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{course.focus}</p>

            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5 text-xs">
              <div>
                <dt className="uppercase tracking-wide text-muted">Duration</dt>
                <dd className="mt-0.5 font-semibold text-ink">{course.duration}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-muted">Schedule</dt>
                <dd className="mt-0.5 font-semibold text-ink">{course.schedule}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-muted">Seats</dt>
                <dd className="mt-0.5 font-semibold text-ink">{course.seats}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Faculty() {
  return (
    <Section id="faculty">
      <SectionHeading
        eyebrow="Faculty"
        title="The people who will actually teach the class"
        description="Named, with their qualifications and years. If a teacher leaves mid-session, parents are informed within the week."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {faculty.map((person) => (
          <article key={person.name} className="bg-bg p-7">
            <div className="flex items-start gap-4">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand"
                aria-hidden
              >
                {initials(person.name)}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-ink">{person.name}</h3>
                <p className="text-sm text-accent">{person.subject}</p>
                <p className="text-xs text-muted">{person.experience}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{person.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Tests() {
  return (
    <Section id="tests" tone="brand">
      <SectionHeading inverted eyebrow="Test series & support" title={tests.title} description={tests.body} />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tests.features.map((feature) => (
          <article key={feature.title} className="rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-6">
            <h3 className="text-base font-bold text-brand-fg">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-fg/70">{feature.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Fees() {
  return (
    <Section id="fees" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Fees"
            title="Published, with the refund policy attached"
            description="Fees include study material and the full test series. There is no separate charge for doubt sessions, mocks or counselling."
          />

          <div className="mt-10 overflow-hidden rounded-card border border-line">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Course fees</caption>
              <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Course</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Fee</th>
                  <th scope="col" className="hidden px-5 py-3.5 font-semibold sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-bg">
                {fees.map((fee) => (
                  <tr key={fee.course}>
                    <th scope="row" className="px-5 py-4 text-left font-medium text-ink">
                      {fee.course}
                    </th>
                    <td className="px-5 py-4 font-bold text-brand">{fee.fee}</td>
                    <td className="hidden px-5 py-4 text-muted sm:table-cell">{fee.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-card border border-line bg-bg p-7">
          <h3 className="flex items-center gap-2 text-base font-bold text-ink">
            <Award className="h-5 w-5 text-accent" />
            Scholarships
          </h3>
          <ul className="mt-5 space-y-3.5">
            {scholarships.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="#admission"
            className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-card bg-accent text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
          >
            Register for the scholarship test
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function Admission() {
  return (
    <Section id="admission">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="What parents ask us" />
          <Accordion items={faqs} className="mt-8" />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="rounded-card bg-subtle p-5">
                <blockquote className="text-sm leading-relaxed text-ink">{testimonial.quote}</blockquote>
                <figcaption className="mt-4 text-xs">
                  <span className="block font-semibold text-ink">{testimonial.author}</span>
                  <span className="block text-muted">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Admission enquiry"
        >
          <h2 className="text-2xl font-bold text-ink">Admission enquiry</h2>
          <p className="mt-2 text-sm text-muted">
            The admissions desk calls back within a day. You can also walk in and sit through two
            classes free of charge before deciding.
          </p>

          <Field label="Student name" htmlFor="ec-student" className="mt-7">
            <Input id="ec-student" name="student" autoComplete="name" placeholder="Student name" required />
          </Field>
          <Field label="Parent name" htmlFor="ec-parent" className="mt-5">
            <Input id="ec-parent" name="parent" placeholder="Parent or guardian" required />
          </Field>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Phone" htmlFor="ec-phone">
              <Input id="ec-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 90010 00000" required />
            </Field>
            <Field label="Current class" htmlFor="ec-class">
              <Input id="ec-class" name="class" placeholder="Class 11" />
            </Field>
          </div>
          <Field label="Course of interest" htmlFor="ec-course" className="mt-5">
            <Select id="ec-course" name="course" defaultValue="">
              <option value="" disabled>
                Select a programme
              </option>
              {admissionCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </Select>
          </Field>
          <Field
            label="Anything we should know?"
            htmlFor="ec-notes"
            hint="Previous attempt, board results, or a subject the student struggles with."
            className="mt-5"
          >
            <Textarea id="ec-notes" name="notes" rows={3} placeholder="Optional" />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Submit enquiry
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Admissions desk: {institute.admissions}
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
      blurb={`${institute.tagline}. Batch sizes capped at 45, one faculty pool across every batch, and every result published with verifiable roll numbers.`}
      columns={[
        {
          title: "Programmes",
          links: [
            { label: "Foundation (9 & 10)", href: "#courses" },
            { label: "Two-year classroom", href: "#courses" },
            { label: "One-year intensive", href: "#courses" },
            { label: "Repeater batch", href: "#courses" },
          ],
        },
        {
          title: "Academy",
          links: [
            { label: "Results", href: "#results" },
            { label: "Faculty", href: "#faculty" },
            { label: "Test series", href: "#tests" },
            { label: "Fees & scholarships", href: "#fees" },
          ],
        },
        {
          title: "Admissions",
          links: [
            { label: institute.admissions, href: telHref },
            { label: institute.phone, href: `tel:${institute.phone.replace(/[\s+]/g, "")}` },
            { label: institute.email, href: `mailto:${institute.email}` },
            { label: institute.address.city, href: "#admission" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${institute.name}. Results shown are of students who completed a full classroom programme. Past results do not guarantee future selection.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
