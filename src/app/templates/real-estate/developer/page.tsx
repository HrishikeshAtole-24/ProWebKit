import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Amenities,
  Configurations,
  Construction,
  Footer,
  Header,
  Hero,
  Legal,
  Projects,
  Visit,
  Why,
} from "@/templates/realestate-developer/sections";
import { developer } from "@/templates/realestate-developer/content";

export const metadata: Metadata = {
  title: `${developer.name} — Residential projects in Hyderabad`,
  description:
    "RERA registered residential projects in Kokapet, Tellapur, Shankarpally and Nallagandla. Published pricing, monthly construction status and construction-linked payment plans.",
  openGraph: {
    title: `${developer.name} — ${developer.tagline}`,
    description: "2, 3 and 4 BHK homes and villas across Hyderabad. 41 projects delivered.",
    type: "website",
  },
};

export default function PropertyDeveloperTemplate() {
  return (
    <TemplateShell theme="theme-realestate-developer" preview="Property Developer · Meridian Developers">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Configurations />
        <Amenities />
        <Construction />
        <Why />
        <Legal />
        <Visit />
      </main>
      <Footer />
    </TemplateShell>
  );
}
