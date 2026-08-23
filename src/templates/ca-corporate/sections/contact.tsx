import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { consultationTopics, faqs, firm } from "../content";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Before you call"
          title="Questions we are asked on every first call"
          description="If yours is not here, ask it on the discovery call — it is free and there is no pitch deck."
        />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}

const contactDetails = [
  { icon: Phone, label: "Telephone", value: firm.phone, href: `tel:${firm.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: firm.email, href: `mailto:${firm.email}` },
  {
    icon: MapPin,
    label: "Office",
    value: `${firm.address.line1}, ${firm.address.line2}, ${firm.address.city}`,
  },
  { icon: Clock, label: "Hours", value: firm.hours },
];

export function Contact() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Book a 45-minute consultation"
            description="Tell us the entity, the turnover and what is currently keeping you up. We will tell you what it takes to fix it — and whether you need us at all."
          />

          <dl className="mt-10 space-y-5">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-card bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink">
                    {href ? (
                      <a href={href} className="transition hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-8 rounded-card border border-line bg-bg p-5 text-xs leading-relaxed text-muted">
            <strong className="font-semibold text-ink">Note.</strong> Nothing on this site is
            professional advice, and contacting the firm does not create an engagement. ICAI
            guidelines restrict how chartered accountants may advertise; this template is written to
            stay inside them.
          </p>
        </div>

        {/* Static form — wire the action to your own handler or form service */}
        <form
          className="rounded-card border border-line bg-bg p-7 sm:p-8"
          action="#"
          method="post"
          aria-label="Consultation request"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="ca-name">
              <Input id="ca-name" name="name" autoComplete="name" placeholder="Rhea Kapoor" required />
            </Field>
            <Field label="Company / entity" htmlFor="ca-company">
              <Input id="ca-company" name="company" autoComplete="organization" placeholder="Northbound Pvt Ltd" />
            </Field>
            <Field label="Email" htmlFor="ca-email">
              <Input id="ca-email" name="email" type="email" autoComplete="email" placeholder="rhea@company.in" required />
            </Field>
            <Field label="Phone" htmlFor="ca-phone">
              <Input id="ca-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98200 00000" required />
            </Field>
          </div>

          <Field label="What do you need help with?" htmlFor="ca-topic" className="mt-5">
            <Select id="ca-topic" name="topic" defaultValue="">
              <option value="" disabled>
                Select a service line
              </option>
              {consultationTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </Select>
          </Field>

          <Field
            label="Brief background"
            htmlFor="ca-message"
            hint="Turnover, entity type and any open notices help us come prepared."
            className="mt-5"
          >
            <Textarea
              id="ca-message"
              name="message"
              rows={4}
              placeholder="We are a 40-person SaaS company on a March year end..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Request consultation
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            We reply within one working day. Your details are never shared.
          </p>
        </form>
      </div>
    </Section>
  );
}
