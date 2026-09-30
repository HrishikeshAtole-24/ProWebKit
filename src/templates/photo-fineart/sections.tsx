import { Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  artist,
  biography,
  collections,
  enquiryTypes,
  exhibitions,
  hero,
  navLinks,
  press,
  printNotes,
  prints,
  publications,
  series,
  statement,
} from "./content";

const telHref = `tel:${artist.phone.replace(/[\s+]/g, "")}`;

const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block text-[15px] font-normal uppercase tracking-[0.26em]">Kabir Sen</span>
      <span
        className={cn(
          "mt-1.5 block text-[8px] uppercase tracking-[0.34em]",
          inverted ? "text-brand-fg/45" : "text-muted",
        )}
      >
        {artist.discipline}
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Enquiries", href: "#enquire" }} />;
}

/**
 * Hero. Deliberately still — one plate, one caption, a lot of paper.
 * A gallery site that animates loudly is a gallery site nobody trusts.
 */
export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="pk-fade text-[10px] uppercase tracking-[0.34em] text-accent" style={delay(0)}>
          {hero.note}
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          {/* Plate — replace with the photograph. */}
          <div className="pk-wipe pk-zoom overflow-hidden bg-subtle" style={delay(200)}>
            <span className="block aspect-[5/4] w-full bg-brand-soft" aria-hidden />
          </div>

          <div>
            <h1 className="pk-clip text-[2.6rem] font-normal uppercase leading-[1.02] tracking-[0.04em] sm:text-5xl" style={delay(420)}>
              {hero.currentSeries}
            </h1>
            <p className="pk-fade mt-4 text-[11px] uppercase tracking-[0.24em] text-muted" style={delay(540)}>
              {hero.years}
            </p>
            <p className="pk-fade mt-8 max-w-sm text-[15px] leading-[1.95] text-muted" style={delay(620)}>
              {hero.line}
            </p>
            <p className="pk-fade mt-10 border-t border-line pt-5 text-[11px] uppercase tracking-[0.2em] text-muted" style={delay(700)}>
              {artist.born}
              <br />
              {artist.based}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Series ────────────────────────────────────────────────────────── */
export function Series() {
  return (
    <Section id="series">
      <SectionHeading eyebrow="Series" title="Four bodies of work" />

      <ol className="pk-stagger mt-12 divide-y divide-line border-y border-line">
        {series.map((item, index) => (
          <li
            key={item.title}
            style={stagger(index)}
            className="grid gap-5 py-8 lg:grid-cols-[3rem_1fr_1.3fr] lg:gap-12"
          >
            <span className="text-[11px] uppercase tracking-[0.24em] text-accent">{item.index}</span>

            <div>
              <h3 className="text-2xl font-normal uppercase tracking-[0.05em] text-ink">{item.title}</h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                {item.years} · {item.plates} plates
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-accent">{item.status}</p>
            </div>

            <div>
              <p className="max-w-prose text-[15px] leading-[1.9] text-muted">{item.note}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted">{item.medium}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Plate index — replace each with a photograph from the series. */}
      <div className="pk-stagger mt-14 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {series.map((item, index) => (
          <figure key={item.title} style={stagger(index)} className="pk-zoom overflow-hidden bg-bg">
            <span className="block aspect-[4/5] w-full bg-subtle" aria-hidden />
            <figcaption className="bg-bg p-4 text-[10px] uppercase tracking-[0.2em] text-muted">
              {item.title} · {item.years}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">Replace each plate with a photograph from the series.</p>
    </Section>
  );
}

/* ── Statement ─────────────────────────────────────────────────────── */
export function Statement() {
  return (
    <Section id="statement" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <SectionHeading eyebrow="Statement" title={statement.title} />

        <div>
          <div className="space-y-6">
            {statement.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 22)} className="max-w-prose text-[16px] leading-[2] text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote className="mt-12 border-l border-accent pl-7 text-xl font-normal leading-[1.75] text-ink">
            {statement.quote}
          </blockquote>
        </div>
      </div>
    </Section>
  );
}

/* ── Exhibitions ───────────────────────────────────────────────────── */
export function Exhibitions() {
  return (
    <Section id="exhibitions">
      <SectionHeading eyebrow="Exhibitions" title="Selected exhibitions" />

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <caption className="sr-only">Selected solo and group exhibitions</caption>
          <thead>
            <tr className="border-b border-ink/25 text-[10px] uppercase tracking-[0.22em] text-muted">
              <th scope="col" className="py-3.5 pr-6 font-normal">Year</th>
              <th scope="col" className="py-3.5 pr-6 font-normal">Exhibition</th>
              <th scope="col" className="py-3.5 pr-6 font-normal">Venue</th>
              <th scope="col" className="py-3.5 font-normal">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {exhibitions.map((show) => (
              <tr key={`${show.year}-${show.title}-${show.venue}`} className="group">
                <th scope="row" className="py-5 pr-6 text-left align-top text-sm tabular-nums font-normal text-accent">
                  {show.year}
                </th>
                <td className="py-5 pr-6 align-top text-[15px] uppercase tracking-[0.06em] text-ink">
                  {show.title}
                </td>
                <td className="py-5 pr-6 align-top text-[15px] text-muted">
                  {show.venue}
                  <span className="mt-0.5 block text-[11px] uppercase tracking-[0.18em] text-muted">
                    {show.city}
                  </span>
                </td>
                <td className="py-5 align-top text-[11px] uppercase tracking-[0.18em] text-muted">
                  {show.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ── Prints & editions ─────────────────────────────────────────────── */
export function Prints() {
  return (
    <Section id="prints" tone="surface">
      <SectionHeading
        eyebrow="Prints & editions"
        title="Editions and prices"
        description="Published so a collector does not have to ask. Availability moves; the price list does not change within an edition."
      />

      <div className="mt-12 overflow-x-auto border border-line bg-bg">
        <table className="w-full min-w-[680px] text-left">
          <caption className="sr-only">Print sizes, editions and prices</caption>
          <thead>
            <tr className="border-b border-line text-[10px] uppercase tracking-[0.2em] text-muted">
              <th scope="col" className="px-6 py-4 font-normal">Size</th>
              <th scope="col" className="px-6 py-4 font-normal">Dimensions</th>
              <th scope="col" className="px-6 py-4 font-normal">Edition</th>
              <th scope="col" className="px-6 py-4 font-normal">Process</th>
              <th scope="col" className="px-6 py-4 font-normal">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {prints.map((print) => (
              <tr key={print.size}>
                <th scope="row" className="px-6 py-5 text-left text-[15px] font-normal uppercase tracking-[0.06em] text-ink">
                  {print.size}
                </th>
                <td className="px-6 py-5 text-sm tabular-nums text-muted">{print.dimensions}</td>
                <td className="px-6 py-5 text-sm text-muted">{print.edition}</td>
                <td className="px-6 py-5 text-sm text-muted">{print.process}</td>
                <td className="px-6 py-5 text-[15px] tabular-nums text-accent">{print.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
        {printNotes.map((note) => (
          <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
            {note}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── Publications, collections & press ─────────────────────────────── */
export function Publications() {
  return (
    <Section id="publications">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Publications" title="In print" />
          <ol className="pk-stagger mt-10 divide-y divide-line border-y border-line">
            {publications.map((item, index) => (
              <li key={item.title} style={stagger(index)} className="grid gap-1 py-5 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="text-sm tabular-nums text-accent">{item.year}</span>
                <div>
                  <p className="text-[15px] uppercase tracking-[0.05em] text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading eyebrow="Collections" title="Held by" />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {collections.map((collection) => (
              <li key={collection} className="py-4 text-[15px] text-muted">
                {collection}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-[10px] uppercase tracking-[0.24em] text-accent">Press</h3>
          <div className="mt-6 space-y-7">
            {press.map((item) => (
              <figure key={item.source}>
                <blockquote className="text-lg font-normal leading-[1.7] text-ink">
                  {item.line}
                </blockquote>
                <figcaption className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-muted">
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

/* ── Biography ─────────────────────────────────────────────────────── */
export function Biography() {
  return (
    <Section id="biography" tone="surface" space="compact">
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <SectionHeading eyebrow="Biography" title="Selected" />
        <ol className="pk-stagger divide-y divide-line border-y border-line">
          {biography.map((item, index) => (
            <li key={item.year} style={stagger(index)} className="grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <span className="text-sm tabular-nums text-accent">{item.year}</span>
              <span className="text-[15px] text-muted">{item.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ── Enquiries ─────────────────────────────────────────────────────── */
export function Enquire() {
  return (
    <Section id="enquire">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Enquiries"
            title="Prints, exhibitions and press"
            description="Print sales are handled by the gallery. Everything else comes to the studio directly."
          />

          <dl className="mt-10 space-y-6 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-muted">Studio</dt>
                <dd className="mt-1">
                  <a href={`mailto:${artist.studioEmail}`} className="pk-link text-ink">
                    {artist.studioEmail}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-muted">Print sales</dt>
                <dd className="mt-1">
                  <a href={`mailto:${artist.galleryEmail}`} className="pk-link text-ink">
                    {artist.galleryEmail}
                  </a>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-muted">
                    {artist.represented}
                  </span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-muted">Telephone</dt>
                <dd className="mt-1">
                  <a href={telHref} className="pk-link text-ink">
                    {artist.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form className="h-fit border border-line p-8 sm:p-10" action="#" method="post" aria-label="Studio enquiry">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="pf-name">
              <Input id="pf-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Institution or gallery" htmlFor="pf-org">
              <Input id="pf-org" name="organisation" autoComplete="organization" placeholder="Optional" />
            </Field>
          </div>

          <Field label="Email" htmlFor="pf-email" className="mt-6">
            <Input id="pf-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </Field>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Nature of enquiry" htmlFor="pf-type">
              <Select id="pf-type" name="type" defaultValue="">
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
            <Field label="Series of interest" htmlFor="pf-series">
              <Select id="pf-series" name="series" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {series.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
                <option value="Several">Several</option>
              </Select>
            </Field>
          </div>

          <Field label="Message" htmlFor="pf-message" className="mt-6">
            <Textarea
              id="pf-message"
              name="message"
              rows={5}
              placeholder="We are preparing a group exhibition on rivers for autumn 2027 and would like to discuss two works from Silt…"
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="mt-8 w-full">
            Send enquiry
          </Button>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-muted">
            The studio replies within five working days
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
      blurb={`${artist.born}. ${artist.based}. ${artist.represented}.`}
      columns={[
        {
          title: "Work",
          links: [
            { label: "Series", href: "#series" },
            { label: "Statement", href: "#statement" },
            { label: "Exhibitions", href: "#exhibitions" },
            { label: "Publications", href: "#publications" },
          ],
        },
        {
          title: "Acquire",
          links: [
            { label: "Prints & editions", href: "#prints" },
            { label: "Collections", href: "#publications" },
            { label: "Biography", href: "#biography" },
            { label: "Enquiries", href: "#enquire" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: artist.studioEmail, href: `mailto:${artist.studioEmail}` },
            { label: artist.galleryEmail, href: `mailto:${artist.galleryEmail}` },
            { label: artist.phone, href: telHref },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${artist.name}. All photographs are the copyright of the artist. No reproduction without written permission.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
