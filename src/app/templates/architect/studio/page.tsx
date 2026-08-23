import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Enquiry,
  Footer,
  Header,
  Hero,
  Practice,
  Process,
  Recognition,
  Services,
  Studio,
  Works,
} from "@/templates/architect-studio/sections";
import { studio } from "@/templates/architect-studio/content";

export const metadata: Metadata = {
  title: `${studio.name} — Architecture & urbanism, Bengaluru`,
  description:
    "An architecture and urbanism practice working across residential, cultural and adaptive-reuse projects in South India. Twenty-eight built works since 2012.",
  openGraph: {
    title: `${studio.name} — ${studio.discipline}`,
    description: "Selected works, practice statement and project enquiries.",
    type: "website",
  },
};

export default function ArchitectureStudioTemplate() {
  return (
    <TemplateShell theme="theme-architect-studio" preview="Architecture Studio · Terrain Studio">
      <Header />
      <main>
        <Hero />
        <Works />
        <Practice />
        <Services />
        <Process />
        <Recognition />
        <Studio />
        <Enquiry />
      </main>
      <Footer />
    </TemplateShell>
  );
}
