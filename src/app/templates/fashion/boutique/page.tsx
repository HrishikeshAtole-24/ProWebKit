import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import {
  Drop,
  Fabric,
  Footer,
  Header,
  Hero,
  MadeToOrder,
  Size,
  Stockists,
  Wholesale,
} from "@/templates/fashion-boutique/sections";
import { label } from "@/templates/fashion-boutique/content";

export const metadata: Metadata = {
  title: `${label.name} — Small-batch clothing made in India`,
  description:
    "A small-batch clothing label in Kochi working with handloom cotton and natural indigo. Named weaver clusters, salaried tailors, made-to-order when a size sells out, and repairs for life.",
  openGraph: {
    title: `${label.name} — ${label.discipline}`,
    description: "Handloom cotton and natural indigo, made in batches of forty.",
    type: "website",
  },
};

export default function BoutiqueLabelTemplate() {
  return (
    <TemplateShell theme="theme-fashion-boutique" preview="Boutique Label · Indigo Thread">
      <Header />
      <main>
        <Hero />
        <Drop />
        <Fabric />
        <MadeToOrder />
        <Size />
        <Stockists />
        <Wholesale />
      </main>
      <Footer />
    </TemplateShell>
  );
}
