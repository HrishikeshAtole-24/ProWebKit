import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Enquire,
  Faq,
  Fees,
  Fit,
  Footer,
  Header,
  Hero,
  Principles,
  Work,
} from "@/templates/ca-boutique/sections";
import { chamber } from "@/templates/ca-boutique/content";

export const metadata: Metadata = {
  title: `${chamber.name} — Direct tax counsel, Ahmedabad`,
  description:
    "A boutique direct-tax chamber handling assessments, appeals, capital gains, NRI residency and succession. Written opinions, published fees, limited retainer capacity.",
  openGraph: {
    title: `${chamber.name} — ${chamber.practitioner}`,
    description: "Direct tax assessments, appeals and written opinions from a single-practitioner chamber.",
    type: "website",
  },
};

export default function BoutiqueCaTemplate() {
  return (
    <TemplateShell theme="theme-ca-boutique" preview="Boutique Tax Chamber · Kothari Tax Chambers">
      <Header />
      <main>
        <Hero />
        <Principles />
        <Work />
        <Fit />
        <Fees />
        <Faq />
        <Enquire />
      </main>
      <Footer />
    </TemplateShell>
  );
}
