import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Casting, Contact, Credits, Footer, Gallery, Header, Hero, Press, Reel, Training,
} from "@/templates/talent-actor/sections";
import { actor } from "@/templates/talent-actor/content";

export const metadata: Metadata = {
  title: `${actor.name} — ${actor.discipline}, screen and stage`,
  description:
    "Showreel, screen and stage credits, casting information, training and representation. Based in Mumbai and London. CINTAA and Equity.",
  openGraph: {
    title: `${actor.name} — Actor`,
    description: "Showreel, credits, casting information and representation.",
    type: "website",
  },
};

export default function ActorTemplate() {
  return (
    <TemplateShell theme="theme-talent-actor" preview="Screen Actor · Aarav Nair">
      <Header />
      <main>
        <Hero />
        <Reel />
        <Credits />
        <Casting />
        <Training />
        <Press />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
