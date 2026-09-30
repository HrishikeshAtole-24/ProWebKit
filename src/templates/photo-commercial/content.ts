import type { FaqItem, NavLink, StatItem } from "@/types/template";

/** All copy for the Commercial & Product photography template. */
export const studio = {
  name: "Northlight Studio",
  lead: "Devika Iyer",
  discipline: "Commercial & product photography",
  since: 2015,
  phone: "+91 80 4713 5500",
  email: "bookings@northlight.studio",
  address: { line1: "Unit 4, Sona Towers, Millers Road", line2: "Vasanth Nagar", city: "Bengaluru 560052" },
  spec: "1,800 sq ft · 14 ft ceiling · drive-in access",
};

export const navLinks: NavLink[] = [
  { label: "What we shoot", href: "#work" },
  { label: "Rates", href: "#rates" },
  { label: "Licensing", href: "#licensing" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "Brief us", href: "#brief" },
];

export const hero = {
  eyebrow: `Bengaluru · operating since ${studio.since}`,
  titleLines: ["Product photography", "with the rate card", "on the website."],
  subtitle:
    "A working studio for brands and agencies. Day rates and licensing tiers are published, files land within five working days, and the shot list is agreed before anyone picks up a camera.",
};

export const stats: StatItem[] = [
  { value: "11", label: "Years operating" },
  { value: "4,200+", label: "SKUs shot" },
  { value: "5 days", label: "Standard delivery" },
  { value: "98%", label: "Delivered on date" },
];

/* ── What we shoot ─────────────────────────────────────────────────── */
export const work = [
  { name: "Packshots & e-commerce", detail: "White background, consistent angles, marketplace-compliant. Priced per SKU past 30 units.", volume: "Up to 90 SKUs a day" },
  { name: "Styled product", detail: "Props, surfaces and set for campaign and social. Stylist booked through us or yours." , volume: "12–20 setups a day" },
  { name: "Food & beverage", detail: "Shot with a home economist on set. Steam, pour and melt work quoted per shot.", volume: "8–14 dishes a day" },
  { name: "Jewellery & watches", detail: "Focus-stacked macro on a motion-controlled rig. Specular control is most of the job.", volume: "20–30 pieces a day" },
  { name: "Lookbook & apparel", detail: "On model, mannequin or flat lay. Studio holds a ghost-mannequin rig.", volume: "40–60 looks a day" },
  { name: "Interiors & architecture", detail: "On location, tilt-shift, shot to a brief agreed with the architect or brand.", volume: "6–10 frames a day" },
];

/* ── Day rates ─────────────────────────────────────────────────────── */
export const rates = [
  {
    name: "Half day",
    hours: "4 hours",
    price: "₹28,000",
    suits: "A small SKU batch or a single styled setup.",
    includes: ["Studio and lighting", "Photographer & assistant", "Basic retouch on selects", "Files in 5 working days"],
    featured: false,
  },
  {
    name: "Full day",
    hours: "9 hours",
    price: "₹48,000",
    suits: "The standard booking. Most campaign and catalogue work.",
    includes: [
      "Studio and lighting",
      "Photographer, assistant & digital operator",
      "Tethered capture with live client review",
      "Retouch on up to 40 selects",
      "Files in 5 working days",
    ],
    featured: true,
  },
  {
    name: "Catalogue",
    hours: "Per SKU",
    price: "₹380 / SKU",
    suits: "Volume e-commerce past 30 units. Three angles per SKU.",
    includes: ["3 angles per SKU", "Cut-out on white", "Marketplace-spec export", "Minimum 30 SKUs", "Files in 7 working days"],
    featured: false,
  },
  {
    name: "On location",
    hours: "Day rate + travel",
    price: "From ₹62,000",
    suits: "Interiors, factory, or anywhere that is not our floor.",
    includes: ["Full lighting package transported", "Photographer, assistant & driver", "Travel at cost", "Files in 7 working days"],
    featured: false,
  },
];

export const rateNotes = [
  "Rates exclude GST, licensing, stylist, home economist, models and props.",
  "Overtime past the booked hours is billed at 15% of the day rate per hour, agreed on the day.",
  "A shot list is agreed in writing before the booking is confirmed. Additions on the day are quoted before we shoot them.",
  "Cancellation is free up to 72 hours out; inside that, 50% of the day rate applies.",
];

/* ── Licensing ─────────────────────────────────────────────────────── */
export const licensing = {
  title: "Licensing, in plain terms",
  body: "The day rate covers the making of the photographs. What you may do with them afterwards is a separate, published number — because that is how it actually works, and because a studio that hides it will surprise you later.",
  tiers: [
    { tier: "Owned channels", scope: "Your website, your app, your social", term: "Perpetual", price: "Included in the day rate" },
    { tier: "Marketplace", scope: "Amazon, Flipkart, Myntra, Nykaa listings", term: "Perpetual", price: "Included in the day rate" },
    { tier: "Paid digital", scope: "Performance and display advertising", term: "12 months", price: "+25% of the day rate" },
    { tier: "Print & OOH", scope: "Press, packaging, billboards, in-store", term: "12 months", price: "+45% of the day rate" },
    { tier: "Full buyout", scope: "All media, unlimited, worldwide", term: "Perpetual", price: "+120% of the day rate" },
  ],
  note: "Extensions are priced pro rata at renewal, never renegotiated from scratch. Raw files are not licensed or released.",
};

/* ── Process ───────────────────────────────────────────────────────── */
export const process = [
  { step: "01", title: "Brief & quote", when: "Within 24 hours", body: "You send the SKU count or the campaign brief. We return a shot list, a day count and a fixed quote including licensing." },
  { step: "02", title: "Pre-production", when: "3–5 days before", body: "Samples reach the studio, references are agreed, and the call sheet goes out to everyone on set." },
  { step: "03", title: "Shoot day", when: "On the day", body: "Tethered capture on a monitor the client can see. Selects are marked as we go, so approval happens on set." },
  { step: "04", title: "Post", when: "5 working days", body: "Colour, cleanup and cut-outs to the agreed spec. One round of revisions is included on every select." },
  { step: "05", title: "Delivery", when: "Day 5", body: "Web and print exports, named to your naming convention, delivered by link and archived by us for two years." },
];

/* ── Studio & kit ──────────────────────────────────────────────────── */
export const facilities = [
  "1,800 sq ft floor, 14 ft ceiling",
  "Drive-in access from street level",
  "9 m infinity cyclorama",
  "Profoto Pro-11 and D2 heads",
  "Phase One IQ4 and Canon R5 bodies",
  "Motion-controlled macro rig",
  "Ghost-mannequin apparel rig",
  "Client lounge with monitor mirroring",
  "Kitchen for food styling",
  "Sample store, humidity controlled",
];

export const clients = [
  "Direct-to-consumer beauty",
  "Listed jewellery retail",
  "National food & beverage",
  "Apparel & footwear",
  "Consumer electronics",
  "Hospitality groups",
  "Creative agencies",
  "Marketplace sellers",
];

export const faqs: FaqItem[] = [
  {
    question: "Why is licensing separate from the day rate?",
    answer:
      "Because a packshot used on your own listing and the same frame on a hoarding in three cities are different pieces of value. Bundling them means either you overpay for usage you never take, or the studio quietly restricts you later. Ours is a published table, so you can budget it before the shoot.",
  },
  {
    question: "Can we get the raw files?",
    answer:
      "No. Raws are unprocessed and not colour-managed, and handing them over means the images that carry our name may be finished by someone else. You receive layered TIFFs on request for retouching continuity, which solves the real problem behind the question.",
  },
  {
    question: "How many SKUs can you do in a day?",
    answer:
      "Around 90 for straightforward packshots at three angles, 40 to 60 for apparel, and 20 to 30 for jewellery. Anything requiring assembly, steaming or a home economist lowers that, and the quote will say so before you book.",
  },
  {
    question: "Do you provide models, stylists or props?",
    answer:
      "We book them through our own panel and pass the cost through at invoice with no markup, or you bring your own. Either way the fee appears as a separate line on the quote rather than buried in the day rate.",
  },
  {
    question: "What if we need it faster than five days?",
    answer:
      "Next-day delivery is available at 40% of the day rate, and same-day for a batch under 20 selects at 70%. Both are confirmed before the shoot, not asked for afterwards.",
  },
];

export const briefTypes = [
  "E-commerce packshots",
  "Styled product / campaign",
  "Food & beverage",
  "Jewellery & watches",
  "Lookbook & apparel",
  "Interiors & architecture",
  "Not sure yet",
];
