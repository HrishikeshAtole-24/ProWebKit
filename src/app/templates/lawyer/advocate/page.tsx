import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Contact,
  Faq,
  Fees,
  Footer,
  Header,
  Hero,
  Matters,
  Process,
} from "@/templates/lawyer-advocate/sections";
import { advocate } from "@/templates/lawyer-advocate/content";

export const metadata: Metadata = {
  title: `${advocate.name} — Family & criminal advocate, Kochi`,
  description:
    "A solo advocate in Kochi handling divorce, child custody, maintenance, domestic violence, bail and criminal defence. Published fees and a 45-minute first consultation.",
  openGraph: {
    title: `${advocate.name} — Advocate, Kochi`,
    description: "Family, matrimonial and criminal matters. Kerala High Court and Ernakulam courts.",
    type: "website",
  },
};

export default function SoloAdvocateTemplate() {
  return (
    <TemplateShell theme="theme-lawyer-advocate" preview="Solo Advocate · Adv. Kavita Menon">
      <Header />
      <main>
        <Hero />
        <Matters />
        <Process />
        <About />
        <Fees />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
