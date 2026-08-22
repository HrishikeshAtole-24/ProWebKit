import Link from "next/link";
import { Clock, MapPin, Phone, Plus } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { clinic, navLinks } from "./content";

const telHref = `tel:${clinic.phone.replace(/[\s+]/g, "")}`;

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      <span
        className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-fg"
        aria-hidden
      >
        <Plus className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold tracking-tight">{clinic.name}</span>
        <span
          className={
            inverted
              ? "block text-[10px] uppercase tracking-[0.16em] text-brand-fg/60"
              : "block text-[10px] uppercase tracking-[0.16em] text-muted"
          }
        >
          {clinic.doctor}
        </span>
      </span>
    </>
  );
}

/** Utility strip above the navigation — phone and address, always reachable. */
export function UtilityBar() {
  return (
    <div className="hidden bg-brand text-brand-fg lg:block">
      <Container className="flex h-10 items-center justify-between text-xs">
        <p className="flex items-center gap-2 text-brand-fg/75">
          <MapPin className="h-3.5 w-3.5" />
          {clinic.address.line1}, {clinic.address.city}
        </p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-brand-fg/75">
            <Clock className="h-3.5 w-3.5" />
            Mon–Fri 09:00–13:00 &amp; 17:00–20:00
          </span>
          <Link href={telHref} className="flex items-center gap-2 font-semibold hover:text-accent">
            <Phone className="h-3.5 w-3.5" />
            {clinic.phone}
          </Link>
        </div>
      </Container>
    </div>
  );
}

export function ClinicHeader() {
  return (
    <>
      <UtilityBar />
      <Navbar
        brand={<Wordmark />}
        links={navLinks}
        cta={{ label: "Book appointment", href: "#appointment" }}
      />
    </>
  );
}

export function ClinicFooter() {
  return (
    <SiteFooter
      brand={<Wordmark inverted />}
      blurb={`${clinic.designation}. ${clinic.qualifications}. ${clinic.registration}.`}
      columns={[
        {
          title: "Care",
          links: [
            { label: "Preventive cardiology", href: "#specialisations" },
            { label: "Diabetes & thyroid", href: "#specialisations" },
            { label: "General medicine", href: "#specialisations" },
            { label: "Health check-ups", href: "#treatments" },
          ],
        },
        {
          title: "Clinic",
          links: [
            { label: "About the doctor", href: "#about" },
            { label: "Consultation timings", href: "#timings" },
            { label: "Patient stories", href: "#stories" },
            { label: "Questions", href: "#faq" },
          ],
        },
        {
          title: "Reach us",
          links: [
            { label: clinic.phone, href: telHref },
            { label: `WhatsApp ${clinic.whatsapp}`, href: "#appointment" },
            { label: clinic.email, href: `mailto:${clinic.email}` },
            { label: clinic.address.city, href: "#appointment" },
          ],
        },
      ]}
      legal={`© ${new Date().getFullYear()} ${clinic.name}. ${clinic.emergencyNote}`}
      note="A ProWebKit demo — clinic details are fictional."
    />
  );
}
