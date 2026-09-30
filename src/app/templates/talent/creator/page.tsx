import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Audience, CaseStudy, Enquire, Footer, Header, Hero, Pillars, Principles, Rates, Work,
} from "@/templates/talent-creator/sections";
import { creator } from "@/templates/talent-creator/content";

export const metadata: Metadata = {
  title: `${creator.name} — ${creator.discipline} · media kit`,
  description:
    "Media kit with audience data from native analytics, content pillars, brand collaborations with results, a published rate card and stated working terms.",
  openGraph: {
    title: `${creator.name} — Media kit`,
    description: "Audience, collaborations, case study and a published rate card.",
    type: "website",
  },
};

export default function CreatorTemplate() {
  return (
    <TemplateShell theme="theme-talent-creator" preview="Creator Media Kit · Meher Qureshi">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Pillars />
        <Work />
        <CaseStudy />
        <Rates />
        <Principles />
        <Enquire />
      </main>
      <Footer />
    </TemplateShell>
  );
}
