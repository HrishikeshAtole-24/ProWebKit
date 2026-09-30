import { Play } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  actor,
  agent,
  awards,
  casting,
  credits,
  enquiryTypes,
  gallery,
  hero,
  navLinks,
  press,
  reel,
  skills,
  training,
} from "./content";

const stagger = (index: number) => ({ "--i": index }) as React.CSSProperties;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block text-[15px] font-medium uppercase tracking-[0.2em]">Aarav Nair</span>
      <span
        className={cn(
          "mt-1.5 block text-[8px] uppercase tracking-[0.34em]",
          inverted ? "text-brand-fg/45" : "text-muted",
        )}
      >
        {actor.discipline}
      </span>
    </span>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Contact agent", href: "#contact" }} />;
}

/* ── Hero: a spotlight falling on a dark stage ─────────────────────── */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute left-1/2 top-[-30%] h-[900px] w-[900px] -translate-x-1/2 opacity-[0.16]"
        style={{ background: "radial-gradient(closest-side, #E0A63C, transparent 70%)" }}
        aria-hidden
      />

      <Container className="relative py-16 sm:py-24">
        <p
          className="pk-fade flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent"
          style={delay(0)}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <h1 className="text-[3.5rem] font-medium uppercase leading-[0.9] tracking-[-0.02em] sm:text-7xl lg:text-[6rem]">
              {hero.titleLines.map((line, index) => (
                <span key={line} className="pk-clip block" style={delay(160 + index * 150)}>
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="pk-fade mt-8 text-[11px] uppercase tracking-[0.26em] text-accent"
              style={delay(520)}
            >
              {hero.strapline}
            </p>

            <dl
              className="pk-fade mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-7 text-sm"
              style={delay(620)}
            >
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Based</dt>
                <dd className="mt-1 text-ink">{actor.based}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Unions</dt>
                <dd className="mt-1 text-ink">{actor.union}</dd>
              </div>
            </dl>

            <p className="pk-fade mt-6 text-[11px] uppercase tracking-[0.2em] text-muted" style={delay(700)}>
              {hero.note}
            </p>
          </div>

          {/* Headshot plate — replace with the commercial headshot. */}
          <div className="pk-wipe pk-zoom overflow-hidden bg-subtle" style={delay(300)}>
            <span className="block aspect-[4/5] w-full bg-brand-soft" aria-hidden />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Showreel ──────────────────────────────────────────────────────── */
export function Reel() {
  return (
    <Section id="reel">
      <SectionHeading
        eyebrow="Showreel"
        title={`${reel.runtime} · ${reel.updated}`}
        description={reel.body}
      />

      {/* Player plate — drop an embed in here. */}
      <div className="pk-zoom group relative mt-10 overflow-hidden border border-line bg-subtle">
        <span className="block aspect-video w-full bg-brand-soft" aria-hidden />
        <span className="absolute inset-0 grid place-items-center" aria-hidden>
          <span className="grid h-16 w-16 place-items-center rounded-full border border-accent/60 bg-bg/70 text-accent backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </span>
      </div>

      <ol className="pk-stagger mt-8 divide-y divide-line border-y border-line">
        {reel.clips.map((clip, index) => (
          <li
            key={clip.title}
            style={stagger(index)}
            className="grid gap-2 py-4 sm:grid-cols-[5rem_1fr_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="text-sm tabular-nums text-accent">{clip.at}</span>
            <span className="text-[15px] uppercase tracking-[0.05em] text-ink">{clip.title}</span>
            <span className="text-sm text-muted">
              {clip.role}
              <span className="mx-2 text-line">·</span>
              {clip.type}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ── Credits: laid out like a call sheet ───────────────────────────── */
function CreditTable({
  heading,
  rows,
}: {
  heading: string;
  rows: { year: string; production: string; role: string; company: string; director: string }[];
}) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-[10px] uppercase tracking-[0.26em] text-accent">{heading}</h3>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <caption className="sr-only">{heading} credits</caption>
          <thead>
            <tr className="border-b border-line text-[10px] uppercase tracking-[0.2em] text-muted">
              <th scope="col" className="py-3 pr-6 font-normal">Year</th>
              <th scope="col" className="py-3 pr-6 font-normal">Production</th>
              <th scope="col" className="py-3 pr-6 font-normal">Role</th>
              <th scope="col" className="py-3 pr-6 font-normal">Company</th>
              <th scope="col" className="py-3 font-normal">Director</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={`${row.year}-${row.production}`} className="transition-colors hover:bg-surface">
                <th scope="row" className="py-4 pr-6 text-left text-sm tabular-nums font-normal text-accent">
                  {row.year}
                </th>
                <td className="py-4 pr-6 text-[15px] uppercase tracking-[0.04em] text-ink">
                  {row.production}
                </td>
                <td className="py-4 pr-6 text-[15px] text-muted">{row.role}</td>
                <td className="py-4 pr-6 text-sm text-muted">{row.company}</td>
                <td className="py-4 text-sm text-muted">{row.director}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Credits() {
  return (
    <Section id="credits" tone="surface">
      <SectionHeading eyebrow="Credits" title="Selected screen, stage and commercial" />
      <CreditTable heading="Screen" rows={credits.screen} />
      <CreditTable heading="Stage" rows={credits.stage} />
      <CreditTable heading="Commercial" rows={credits.commercial} />
    </Section>
  );
}

/* ── Casting information ───────────────────────────────────────────── */
export function Casting() {
  return (
    <Section id="casting">
      <SectionHeading
        eyebrow="Casting information"
        title="The details a casting director needs on one screen"
      />

      <dl className="pk-stagger mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
        {casting.map((item, index) => (
          <div key={item.label} style={stagger(index)} className="bg-bg p-5">
            <dt className="text-[10px] uppercase tracking-[0.18em] text-muted">{item.label}</dt>
            <dd className="mt-2 text-[15px] text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { heading: "Accents", items: skills.accents },
          { heading: "Languages", items: skills.languages },
          { heading: "Physical", items: skills.physical },
          { heading: "Other", items: skills.other },
        ].map((group) => (
          <div key={group.heading} className="border-t border-accent/40 pt-5">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-accent">{group.heading}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Training & awards ─────────────────────────────────────────────── */
export function Training() {
  return (
    <Section id="training" tone="surface" space="compact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Training" title="Where it was learned" />
          <ol className="pk-stagger mt-9 divide-y divide-line border-y border-line">
            {training.map((item, index) => (
              <li key={item.years} style={stagger(index)} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <span className="text-sm tabular-nums text-accent">{item.years}</span>
                <span className="text-[15px] text-muted">{item.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading eyebrow="Awards" title="Recognition" />
          <ol className="pk-stagger mt-9 divide-y divide-line border-y border-line">
            {awards.map((item, index) => (
              <li key={item.year} style={stagger(index)} className="grid gap-1 py-4 sm:grid-cols-[5rem_1fr] sm:gap-6">
                <span className="text-sm tabular-nums text-accent">{item.year}</span>
                <span className="text-[15px] text-muted">{item.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ── Press ─────────────────────────────────────────────────────────── */
export function Press() {
  return (
    <Section id="press">
      <SectionHeading eyebrow="Press" title="Written about" />

      <div className="pk-stagger mt-10 grid gap-10 lg:grid-cols-3">
        {press.map((item, index) => (
          <figure key={item.source} style={stagger(index)} className="border-t border-accent/40 pt-6">
            <blockquote className="text-lg leading-[1.7] text-ink">{item.line}</blockquote>
            <figcaption className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted">
              {item.source}
              <span className="mx-2 text-accent">/</span>
              {item.subject}, {item.year}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Gallery ───────────────────────────────────────────────────────── */
export function Gallery() {
  return (
    <Section id="gallery" tone="surface" space="compact">
      <SectionHeading
        eyebrow="Gallery"
        title="Headshots & stills"
        description="Replace each plate with the corresponding image. High-resolution files are available from the agent."
      />

      <div className="pk-stagger mt-10 grid grid-cols-2 gap-px bg-line lg:grid-cols-6">
        {gallery.map((item, index) => (
          <figure key={item.label} style={stagger(index)} className="pk-zoom overflow-hidden bg-bg">
            <span className={cn("block w-full bg-brand-soft", item.ratio)} aria-hidden />
            <figcaption className="p-3 text-[9px] uppercase tracking-[0.18em] text-muted">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ── Representation & contact ──────────────────────────────────────── */
export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Representation"
            title="All enquiries through the agent"
            description="Casting, press and commercial enquiries go to representation. Direct messages are forwarded there anyway, so this is faster."
          />

          <div className="mt-10 space-y-8">
            <div className="border-t border-accent/40 pt-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-accent">
                Worldwide · {agent.territory}
              </p>
              <p className="mt-3 text-lg uppercase tracking-[0.06em] text-ink">{agent.agency}</p>
              <p className="mt-1 text-sm text-muted">{agent.name}</p>
              <p className="mt-3 space-y-1 text-sm">
                <a href={`mailto:${agent.email}`} className="pk-link block w-fit text-ink">
                  {agent.email}
                </a>
                <a href={`tel:${agent.phone.replace(/[\s+]/g, "")}`} className="pk-link mt-1 block w-fit text-ink">
                  {agent.phone}
                </a>
              </p>
            </div>

            <div className="border-t border-line pt-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted">United Kingdom</p>
              <p className="mt-3 text-lg uppercase tracking-[0.06em] text-ink">{agent.uk.agency}</p>
              <p className="mt-1 text-sm text-muted">{agent.uk.name}</p>
              <a href={`mailto:${agent.uk.email}`} className="pk-link mt-3 block w-fit text-sm text-ink">
                {agent.uk.email}
              </a>
            </div>

            <div className="border-t border-line pt-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Direct</p>
              <a href={`mailto:${actor.email}`} className="pk-link mt-3 block w-fit text-sm text-ink">
                {actor.email}
              </a>
              <p className="mt-2 text-xs text-muted">Monitored, but the agent will always be quicker.</p>
            </div>
          </div>
        </div>

        <form
          className="h-fit border border-line bg-surface p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Casting enquiry"
        >
          <h2 className="text-2xl font-medium uppercase tracking-[0.04em] text-ink">Enquire</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            This form reaches the agent directly. Self-tape requests are turned around within 48
            hours where the deadline allows.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Field label="Name" htmlFor="ta-name">
              <Input id="ta-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Company" htmlFor="ta-company">
              <Input id="ta-company" name="company" autoComplete="organization" placeholder="Production or publication" required />
            </Field>
          </div>

          <Field label="Email" htmlFor="ta-email" className="mt-6">
            <Input id="ta-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </Field>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Nature of enquiry" htmlFor="ta-type">
              <Select id="ta-type" name="type" defaultValue="">
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
            <Field label="Shoot or deadline date" htmlFor="ta-date">
              <Input id="ta-date" name="date" type="date" />
            </Field>
          </div>

          <Field
            label="Details"
            htmlFor="ta-details"
            hint="Role, dates, location and whether a self-tape or a meeting is required."
            className="mt-6"
          >
            <Textarea
              id="ta-details"
              name="details"
              rows={4}
              placeholder="Series regular, six-month shoot in Kochi from February, self-tape by the 14th…"
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-8 w-full">
            Send to agent
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
      blurb={`${actor.discipline}, screen and stage. ${actor.based}. ${actor.languages}. ${actor.union}.`}
      columns={[
        {
          title: "Work",
          links: [
            { label: "Showreel", href: "#reel" },
            { label: "Credits", href: "#credits" },
            { label: "Gallery", href: "#gallery" },
            { label: "Press", href: "#press" },
          ],
        },
        {
          title: "Details",
          links: [
            { label: "Casting information", href: "#casting" },
            { label: "Training", href: "#training" },
            { label: "Awards", href: "#training" },
          ],
        },
        {
          title: "Representation",
          links: [
            { label: `${agent.agency} — ${agent.email}`, href: `mailto:${agent.email}` },
            { label: `${agent.uk.agency} — UK`, href: `mailto:${agent.uk.email}` },
            { label: agent.phone, href: `tel:${agent.phone.replace(/[\s+]/g, "")}` },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${actor.name}. Production stills reproduced by permission of the respective producers.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
