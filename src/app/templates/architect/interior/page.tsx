import type { Metadata } from "next";
import { PreviewBar } from "@/components/layout/preview-bar";
import {
  Consult,
  Footer,
  Header,
  Hero,
  Homes,
  Materials,
  Packages,
  Process,
  Rooms,
} from "@/templates/architect-interior/sections";
import { studio } from "@/templates/architect-interior/content";

export const metadata: Metadata = {
  title: `${studio.name} — Interior designers in Pune`,
  description:
    "Full-service residential interior design in Pune: design, custom joinery, material selection and execution. Published packages for 1BHK to villas, with a fixed quote after 3D approval.",
  openGraph: {
    title: `${studio.name} — ${studio.discipline}`,
    description: "Home interiors in Pune with fixed scope, published packages and a delay clause.",
    type: "website",
  },
};

export default function InteriorDesignTemplate() {
  return (
    <div className="theme-architect-interior bg-bg text-ink">
      <PreviewBar template="Interior Design · Casa Interiors" />
      <Header />
      <main>
        <Hero />
        <Packages />
        <Rooms />
        <Materials />
        <Process />
        <Homes />
        <Consult />
      </main>
      <Footer />
    </div>
  );
}
