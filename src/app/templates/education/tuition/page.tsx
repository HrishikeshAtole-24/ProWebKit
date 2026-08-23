import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Classes,
  Enrol,
  Fees,
  Footer,
  Header,
  Hero,
  Method,
  Teachers,
  Timetable,
} from "@/templates/education-tuition/sections";
import { centre } from "@/templates/education-tuition/content";

export const metadata: Metadata = {
  title: `${centre.name} — Tuition classes in Rashbehari, Kolkata`,
  description:
    "Tuition for classes 6 to 12 in Rashbehari, Kolkata. CBSE, ICSE and State Board. Twelve students per batch, homework checked, fortnightly parent updates and a free demo class.",
  openGraph: {
    title: `${centre.name} — ${centre.tagline}`,
    description: "Small-batch tuition for classes 6 to 12 in South Kolkata.",
    type: "website",
  },
};

export default function TuitionCentreTemplate() {
  return (
    <TemplateShell theme="theme-education-tuition" preview="Tuition Centre · BrightMinds Tuition">
      <Header />
      <main>
        <Hero />
        <Classes />
        <Timetable />
        <Method />
        <Teachers />
        <Fees />
        <Enrol />
      </main>
      <Footer />
    </TemplateShell>
  );
}
