import Link from "next/link";
import { BookOpen, Check, Clock, Heart, MapPin, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, initials } from "@/lib/utils";
import {
  centre,
  classes,
  enrolClasses,
  faqs,
  feeNotes,
  fees,
  hero,
  method,
  navLinks,
  teachers,
  testimonials,
  timetable,
} from "./content";

const telHref = `tel:${centre.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-2xl",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <BookOpen className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{centre.name}</span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.14em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Rashbehari, Kolkata
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Free demo class", href: "#enrol" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-subtle">
      <div
        className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #ddd0f7, transparent)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-16 right-0 h-[320px] w-[320px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #ffe9ae, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-bg px-3.5 py-1.5 text-xs font-semibold text-brand shadow-soft">
            <Heart className="h-3.5 w-3.5 text-accent" />
            {hero.badge}
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
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
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {hero.markers.map((marker) => (
            <div key={marker.label} className="bg-bg px-4 py-6 text-center">
              <dt className="text-2xl font-bold text-brand">{marker.value}</dt>
              <dd className="mt-1 text-xs text-muted">{marker.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function Classes() {
  return (
    <Section id="classes">
      <SectionHeading
        align="center"
        eyebrow="Classes & subjects"
        title="Four groups, capped batches, every subject taught properly"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {classes.map((group) => (
          <article key={group.group} className="flex flex-col rounded-card border border-line bg-surface p-7">
            <h3 className="text-lg font-bold text-ink">{group.group}</h3>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.subjects.map((subject) => (
                <li
                  key={subject}
                  className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand"
                >
                  {subject}
                </li>
              ))}
            </ul>

            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{group.note}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-xs">
              <div>
                <dt className="uppercase tracking-wide text-muted">Batch size</dt>
                <dd className="mt-0.5 font-bold text-ink">{group.batch}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-muted">Sessions</dt>
                <dd className="mt-0.5 font-bold text-ink">{group.sessions}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Timetable() {
  return (
    <Section id="timetable" tone="subtle">
      <SectionHeading
        eyebrow="Timetable"
        title="The whole week, on one screen"
        description="Saturdays are kept for doubts, weekly tests and parent meetings. Nothing new is taught on a Saturday."
      />

      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[860px] text-left text-sm">
          <caption className="sr-only">Weekly class timetable</caption>
          <thead className="bg-bg text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-4 py-3.5 font-semibold">Time</th>
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
                <th scope="row" className="whitespace-nowrap px-4 py-4 text-left font-bold text-brand">
                  {row.slot}
                </th>
                <td className="px-4 py-4 text-muted">{row.mon}</td>
                <td className="px-4 py-4 text-muted">{row.tue}</td>
                <td className="px-4 py-4 text-muted">{row.wed}</td>
                <td className="px-4 py-4 text-muted">{row.thu}</td>
                <td className="px-4 py-4 text-muted">{row.fri}</td>
                <td className="px-4 py-4 font-medium text-accent">{row.sat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Method() {
  return (
    <Section id="method" tone="brand">
      <SectionHeading
        inverted
        align="center"
        eyebrow="How we teach"
        title="Six things we do, and keep doing"
        description="None of it is clever. All of it is the difference between a child who improves and one who just attends."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {method.map((item) => (
          <article key={item.title} className="rounded-card border border-brand-fg/15 bg-brand-fg/[0.07] p-6">
            <h3 className="text-base font-bold text-brand-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-fg/70">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Teachers() {
  return (
    <Section id="teachers">
      <SectionHeading
        eyebrow="Teachers"
        title="Five teachers, and your child will know all of them"
        description="No rotating pool of part-timers. The same person teaches your child the subject all year."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <article key={teacher.name} className="rounded-card border border-line bg-surface p-6">
            <div className="flex items-start gap-4">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand"
                aria-hidden
              >
                {initials(teacher.name)}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-ink">{teacher.name}</h3>
                <p className="text-xs text-accent">{teacher.subject}</p>
                <p className="text-xs text-muted">{teacher.experience}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{teacher.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Fees() {
  return (
    <Section id="fees" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Fees"
            title="One monthly number, and that is all of it"
            description="No admission fee, no annual charge, no material charge. What is printed below is what you pay."
          />

          <div className="mt-10 overflow-hidden rounded-card border border-line">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Monthly fees by class group</caption>
              <thead className="bg-bg text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Group</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Per month</th>
                  <th scope="col" className="hidden px-5 py-3.5 font-semibold sm:table-cell">Covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-bg">
                {fees.map((fee) => (
                  <tr key={fee.group}>
                    <th scope="row" className="px-5 py-4 text-left font-medium text-ink">
                      {fee.group}
                      <span className="mt-0.5 block text-xs font-normal text-muted">{fee.note}</span>
                    </th>
                    <td className="px-5 py-4 text-lg font-bold text-brand">{fee.monthly}</td>
                    <td className="hidden px-5 py-4 text-muted sm:table-cell">{fee.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-card border border-line bg-bg p-7">
          <h3 className="text-base font-bold text-ink">Good to know</h3>
          <ul className="mt-5 space-y-3.5">
            {feeNotes.map((note) => (
              <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {note}
              </li>
            ))}
          </ul>
          <Link
            href="#enrol"
            className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-card bg-brand text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
          >
            Book a free demo class
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function Enrol() {
  return (
    <Section id="enrol">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading eyebrow="Parents ask" title="Before you enrol" />
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

          <dl className="mt-10 grid gap-4 border-t border-line pt-8 text-sm sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Call</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-brand">
                    {centre.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">WhatsApp</dt>
                <dd className="mt-0.5 text-ink">{centre.whatsapp}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Open</dt>
                <dd className="mt-0.5 text-ink">{centre.hours}</dd>
              </div>
            </div>
          </dl>

          <p className="mt-6 flex items-start gap-2.5 text-sm text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {centre.address.line1}, {centre.address.line2}, {centre.address.city}
          </p>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Enrolment enquiry"
        >
          <h2 className="text-2xl font-bold text-ink">Book a free demo class</h2>
          <p className="mt-2 text-sm text-muted">
            One full class in the right batch, free, with nothing to sign. Come and watch if you
            like — parents are welcome to sit at the back.
          </p>

          <Field label="Student name" htmlFor="et-student" className="mt-7">
            <Input id="et-student" name="student" autoComplete="name" placeholder="Student name" required />
          </Field>
          <Field label="Parent name" htmlFor="et-parent" className="mt-5">
            <Input id="et-parent" name="parent" placeholder="Parent or guardian" required />
          </Field>
          <Field label="Phone" htmlFor="et-phone" className="mt-5">
            <Input id="et-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98300 00000" required />
          </Field>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Class" htmlFor="et-class">
              <Select id="et-class" name="class" defaultValue="">
                <option value="" disabled>
                  Select a class
                </option>
                {enrolClasses.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="School board" htmlFor="et-board">
              <Input id="et-board" name="board" placeholder="CBSE / ICSE / WB" />
            </Field>
          </div>
          <Field
            label="Which subjects are the worry?"
            htmlFor="et-subjects"
            hint="Being specific helps us put your child in the right batch on day one."
            className="mt-5"
          >
            <Textarea id="et-subjects" name="subjects" rows={3} placeholder="Maths mainly, and physics since class 9..." />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-7 w-full">
            Book the demo class
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
      blurb={`${centre.tagline}. A neighbourhood tuition centre in Rashbehari since ${centre.founded}. Twelve students to a batch, homework checked, parents told the truth.`}
      columns={[
        {
          title: "Classes",
          links: [
            { label: "Classes 6 – 8", href: "#classes" },
            { label: "Classes 9 – 10", href: "#classes" },
            { label: "Class 11 – 12 Science", href: "#classes" },
            { label: "Class 11 – 12 Commerce", href: "#classes" },
          ],
        },
        {
          title: "Centre",
          links: [
            { label: "Timetable", href: "#timetable" },
            { label: "How we teach", href: "#method" },
            { label: "Teachers", href: "#teachers" },
            { label: "Fees", href: "#fees" },
          ],
        },
        {
          title: "Visit",
          links: [
            { label: centre.phone, href: telHref },
            { label: `WhatsApp ${centre.whatsapp}`, href: "#enrol" },
            { label: centre.email, href: `mailto:${centre.email}` },
            { label: centre.hours, href: "#enrol" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${centre.name}. ${centre.address.line1}, ${centre.address.city}.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
