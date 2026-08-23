import Link from "next/link";
import {
  Ambulance,
  ArrowRight,
  BadgeCheck,
  Check,
  CircleAlert,
  Cross,
  MapPin,
  Phone,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn, initials } from "@/lib/utils";
import {
  appointmentDepartments,
  doctors,
  facilities,
  hero,
  hospital,
  insurers,
  navLinks,
  packages,
  patientInfo,
  specialities,
  stats,
} from "./content";

const emergencyHref = `tel:${hospital.emergency.replace(/\s/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-fg" aria-hidden>
        <Cross className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{hospital.name}</span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.16em]",
            inverted ? "text-brand-fg/60" : "text-muted",
          )}
        >
          {hospital.descriptor}
        </span>
      </span>
    </>
  );
}

/** Always-visible emergency strip — the one thing a hospital site must not bury. */
export function EmergencyBar() {
  return (
    <div className="bg-accent text-accent-fg">
      <Container className="flex flex-col gap-1 py-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 font-semibold">
          <CircleAlert className="h-4 w-4 shrink-0" />
          Emergency &amp; trauma, 24 hours
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <Link href={emergencyHref} className="font-bold underline-offset-4 hover:underline">
            {hospital.emergency}
          </Link>
          <span className="flex items-center gap-1.5 text-accent-fg/80">
            <Ambulance className="h-4 w-4" />
            Ambulance {hospital.ambulance}
          </span>
        </div>
      </Container>
    </div>
  );
}

export function Header() {
  return (
    <>
      <EmergencyBar />
      <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Book appointment", href: "#appointment" }} />
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div className="grid-lines absolute inset-0 opacity-[0.06]" aria-hidden />
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-3xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-fg/20 px-3 py-1 text-xs font-medium text-brand-fg/80">
            <BadgeCheck className="h-3.5 w-3.5 text-accent" />
            {hospital.accreditation}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-fg/75 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {hero.quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={cn(
                  "inline-flex h-12 items-center gap-2 rounded-card px-6 text-sm font-semibold transition",
                  action.tone === "accent"
                    ? "bg-accent text-accent-fg hover:bg-accent/90"
                    : "border border-brand-fg/25 text-brand-fg hover:bg-brand-fg/10",
                )}
              >
                {action.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative border-t border-brand-fg/15 bg-brand-fg/[0.05]">
        <Container>
          <dl className="grid grid-cols-2 divide-brand-fg/10 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-7 text-center sm:px-6">
                <dt className="text-2xl font-bold text-brand-fg sm:text-3xl">{stat.value}</dt>
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

export function Specialities() {
  return (
    <Section id="specialities">
      <SectionHeading
        eyebrow="Centres of excellence"
        title="Twenty-two specialities under one roof"
        description="Each centre runs its own consultant roster, dedicated theatre time and follow-up clinic, so a referral inside the hospital does not restart your case."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {specialities.map(({ icon: Icon, name, detail, consultants }) => (
          <article key={name} className="group bg-bg p-7 transition-colors hover:bg-surface">
            <span className="grid h-11 w-11 place-items-center rounded-card bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-fg">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-base font-bold text-ink">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
            <p className="mt-4 border-t border-line pt-3 text-xs font-semibold text-accent">
              {consultants} consultants
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Doctors() {
  return (
    <Section id="doctors" tone="surface">
      <SectionHeading
        eyebrow="Find a consultant"
        title="OPD schedule, published"
        description="A selection of consultants and their outpatient timings. The full directory of 96 consultants is available at reception."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <article key={doctor.name} className="flex flex-col rounded-card border border-line bg-bg p-6">
            <div className="flex items-start gap-4">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand"
                aria-hidden
              >
                {initials(doctor.name)}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-ink">{doctor.name}</h3>
                <p className="text-sm text-accent">{doctor.speciality}</p>
              </div>
            </div>

            <dl className="mt-5 flex-1 space-y-2.5 border-t border-line pt-4 text-xs">
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 uppercase tracking-wide text-muted">Qualification</dt>
                <dd className="text-ink">{doctor.qualification}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 uppercase tracking-wide text-muted">Experience</dt>
                <dd className="text-ink">{doctor.experience}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 uppercase tracking-wide text-muted">OPD</dt>
                <dd className="text-ink">{doctor.opd}</dd>
              </div>
            </dl>

            <Link
              href="#appointment"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-card border border-line text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              Book with this consultant
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Facilities() {
  return (
    <Section id="facilities">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Facilities"
          title="What is on site, and running tonight"
          description="Everything listed operates within the hospital. Nothing here is outsourced to a partner facility across town."
        />
        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {facilities.map((facility) => (
            <li key={facility.name} className="bg-bg p-6">
              <h3 className="text-sm font-bold text-ink">{facility.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{facility.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Packages() {
  return (
    <Section id="packages" tone="surface">
      <SectionHeading
        align="center"
        eyebrow="Health check packages"
        title="Preventive screening, priced upfront"
        description="Fasting required for all packages. Reports are issued the same evening with a consultation included."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
        {packages.map((pack) => (
          <article
            key={pack.name}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-8",
              pack.featured ? "border-brand shadow-lift lg:-mt-4 lg:pb-12" : "border-line",
            )}
          >
            {pack.featured ? (
              <span className="mb-4 inline-flex w-fit rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                Most booked
              </span>
            ) : null}
            <h3 className="text-lg font-bold text-ink">{pack.name}</h3>
            <p className="mt-1.5 text-sm text-muted">{pack.for}</p>
            <p className="mt-5 text-3xl font-bold text-brand">{pack.price}</p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
              {pack.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#appointment"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                pack.featured
                  ? "bg-accent text-accent-fg hover:bg-accent/90"
                  : "border border-line text-ink hover:border-brand hover:text-brand",
              )}
            >
              Book this package
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Insurance() {
  return (
    <Section id="insurance" tone="brand" space="compact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          inverted
          eyebrow="Insurance & TPA"
          title="Cashless with most major insurers"
          description="Bring your insurance card and photo identification to the insurance desk on the ground floor. Pre-authorisation for planned admissions usually clears within four hours."
        />
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-3">
          {insurers.map((insurer) => (
            <li key={insurer} className="bg-brand px-4 py-5 text-center text-sm font-medium text-brand-fg/80">
              {insurer}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Patients() {
  return (
    <Section id="patients" space="compact">
      <SectionHeading
        eyebrow="Patient information"
        title="What to expect, before you arrive"
      />
      <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {patientInfo.map((info) => (
          <div key={info.title} className="border-t border-line pt-5">
            <dt className="text-base font-bold text-ink">{info.title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{info.body}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Appointment() {
  return (
    <Section id="appointment" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Appointments"
            title="Book an OPD slot"
            description="Requests are confirmed by phone within two hours during working hours. For an emergency, call the number in the red bar instead."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Reception</dt>
                <dd className="mt-0.5">
                  <a
                    href={`tel:${hospital.reception.replace(/[\s+]/g, "")}`}
                    className="text-ink transition hover:text-accent"
                  >
                    {hospital.reception}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Emergency</dt>
                <dd className="mt-0.5">
                  <a href={emergencyHref} className="font-semibold text-ink transition hover:text-accent">
                    {hospital.emergency}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Address</dt>
                <dd className="mt-0.5 text-ink">
                  {hospital.address.line1}, {hospital.address.line2}
                  <br />
                  {hospital.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-bg p-7 sm:p-8"
          action="#"
          method="post"
          aria-label="OPD appointment request"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Patient name" htmlFor="dh-name">
              <Input id="dh-name" name="name" autoComplete="name" placeholder="Full name" required />
            </Field>
            <Field label="Phone" htmlFor="dh-phone">
              <Input id="dh-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98220 00000" required />
            </Field>
            <Field label="Department" htmlFor="dh-dept">
              <Select id="dh-dept" name="department" defaultValue="">
                <option value="" disabled>
                  Select a department
                </option>
                {appointmentDepartments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Preferred date" htmlFor="dh-date">
              <Input id="dh-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Reason for visit"
            htmlFor="dh-reason"
            hint="Do not upload reports or identification here. Bring them to the appointment."
            className="mt-5"
          >
            <Textarea id="dh-reason" name="reason" rows={4} placeholder="Referred by our family physician for a cardiology opinion..." />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Request appointment
          </Button>

          <p className="mt-4 flex items-start gap-2 rounded-card bg-accent-soft p-3.5 text-xs leading-relaxed text-ink">
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            This form is not monitored overnight. In an emergency call {hospital.emergency} or reach
            the emergency department directly.
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
      blurb={`${hospital.descriptor}. ${hospital.accreditation}. Emergency and trauma services operate 24 hours a day, every day.`}
      columns={[
        {
          title: "Specialities",
          links: [
            { label: "Cardiac sciences", href: "#specialities" },
            { label: "Neurosciences", href: "#specialities" },
            { label: "Orthopaedics", href: "#specialities" },
            { label: "Mother & child", href: "#specialities" },
          ],
        },
        {
          title: "Patients",
          links: [
            { label: "Find a consultant", href: "#doctors" },
            { label: "Health check packages", href: "#packages" },
            { label: "Insurance & TPA", href: "#insurance" },
            { label: "Visiting hours", href: "#patients" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: `Emergency ${hospital.emergency}`, href: emergencyHref },
            { label: hospital.reception, href: `tel:${hospital.reception.replace(/[\s+]/g, "")}` },
            { label: hospital.email, href: `mailto:${hospital.email}` },
            { label: hospital.address.city, href: "#appointment" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${hospital.name}. Information on this site is general and does not replace consultation with a registered medical practitioner.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
