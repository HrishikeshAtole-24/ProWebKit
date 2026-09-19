import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Location,
  Nutrition,
  Programs,
  Research,
  Testimonials,
  WhatsAppBand,
} from "@/templates/fitness-trainer/sections";
import { coach } from "@/templates/fitness-trainer/content";

export const metadata: Metadata = {
  title: `${coach.name} — Personal Trainer & Strength Coach, Pune`,
  description:
    "Personal training and online coaching in Baner, Pune. Weight loss, muscle building, female fitness and special population training. Certified CSCS and sports nutrition, published pricing, free first consultation.",
  openGraph: {
    title: `${coach.brand} — ${coach.title}`,
    description:
      "One-to-one and online strength coaching in Pune. Programmes, nutrition and evidence-based guidance.",
    type: "website",
  },
};

export default function PersonalTrainerTemplate() {
  return (
    <TemplateShell theme="theme-fitness-trainer" preview="Personal Trainer · Pawar Strength">
      <Header />
      <main>
        <Hero />
        <Programs />
        <About />
        <Nutrition />
        <Research />
        <Testimonials />
        <Location />
        <WhatsAppBand />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
