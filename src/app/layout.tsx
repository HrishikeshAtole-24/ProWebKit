import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--pk-font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--pk-font-serif",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prowebkit.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProWebKit — Digital presence for professionals and businesses",
    template: "%s · ProWebKit",
  },
  description:
    "21 complete, production-ready websites for the professions that need credibility online — chartered accountants, doctors, lawyers, architects, property developers, coaching institutes and designers. Next.js, accessible, MIT licensed.",
  keywords: [
    "website templates",
    "Next.js templates",
    "digital presence for professionals",
    "chartered accountant website",
    "doctor website template",
    "law firm website template",
    "architect portfolio template",
    "real estate website template",
    "coaching institute website",
    "small business website",
    "Tailwind CSS",
  ],
  authors: [{ name: "Hrishikesh Atole" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ProWebKit — Digital presence for professionals and businesses",
    description:
      "21 complete, production-ready websites across 7 professions. Fork it, rewrite one file, deploy.",
    siteName: "ProWebKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProWebKit — Digital presence for professionals and businesses",
    description:
      "21 complete, production-ready websites across 7 professions. Fork it, rewrite one file, deploy.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
     * suppressHydrationWarning is scoped to <html> and <body> on purpose.
     * Extensions such as Grammarly, password managers and theme add-ons
     * inject attributes (data-gr-ext-installed, extra classnames) into these
     * two elements before React hydrates, which React reports as a mismatch.
     * The suppression only applies one level deep, so genuine mismatches
     * anywhere inside the app are still reported.
     */
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
