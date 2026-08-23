import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Anxious,
  Book,
  Footer,
  Header,
  Hero,
  Results,
  Technology,
  Treatments,
  Visit,
} from "@/templates/doctor-dental/sections";
import { practice } from "@/templates/doctor-dental/content";

export const metadata: Metadata = {
  title: `${practice.name} — Dentist in Bandra West, Mumbai`,
  description:
    "A two-chair dental studio in Bandra West with published pricing, written treatment plans, single-sitting root canals, implants and clear aligners. Same-day emergency slots.",
  openGraph: {
    title: `${practice.name} — ${practice.lead}`,
    description: "Dentistry with the price agreed before treatment starts. Bandra West, Mumbai.",
    type: "website",
  },
};

export default function DentalStudioTemplate() {
  return (
    <TemplateShell theme="theme-doctor-dental" preview="Dental Studio · Smile Studio Dental">
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Visit />
        <Technology />
        <Anxious />
        <Results />
        <Book />
      </main>
      <Footer />
    </TemplateShell>
  );
}
