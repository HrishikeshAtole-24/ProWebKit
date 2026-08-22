import { Award, GraduationCap, Quote, Star, Users } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { about, clinic, testimonials, timings } from "../content";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Portrait placeholder — swap the inner block for a real photograph */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-card border border-line bg-brand-soft">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <span
                className="grid h-28 w-28 place-items-center rounded-full bg-brand text-3xl font-semibold text-brand-fg"
                aria-hidden
              >
                AR
              </span>
              <p className="text-lg font-semibold text-brand">{clinic.doctor}</p>
              <p className="text-sm text-brand/70">{clinic.designation}</p>
              <p className="mt-2 text-xs text-brand/50">
                Replace this block with a portrait photograph
              </p>
            </div>
          </div>

          <dl className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line shadow-soft">
            <div className="bg-bg px-4 py-4 text-center">
              <dt className="text-lg font-semibold text-ink">{clinic.experience}+ yrs</dt>
              <dd className="text-[11px] uppercase tracking-wide text-muted">Experience</dd>
            </div>
            <div className="bg-bg px-4 py-4 text-center">
              <dt className="text-lg font-semibold text-ink">11,000+</dt>
              <dd className="text-[11px] uppercase tracking-wide text-muted">Consultations</dd>
            </div>
          </dl>
        </div>

        <div className="pt-6 lg:pt-0">
          <SectionHeading eyebrow="About" title={about.title} />

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <GraduationCap className="h-4 w-4 text-brand" />
            Education & training
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {about.credentials.map((credential) => (
              <li key={credential.label} className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-sm font-medium text-ink">{credential.label}</span>
                <span className="text-sm text-muted">{credential.detail}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <Users className="h-4 w-4 text-brand" />
            Memberships
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.memberships.map((membership) => (
              <span
                key={membership}
                className="inline-flex items-center gap-1.5 rounded-full bg-subtle px-3 py-1.5 text-xs font-medium text-muted"
              >
                <Award className="h-3.5 w-3.5 text-accent" />
                {membership}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Timings() {
  return (
    <Section id="timings" tone="brand">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          inverted
          eyebrow="Visiting"
          title="Consultation timings"
          description="Morning slots fill first. Booking ahead by WhatsApp keeps the waiting room short for everyone."
        />

        <div className="overflow-hidden rounded-card border border-brand-fg/15">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Consultation timings by day</caption>
            <thead>
              <tr className="bg-brand-fg/[0.08] text-xs uppercase tracking-[0.14em] text-brand-fg/60">
                <th scope="col" className="px-5 py-3.5 font-semibold">
                  Day
                </th>
                <th scope="col" className="px-5 py-3.5 font-semibold">
                  Morning
                </th>
                <th scope="col" className="px-5 py-3.5 font-semibold">
                  Evening
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-fg/10">
              {timings.map((row) => (
                <tr key={row.day}>
                  <th scope="row" className="px-5 py-4 font-medium text-brand-fg">
                    {row.day}
                  </th>
                  <td className="px-5 py-4 text-brand-fg/75">{row.morning}</td>
                  <td className="px-5 py-4 text-brand-fg/75">{row.evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

export function PatientStories() {
  return (
    <Section id="stories">
      <SectionHeading
        align="center"
        eyebrow="Patient stories"
        title="In their words"
        description="Shared with permission. Names shortened at the request of the patients."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col rounded-card border border-line bg-surface p-7">
            <div className="flex gap-0.5 text-accent" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
              ))}
            </div>
            <Quote className="mt-4 h-5 w-5 text-brand/30" aria-hidden />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <span className="block text-sm font-semibold text-ink">{testimonial.author}</span>
              <span className="block text-xs text-muted">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
