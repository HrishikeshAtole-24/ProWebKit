import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Customers,
  Demo,
  Diligence,
  Faq,
  Footer,
  Header,
  Hero,
  Integrations,
  Pricing,
  Stack,
} from "@/templates/ca-startup/sections";
import { company } from "@/templates/ca-startup/content";

export const metadata: Metadata = {
  title: `${company.name} — ${company.tagline}`,
  description:
    "Bookkeeping, GST, TDS, payroll, ESOP accounting, ROC and audit for funded startups as one monthly subscription. Books closed by the 7th and a data room that is always diligence-ready.",
  openGraph: {
    title: `${company.name} — Startup CFO desk`,
    description: "The whole finance function as a subscription, run by chartered accountants.",
    type: "website",
  },
};

export default function StartupCaTemplate() {
  return (
    <TemplateShell theme="theme-ca-startup" preview="Startup CFO Desk · LedgerLab">
      <Header />
      <main>
        <Hero />
        <Stack />
        <Pricing />
        <Diligence />
        <Integrations />
        <Customers />
        <Faq />
        <Demo />
      </main>
      <Footer />
    </TemplateShell>
  );
}
