import type { Metadata, Viewport } from "next";
import { Cursor } from "@/premium/kit/cursor";
import { Intro } from "@/premium/kit/intro";
import { body, display } from "@/premium/templates/watch-manufacture/fonts";
import { brand } from "@/premium/templates/watch-manufacture/content";
import {
  Appointment,
  Boutiques,
  Calibre,
  Collections,
  Footer,
  Header,
  Heritage,
  Manifesto,
  Manufacture,
  Stage,
  Valley,
} from "@/premium/templates/watch-manufacture/sections";

export const metadata: Metadata = {
  title: `${brand.full} — Haute horlogerie from ${brand.place}`,
  description:
    "Hand-finished watches made in the Vallée de Joux since 1871. Explore the Heure Bleue in 3D, the collection, the Calibre VD·1871 and book a private viewing.",
  openGraph: {
    title: `${brand.full} — Haute horlogerie`,
    description: "Time, kept by hand. Hand-finished watches from Le Brassus since 1871.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0C0A",
};

export default function WatchManufacturePage() {
  return (
    <div
      className={`${display.variable} ${body.variable} theme-pm-valdere min-h-screen bg-[rgb(var(--pm-bg))] text-[rgb(var(--pm-ink))] antialiased selection:bg-[rgb(var(--pm-accent))] selection:text-[rgb(var(--pm-accent-fg))]`}
    >
      <Intro name="Valdère" tagline={`Le Brassus · ${brand.founded}`}>
        <Header />
        <main>
          <Stage displayFont={display.style.fontFamily} bodyFont={body.style.fontFamily} />
          <Manifesto />
          <Collections />
          <Manufacture />
          <Calibre />
          <Heritage />
          <Valley />
          <Boutiques />
          <Appointment />
        </main>
        <Footer />
      </Intro>
      <Cursor />
    </div>
  );
}
