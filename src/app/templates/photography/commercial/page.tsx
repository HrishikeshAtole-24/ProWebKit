import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Brief, Footer, Header, Hero, Licensing, Process, Rates, Studio, Work,
} from "@/templates/photo-commercial/sections";
import { studio } from "@/templates/photo-commercial/content";

export const metadata: Metadata = {
  title: `${studio.name} — ${studio.discipline}, Bengaluru`,
  description:
    "Commercial and product photography studio in Bengaluru. Published day rates and licensing tiers, e-commerce packshots, food, jewellery and apparel, files in five working days.",
  openGraph: {
    title: `${studio.name} — Commercial & product photography`,
    description: "Published day rates, published licensing, five-day delivery.",
    type: "website",
  },
};

export default function CommercialPhotographyTemplate() {
  return (
    <TemplateShell theme="theme-photo-commercial" preview="Commercial & Product · Northlight Studio">
      <Header />
      <main>
        <Hero />
        <Work />
        <Rates />
        <Licensing />
        <Process />
        <Studio />
        <Brief />
      </main>
      <Footer />
    </TemplateShell>
  );
}
