import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  albums,
  approach,
  collectionNotes,
  collections,
  day,
  enquiryFunctions,
  faqs,
  hero,
  navLinks,
  stats,
  studio,
  testimonials,
  work,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[\s+]/g, "")}`;

const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block font-serif text-[19px] font-normal tracking-[0.02em]">Saanjh</span>
      <span
        className={cn(
          "mt-1 block text-[8.5px] uppercase tracking-[0.32em]",
          inverted ? "text-brand-fg/50" : "text-muted",
        )}
      >
        Studio
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Enquire", href: "#enquire" }} />;
}

/* ── Hero: full-bleed plate that drifts as you scroll ──────────────── */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Replace this plate with a photograph. It drifts on scroll. */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="pk-drift h-full w-full"
          style={{
            background:
              "radial-gradient(120% 90% at 78% 8%, rgb(150 79 64 / 0.20), transparent 62%), radial-gradient(90% 70% at 10% 95%, rgb(42 35 28 / 0.12), transparent 60%)",
          }}
        />
      </div>

      <Container className="relative flex min-h-[86vh] flex-col justify-end py-16 sm:py-20">
        <p
          className="pk-fade flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-accent"
          style={delay(0)}
        >
          <span aria-hidden className="h-px w-8 bg-accent" />
          {hero.eyebrow}
        </p>

        <h1 className="mt-8 font-serif text-[2.9rem] font-normal leading-[1.02] tracking-[-0.015em] sm:text-6xl lg:text-[4.75rem]">
          {hero.titleLines.map((line, index) => (
            <span key={line} className="pk-clip block" style={delay(180 + index * 150)}>
              {index === hero.titleLines.length - 1 ? <em className="not-italic text-accent">{line}</em> : line}
            </span>
          ))}
        </h1>

        <p className="pk-fade mt-9 max-w-xl text-[17px] leading-[1.85] text-muted" style={delay(660)}>
          {hero.subtitle}
        </p>

        <Link
          href="#work"
          className="pk-fade group mt-12 inline-flex w-fit items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink"
          style={delay(800)}
        >
          <span className="pk-link">{hero.scrollHint}</span>
          <ArrowDown className="h-3.5 w-3.5 text-accent transition-transform duration-500 group-hover:translate-y-1" />
        </Link>
      </Container>
    </section>
  );
}

/* ── Recent weddings ───────────────────────────────────────────────── */
export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Recent weddings"
        title="Six from the last two years"
        description="Replace each plate with a photograph from the wedding. The captions are the point — a place and a sentence, never a hashtag."
      />

      <div className="pk-stagger mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {work.map((item, index) => (
          <figure key={item.couple} style={stagger(index)} className="break-inside-avoid">
            <div className="pk-zoom overflow-hidden bg-subtle">
              <span className={cn("block w-full bg-brand-soft", item.ratio)} aria-hidden />
            </div>
            <figcaption className="mt-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl font-normal text-ink">{item.couple}</h3>
                <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-accent">
                  {item.place}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dl className="pk-stagger mt-16 grid grid-cols-2 border-y border-line sm:grid-cols-4 sm:divide-x sm:divide-line">
        {stats.map((stat, index) => (
          <div key={stat.label} style={stagger(index)} className="px-2 py-7 sm:px-6">
            <dt className="font-serif text-[1.8rem] tabular-nums text-ink">{stat.value}</dt>
            <dd className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* ── Approach ──────────────────────────────────────────────────────── */
export function Approach() {
  return (
    <Section id="approach" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Approach" title={approach.title} />
          <div className="mt-8 space-y-5">
            {approach.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 22)} className="text-[15px] leading-[1.9] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <dl className="pk-stagger divide-y divide-line border-y border-line lg:mt-2">
          {approach.principles.map((principle, index) => (
            <div key={principle.title} style={stagger(index)} className="py-6">
              <dt className="font-serif text-lg font-normal text-ink">{principle.title}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted">{principle.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ── Collections ───────────────────────────────────────────────────── */
export function Collections() {
  return (
    <Section id="collections">
      <SectionHeading
        eyebrow="Collections"
        title="Three collections, priced in public"
        description={studio.booking + ", which is why the dates go early and why we would rather you knew the number before the call."}
      />

      <div className="pk-stagger mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
        {collections.map((collection, index) => (
          <article
            key={collection.name}
            style={stagger(index)}
            className={cn(
              "flex flex-col border bg-bg p-8 transition-transform duration-500 hover:-translate-y-1",
              collection.featured ? "border-accent" : "border-line",
            )}
          >
            {collection.featured ? (
              <span className="mb-5 inline-flex w-fit bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-accent-fg">
                Most booked
              </span>
            ) : null}

            <h3 className="font-serif text-2xl font-normal text-ink">{collection.name}</h3>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-accent">{collection.scope}</p>

            <p className="mt-6 font-serif text-[2rem] tabular-nums text-ink">{collection.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{collection.detail}</p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
              {collection.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#enquire"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center text-[11px] uppercase tracking-[0.18em] transition",
                collection.featured
                  ? "pk-sheen relative overflow-hidden bg-brand text-brand-fg hover:opacity-95"
                  : "border border-line text-ink hover:border-accent hover:text-accent",
              )}
            >
              Check our dates
            </Link>
          </article>
        ))}
      </div>

      <ul className="mt-8 grid gap-2.5 border border-line bg-surface p-6 sm:grid-cols-2">
        {collectionNotes.map((note) => (
          <li key={note} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {note}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── The day ───────────────────────────────────────────────────────── */
export function TheDay() {
  return (
    <Section id="day" tone="brand">
      <SectionHeading
        inverted
        eyebrow="The day"
        title="Where we are, and when"
        description="So you can plan the timeline around it, and so your family knows what to expect from us."
      />

      <ol className="pk-stagger mt-12 divide-y divide-brand-fg/15 border-y border-brand-fg/15">
        {day.map((item, index) => (
          <li
            key={item.time}
            style={stagger(index)}
            className="grid gap-3 py-6 lg:grid-cols-[14rem_1fr] lg:gap-12"
          >
            <h3 className="font-serif text-xl font-normal text-brand-fg">{item.time}</h3>
            <p className="max-w-2xl text-[15px] leading-relaxed text-brand-fg/70">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ── Albums & prints ───────────────────────────────────────────────── */
export function Albums() {
  return (
    <Section id="albums" space="compact">
      <SectionHeading
        eyebrow="Albums & prints"
        title="The part that outlives the drive"
        description="Nobody reopens a folder in fifteen years. They pick up an album, which is why one is included rather than sold to you afterwards."
      />

      <div className="pk-stagger mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {albums.map((album, index) => (
          <article key={album.name} style={stagger(index)} className="bg-bg p-7">
            <h3 className="font-serif text-lg font-normal text-ink">{album.name}</h3>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-accent">{album.spec}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{album.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Couples ───────────────────────────────────────────────────────── */
export function Testimonials() {
  return (
    <Section id="testimonials" tone="surface">
      <SectionHeading align="center" eyebrow="Couples" title="In their words" />

      <div className="pk-stagger mt-12 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <figure key={testimonial.author} style={stagger(index)} className="border-t border-accent/40 pt-6">
            <blockquote className="font-serif text-lg font-normal leading-[1.7] text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted">
              {testimonial.author}
              <span className="mx-2 text-accent">/</span>
              {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Enquiry ───────────────────────────────────────────────────────── */
export function Enquire() {
  return (
    <Section id="enquire">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you write" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${studio.email}`} className="pk-link text-ink">
                    {studio.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Studio</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="pk-link text-ink">
                    {studio.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Based</dt>
                <dd className="mt-0.5 text-ink">{studio.base}</dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit border border-line bg-surface p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Wedding enquiry"
        >
          <h2 className="font-serif text-2xl font-normal text-ink">Tell us about the wedding</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Dates first — they are the only thing we cannot solve later. Everything else we can talk
            through on a call.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Field label="Your names" htmlFor="pw-names">
              <Input id="pw-names" name="names" autoComplete="name" placeholder="Aditi & Rohan" required />
            </Field>
            <Field label="Phone" htmlFor="pw-phone">
              <Input id="pw-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98220 00000" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="pw-email" className="mt-6">
            <Input id="pw-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </Field>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="What are we photographing?" htmlFor="pw-scope">
              <Select id="pw-scope" name="scope" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {enquiryFunctions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="First date" htmlFor="pw-date">
              <Input id="pw-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Where, and anything we should know"
            htmlFor="pw-notes"
            hint="Venue, guest count, and the one photograph you would be upset not to have."
            className="mt-6"
          >
            <Textarea
              id="pw-notes"
              name="notes"
              rows={4}
              placeholder="Alibaug, about 180 people, three days. My grandmother is 92 and this is the whole reason for the date…"
            />
          </Field>

          <Button type="submit" variant="primary" size="lg" className="pk-sheen relative mt-8 w-full overflow-hidden">
            Send enquiry
            <ArrowRight className="h-4 w-4" />
          </Button>

          <p className="mt-4 text-center text-xs text-muted">
            We reply to every enquiry within two days, including the dates we cannot take.
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
      blurb={`${studio.discipline} by ${studio.photographer}, since ${studio.since}. ${studio.base}. ${studio.booking}.`}
      columns={[
        {
          title: "Work",
          links: [
            { label: "Recent weddings", href: "#work" },
            { label: "Approach", href: "#approach" },
            { label: "The day", href: "#day" },
            { label: "Albums & prints", href: "#albums" },
          ],
        },
        {
          title: "Booking",
          links: [
            { label: "Collections", href: "#collections" },
            { label: "Couples", href: "#testimonials" },
            { label: "Questions", href: "#enquire" },
            { label: "Check our dates", href: "#enquire" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.phone, href: telHref },
            { label: "Pune, India", href: "#enquire" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.name}. All photographs remain the copyright of the studio; couples receive a personal-use licence in perpetuity.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
