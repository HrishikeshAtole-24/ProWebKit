import type { Metadata } from "next";
import { PreviewBar } from "@/components/layout/preview-bar";
import {
  Brief,
  Cost,
  Density,
  Footer,
  Header,
  Hero,
  Phasing,
  Projects,
  Scope,
  Sustainability,
} from "@/templates/architect-workplace/sections";
import { studio } from "@/templates/architect-workplace/content";

export const metadata: Metadata = {
  title: `${studio.name} — Office fit-out & workplace design`,
  description:
    "Commercial office design and build across Mumbai, Pune, Bengaluru and Hyderabad. Quoted per seat before design starts, with live-office phasing so your team keeps working.",
  openGraph: {
    title: `${studio.name} — ${studio.discipline}`,
    description: "Cost per seat, density planning and fit-out delivered without shutting you down.",
    type: "website",
  },
};

export default function WorkplaceDesignTemplate() {
  return (
    <div className="theme-architect-workplace bg-bg text-ink">
      <PreviewBar template="Workplace Design · Kernel Workspace" />
      <Header />
      <main>
        <Hero />
        <Cost />
        <Scope />
        <Density />
        <Phasing />
        <Projects />
        <Sustainability />
        <Brief />
      </main>
      <Footer />
    </div>
  );
}
