import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Agencies, Availability, Book, Booking, Digitals, Editorial, Footer, Header, Hero, Stats, Work,
} from "@/templates/talent-model/sections";
import { model } from "@/templates/talent-model/content";

export const metadata: Metadata = {
  title: `${model.name} — ${model.discipline}, editorial, runway & campaign`,
  description:
    "Portfolio, digitals, measurements, campaign and runway history, editorial credits, availability and agency representation across Mumbai, Paris, Milan and New York.",
  openGraph: {
    title: `${model.name} — Model`,
    description: "The book, digitals, measurements, campaigns and agency representation.",
    type: "website",
  },
};

export default function ModelTemplate() {
  return (
    <TemplateShell theme="theme-talent-model" preview="Fashion Model · Noor Contractor">
      <Header />
      <main>
        <Hero />
        <Book />
        <Digitals />
        <Stats />
        <Work />
        <Editorial />
        <Availability />
        <Agencies />
        <Booking />
      </main>
      <Footer />
    </TemplateShell>
  );
}
