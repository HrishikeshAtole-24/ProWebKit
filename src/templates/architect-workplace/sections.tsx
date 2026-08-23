import Link from "next/link";
import { ArrowRight, Check, Layers, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  briefTypes,
  costNote,
  costTiers,
  density,
  faqs,
  hero,
  navLinks,
  phasing,
  projects,
  scope,
  stats,
  studio,
  sustainability,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <Layers className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-tight">{studio.name}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Workplace design & build
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Send a brief", href: "#brief" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.6) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{hero.eyebrow}</p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-fg/70 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center gap-2 rounded-card bg-accent px-6 text-sm font-semibold text-accent-fg transition hover:bg-accent/90"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
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
              <div key={stat.label} className="px-2 py-7 sm:px-6">
                <dt className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-fg/50">
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

export function Cost() {
  return (
    <Section id="cost">
      <SectionHeading
        eyebrow="Cost per seat"
        title="The number your CFO will actually ask for"
        description="Published before design begins, because a fit-out budget approved on a vague per-square-foot rate is a budget that gets revised twice."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
        {costTiers.map((tier) => (
          <article
            key={tier.tier}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-8",
              tier.featured ? "border-brand shadow-lift lg:-mt-4 lg:pb-12" : "border-line",
            )}
          >
            {tier.featured ? (
              <span className="mb-4 inline-flex w-fit rounded bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                Most specified
              </span>
            ) : null}

            <h3 className="text-lg font-bold text-ink">{tier.tier}</h3>
            <p className="mt-1.5 text-sm text-muted">{tier.suits}</p>

            <p className="mt-6 text-2xl font-bold text-brand">{tier.perSeat}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">per seat, all in</p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#brief"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                tier.featured
                  ? "bg-accent text-accent-fg hover:bg-accent/90"
                  : "border border-line text-ink hover:border-brand hover:text-brand",
              )}
            >
              Model a {tier.tier.toLowerCase()} floor
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-card border border-line bg-surface p-6 text-sm leading-relaxed text-muted">
        {costNote}
      </p>
    </Section>
  );
}

export function Scope() {
  return (
    <Section id="scope" tone="surface">
      <SectionHeading
        eyebrow="What we deliver"
        title="Four stages, one contract"
        description="Design-and-build under a single agreement removes the gap between the drawing and the site, and removes the argument about who owns a discrepancy."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {scope.map((stage) => (
          <article key={stage.stage} className="bg-bg p-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {stage.stage}
            </h3>
            <ul className="mt-5 space-y-3">
              {stage.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Density() {
  return (
    <Section id="density">
      <SectionHeading eyebrow="Density & space standards" title={density.title} description={density.body} />

      <div className="mt-12 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Space standards by workplace type</caption>
          <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Workplace type</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Per person</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Meeting ratio</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Suits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {density.standards.map((standard) => (
              <tr key={standard.type}>
                <th scope="row" className="px-5 py-4 text-left font-semibold text-ink">
                  {standard.type}
                </th>
                <td className="px-5 py-4 font-bold text-brand">{standard.sqft}</td>
                <td className="px-5 py-4 text-muted">{standard.ratio}</td>
                <td className="px-5 py-4 text-muted">{standard.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Phasing() {
  return (
    <Section id="phasing" tone="brand">
      <SectionHeading inverted eyebrow="Live-office phasing" title={phasing.title} description={phasing.body} />

      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {phasing.steps.map((step) => (
          <li key={step.phase} className="rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {step.phase}
            </span>
            <h3 className="mt-4 text-base font-bold text-brand-fg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-fg/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Completed fit-outs"
        title="Named by sector, because most clients prefer it that way"
        description="Client names, photographs and references are shared under NDA at the pitch stage."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.client + project.city} className="rounded-card border border-line bg-surface p-7">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-bold text-ink">{project.client}</h3>
              <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-accent">
                {project.city}
              </span>
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-4 border-y border-line py-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Seats</dt>
                <dd className="mt-0.5 font-bold text-brand">{project.seats}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Area</dt>
                <dd className="mt-0.5 font-medium text-ink">{project.area}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Duration</dt>
                <dd className="mt-0.5 font-medium text-ink">{project.duration}</dd>
              </div>
            </dl>

            <p className="mt-4 text-sm leading-relaxed text-muted">{project.note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Sustainability() {
  return (
    <Section id="sustainability" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Sustainability"
          title="Measured, not claimed"
          description="Every line below is evidenced with a certificate or a site record you can audit."
        />
        <dl className="divide-y divide-line border-y border-line">
          {sustainability.map((item) => (
            <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="flex items-start gap-2 text-sm font-semibold text-ink">
                <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item.label}
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Brief() {
  return (
    <Section id="brief">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="Asked by facilities and finance" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Studio</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {studio.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Projects</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${studio.email}`} className="text-ink transition hover:text-accent">
                    {studio.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Coverage</dt>
                <dd className="mt-0.5 text-ink">{studio.coverage}</dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="h-fit rounded-card border border-line bg-surface p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Project brief"
        >
          <h2 className="text-2xl font-bold text-ink">Send us a brief</h2>
          <p className="mt-2 text-sm text-muted">
            Give us headcount and a building and you will get an indicative per-seat cost within
            three working days — before any design fee.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="aw-name">
              <Input id="aw-name" name="name" autoComplete="name" placeholder="Your name" required />
            </Field>
            <Field label="Company" htmlFor="aw-company">
              <Input id="aw-company" name="company" autoComplete="organization" placeholder="Company" required />
            </Field>
            <Field label="Work email" htmlFor="aw-email">
              <Input id="aw-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </Field>
            <Field label="Phone" htmlFor="aw-phone">
              <Input id="aw-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98200 00000" />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <Field label="Project type" htmlFor="aw-type" className="sm:col-span-2">
              <Select id="aw-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {briefTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Headcount" htmlFor="aw-seats">
              <Input id="aw-seats" name="seats" type="number" min={1} placeholder="220" />
            </Field>
          </div>

          <Field
            label="Building & timeline"
            htmlFor="aw-brief"
            hint="Building name, floor plate, lease start and when you need to occupy."
            className="mt-5"
          >
            <Textarea
              id="aw-brief"
              name="brief"
              rows={4}
              placeholder="24,000 sq ft on the 9th floor of a Whitefield building, handover in November, need to occupy by February..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Send the brief
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
      blurb={`${studio.discipline} since ${studio.founded}. 2.1 million square feet delivered across ${studio.coverage}.`}
      columns={[
        {
          title: "Services",
          links: [
            { label: "Workplace strategy", href: "#scope" },
            { label: "Design & build", href: "#scope" },
            { label: "Test fits", href: "#density" },
            { label: "Live-office phasing", href: "#phasing" },
          ],
        },
        {
          title: "Studio",
          links: [
            { label: "Cost per seat", href: "#cost" },
            { label: "Completed fit-outs", href: "#projects" },
            { label: "Sustainability", href: "#sustainability" },
            { label: "Questions", href: "#brief" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: studio.phone, href: telHref },
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.address.city, href: "#brief" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.name}. Per-seat figures are indicative and firm up after a test fit against a specific floor plate.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
