import type { Metadata } from "next";
import { PreviewBar } from "@/components/layout/preview-bar";
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
    <div className="theme-lawyer-advocate bg-bg text-ink">
      <PreviewBar template="Solo Advocate · Adv. Kavita Menon" />
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
    </div>
  );
}
