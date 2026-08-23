import { Section, SectionHeading } from "@/components/ui/section";
import { firmStory, practiceAreas } from "../content";

export function PracticeAreas() {
  return (
    <Section id="practice">
      <SectionHeading
        eyebrow="Practice areas"
        title="Eight practices, one bench of advocates"
        description="The firm is organised around forums rather than industries. What a matter needs is an advocate who has argued in front of that tribunal before."
      />

      <div className="mt-11 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {practiceAreas.map(({ icon: Icon, title, description }, index) => (
          <article key={title} className="group relative bg-bg p-7 transition-colors hover:bg-subtle">
            <span
              className="absolute right-6 top-6 font-serif text-sm text-line transition-colors group-hover:text-accent"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <Icon className="h-6 w-6 text-accent" />
            <h3 className="mt-5 font-serif text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function FirmStory() {
  return (
    <Section id="firm" tone="subtle">
      <div className="grid gap-11 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="The firm" title={firmStory.title} />
          <div className="mt-6 space-y-5">
            {firmStory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          {firmStory.commitments.map((commitment) => (
            <div key={commitment.title} className="py-6">
              <dt className="font-serif text-lg font-semibold text-ink">{commitment.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{commitment.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
