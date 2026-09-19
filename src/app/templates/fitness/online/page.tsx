import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  About,
  Apply,
  Footer,
  Header,
  Hero,
  How,
  Nutrition,
  Programs,
  Research,
  Results,
  ServiceAreas,
} from "@/templates/fitness-online/sections";
import { coach } from "@/templates/fitness-online/content";

export const metadata: Metadata = {
  title: `${coach.brand} — Online strength & nutrition coaching`,
  description:
    "Remote strength and nutrition coaching for weight loss, muscle building, female fitness and special populations. Weekly programming, video form reviews and check-ins, with clients in 14 countries.",
  openGraph: {
    title: `${coach.brand} — ${coach.title}`,
    description:
      "Online coaching with weekly programming, form review and nutrition adjusted on your data.",
    type: "website",
  },
};

export default function OnlineCoachingTemplate() {
  return (
    <TemplateShell theme="theme-fitness-online" preview="Online Coaching · Foundry Coaching">
      <Header />
      <main>
        <Hero />
        <How />
        <Programs />
        <Nutrition />
        <About />
        <Research />
        <Results />
        <ServiceAreas />
        <Apply />
      </main>
      <Footer />
    </TemplateShell>
  );
}
