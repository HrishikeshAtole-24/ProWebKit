import type { Metadata } from "next";
import { PreviewBar } from "@/components/layout/preview-bar";
import {
  Audit,
  Book,
  Clients,
  Corporate,
  Footer,
  Header,
  Hero,
  Process,
  Services,
} from "@/templates/fashion-stylist/sections";
import { practice } from "@/templates/fashion-stylist/content";

export const metadata: Metadata = {
  title: `${practice.name} — Personal stylist & image consultant, Bengaluru`,
  description:
    "Wardrobe audits, personal shopping and image consulting in Bengaluru and virtually. Session pricing published, no brand commissions taken, and we start with what you already own.",
  openGraph: {
    title: `${practice.name} — ${practice.discipline}`,
    description: "Wardrobe audits, personal shopping and corporate image workshops.",
    type: "website",
  },
};

export default function StylistTemplate() {
  return (
    <div className="theme-fashion-stylist bg-bg text-ink">
      <PreviewBar template="Personal Stylist · Form & Figure" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Audit />
        <Corporate />
        <Clients />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
