import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  agencies,
  availability,
  book,
  bookingTypes,
  campaigns,
  digitals,
  editorial,
  hero,
  model,
  navLinks,
  press,
  runway,
  skills,
  stats,
} from "./content";

const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block text-[14px] font-medium uppercase tracking-[0.24em]">Noor</span>
      <span
        className={cn(
          "mt-1.5 block text-[8px] uppercase tracking-[0.36em]",
          inverted ? "text-brand-fg/45" : "text-muted",
        )}
      >
        Contractor
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Booking", href: "#booking" }} />;
}

/* ── Hero: name at scale, one plate, nothing else ──────────────────── */
export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="py-14 sm:py-20">
        <div className="flex items-baseline justify-between gap-6">
          <p className="pk-fade text-[10px] uppercase tracking-[0.32em] text-muted" style={delay(0)}>
            {hero.season}
          </p>
          <p className="pk-fade text-[10px] uppercase tracking-[0.24em] text-accent" style={delay(80)}>
            {hero.note}
          </p>
        </div>

        <h1 className="mt-10 text-[3.25rem] font-medium uppercase leading-[0.86] tracking-[-0.03em] sm:text-[6rem] lg:text-[8.5rem]">
          {hero.nameLines.map((line, index) => (
            <span key={line} className="pk-clip block" style={delay(160 + index * 150)}>
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-2 sm:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="pk-wipe pk-zoom overflow-hidden bg-subtle"
              style={delay(420 + index * 140)}
            >
              <span
                className={cn(
                  "block aspect-[3/4] w-full",
                  index === 1 ? "bg-brand-soft" : "bg-subtle",
                )}
                aria-hidden
              />
            </div>
          ))}
        </div>

        <p
          className="pk-fade mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6 text-[10px] uppercase tracking-[0.24em] text-muted"
          style={delay(880)}
        >
          <span>{hero.strapline}</span>
          <span>{model.travels}</span>
        </p>
      </Container>
    </section>
  );
}

/* ── The book ──────────────────────────────────────────────────────── */
export function Book() {
  return (
    <Section id="book">
      <SectionHeading
        eyebrow="The book"
        title="Selected work"
        description="Replace each plate with a tearsheet. Credits sit under the frame because photographers and stylists get named here."
      />

      <div className="pk-stagger mt-10 grid auto-rows-auto grid-cols-2 gap-2 sm:grid-cols-4">
        {book.map((item, index) => (
          <figure key={item.title} style={stagger(index)} className={cn("group", item.span)}>
            <div className="pk-zoom overflow-hidden bg-subtle">
              <span className={cn("block w-full bg-brand-soft", item.ratio)} aria-hidden />
            </div>
            <figcaption className="mt-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink">{item.title}</p>
              <p className="mt-1 text-[11px] text-muted">{item.detail}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                {item.credit}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Digitals ──────────────────────────────────────────────────────── */
export function Digitals() {
  return (
    <Section id="digitals" tone="surface">
      <SectionHeading eyebrow="Digitals" title={digitals.updated} description={digitals.note} />

      <div className="pk-stagger mt-10 grid grid-cols-2 gap-px bg-line sm:grid-cols-4 lg:grid-cols-8">
        {digitals.frames.map((frame, index) => (
          <figure key={frame} style={stagger(index)} className="pk-zoom overflow-hidden bg-bg">
            <span className="block aspect-[3/4] w-full bg-subtle" aria-hidden />
            <figcaption className="p-2.5 text-[9px] uppercase tracking-[0.16em] text-muted">
              {frame}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Measurements ──────────────────────────────────────────────────── */
export function Stats() {
  return (
    <Section id="stats">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Measurements" title="Current, and kept current" />

          <dl className="pk-stagger mt-9 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} style={stagger(index)} className="bg-bg p-5">
                <dt className="text-[9px] uppercase tracking-[0.2em] text-muted">{stat.label}</dt>
                <dd className="mt-2 text-[17px] tabular-nums text-ink">{stat.value}</dd>
                <dd className="mt-0.5 text-[11px] tabular-nums text-muted">{stat.metric}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-accent">Skills & terms</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {skills.map((skill) => (
              <li key={skill} className="py-4 text-[15px] leading-relaxed text-muted">
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Terms are stated here rather than negotiated on set, which saves everyone a difficult
            conversation on the day.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ── Campaigns & runway ────────────────────────────────────────────── */
export function Work() {
  return (
    <Section id="work" tone="surface">
      <SectionHeading eyebrow="Campaigns & runway" title="Selected clients and seasons" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] text-left">
            <caption className="sr-only">Selected campaigns</caption>
            <thead>
              <tr className="border-b border-ink/25 text-[10px] uppercase tracking-[0.2em] text-muted">
                <th scope="col" className="py-3 pr-6 font-normal">Year</th>
                <th scope="col" className="py-3 pr-6 font-normal">Client</th>
                <th scope="col" className="py-3 pr-6 font-normal">Type</th>
                <th scope="col" className="py-3 font-normal">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {campaigns.map((item) => (
                <tr key={`${item.year}-${item.client}`}>
                  <th scope="row" className="py-4 pr-6 text-left text-sm tabular-nums font-normal text-accent">
                    {item.year}
                  </th>
                  <td className="py-4 pr-6 text-[15px] uppercase tracking-[0.05em] text-ink">
                    {item.client}
                  </td>
                  <td className="py-4 pr-6 text-sm text-muted">{item.type}</td>
                  <td className="py-4 text-sm text-muted">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-accent">Runway</p>
          <ol className="pk-stagger mt-6 divide-y divide-line border-y border-line">
            {runway.map((item, index) => (
              <li key={item.season} style={stagger(index)} className="py-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink">{item.season}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.shows}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ── Editorial & press ─────────────────────────────────────────────── */
export function Editorial() {
  return (
    <Section id="editorial">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Editorial" title="In print" />
          <ol className="pk-stagger mt-9 divide-y divide-line border-y border-line">
            {editorial.map((item, index) => (
              <li key={item.publication} style={stagger(index)} className="grid gap-1 py-4 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="text-sm tabular-nums text-accent">{item.year}</span>
                <div>
                  <p className="text-[15px] uppercase tracking-[0.05em] text-ink">{item.publication}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading eyebrow="Press" title="Written about" />
          <div className="mt-9 space-y-8">
            {press.map((item) => (
              <figure key={item.source} className="border-t border-accent/50 pt-5">
                <blockquote className="text-lg leading-[1.7] text-ink">{item.line}</blockquote>
                <figcaption className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted">
                  {item.source} · {item.year}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Availability ──────────────────────────────────────────────────── */
export function Availability() {
  return (
    <Section id="availability" tone="brand" space="compact">
      <SectionHeading
        inverted
        eyebrow="Availability"
        title="Where I am, and when"
        description="Kept current so a booker does not have to ask. Confirm every window through the agency for the market."
      />

      <ol className="pk-stagger mt-9 divide-y divide-brand-fg/15 border-y border-brand-fg/15">
        {availability.map((item, index) => (
          <li
            key={item.window}
            style={stagger(index)}
            className="grid gap-2 py-4 sm:grid-cols-[13rem_1fr_9rem] sm:items-baseline sm:gap-6"
          >
            <span className="text-[15px] tabular-nums text-brand-fg">{item.window}</span>
            <span className="text-sm uppercase tracking-[0.14em] text-brand-fg/65">{item.place}</span>
            <span
              className={cn(
                "text-[11px] uppercase tracking-[0.18em] sm:text-right",
                item.status === "Available" ? "text-accent" : "text-brand-fg/50",
              )}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ── Agencies ──────────────────────────────────────────────────────── */
export function Agencies() {
  return (
    <Section id="agencies">
      <SectionHeading
        eyebrow="Agencies"
        title="Book through the market"
        description="Every booking goes through the agency for the territory. Direct enquiries are forwarded there, so going straight to them is faster."
      />

      <div className="pk-stagger mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {agencies.map((agency, index) => (
          <article key={agency.market} style={stagger(index)} className="bg-bg p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{agency.market}</p>
            <h3 className="mt-3 text-[17px] uppercase tracking-[0.05em] text-ink">{agency.agency}</h3>
            <p className="mt-1.5 text-sm text-muted">{agency.contact}</p>
            <a href={`mailto:${agency.email}`} className="pk-link mt-4 block w-fit text-sm text-ink">
              {agency.email}
            </a>
            <a
              href={`tel:${agency.phone.replace(/[\s+]/g, "")}`}
              className="pk-link mt-1.5 block w-fit text-sm text-muted"
            >
              {agency.phone}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Direct booking ────────────────────────────────────────────────── */
export function Booking() {
  return (
    <Section id="booking" tone="surface">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          align="center"
          eyebrow="Booking"
          title="Direct enquiry"
          description="For anything that does not yet have an agency attached — a casting, a test, a press request. It reaches the mother agency."
        />

        <form className="mt-10 border border-line bg-bg p-8 sm:p-10" action="#" method="post" aria-label="Booking enquiry">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="tm-name">
              <Input id="tm-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Client or publication" htmlFor="tm-client">
              <Input id="tm-client" name="client" autoComplete="organization" placeholder="Brand, magazine or agency" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="tm-email" className="mt-6">
            <Input id="tm-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </Field>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Type of booking" htmlFor="tm-type">
              <Select id="tm-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {bookingTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Shoot date" htmlFor="tm-date">
              <Input id="tm-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Usage, location and budget"
            htmlFor="tm-details"
            hint="Usage decides the rate. Stating it up front saves a round of email."
            className="mt-6"
          >
            <Textarea
              id="tm-details"
              name="details"
              rows={4}
              placeholder="Two-day campaign shoot in Mumbai, print and digital, India only, 12 months…"
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-8 w-full">
            Send enquiry
          </Button>

          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.18em] text-muted">
            Forwarded to Anima Creatives, Mumbai
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
      blurb={`${model.discipline} · editorial, runway and campaign. Based in ${model.based}. ${model.travels}.`}
      columns={[
        {
          title: "Portfolio",
          links: [
            { label: "The book", href: "#book" },
            { label: "Digitals", href: "#digitals" },
            { label: "Campaigns & runway", href: "#work" },
            { label: "Editorial & press", href: "#editorial" },
          ],
        },
        {
          title: "Details",
          links: [
            { label: "Measurements", href: "#stats" },
            { label: "Availability", href: "#availability" },
            { label: "Agencies", href: "#agencies" },
          ],
        },
        {
          title: "Booking",
          links: agencies.slice(0, 3).map((agency) => ({
            label: `${agency.market.split(" — ")[0]} — ${agency.agency}`,
            href: `mailto:${agency.email}`,
          })),
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${model.name}. Tearsheets and campaign imagery reproduced by permission of the respective publishers and clients.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
