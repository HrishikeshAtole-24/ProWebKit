import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { specialisations, treatments } from "../content";

export function Specialisations() {
  return (
    <Section id="specialisations">
      <SectionHeading
        align="center"
        eyebrow="Areas of care"
        title="What the clinic treats"
        description="General medicine with a cardiology and metabolic focus. If a complaint needs a surgeon or a super-specialist, you will be told plainly and referred."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {specialisations.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="group rounded-card border border-line bg-bg p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-fg">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Treatments() {
  return (
    <Section id="treatments" tone="subtle">
      <SectionHeading
        eyebrow="On site"
        title="Diagnostics and procedures under one roof"
        description="Fewer referrals across the city means a diagnosis in one visit instead of three. Reports are read and explained by the same doctor who ordered them."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {treatments.map(({ icon: Icon, title, items }) => (
          <article key={title} className="rounded-card border border-line bg-bg p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-ink">{title}</h3>
            </div>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
