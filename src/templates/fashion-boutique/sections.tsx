import Link from "next/link";
import { Check, Leaf, Mail, MapPin, MessageCircle, Phone, Scissors } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  care,
  drop,
  fabric,
  faqs,
  hero,
  label,
  madeToOrder,
  navLinks,
  sizing,
  stockists,
  wholesaleTypes,
} from "./content";

const telHref = `tel:${label.phone.replace(/[\s+]/g, "")}`;

const stockTone: Record<string, string> = {
  "In stock": "bg-brand-soft text-brand",
  "Low stock": "bg-accent-soft text-accent",
  "Sold out": "bg-subtle text-muted",
  "Made to order": "bg-accent-soft text-accent",
};

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-sm",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Scissors className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold tracking-tight">{label.name}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.2em]",
            inverted ? "text-brand-fg/50" : "text-muted",
          )}
        >
          Kochi · since {label.founded}
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Wholesale", href: "#wholesale" }} />;
}

export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-subtle">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-sm bg-bg px-3 py-1.5 text-xs font-semibold text-brand">
              <Leaf className="h-3.5 w-3.5 text-accent" />
              {hero.badge}
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-[1.14] tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-[1.85] text-muted">{hero.subtitle}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center rounded-card bg-brand px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand/90"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-card border border-line bg-bg px-6 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Lookbook placeholder — replace with product photography */}
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 aspect-[4/5] bg-brand-soft" aria-hidden />
            <div className="flex flex-col gap-2">
              <div className="aspect-square bg-accent-soft" aria-hidden />
              <div className="flex-1 bg-line" aria-hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Drop() {
  return (
    <Section id="drop">
      <SectionHeading eyebrow="The current drop" title={drop.name} description={drop.note} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {drop.pieces.map((piece) => (
          <article
            key={piece.name}
            className="flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="relative aspect-[4/5] bg-subtle">
              <span
                className={cn(
                  "absolute left-4 top-4 rounded-sm px-2.5 py-1 text-[11px] font-semibold",
                  stockTone[piece.stock] ?? "bg-subtle text-muted",
                )}
              >
                {piece.stock}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-lg font-semibold text-ink">{piece.name}</h3>
                <span className="shrink-0 text-sm font-bold text-brand">{piece.price}</span>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted">{piece.fabric}</p>
              <p className="mt-4 border-t border-line pt-3 text-xs text-muted">{piece.sizes}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Fabric() {
  return (
    <Section id="fabric" tone="brand">
      <SectionHeading inverted eyebrow="Fabric & provenance" title={fabric.title} description={fabric.body} />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-2">
        {fabric.sources.map((source) => (
          <article key={source.material} className="bg-brand p-7">
            <h3 className="text-base font-semibold text-brand-fg">{source.material}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">{source.cluster}</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-fg/70">{source.detail}</p>
          </article>
        ))}
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {fabric.commitments.map((commitment) => (
          <li key={commitment} className="flex items-start gap-3 text-sm leading-relaxed text-brand-fg/75">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {commitment}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function MadeToOrder() {
  return (
    <Section id="made-to-order">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading eyebrow="Made to order" title={madeToOrder.title} description={madeToOrder.body} />

        <div className="grid gap-6 sm:grid-cols-2">
          {madeToOrder.points.map((point) => (
            <article key={point.title} className="rounded-card border border-line bg-surface p-6">
              <h3 className="font-serif text-base font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Size() {
  return (
    <Section id="size" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Size guide"
            title="Body measurements, not garment measurements"
            description="Measure yourself and match the row. Our pieces are cut loose, so the garment will measure larger than the numbers below."
          />

          <div className="mt-10 overflow-x-auto rounded-card border border-line">
            <table className="w-full min-w-[420px] text-left text-sm">
              <caption className="sr-only">Body measurements by size</caption>
              <thead className="bg-bg text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Size</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Chest</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Waist</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Hip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-bg">
                {sizing.map((row) => (
                  <tr key={row.size}>
                    <th scope="row" className="px-5 py-3.5 text-left font-bold text-brand">
                      {row.size}
                    </th>
                    <td className="px-5 py-3.5 text-muted">{row.chest}</td>
                    <td className="px-5 py-3.5 text-muted">{row.waist}</td>
                    <td className="px-5 py-3.5 text-muted">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-card border border-line bg-bg p-7">
          <h3 className="font-serif text-lg font-semibold text-ink">Caring for indigo</h3>
          <ul className="mt-5 space-y-3.5">
            {care.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Stockists() {
  return (
    <Section id="stockists" space="compact">
      <SectionHeading
        eyebrow="Stockists"
        title="Where to try things on"
        description={label.hours}
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stockists.map((stockist) => (
          <article key={stockist.name} className="bg-surface p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-base font-semibold text-ink">{stockist.name}</h3>
              <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-accent">
                {stockist.city}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{stockist.note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Wholesale() {
  return (
    <Section id="wholesale" tone="subtle">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you order" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Studio</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {label.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5 text-ink">{label.whatsapp}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${label.email}`} className="text-ink transition hover:text-accent">
                    {label.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Studio</dt>
                <dd className="mt-0.5 text-ink">
                  {label.address.line1}, {label.address.line2}
                  <br />
                  {label.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-bg p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Wholesale enquiry"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink">Wholesale & stockist enquiry</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            We work with a small number of stores. Minimum order is twenty pieces, and the line sheet
            follows a first conversation.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="fb-name">
              <Input id="fb-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Store or brand" htmlFor="fb-store">
              <Input id="fb-store" name="store" autoComplete="organization" placeholder="Store name" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="fb-email" className="mt-5">
            <Input id="fb-email" name="email" type="email" autoComplete="email" placeholder="you@store.com" required />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Enquiry type" htmlFor="fb-type">
              <Select id="fb-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {wholesaleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="City" htmlFor="fb-city">
              <Input id="fb-city" name="city" placeholder="Goa" />
            </Field>
          </div>

          <Field
            label="Tell us about the store"
            htmlFor="fb-note"
            hint="What else you carry, and roughly what your customers spend."
            className="mt-5"
          >
            <Textarea id="fb-note" name="note" rows={4} placeholder="A concept store in Sangolda carrying six India-made labels..." />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Send enquiry
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            We reply to every enquiry, including the ones we cannot take.
          </p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${label.discipline}. Founded ${label.founded} by ${label.founder} in Kochi. Handloom cotton, natural indigo, and a label that names the maker.`}
      columns={[
        {
          title: "Shop",
          links: [
            { label: "The current drop", href: "#drop" },
            { label: "Made to order", href: "#made-to-order" },
            { label: "Size guide", href: "#size" },
            { label: "Stockists", href: "#stockists" },
          ],
        },
        {
          title: "The label",
          links: [
            { label: "Fabric & provenance", href: "#fabric" },
            { label: "Care", href: "#size" },
            { label: "Questions", href: "#wholesale" },
            { label: "Wholesale", href: "#wholesale" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: label.phone, href: telHref },
            { label: `WhatsApp ${label.whatsapp}`, href: "#wholesale" },
            { label: label.email, href: `mailto:${label.email}` },
            { label: label.address.city, href: "#stockists" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${label.name}. Natural dye varies between batches; colour differences are a property of the process, not a defect.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
