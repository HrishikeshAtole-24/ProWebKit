import type { Metadata } from "next";
import { PreviewBar } from "@/components/layout/preview-bar";
import { FirmFooter, FirmHeader } from "@/templates/lawyer-firm/brand";
import { Hero } from "@/templates/lawyer-firm/sections/hero";
import { FirmStory, PracticeAreas } from "@/templates/lawyer-firm/sections/practice";
import { ClientVoices, Counsel, Matters } from "@/templates/lawyer-firm/sections/record";
import { Enquiry, Faq, Offices } from "@/templates/lawyer-firm/sections/enquiry";
import { firm } from "@/templates/lawyer-firm/content";

export const metadata: Metadata = {
  title: `${firm.name} — Advocates & Legal Consultants`,
  description:
    "A litigation-led practice in commercial disputes, arbitration, insolvency and regulatory matters, with offices in New Delhi, Mumbai and Bengaluru.",
  openGraph: {
    title: `${firm.name} — Advocates`,
    description:
      "Commercial litigation, arbitration, insolvency and regulatory counsel before the Supreme Court, High Courts and the NCLT.",
    type: "website",
  },
};

export default function LawFirmTemplate() {
  return (
    <div className="theme-lawyer bg-bg text-ink">
      <PreviewBar template="Law Firm · Mehta & Partners" />
      <FirmHeader />
      <main>
        <Hero />
        <PracticeAreas />
        <FirmStory />
        <Counsel />
        <Matters />
        <ClientVoices />
        <Offices />
        <Faq />
        <Enquiry />
      </main>
      <FirmFooter />
    </div>
  );
}
