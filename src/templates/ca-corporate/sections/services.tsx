import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { industries, services } from "../content";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we do"
        title="Six practice lines, one accountable partner"
        description="Most firms sell you a service. We take ownership of an obligation — the filing, the audit, the assessment — and report back against it."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, points }) => (
          <article key={title} className="group bg-bg p-7 transition-colors hover:bg-surface">
            <span className="grid h-11 w-11 place-items-center rounded-card bg-brand-soft text-brand transition-colors group-hover:bg-accent group-hover:text-accent-fg">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            {points ? (
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Industries() {
  return (
    <Section id="industries" tone="surface" space="compact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Industries"
          title="Sector knowledge you should not have to explain"
          description="Inventory valuation in manufacturing, revenue recognition in SaaS, RERA in real estate, 12A and 80G for trusts — the treatment differs, and so does the scrutiny."
        />

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {industries.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3.5 bg-bg px-5 py-5">
              <Icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-ink">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
