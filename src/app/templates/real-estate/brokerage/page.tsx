import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Enquire,
  Fee,
  Footer,
  Header,
  Hero,
  Listings,
  Localities,
  Paperwork,
  Tracks,
} from "@/templates/realestate-brokerage/sections";
import { agency } from "@/templates/realestate-brokerage/content";

export const metadata: Metadata = {
  title: `${agency.name} — Resale & rental brokerage, Powai`,
  description:
    "A RERA-registered property brokerage covering Powai, Chandivali, Vikhroli and Kanjurmarg. Physically verified listings, published commission, and full paperwork handling.",
  openGraph: {
    title: `${agency.name} — ${agency.tagline}`,
    description: "Verified listings, locality price guides and a commission published in public.",
    type: "website",
  },
};

export default function BrokerageTemplate() {
  return (
    <TemplateShell theme="theme-realestate-brokerage" preview="Property Brokerage · Anchor Property Advisors">
      <Header />
      <main>
        <Hero />
        <Listings />
        <Tracks />
        <Localities />
        <Fee />
        <Paperwork />
        <Enquire />
      </main>
      <Footer />
    </TemplateShell>
  );
}
