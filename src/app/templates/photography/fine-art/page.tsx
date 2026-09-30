import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Biography, Enquire, Exhibitions, Footer, Header, Hero, Prints, Publications, Series, Statement,
} from "@/templates/photo-fineart/sections";
import { artist } from "@/templates/photo-fineart/content";

export const metadata: Metadata = {
  title: `${artist.name} — ${artist.discipline}`,
  description:
    "Fine art and documentary photography. Four bodies of work, exhibition record, editioned prints with published prices, publications and collections.",
  openGraph: {
    title: `${artist.name} — Photographer`,
    description: "Series, exhibitions, editioned prints and publications.",
    type: "website",
  },
};

export default function FineArtPhotographyTemplate() {
  return (
    <TemplateShell theme="theme-photo-fineart" preview="Fine Art & Documentary · Kabir Sen">
      <Header />
      <main>
        <Hero />
        <Series />
        <Statement />
        <Exhibitions />
        <Prints />
        <Publications />
        <Biography />
        <Enquire />
      </main>
      <Footer />
    </TemplateShell>
  );
}
