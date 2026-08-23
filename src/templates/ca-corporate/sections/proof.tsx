import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Avatar } from "@/components/ui/card";
import { initials } from "@/lib/utils";
import { approach, partners, testimonials } from "../content";

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading
        eyebrow="How we work"
        title="From first call to steady state in four weeks"
        description="Onboarding is the part most firms improvise. Ours is written down, and you know what happens at each stage before you sign."
      />

      <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {approach.map((item, index) => (
          <li key={item.step} className="relative">
            {/* Connector rail on wide screens */}
            {index < approach.length - 1 ? (
              <span
                className="absolute left-11 top-5 hidden h-px w-[calc(100%-1.5rem)] bg-line lg:block"
                aria-hidden
              />
            ) : null}
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-bg font-serif text-sm font-semibold text-accent">
              {item.step}
            </span>
            <h3 className="mt-5 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Partners() {
  return (
    <Section id="partners" tone="surface">
      <SectionHeading
        eyebrow="The people"
        title="You will know who signs your file"
        description="Three engagement partners, each leading a vertical. No account manager layer between you and the person taking responsibility."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <article
            key={partner.name}
            className="flex flex-col rounded-card border border-line bg-bg p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex items-center gap-4">
              <Avatar label={initials(partner.name)} className="h-14 w-14 text-base" />
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold text-ink">{partner.name}</h3>
                <p className="text-sm text-accent">{partner.role}</p>
              </div>
            </div>

            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{partner.bio}</p>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {partner.focus}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line pt-4">
              {partner.credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-full bg-subtle px-2.5 py-1 text-[11px] font-semibold text-muted"
                >
                  {credential}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" tone="brand">
      <SectionHeading
        inverted
        align="center"
        eyebrow="Client stories"
        title="Judged on the year after the pitch"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="flex flex-col rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-7"
          >
            <Quote className="h-6 w-6 text-accent" aria-hidden />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-fg/85">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-brand-fg/15 pt-4">
              <span className="block text-sm font-semibold text-brand-fg">{testimonial.author}</span>
              <span className="block text-xs text-brand-fg/55">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
