import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Contact,
  Faq,
  Footer,
  Header,
  Hero,
  Packages,
  Sectors,
  Services,
  Team,
  Transactions,
} from "@/templates/lawyer-corporate/sections";
import { firm } from "@/templates/lawyer-corporate/content";

export const metadata: Metadata = {
  title: `${firm.name} — Corporate & technology counsel`,
  description:
    "Transactional counsel for founders, funds and acquirers. Fundraises, M&A, ESOPs and commercial contracts with a 48-hour first-markup commitment and fixed-fee packages.",
  openGraph: {
    title: `${firm.name} — ${firm.tagline}`,
    description: "Deal counsel for fundraises, acquisitions and technology contracting.",
    type: "website",
  },
};

export default function CorporateLawTemplate() {
  return (
    <TemplateShell theme="theme-lawyer-corporate" preview="Corporate & Technology · Sterling Legal">
      <Header />
      <main>
        <Hero />
        <Services />
        <Transactions />
        <Sectors />
        <Packages />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </TemplateShell>
  );
}
