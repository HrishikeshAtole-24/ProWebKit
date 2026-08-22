import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { firm, navLinks } from "./content";

/** Wordmark used in the header, footer and favicon-scale contexts. */
export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={
          inverted
            ? "grid h-9 w-9 place-items-center rounded-md bg-accent font-serif text-lg font-semibold text-accent-fg"
            : "grid h-9 w-9 place-items-center rounded-md bg-brand font-serif text-lg font-semibold text-brand-fg"
        }
        aria-hidden
      >
        A
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold tracking-tight">{firm.name}</span>
        <span
          className={
            inverted
              ? "block text-[10px] uppercase tracking-[0.18em] text-brand-fg/60"
              : "block text-[10px] uppercase tracking-[0.18em] text-muted"
          }
        >
          {firm.tagline}
        </span>
      </span>
    </>
  );
}

export function CaHeader() {
  return (
    <Navbar
      brand={<Wordmark />}
      links={navLinks}
      cta={{ label: "Book a consultation", href: "#contact" }}
    />
  );
}

export function CaFooter() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${firm.name} is a chartered accountancy practice serving founders, promoters and finance teams since ${firm.established}. ${firm.registration}.`}
      columns={[
        {
          title: "Services",
          links: [
            { label: "Goods & Services Tax", href: "#services" },
            { label: "Direct taxation", href: "#services" },
            { label: "Audit & assurance", href: "#services" },
            { label: "Accounting & payroll", href: "#services" },
            { label: "Transaction advisory", href: "#services" },
          ],
        },
        {
          title: "Firm",
          links: [
            { label: "Our approach", href: "#approach" },
            { label: "Partners", href: "#partners" },
            { label: "Industries served", href: "#industries" },
            { label: "Client stories", href: "#testimonials" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: firm.phone, href: `tel:${firm.phone.replace(/\s/g, "")}` },
            { label: firm.email, href: `mailto:${firm.email}` },
            { label: firm.address.city, href: "#contact" },
            { label: firm.hours, href: "#contact" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${firm.name}. All rights reserved.`}
      note="A ProWebKit demo — firm details are fictional."
    />
  );
}
