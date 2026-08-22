import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { firm, navLinks } from "./content";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className={
          inverted
            ? "flex h-9 w-9 items-center justify-center border border-accent font-serif text-sm font-semibold tracking-tight text-accent"
            : "flex h-9 w-9 items-center justify-center border border-brand font-serif text-sm font-semibold tracking-tight text-brand"
        }
        aria-hidden
      >
        {firm.shortName}
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-base font-semibold tracking-tight">{firm.name}</span>
        <span
          className={
            inverted
              ? "block text-[9px] uppercase tracking-[0.22em] text-brand-fg/55"
              : "block text-[9px] uppercase tracking-[0.22em] text-muted"
          }
        >
          {firm.tagline}
        </span>
      </span>
    </>
  );
}

export function FirmHeader() {
  return (
    <Navbar
      brand={<Wordmark />}
      links={navLinks}
      cta={{ label: "Request a consultation", href: "#enquiry" }}
    />
  );
}

export function FirmFooter() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${firm.name} is a litigation-led practice founded in ${firm.established}, with offices in New Delhi, Mumbai and Bengaluru. ${firm.barCouncil}.`}
      columns={[
        {
          title: "Practice",
          links: [
            { label: "Commercial litigation", href: "#practice" },
            { label: "Arbitration", href: "#practice" },
            { label: "Insolvency & restructuring", href: "#practice" },
            { label: "Regulatory & compliance", href: "#practice" },
          ],
        },
        {
          title: "Firm",
          links: [
            { label: "About the chamber", href: "#firm" },
            { label: "Counsel", href: "#counsel" },
            { label: "Reported matters", href: "#matters" },
            { label: "Offices", href: "#offices" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: firm.phone, href: `tel:${firm.phone.replace(/\s/g, "")}` },
            { label: firm.email, href: `mailto:${firm.email}` },
            { label: "New Delhi · Mumbai · Bengaluru", href: "#offices" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${firm.name}. Advocates are prohibited from advertising under the Bar Council of India Rules; this site is for informational purposes only and does not solicit work.`}
      note="A ProWebKit demo — firm details are fictional."
    />
  );
}
