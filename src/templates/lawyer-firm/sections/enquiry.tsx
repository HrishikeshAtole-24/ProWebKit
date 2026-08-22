import { Building2, Lock, Mail, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { enquiryMatters, faqs, firm } from "../content";

export function Offices() {
  return (
    <Section id="offices">
      <SectionHeading
        eyebrow="Offices"
        title="Three offices, one bench"
        description="Conferences are held in chambers or by video. Filings are made from the office nearest the forum."
      />

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        {firm.offices.map((office) => (
          <article key={office.city} className="bg-bg p-8">
            <div className="flex items-center gap-2.5">
              <Building2 className="h-4 w-4 text-accent" />
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{office.role}</p>
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">{office.city}</h3>
            <address className="mt-3 text-sm not-italic leading-relaxed text-muted">
              {office.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
              <span className="font-semibold uppercase tracking-[0.14em] text-ink">Appears before</span>
              <br />
              {office.courts}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" tone="subtle">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Enquiries"
          title="What to expect"
          description="The answers below cover most of what a prospective client asks before the first conference."
        />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

export function Enquiry() {
  return (
    <Section id="enquiry">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Request a consultation"
            description="Send a short summary of the dispute. A partner reviews every enquiry and responds within two working days."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8">
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Chambers</dt>
                <dd className="mt-0.5 text-sm text-ink">
                  <a href={`tel:${firm.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                    {firm.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5 text-sm text-ink">
                  <a href={`mailto:${firm.email}`} className="hover:text-accent">
                    {firm.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <p className="mt-8 flex gap-3 border border-line bg-subtle p-5 text-xs leading-relaxed text-muted">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>
              Enquiries are treated as privileged, but an attorney-client relationship arises only
              once the firm accepts the matter in writing following a conflict check. Please do not
              send confidential documents with a first enquiry.
            </span>
          </p>
        </div>

        {/* Static form — wire the action to your own handler or form service */}
        <form className="border border-line bg-surface p-8 sm:p-10" action="#" method="post" aria-label="Consultation enquiry">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name" htmlFor="law-name">
              <Input id="law-name" name="name" autoComplete="name" placeholder="A. Krishnan" required />
            </Field>
            <Field label="Organisation" htmlFor="law-org">
              <Input id="law-org" name="organisation" autoComplete="organization" placeholder="Optional" />
            </Field>
            <Field label="Email" htmlFor="law-email">
              <Input id="law-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </Field>
            <Field label="Telephone" htmlFor="law-phone">
              <Input id="law-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98100 00000" required />
            </Field>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Nature of matter" htmlFor="law-matter">
              <Select id="law-matter" name="matter" defaultValue="">
                <option value="" disabled>
                  Select a practice area
                </option>
                {enquiryMatters.map((matter) => (
                  <option key={matter} value={matter}>
                    {matter}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Forum, if proceedings exist" htmlFor="law-forum">
              <Input id="law-forum" name="forum" placeholder="e.g. Delhi High Court" />
            </Field>
          </div>

          <Field
            label="Summary of the matter"
            htmlFor="law-summary"
            hint="Include the names of opposing parties so we can run a conflict check."
            className="mt-6"
          >
            <Textarea
              id="law-summary"
              name="summary"
              rows={5}
              placeholder="A supply agreement was terminated in March. We have issued a notice invoking arbitration..."
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-8 w-full">
            Submit enquiry
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            Submitting this form does not create an attorney-client relationship.
          </p>
        </form>
      </div>
    </Section>
  );
}
