import Link from "next/link";
import { Check, Home, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  consultTypes,
  faqs,
  hero,
  homes,
  materials,
  navLinks,
  packages,
  process,
  rooms,
  stats,
  studio,
  testimonials,
} from "./content";

const telHref = `tel:${studio.phone.replace(/[\s+]/g, "")}`;

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
        <span className="block font-serif text-base font-semibold tracking-tight">{studio.name}</span>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Pune
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Free consultation", href: "#consult" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-subtle">
      <div
        className="absolute -right-24 -top-20 h-[440px] w-[440px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #e8cdb8, transparent)" }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">{hero.eyebrow}</p>

            <h1 className="mt-6 font-serif text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subtitle}
            </p>

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

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-2xl font-semibold text-brand">{stat.value}</dt>
                  <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Material-palette collage stands in for photography */}
          <div className="grid grid-cols-2 gap-3">
            {materials.map((material, index) => (
              <div
                key={material.palette}
                className={cn(
                  "rounded-card border border-line bg-bg p-5",
                  index % 3 === 0 && "sm:mt-6",
                )}
              >
                <p className="font-serif text-sm font-semibold text-ink">{material.palette}</p>
                <div className="mt-3 flex gap-1.5">
                  {material.tones.map((tone) => (
                    <span
                      key={tone}
                      title={tone}
                      className="h-8 flex-1 rounded-sm bg-subtle"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-muted">{material.tones.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Packages() {
  return (
    <Section id="packages">
      <SectionHeading
        align="center"
        eyebrow="Packages"
        title="Priced by the size of the home, not by the hour"
        description="Ranges below cover design, materials, custom joinery and execution. Your itemised quote arrives after the 3D approval and does not move unless the scope does."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
        {packages.map((pack) => (
          <article
            key={pack.name}
            className={cn(
              "flex flex-col rounded-card border bg-bg p-8",
              pack.featured ? "border-brand shadow-lift lg:-mt-4 lg:pb-12" : "border-line",
            )}
          >
            {pack.featured ? (
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-fg">
                <Sparkles className="h-3 w-3" />
                Most homes
              </span>
            ) : null}

            <h3 className="font-serif text-xl font-semibold text-ink">{pack.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{pack.homes}</p>
            <p className="mt-3 text-sm text-muted">{pack.blurb}</p>

            <p className="mt-6 font-serif text-2xl font-semibold text-brand">{pack.price}</p>
            <p className="mt-1 text-xs text-muted">{pack.duration}</p>

            <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
              {pack.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#consult"
              className={cn(
                "mt-7 inline-flex h-11 w-full items-center justify-center rounded-card text-sm font-semibold transition",
                pack.featured
                  ? "bg-accent text-accent-fg hover:bg-accent/90"
                  : "border border-line text-ink hover:border-brand hover:text-brand",
              )}
            >
              Start with {pack.name}
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Rooms() {
  return (
    <Section id="rooms" tone="subtle">
      <SectionHeading
        eyebrow="Room by room"
        title="Six spaces, each with its own problem to solve"
        description="Interiors go wrong room by room, so that is how we design them — storage counted, circulation walked, ventilation checked."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <article key={room.name} className="bg-bg p-7">
            <h3 className="font-serif text-lg font-semibold text-ink">{room.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{room.body}</p>
            <p className="mt-4 border-t border-line pt-3 text-xs text-accent">{room.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Materials() {
  return (
    <Section id="materials">
      <SectionHeading
        eyebrow="Material palettes"
        title="Four starting points, then yours"
        description="Most clients begin with one of these and drift. That is the point — the palette is a conversation opener, not a catalogue page."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {materials.map((material) => (
          <article key={material.palette} className="overflow-hidden rounded-card border border-line bg-surface">
            <div className="flex h-28" aria-hidden>
              {material.tones.map((tone, index) => (
                <span
                  key={tone}
                  className={cn(
                    "flex-1",
                    index === 0 && "bg-brand-soft",
                    index === 1 && "bg-subtle",
                    index === 2 && "bg-accent-soft",
                    index === 3 && "bg-line",
                  )}
                />
              ))}
            </div>
            <div className="p-6">
              <h3 className="font-serif text-base font-semibold text-ink">{material.palette}</h3>
              <ul className="mt-3 space-y-1">
                {material.tones.map((tone) => (
                  <li key={tone} className="text-sm text-muted">
                    {tone}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-line pt-3 text-xs text-accent">{material.suits}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" tone="brand">
      <SectionHeading
        inverted
        eyebrow="How a project runs"
        title="Five stages, and you know the week each one ends"
      />

      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {process.map((step) => (
          <li key={step.step} className="rounded-card border border-brand-fg/15 bg-brand-fg/[0.06] p-6">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-semibold text-accent">{step.step}</span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-brand-fg/50">
                {step.duration}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-brand-fg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-fg/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Homes() {
  return (
    <Section id="homes">
      <SectionHeading
        eyebrow="Recent homes"
        title="Handed over in the last eighteen months"
        description="Replace the tiles below with photographs of your own completed projects."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homes.map((home) => (
          <figure key={home.title} className="overflow-hidden rounded-card border border-line bg-surface">
            <div className="aspect-[4/3] bg-subtle" aria-hidden />
            <figcaption className="p-5">
              <h3 className="font-serif text-base font-semibold text-ink">{home.title}</h3>
              <p className="mt-1 text-xs text-accent">{home.palette}</p>
              <p className="mt-2 text-xs text-muted">
                {home.area} · {home.duration}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col rounded-card bg-subtle p-7">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <span className="block text-sm font-semibold text-ink">{testimonial.author}</span>
              <span className="block text-xs text-muted">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Consult() {
  return (
    <Section id="consult" tone="subtle">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="Before you book" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 text-sm">
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
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">WhatsApp</dt>
                <dd className="mt-0.5 text-ink">{studio.whatsapp}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${studio.email}`} className="text-ink transition hover:text-accent">
                    {studio.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-bg p-8 shadow-soft sm:p-10"
          action="#"
          method="post"
          aria-label="Consultation request"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink">Book a free home consultation</h2>
          <p className="mt-2 text-sm text-muted">
            We visit, measure and talk budget. No design is presented and nothing is charged.
          </p>

          <Field label="Name" htmlFor="ai-name" className="mt-7">
            <Input id="ai-name" name="name" autoComplete="name" placeholder="Your name" required />
          </Field>
          <Field label="Phone" htmlFor="ai-phone" className="mt-5">
            <Input id="ai-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98600 00000" required />
          </Field>
          <Field label="Home type" htmlFor="ai-type" className="mt-5">
            <Select id="ai-type" name="type" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {consultTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Locality" htmlFor="ai-locality" className="mt-5">
            <Input id="ai-locality" name="locality" placeholder="Kharadi, Pune" />
          </Field>
          <Field
            label="When do you want to move in?"
            htmlFor="ai-timeline"
            hint="A rough month is enough. It tells us whether the timeline is realistic."
            className="mt-5"
          >
            <Textarea id="ai-timeline" name="timeline" rows={3} placeholder="Possession in March, hoping to move in by June..." />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Book the consultation
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
      blurb={`${studio.discipline} in Pune since ${studio.founded}. Led by ${studio.lead}. Design, joinery and execution under one contract.`}
      columns={[
        {
          title: "Services",
          links: [
            { label: "Design packages", href: "#packages" },
            { label: "Room by room", href: "#rooms" },
            { label: "Material palettes", href: "#materials" },
            { label: "How a project runs", href: "#process" },
          ],
        },
        {
          title: "Studio",
          links: [
            { label: "Recent homes", href: "#homes" },
            { label: "Questions", href: "#consult" },
            { label: "Book a consultation", href: "#consult" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: studio.phone, href: telHref },
            { label: `WhatsApp ${studio.whatsapp}`, href: "#consult" },
            { label: studio.email, href: `mailto:${studio.email}` },
            { label: studio.address.city, href: "#consult" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${studio.name}. Package ranges are indicative; the itemised quote issued after design approval is binding.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
