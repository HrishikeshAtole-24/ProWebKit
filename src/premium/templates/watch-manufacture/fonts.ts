import { Cormorant_Garamond, Jost } from "next/font/google";

/** Engraver's serif for display, a Futura-like geometric for small caps. */
export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--pm-font-display",
});

export const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--pm-font-body",
});
