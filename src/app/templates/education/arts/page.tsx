import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Disciplines,
  Fees,
  Footer,
  Grades,
  Gurus,
  Header,
  Hero,
  Recital,
  Trial,
} from "@/templates/education-arts/sections";
import { academy } from "@/templates/education-arts/content";

export const metadata: Metadata = {
  title: `${academy.name} — Music & dance classes in Mylapore, Chennai`,
  description:
    "Carnatic vocal, veena, violin, mridangam and Bharatanatyam taught in the guru-shishya tradition since 1998. Graded examinations, published fees and an annual recital every student performs at.",
  openGraph: {
    title: `${academy.name} — ${academy.tagline}`,
    description: "Six disciplines, one guru per student, and a recital every student performs at.",
    type: "website",
  },
};

export default function ArtsAcademyTemplate() {
  return (
    <TemplateShell theme="theme-education-arts" preview="Performing Arts Academy · Swaralaya Academy">
      <Header />
      <main>
        <Hero />
        <Disciplines />
        <Grades />
        <Gurus />
        <Fees />
        <Recital />
        <Trial />
      </main>
      <Footer />
    </TemplateShell>
  );
}
