import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, HardHat, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  capability,
  certifications,
  clients,
  company,
  faqs,
  hero,
  navLinks,
  plant,
  projects,
  safety,
  stats,
  tenderTypes,
} from "./content";

const telHref = `tel:${company.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-sm",
          inverted ? "bg-accent text-accent-fg" : "bg-brand text-brand-fg",
        )}
        aria-hidden
      >
        <HardHat className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold uppercase tracking-tight">{company.name}</span>
        <span
          className={cn(
            "block text-[9px] uppercase tracking-[0.18em]",
            inverted ? "text-brand-fg/55" : "text-muted",
          )}
        >
          Civil & structural contracting
        </span>
      </span>
    </>
  );
}

export function Header() {
  return <Navbar brand={<Wordmark />} links={navLinks} cta={{ label: "Tender enquiry", href: "#tender" }} />;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgb(217 138 8 / 0.9) 0 12px, transparent 12px 24px)",
        }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-sm border border-brand-fg/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-fg/80">
            {hero.eyebrow}
          </p>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.3rem]">
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

export function Capability() {
  return (
    <Section id="capability">
      <SectionHeading
        eyebrow="Capability"
        title="Four sectors, all of them self-performed"
        description="Structural work, formwork and concreting are executed with owned plant and direct labour. What gets subcontracted is specialist trade work, and it is named in the bid."
      />

      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {capability.map((item) => (
          <article key={item.sector} className="bg-bg p-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {item.sector}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
            <ul className="mt-5 space-y-2 border-t border-line pt-4">
              {item.scope.map((scope) => (
                <li key={scope} className="flex items-start gap-2 text-sm text-ink">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {scope}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" tone="surface">
      <SectionHeading
        eyebrow="Completed & current projects"
        title="A project list procurement can verify"
        description="Client names are withheld where confidentiality applies. Completion certificates and references are provided at pre-qualification."
      />

      <div className="mt-12 overflow-x-auto rounded-card border border-line">
        <table className="w-full min-w-[860px] text-left text-sm">
          <caption className="sr-only">Completed and current projects</caption>
          <thead className="bg-subtle text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-5 py-3.5 font-semibold">Project</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Client</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Value</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Scope</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Duration</th>
              <th scope="col" className="px-5 py-3.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-bg">
            {projects.map((project) => (
              <tr key={project.name}>
                <th scope="row" className="px-5 py-4 text-left">
                  <span className="block font-semibold text-ink">{project.name}</span>
                  <span className="mt-0.5 block text-xs font-normal text-muted">{project.location}</span>
                </th>
                <td className="px-5 py-4 text-muted">{project.client}</td>
                <td className="px-5 py-4 font-semibold text-brand">{project.value}</td>
                <td className="px-5 py-4 text-muted">{project.scope}</td>
                <td className="px-5 py-4 text-muted">{project.duration}</td>
                <td className="px-5 py-4">
                  <span
                    className={cn(
                      "rounded-sm px-2.5 py-1 text-xs font-semibold",
                      project.status === "In progress"
                        ? "bg-accent-soft text-accent"
                        : "bg-brand-soft text-brand",
                    )}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function Plant() {
  return (
    <Section id="plant">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Plant & equipment"
          title="Owned, not hired"
          description="Mobilisation does not wait on the hire market, and a four-day floor cycle is a schedule commitment rather than an aspiration."
        />
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {plant.map((item) => (
            <li key={item.item} className="bg-bg p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-bold text-ink">{item.item}</h3>
                <span className="text-lg font-bold text-accent">{item.count}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Safety() {
  return (
    <Section id="safety" tone="brand">
      <SectionHeading inverted eyebrow="Safety & quality" title={safety.title} description={safety.body} />

      <dl className="mt-12 grid gap-px overflow-hidden border border-brand-fg/15 bg-brand-fg/15 sm:grid-cols-2 lg:grid-cols-4">
        {safety.metrics.map((metric) => (
          <div key={metric.label} className="bg-brand p-7">
            <dt className="text-3xl font-bold text-accent">{metric.value}</dt>
            <dd>
              <p className="mt-2 text-sm font-medium text-brand-fg">{metric.label}</p>
              <p className="mt-1 text-xs text-brand-fg/50">{metric.note}</p>
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {safety.practices.map((practice) => (
          <li key={practice} className="flex items-start gap-3 text-sm leading-relaxed text-brand-fg/75">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {practice}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading eyebrow="Certifications" title="Registrations and accreditations" />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {certifications.map((certification) => (
              <li key={certification.name} className="flex items-start gap-3.5 py-4">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-ink">{certification.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{certification.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Clients" title="Who we build for" />
          <ul className="mt-8 grid gap-px overflow-hidden border border-line bg-line">
            {clients.map((client) => (
              <li key={client} className="bg-surface px-5 py-4 text-sm text-muted">
                {client}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Named references are released at pre-qualification with client consent.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Tender() {
  return (
    <Section id="tender" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading eyebrow="Questions" title="From procurement teams" />
          <Accordion items={faqs} className="mt-8" />

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Tenders</dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${company.tenderEmail}`} className="text-ink transition hover:text-accent">
                    {company.tenderEmail}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Head office</dt>
                <dd className="mt-0.5">
                  <a href={telHref} className="text-ink transition hover:text-accent">
                    {company.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">Registered office</dt>
                <dd className="mt-0.5 text-ink">
                  {company.address.line1}
                  <br />
                  {company.address.city}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          className="rounded-card border border-line bg-bg p-8 sm:p-10"
          action="#"
          method="post"
          aria-label="Tender enquiry"
        >
          <h2 className="text-2xl font-bold text-ink">Tender enquiry</h2>
          <p className="mt-2 text-sm text-muted">
            Enquiries are acknowledged within two working days with a pre-qualification pack.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Contact name" htmlFor="rc-name">
              <Input id="rc-name" name="name" autoComplete="name" placeholder="Name" required />
            </Field>
            <Field label="Organisation" htmlFor="rc-org">
              <Input id="rc-org" name="organisation" autoComplete="organization" placeholder="Client or consultant" required />
            </Field>
            <Field label="Email" htmlFor="rc-email">
              <Input id="rc-email" name="email" type="email" autoComplete="email" placeholder="you@organisation.com" required />
            </Field>
            <Field label="Phone" htmlFor="rc-phone">
              <Input id="rc-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 22 0000 0000" />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Project type" htmlFor="rc-type">
              <Select id="rc-type" name="type" defaultValue="">
                <option value="" disabled>
                  Select a sector
                </option>
                {tenderTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Estimated value" htmlFor="rc-value">
              <Input id="rc-value" name="value" placeholder="₹120 crore" />
            </Field>
          </div>

          <Field
            label="Scope & programme"
            htmlFor="rc-scope"
            hint="Location, contract form, tender due date and expected start on site."
            className="mt-5"
          >
            <Textarea
              id="rc-scope"
              name="scope"
              rows={5}
              placeholder="Item-rate civil package for a 200,000 sq ft manufacturing facility at Chakan. Tender due 14 October..."
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-7 w-full">
            Submit enquiry
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
      blurb={`${company.tagline}. ${company.registration}. Owned plant, direct labour and an audited safety record.`}
      columns={[
        {
          title: "Capability",
          links: [
            { label: "Industrial", href: "#capability" },
            { label: "Institutional", href: "#capability" },
            { label: "Infrastructure", href: "#capability" },
            { label: "Commercial", href: "#capability" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "Projects", href: "#projects" },
            { label: "Plant & equipment", href: "#plant" },
            { label: "Safety & quality", href: "#safety" },
            { label: "Certifications", href: "#certifications" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: company.tenderEmail, href: `mailto:${company.tenderEmail}` },
            { label: company.phone, href: telHref },
            { label: company.address.city, href: "#tender" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${company.name}. Project values are contract values and exclude client-supplied materials.`}
      note="A ProWebKit demo — details are fictional."
    />
  );
}
