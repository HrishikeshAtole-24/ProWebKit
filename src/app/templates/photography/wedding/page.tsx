import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Albums, Approach, Collections, Enquire, Footer, Header, Hero, TheDay, Testimonials, Work,
} from "@/templates/photo-wedding/sections";
import { studio } from "@/templates/photo-wedding/content";

export const metadata: Metadata = {
  title: `${studio.name} — ${studio.discipline}, Pune`,
  description:
    "Documentary wedding photography across India and abroad. Two photographers, every edited image delivered, published collections and a fine-art album included.",
  openGraph: {
    title: `${studio.name} — Wedding photography by ${studio.photographer}`,
    description: "Documentary wedding photography. We photograph what actually happened.",
    type: "website",
  },
};

export default function WeddingPhotographyTemplate() {
  return (
    <TemplateShell theme="theme-photo-wedding" preview="Wedding & Editorial · Saanjh Studio">
      <Header />
      <main>
        <Hero />
        <Work />
        <Approach />
        <Collections />
        <TheDay />
        <Albums />
        <Testimonials />
        <Enquire />
      </main>
      <Footer />
    </TemplateShell>
  );
}
