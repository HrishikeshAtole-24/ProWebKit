import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Capability,
  Certifications,
  Footer,
  Header,
  Hero,
  Plant,
  Projects,
  Safety,
  Tender,
} from "@/templates/realestate-construction/sections";
import { company } from "@/templates/realestate-construction/content";

export const metadata: Metadata = {
  title: `${company.name} — Civil & structural contractors, Mumbai`,
  description:
    "Class I civil and structural contractor executing industrial, institutional, infrastructure and commercial projects across Western India. Owned plant, direct labour, LTIFR of 0.21.",
  openGraph: {
    title: `${company.name} — ${company.tagline}`,
    description: "Capability statement, project list, plant register and safety record.",
    type: "website",
  },
};

export default function ConstructionCompanyTemplate() {
  return (
    <TemplateShell theme="theme-realestate-construction" preview="Construction Company · Ironwood Constructions">
      <Header />
      <main>
        <Hero />
        <Capability />
        <Projects />
        <Plant />
        <Safety />
        <Certifications />
        <Tender />
      </main>
      <Footer />
    </TemplateShell>
  );
}
