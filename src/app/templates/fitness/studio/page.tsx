import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Coaches,
  Contact,
  Footer,
  Header,
  Hero,
  Location,
  Nutrition,
  Programs,
  Research,
  Testimonials,
  Timetable,
} from "@/templates/fitness-studio/sections";
import { studio } from "@/templates/fitness-studio/content";

export const metadata: Metadata = {
  title: `${studio.name} — Strength studio in Indiranagar, Bengaluru`,
  description:
    "Small-group barbell strength training in Indiranagar, capped at eight per class. Personal training, online training, weight loss, muscle building, women-only slots and special population coaching. Free trial, no joining fee.",
  openGraph: {
    title: `${studio.name} — ${studio.descriptor}`,
    description: "Coached small-group strength training in Indiranagar, Bengaluru. Free trial session.",
    type: "website",
  },
};

export default function StrengthStudioTemplate() {
  return (
    <TemplateShell theme="theme-fitness-studio" preview="Strength Studio · Anvil Strength">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Timetable />
        <About />
        <Coaches />
        <Nutrition />
        <Research />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
