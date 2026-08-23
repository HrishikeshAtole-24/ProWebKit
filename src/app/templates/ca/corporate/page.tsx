import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import { CaFooter, CaHeader } from "@/templates/ca-corporate/brand";
import { Hero } from "@/templates/ca-corporate/sections/hero";
import { Industries, Services } from "@/templates/ca-corporate/sections/services";
import { Approach, Partners, Testimonials } from "@/templates/ca-corporate/sections/proof";
import { Contact, Faq } from "@/templates/ca-corporate/sections/contact";
import { firm } from "@/templates/ca-corporate/content";

export const metadata: Metadata = {
  title: `${firm.name} — Chartered Accountants in Mumbai`,
  description:
    "Full-service chartered accountancy: GST, direct tax, statutory audit, accounting, ROC compliance and transaction advisory. Fixed-fee retainers with one accountable partner.",
  openGraph: {
    title: `${firm.name} — Chartered Accountants`,
    description:
      "GST, direct tax, audit, payroll and transaction advisory for founders, promoters and finance teams.",
    type: "website",
  },
};

export default function CorporateCaTemplate() {
  return (
    <TemplateShell theme="theme-ca" preview="Corporate CA · Aurum & Associates">
      <CaHeader />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Approach />
        <Partners />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <CaFooter />
    </TemplateShell>
  );
}
