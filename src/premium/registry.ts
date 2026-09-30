/**
 * ProWebKit Premium — the collection for brands and public figures where
 * the website is part of the product. Separate from the standard registry:
 * different routes, a heavier motion stack and licensed photography.
 *
 * `live` templates are routable. `atelier` entries are in production and
 * appear in the gallery without a link.
 */

export type PremiumCategory = "watch" | "jewellery" | "fashion" | "automotive" | "music" | "business";

export interface PremiumTemplate {
  slug: string;
  category: PremiumCategory;
  name: string;
  /** The fictional house or person the demo is built around. */
  demoBrand: string;
  /** One line on the positioning, shown on the gallery card. */
  angle: string;
  href: string;
  status: "live" | "atelier";
  /** Unsplash "photo-…" id used as the gallery cover, if any. */
  cover?: string;
  /** Hex stops for a cover without photography. */
  swatch: [string, string];
  features?: string[];
}

export const premiumCategoryLabels: Record<PremiumCategory, string> = {
  watch: "Watch houses",
  jewellery: "Jewellery maisons",
  fashion: "Fashion houses",
  automotive: "Automotive marques",
  music: "Artists & performers",
  business: "Founders & chairmen",
};

export const premiumCategoryOrder: PremiumCategory[] = [
  "watch",
  "jewellery",
  "fashion",
  "automotive",
  "music",
  "business",
];

export const premiumTemplates: PremiumTemplate[] = [
  // ── Watch houses ───────────────────────────────────────────────────
  {
    slug: "watch-manufacture",
    category: "watch",
    name: "Haute Horlogerie Manufacture",
    demoBrand: "Maison Valdère",
    angle: "A real-time 3D watch that turns to show its case, dial and beating movement as you scroll.",
    href: "/premium/watch/manufacture",
    status: "live",
    cover: "photo-1582043568773-a7a2b57239f5",
    swatch: ["#0E0C0A", "#C8A36A"],
    features: [
      "Procedural WebGL watch keeping live time",
      "Scroll-choreographed anatomy",
      "Pinned horizontal collection",
      "Reference detail with shared-element transition",
      "Hand-finishing story with mask reveals",
      "Private viewing request",
    ],
  },
  {
    slug: "watch-sport",
    category: "watch",
    name: "Sport & Diver",
    demoBrand: "Abyssal",
    angle: "Depth-rated tool watches, told as a descent from the surface to 1,000 metres.",
    href: "/premium/watch/sport",
    status: "atelier",
    swatch: ["#04161F", "#E8A33C"],
  },
  {
    slug: "watch-independent",
    category: "watch",
    name: "Independent Watchmaker",
    demoBrand: "Atelier Rhein",
    angle: "One maker, forty watches a year, and a waiting list worth publishing.",
    href: "/premium/watch/independent",
    status: "atelier",
    swatch: ["#1B1A17", "#D8D2C4"],
  },
  // ── Jewellery ──────────────────────────────────────────────────────
  {
    slug: "jewellery-maison",
    category: "jewellery",
    name: "High Jewellery Maison",
    demoBrand: "Maison Orsay",
    angle: "A refracting 3D stone and a collection presented as an exhibition.",
    href: "/premium/jewellery/maison",
    status: "atelier",
    swatch: ["#0B0B12", "#E7E3F0"],
  },
  {
    slug: "jewellery-bridal",
    category: "jewellery",
    name: "Bridal Diamonds",
    demoBrand: "Solenne",
    angle: "Cut, clarity and a ring configurator for the most considered purchase of a life.",
    href: "/premium/jewellery/bridal",
    status: "atelier",
    swatch: ["#F7F3EE", "#B89B6A"],
  },
  {
    slug: "jewellery-contemporary",
    category: "jewellery",
    name: "Contemporary Fine Jewellery",
    demoBrand: "Nara Studio",
    angle: "Sculptural gold, editorial campaigns and drops that sell out.",
    href: "/premium/jewellery/contemporary",
    status: "atelier",
    swatch: ["#EDE7DD", "#1C1A17"],
  },
  // ── Fashion ────────────────────────────────────────────────────────
  {
    slug: "fashion-couture",
    category: "fashion",
    name: "Couture Maison",
    demoBrand: "Maison Céleste",
    angle: "Runway film, look-by-look collection and the ateliers behind each piece.",
    href: "/premium/fashion/couture",
    status: "atelier",
    swatch: ["#0A0A0A", "#F2EDE4"],
  },
  {
    slug: "fashion-streetwear",
    category: "fashion",
    name: "Streetwear Drop",
    demoBrand: "NULLSET",
    angle: "Countdown, drop mechanics and a lookbook built for the queue.",
    href: "/premium/fashion/streetwear",
    status: "atelier",
    swatch: ["#E9E6DF", "#FF3B1F"],
  },
  {
    slug: "fashion-quiet-luxury",
    category: "fashion",
    name: "Quiet Luxury Atelier",
    demoBrand: "Harrow & Lane",
    angle: "Cloth, provenance and silence. No logos, by design.",
    href: "/premium/fashion/quiet-luxury",
    status: "atelier",
    swatch: ["#E6DFD3", "#5B4B3A"],
  },
  // ── Automotive ─────────────────────────────────────────────────────
  {
    slug: "car-hypercar",
    category: "automotive",
    name: "Hypercar",
    demoBrand: "Vantor",
    angle: "Numbers as spectacle: a 3D silhouette, power curves and a build slot reservation.",
    href: "/premium/automotive/hypercar",
    status: "atelier",
    swatch: ["#070707", "#D7FF3A"],
  },
  {
    slug: "car-luxury-ev",
    category: "automotive",
    name: "Luxury Electric",
    demoBrand: "Aurel",
    angle: "Silence, range and a configurator that feels like choosing a suit.",
    href: "/premium/automotive/luxury-ev",
    status: "atelier",
    swatch: ["#E8ECEF", "#23303A"],
  },
  {
    slug: "car-coachbuilder",
    category: "automotive",
    name: "Heritage Coachbuilder",
    demoBrand: "Whitcombe & Sons",
    angle: "Hand-beaten aluminium, a century of commissions and a waiting list.",
    href: "/premium/automotive/coachbuilder",
    status: "atelier",
    swatch: ["#13231C", "#C9A45C"],
  },
  // ── Music ──────────────────────────────────────────────────────────
  {
    slug: "music-album",
    category: "music",
    name: "Album Drop World",
    demoBrand: "KAIRO",
    angle: "An album as a place: tracklist, visualisers, merch and pre-save.",
    href: "/premium/music/album",
    status: "atelier",
    swatch: ["#0B0310", "#FF2E88"],
  },
  {
    slug: "music-tour",
    category: "music",
    name: "Stadium Tour",
    demoBrand: "Lyra Vance",
    angle: "Dates, cities, VIP tiers and the scale of the show, before the show.",
    href: "/premium/music/tour",
    status: "atelier",
    swatch: ["#05070F", "#5CE1FF"],
  },
  {
    slug: "music-visual-artist",
    category: "music",
    name: "Underground Visual Artist",
    demoBrand: "Noctis",
    angle: "Glitch, film grain and releases that feel like artefacts.",
    href: "/premium/music/visual-artist",
    status: "atelier",
    swatch: ["#111111", "#9CFF5C"],
  },
  // ── Business ───────────────────────────────────────────────────────
  {
    slug: "business-founder",
    category: "business",
    name: "Founder & Investor",
    demoBrand: "Arjun Mehra",
    angle: "Companies built, portfolio, thesis and a calendar that is hard to get onto.",
    href: "/premium/business/founder",
    status: "atelier",
    swatch: ["#0C0F14", "#8FA8FF"],
  },
  {
    slug: "business-chairman",
    category: "business",
    name: "Conglomerate Chairman",
    demoBrand: "The Rathore Group",
    angle: "Legacy, group companies and philanthropy, with the weight of an annual report.",
    href: "/premium/business/chairman",
    status: "atelier",
    swatch: ["#10151C", "#C7A560"],
  },
  {
    slug: "business-speaker",
    category: "business",
    name: "Author & Speaker",
    demoBrand: "Dr. Leela Iyer",
    angle: "Books, keynotes, media and a speaking-enquiry flow for event producers.",
    href: "/premium/business/speaker",
    status: "atelier",
    swatch: ["#F3EFE8", "#B23A2A"],
  },
];

export const livePremiumTemplates = premiumTemplates.filter((t) => t.status === "live");
