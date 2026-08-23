import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Appointment,
  Atelier,
  Collections,
  Commission,
  Fittings,
  Footer,
  Header,
  Hero,
  Press,
} from "@/templates/fashion-couture/sections";
import { house } from "@/templates/fashion-couture/content";

export const metadata: Metadata = {
  title: `${house.name} — Made-to-measure couture, New Delhi`,
  description:
    "A made-to-measure couture house in Sunder Nagar, New Delhi. Handwoven cloth, in-house embroidery and commissions cut for one person. Appointments Tuesday to Saturday.",
  openGraph: {
    title: `${house.name} — ${house.discipline}`,
    description: "Collections, commissions and the atelier. By appointment only.",
    type: "website",
  },
};

export default function CoutureAtelierTemplate() {
  return (
    <TemplateShell theme="theme-fashion-couture" preview="Couture Atelier · Atelier Rhea">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Commission />
        <Atelier />
        <Fittings />
        <Press />
        <Appointment />
      </main>
      <Footer />
    </TemplateShell>
  );
}
