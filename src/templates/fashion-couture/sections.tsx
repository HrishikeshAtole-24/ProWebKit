import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  appointmentTypes,
  atelier,
  collections,
  commission,
  faqs,
  fittings,
  hero,
  house,
  navLinks,
  press,
  stockists,
} from "./content";

const telHref = `tel:${house.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-tight">
      <span className="block font-serif text-lg font-normal uppercase tracking-[0.28em]">
        Rhea
      </span>
      <span
        className={cn(
          "block text-[8px] uppercase tracking-[0.34em]",
          inverted ? "text-brand-fg/45" : "text-muted",
        )}
      >
        Atelier
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Appointments", href: "#appointment" }} />;
}

/** Editorial hero. The dark panel stands in for a lookbook image. */
export function Hero() {
  return (
    <section id="top" className="bg-brand text-brand-fg">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-accent">{hero.season}</p>
            <h1 className="mt-8 font-serif text-6xl font-normal uppercase leading-[0.95] tracking-[0.02em] sm:text-8xl">
              {hero.title}
            </h1>
            <p className="mt-10 max-w-md text-sm leading-[1.95] text-brand-fg/60">{hero.subtitle}</p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand-fg/40">{hero.note}</p>

            <Link
              href="#collections"
              className="group mt-10 inline-flex items-center gap-3 border-b border-accent pb-1.5 text-[11px] uppercase tracking-[0.22em] text-accent transition hover:gap-5"
            >
              View the collection
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Lookbook placeholder — replace with campaign photography */}
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-[3/4] bg-brand-fg/[0.08]" aria-hidden />
            <div className="mt-10 aspect-[3/4] bg-brand-fg/[0.05]" aria-hidden />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Collections() {
  return (
    <Section id="collections">
      <SectionHeading eyebrow="Collections" title="Four collections since 2024" />

      <div className="mt-11 divide-y divide-line border-y border-line">
        {collections.map((collection) => (
          <article key={collection.name} className="grid gap-5 py-9 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div>
              <div className="flex items-baseline gap-4">
                <h3 className="font-serif text-3xl font-normal uppercase tracking-[0.06em] text-ink">
                  {collection.name}
                </h3>
                {collection.status === "Current" ? (
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Current</span>
                ) : null}
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                {collection.season} · {collection.pieces} pieces
              </p>
            </div>

            <div>
              <p className="max-w-prose text-sm leading-[1.9] text-muted">{collection.note}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted">
                {collection.materials}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Lookbook grid placeholder */}
      <div className="mt-11 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <div key={collection.name} className="aspect-[3/4] bg-subtle p-4" aria-hidden>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted">{collection.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">Replace these panels with lookbook photography.</p>
    </Section>
  );
}

export function Commission() {
  return (
    <Section id="commission" tone="subtle">
      <SectionHeading eyebrow="Commissions" title={commission.title} description={commission.body} />

      <ol className="mt-11 divide-y divide-line border-y border-line">
        {commission.steps.map((step) => (
          <li key={step.number} className="grid gap-3 py-7 lg:grid-cols-[3rem_1fr_8rem_1.5fr] lg:items-baseline lg:gap-10">
            <span className="font-serif text-sm text-accent">{step.number}</span>
            <h3 className="font-serif text-xl font-normal text-ink">{step.title}</h3>
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted">{step.duration}</span>
            <p className="text-sm leading-[1.85] text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Atelier() {
  return (
    <Section id="atelier">
      <div className="grid gap-11 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="The atelier" title={atelier.title} />
          <div className="mt-8 space-y-5">
            {atelier.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="text-sm leading-[1.95] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="aspect-[4/3] bg-subtle" aria-hidden />
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {atelier.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">{fact.label}</dt>
                <dd className="text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function Fittings() {
  return (
    <Section id="fittings" tone="brand">
      <SectionHeading
        inverted
        eyebrow="Fittings & timeline"
        title="How long a garment actually takes"
        description="Published because the honest answer is longer than most people expect, and it is better to know before the consultation than after."
      />

      <div className="mt-11 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">Typical timelines and number of fittings by garment</caption>
          <thead>
            <tr className="border-b border-brand-fg/20 text-[10px] uppercase tracking-[0.2em] text-brand-fg/45">
              <th scope="col" className="py-4 pr-6 font-normal">Garment</th>
              <th scope="col" className="py-4 pr-6 font-normal">Timeline</th>
              <th scope="col" className="py-4 pr-6 font-normal">Fittings</th>
              <th scope="col" className="py-4 font-normal">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-fg/10">
            {fittings.map((row) => (
              <tr key={row.garment}>
                <th scope="row" className="py-5 pr-6 text-left font-serif text-base font-normal text-brand-fg">
                  {row.garment}
                </th>
                <td className="py-5 pr-6 text-accent">{row.timeline}</td>
                <td className="py-5 pr-6 text-brand-fg/65">{row.fittings}</td>
                <td className="py-5 text-brand-fg/50">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Press() {
  return (
    <Section id="press" space="compact">
      <div className="grid gap-11 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading eyebrow="Press" title="Written about" />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {press.map((item) => (
              <li key={item.headline} className="py-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                  {item.publication} · {item.year}
                </p>
                <p className="mt-1.5 font-serif text-lg font-normal text-ink">{item.headline}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Stockists" title="Where to find the work" />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {stockists.map((stockist) => (
              <li key={stockist.name} className="flex items-baseline justify-between gap-6 py-5">
                <div>
                  <p className="font-serif text-lg font-normal text-ink">{stockist.name}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-muted">
                    {stockist.note}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-accent">
                  {stockist.city}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Appointment() {
  return (
    <Section id="appointment" tone="subtle">
      <div className="grid gap-11 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Appointments"
            title="The atelier is open by appointment only"
            description="Consultations run ninety minutes and are held Tuesday to Saturday. There is no charge for the first consultation."
          />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">Atelier</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {house.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${house.email}`} className="text-ink transition hover:text-accent">
                    {house.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">Address</dt>
                <dd className="mt-0.5 text-ink">
                  {house.address.line1}
                  <br />
                  {house.address.city}
                  <br />
                  <span className="text-muted">{house.hours}</span>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted">Questions</h3>
            <Accordion items={faqs} className="mt-5" />
          </div>
        </div>

        <form className="border border-line bg-surface p-8 sm:p-10" action="#" method="post" aria-label="Appointment enquiry">
          <h2 className="font-serif text-2xl font-normal text-ink">Request an appointment</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Tell us the occasion and the date. The studio replies within two working days.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="fc-name">
              <Input id="fc-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone" htmlFor="fc-phone">
              <Input id="fc-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98100 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="fc-email" className="mt-6">
            <Input id="fc-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </Field>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Enquiry" htmlFor="fc-type">
              <Select id="fc-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {appointmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Date of the occasion" htmlFor="fc-date">
              <Input id="fc-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Tell us about the commission"
            htmlFor="fc-brief"
            hint="The occasion, any silhouette you have in mind, and a budget range if you have one."
            className="mt-6"
          >
            <Textarea
              id="fc-brief"
              name="brief"
              rows={5}
              placeholder="A reception in February, and I would like something in the Nightjar register but lighter..."
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-8 w-full">
            Request appointment
          </Button>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${house.discipline} by ${house.designer}. Founded ${house.founded} in New Delhi. Embroidered in house, cut for one person.`}
      columns={[
        {
          title: "Work",
          links: [
            { label: "Collections", href: "#collections" },
            { label: "Commissions", href: "#commission" },
            { label: "Fittings & timeline", href: "#fittings" },
            { label: "Press", href: "#press" },
          ],
        },
        {
          title: "Atelier",
          links: [
            { label: "The atelier", href: "#atelier" },
            { label: "Stockists", href: "#press" },
            { label: "Appointments", href: "#appointment" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: house.phone, href: telHref },
            { label: house.email, href: `mailto:${house.email}` },
            { label: house.address.city, href: "#appointment" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${house.name}. All designs, patterns and imagery remain the property of the house.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
