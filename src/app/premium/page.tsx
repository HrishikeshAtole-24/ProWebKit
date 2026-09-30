import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Cursor } from "@/premium/kit/cursor";
import { PremiumGallery } from "@/premium/gallery";
import { premiumTemplates } from "@/premium/registry";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--pm-font-display",
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--pm-font-body",
});

export const metadata: Metadata = {
  title: "Premium — The Private Collection",
  description: `${premiumTemplates.length} premium websites for watch houses, jewellers, fashion houses, car marques, artists and founders. Real-time 3D, choreographed scroll and licensed photography.`,
};

export default function PremiumPage() {
  return (
    <div
      className={`${display.variable} ${body.variable} theme-pm-gallery min-h-screen bg-[rgb(var(--pm-bg))] text-[rgb(var(--pm-ink))] antialiased`}
      style={{ fontFamily: "var(--pm-font-body), ui-sans-serif, system-ui, sans-serif" }}
    >
      <PremiumGallery />
      <Cursor />
    </div>
  );
}
