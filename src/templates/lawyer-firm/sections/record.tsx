import { Section, SectionHeading } from "@/components/ui/section";
import { initials } from "@/lib/utils";
import { counsel, matters, testimonials } from "../content";

export function Counsel() {
  return (
    <Section id="counsel">
      <SectionHeading
        eyebrow="Counsel"
        title="The advocates who will argue your matter"
        description="Four partners lead the practice. Each takes conferences personally, and each appears on the matters they accept."
      />

      <div className="mt-11 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {counsel.map((person) => (
          <article key={person.name} className="bg-bg p-8">
            <div className="flex items-start gap-5">
              <span
                className="grid h-16 w-16 shrink-0 place-items-center border border-line bg-subtle font-serif text-lg font-semibold text-brand"
                aria-hidden
              >
                {initials(person.name)}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-semibold text-ink">{person.name}</h3>
                <p className="text-sm text-accent">{person.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{person.focus}</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted">{person.bio}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-xs">
              <div>
                <dt className="uppercase tracking-[0.14em] text-muted">Admitted</dt>
                <dd className="mt-1 text-ink">{person.admitted}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-muted">Education</dt>
                <dd className="mt-1 text-ink">{person.education}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Matters() {
  return (
    <Section id="matters" tone="subtle">
      <SectionHeading
        eyebrow="Reported matters"
        title="A selection of recent work"
        description="Listed with client consent, and only where the matter is a matter of public record. Outcomes in past matters do not guarantee a similar result."
      />

      <ol className="mt-11 divide-y divide-line border-y border-line">
        {matters.map((matter) => (
          <li key={matter.title} className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10">
            <div>
              <p className="font-serif text-2xl font-semibold text-accent">{matter.year}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{matter.forum}</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">{matter.title}</h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{matter.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function ClientVoices() {
  return (
    <Section tone="brand">
      <SectionHeading
        inverted
        eyebrow="Client comment"
        title="Attributed as far as confidentiality allows"
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.quote.slice(0, 20)} className="border-t border-accent pt-6">
            <blockquote className="font-serif text-lg leading-relaxed text-brand-fg/90">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-brand-fg/50">
              {testimonial.author}
              <span className="mx-2 text-accent">/</span>
              {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
