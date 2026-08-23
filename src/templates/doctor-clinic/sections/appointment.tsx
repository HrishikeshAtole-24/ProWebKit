import Link from "next/link";
import { AlertTriangle, Car, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { appointmentReasons, clinic, faqs } from "../content";

const telHref = `tel:${clinic.phone.replace(/[\s+]/g, "")}`;

export function Faq() {
  return (
    <Section id="faq" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Good to know"
          title="Common questions"
          description="Anything else, call the front desk — they answer between 09:00 and 20:00."
        />
        <Accordion items={faqs} className="border-line" />
      </div>
    </Section>
  );
}

export function Appointment() {
  return (
    <Section id="appointment">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <form
          className="order-2 rounded-card border border-line bg-bg p-7 shadow-soft sm:p-8 lg:order-1"
          action="#"
          method="post"
          aria-label="Appointment request"
        >
          <h2 className="text-2xl font-semibold text-ink">Request an appointment</h2>
          <p className="mt-2 text-sm text-muted">
            Send a request and the front desk will confirm a slot by phone within a few hours.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Patient name" htmlFor="dr-name">
              <Input id="dr-name" name="name" autoComplete="name" placeholder="Sneha Kulkarni" required />
            </Field>
            <Field label="Phone" htmlFor="dr-phone">
              <Input id="dr-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98450 00000" required />
            </Field>
            <Field label="Email" htmlFor="dr-email" className="sm:col-span-2">
              <Input id="dr-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
            </Field>
            <Field label="Reason for visit" htmlFor="dr-reason">
              <Select id="dr-reason" name="reason" defaultValue="">
                <option value="" disabled>
                  Select a reason
                </option>
                {appointmentReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Preferred date" htmlFor="dr-date">
              <Input id="dr-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Symptoms or notes"
            htmlFor="dr-notes"
            hint="Do not send reports or identification documents through this form."
            className="mt-5"
          >
            <Textarea
              id="dr-notes"
              name="notes"
              rows={4}
              placeholder="Breathlessness on climbing stairs for the past three weeks..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Request appointment
          </Button>

          <p className="mt-4 flex items-start gap-2 rounded-card bg-accent-soft p-3.5 text-xs leading-relaxed text-ink">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            This form is not monitored around the clock and is not for emergencies.{" "}
            {clinic.emergencyNote}
          </p>
        </form>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Find us"
            title="Sadashivanagar, Bengaluru"
            description="Two minutes from Sankey Tank, with parking behind the building."
          />

          {/* Map placeholder — drop in an iframe or a static map image */}
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-card border border-line bg-subtle">
            <div className="grid-lines flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <MapPin className="h-8 w-8 text-brand" />
              <p className="text-sm font-medium text-ink">
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
                <br />
                {clinic.address.city}
              </p>
              <p className="text-xs text-muted">Replace with a Google Maps embed</p>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {[
              { icon: Phone, label: clinic.phone, href: telHref, note: "Front desk" },
              { icon: MessageCircle, label: clinic.whatsapp, href: "#appointment", note: "WhatsApp bookings" },
              { icon: Mail, label: clinic.email, href: `mailto:${clinic.email}`, note: "Reports & queries" },
              { icon: Car, label: "Parking behind the building", note: "Wheelchair accessible entrance" },
            ].map(({ icon: Icon, label, href, note }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  {href ? (
                    <Link href={href} className="text-sm font-medium text-ink transition hover:text-brand">
                      {label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-ink">{label}</span>
                  )}
                  <p className="text-xs text-muted">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
