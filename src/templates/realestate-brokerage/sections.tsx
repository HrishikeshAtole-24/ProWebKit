import Link from "next/link";
import { BadgeCheck, Check, Home, MessageCircle, Phone, X } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  agency,
  enquiryTypes,
  faqs,
  fee,
  hero,
  listings,
  localities,
  navLinks,
  paperwork,
  stats,
  testimonials,
  tracks,
} from "./content";

const telHref = `tel:${agency.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-card",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Home className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">Anchor</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Property Advisors
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Talk to us", href: "#enquire" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute -right-40 -top-24 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #d9452f, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-3xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-fg/20 px-3 py-1 text-xs font-medium text-brand-fg/80">
            <BadgeCheck className="h-3.5 w-3.5 text-accent" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-fg/70 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center rounded-card border border-brand-fg/25 px-6 text-sm font-semibold text-brand-fg transition hover:bg-brand-fg/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-brand-fg/15 bg-brand-fg/[0.05]">
        <Container>
          <dl className="grid grid-cols-2 divide-brand-fg/10 sm:grid-cols-4 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-7 text-center sm:px-6">
                <dt className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-fg/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

export function Listings() {
  return (
    <Section id="listings">
      <SectionHeading
        eyebrow="Current listings"
        title="Everything here has been stood inside"
        description="Verified within the last thirty days, with the owner met and the society position checked. Updated as things move."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <article
            key={listing.title}
            className="flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="relative aspect-[16/10] bg-subtle">
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-brand-fg">
                For {listing.type.toLowerCase()}
              </span>
              <span
                className={cn(
                  "absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold",
                  listing.status === "Available" ? "bg-accent-soft text-accent" : "bg-subtle text-muted",
                )}
              >
                {listing.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-bold text-ink">{listing.title}</h3>
              <p className="mt-2 text-xl font-bold text-brand">{listing.price}</p>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-line py-4 text-xs">
                <div>
                  <dt className="uppercase tracking-wide text-muted">Area</dt>
                  <dd className="mt-0.5 font-medium text-ink">{listing.area}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wide text-muted">Floor</dt>
                  <dd className="mt-0.5 font-medium text-ink">{listing.floor}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="uppercase tracking-wide text-muted">Facing</dt>
                  <dd className="mt-0.5 font-medium text-ink">{listing.facing}</dd>
                </div>
              </dl>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{listing.note}</p>

              <Link
                href="#enquire"
                className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-card border border-line text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                Ask about this
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Tracks() {
  return (
    <Section id="tracks" tone="surface">
      <SectionHeading
        eyebrow="However you are approaching this"
        title="Four different jobs, four different processes"
        description="A seller and a tenant need opposite things from a broker. Treating them the same is how most agencies end up serving neither well."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tracks.map((track) => (
          <article key={track.audience} className="rounded-card border border-line bg-bg p-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {track.audience}
            </h3>
            <p className="mt-3 text-lg font-bold text-ink">{track.promise}</p>
            <ul className="mt-5 space-y-3 border-t border-line pt-5">
              {track.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Localities() {
  return (
    <Section id="localities">
      <SectionHeading
        eyebrow="Locality guides"
        title="Four postcodes we can price from memory"
        description="Ranges are from registered transactions over the last twelve months, not from listing portals. Portals show asking prices, which is a different number."
      />

      <div className="mt-10 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[760px] text-left text-sm">
          <caption className="sr-only">Locality price ranges and notes</caption>
          <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Locality</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Sale</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Rent, monthly</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">What actually moves the price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {localities.map((locality) => (
              <tr key={locality.name}>
                <th scope="row" className="px-5 py-4 text-left font-bold text-ink">
                  {locality.name}
                </th>
                <td className="px-5 py-4 font-semibold text-brand">{locality.sale}</td>
                <td className="px-5 py-4 text-muted">{locality.rent}</td>
                <td className="px-5 py-4 text-muted">{locality.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Fee() {
  return (
    <Section id="fee" tone="brand">
      <SectionHeading inverted eyebrow="Our fee" title={fee.title} description={fee.body} />

      <div className="mt-10 overflow-hidden rounded-card border border-brand-fg/15">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Brokerage rates by service</caption>
          <thead className="bg-brand-fg/[0.08] text-xs uppercase tracking-[0.14em] text-brand-fg/60">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Service</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Rate</th>
              <th scope="col" className="hidden px-5 py-3.5 font-semibold sm:table-cell">Who pays</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-fg/10">
            {fee.rates.map((rate) => (
              <tr key={rate.service}>
                <th scope="row" className="px-5 py-4 text-left font-medium text-brand-fg">
                  {rate.service}
                  <span className="mt-0.5 block text-xs font-normal text-brand-fg/45">{rate.note}</span>
                </th>
                <td className="px-5 py-4 font-bold text-accent">{rate.rate}</td>
                <td className="hidden px-5 py-4 text-brand-fg/65 sm:table-cell">{rate.payer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {fee.never.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-fg/75">
            <X className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Paperwork() {
  return (
    <Section id="paperwork">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Paperwork"
          title="The part that actually goes wrong"
          description="Nobody loses money on a property because they picked the wrong tile. They lose it on a title chain nobody traced or an agreement nobody read."
        />

        <ol className="divide-y divide-line border-y border-line">
          {paperwork.map((item, index) => (
            <li key={item.step} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span className="text-sm font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-bold text-ink">{item.step}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Enquire() {
  return (
    <Section id="enquire" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you call a broker" />
          <Accordion items={faqs} className="mt-8" />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="rounded-card bg-subtle p-5">
                <blockquote className="text-sm leading-relaxed text-ink">{testimonial.quote}</blockquote>
                <figcaption className="mt-4 text-xs">
                  <span className="block font-semibold text-ink">{testimonial.author}</span>
                  <span className="block text-muted">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-bg p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Property enquiry"
        >
          <h2 className="text-2xl font-bold text-ink">Tell us what you need</h2>
          <p className="mt-2 text-sm text-muted">
            Budget included, please. It is the fastest way to be shown things you can actually
            transact on.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="rb-name">
              <Input id="rb-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Phone" htmlFor="rb-phone">
              <Input id="rb-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98670 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="rb-email" className="mt-5">
            <Input id="rb-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="I am" htmlFor="rb-type">
              <Select id="rb-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Budget" htmlFor="rb-budget">
              <Input id="rb-budget" name="budget" placeholder="₹3.5 cr / ₹80k a month" />
            </Field>
          </div>

          <Field
            label="What matters most?"
            htmlFor="rb-notes"
            hint="Locality, configuration, school catchment, commute, possession timeline."
            className="mt-5"
          >
            <Textarea
              id="rb-notes"
              name="notes"
              rows={4}
              placeholder="3 BHK in Powai, need possession by April, school run to Hiranandani Foundation..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Send enquiry
          </Button>

          <div className="mt-6 grid gap-3 border-t border-line pt-5 text-sm sm:grid-cols-2">
            <a href={telHref} className="flex items-center gap-2 text-ink transition hover:text-accent">
              <Phone className="h-4 w-4 text-accent" />
              {agency.phone}
            </a>
            <span className="flex items-center gap-2 text-ink">
              <MessageCircle className="h-4 w-4 text-accent" />
              {agency.whatsapp}
            </span>
          </div>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${agency.tagline} in Powai, Chandivali, Vikhroli and Kanjurmarg since ${agency.founded}. ${agency.rera}.`}
      columns={[
        {
          title: "Services",
          links: [
            { label: "Buying", href: "#tracks" },
            { label: "Selling", href: "#tracks" },
            { label: "Renting", href: "#tracks" },
            { label: "For landlords", href: "#tracks" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Current listings", href: "#listings" },
            { label: "Locality guides", href: "#localities" },
            { label: "Our commission", href: "#fee" },
            { label: "Paperwork", href: "#paperwork" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: agency.phone, href: telHref },
            { label: `WhatsApp ${agency.whatsapp}`, href: "#enquire" },
            { label: agency.email, href: `mailto:${agency.email}` },
            { label: agency.address.city, href: "#enquire" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${agency.name}. Prices are indicative and subject to owner confirmation. Nothing here is an offer or a valuation for statutory purposes.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
