import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Admission,
  Courses,
  Faculty,
  Fees,
  Footer,
  Header,
  Hero,
  Results,
  Tests,
} from "@/templates/education-coaching/sections";
import { institute } from "@/templates/education-coaching/content";

export const metadata: Metadata = {
  title: `${institute.name} — JEE & NEET coaching in Jaipur`,
  description:
    "Classroom coaching for JEE Main, JEE Advanced and NEET in Jaipur. Batches capped at 45, 412 selections in 2025, published fees and a scholarship test twice a year.",
  openGraph: {
    title: `${institute.name} — ${institute.tagline}`,
    description: "Results, courses, faculty, test series and admissions.",
    type: "website",
  },
};

export default function CoachingTemplate() {
  return (
    <TemplateShell theme="theme-education-coaching" preview="Competitive Coaching · Apex Academy">
      <Header />
      <main>
        <Hero />
        <Results />
        <Courses />
        <Faculty />
        <Tests />
        <Fees />
        <Admission />
      </main>
      <Footer />
    </TemplateShell>
  );
}
