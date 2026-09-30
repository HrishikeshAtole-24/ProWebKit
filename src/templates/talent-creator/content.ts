import type { FaqItem, NavLink, StatItem } from "@/types/template";

/** All copy for the Creator Media Kit template. */
export const creator = {
  name: "Meher Qureshi",
  handle: "@meherqureshi",
  discipline: "Food & travel creator",
  based: "Mumbai · travels monthly",
  since: 2019,
  email: "hello@meherqureshi.com",
  manager: { name: "Ankit Rao", agency: "Collective Artists", email: "ankit@collectiveartists.in" },
  updated: "Media kit updated September 2026",
};

export const navLinks: NavLink[] = [
  { label: "Audience", href: "#audience" },
  { label: "Pillars", href: "#pillars" },
  { label: "Work", href: "#work" },
  { label: "Case study", href: "#case" },
  { label: "Rates", href: "#rates" },
  { label: "Enquire", href: "#enquire" },
];

export const hero = {
  eyebrow: creator.updated,
  titleLines: ["Food, travel,", "and the bill", "at the end."],
  subtitle:
    "I make short documentary food films about where a dish actually comes from — the cook, the market, the family that has made it for sixty years. Brand work sits inside that, or it does not happen.",
};

export const stats: StatItem[] = [
  { value: "612K", label: "Total following" },
  { value: "8.4%", label: "Avg. engagement" },
  { value: "2.1M", label: "Monthly reach" },
  { value: "68%", label: "Watch-through, Reels" },
];

/* ── Audience ──────────────────────────────────────────────────────── */
export const audience = {
  title: "The numbers, including the unflattering ones",
  body: "Pulled from native analytics on 30 September 2026. Screenshots go with every proposal, because a media kit with round numbers and no source is a mood board.",
  platforms: [
    { name: "Instagram", followers: "412K", engagement: "9.1%", note: "Primary. Reels average 340K views.", share: 67 },
    { name: "YouTube", followers: "148K", engagement: "6.2%", note: "Long-form, 8–14 min. Best watch time.", share: 24 },
    { name: "Substack", followers: "34K", engagement: "41% open", note: "Weekly. Highest-intent audience by far.", share: 6 },
    { name: "LinkedIn", followers: "18K", engagement: "4.4%", note: "Food-industry and hospitality professionals.", share: 3 },
  ],
  demographics: [
    { label: "Women", value: 63 },
    { label: "Aged 25–34", value: 48 },
    { label: "India", value: 71 },
    { label: "Metro tier-1", value: 58 },
  ],
  geography: [
    { place: "Mumbai", value: 22 },
    { place: "Delhi NCR", value: 17 },
    { place: "Bengaluru", value: 13 },
    { place: "Rest of India", value: 19 },
    { place: "UAE, UK, US", value: 29 },
  ],
};

/* ── Content pillars ───────────────────────────────────────────────── */
export const pillars = [
  { name: "Origin films", detail: "Six to twelve minutes on a single dish and the person who makes it. The reason the audience is here.", cadence: "Two a month" },
  { name: "Market walks", detail: "Short-form, shot handheld in wholesale and neighbourhood markets across India.", cadence: "Weekly" },
  { name: "Kitchen tests", detail: "Recipes attempted badly and then well, which performs better than either alone.", cadence: "Weekly" },
  { name: "The dispatch", detail: "A written Substack on food economics — what a thali costs to make and why it changed.", cadence: "Weekly" },
];

/* ── Selected collaborations ───────────────────────────────────────── */
export const work = [
  { brand: "Zomato", year: "2026", format: "3-part origin series", result: "4.1M views, 38K saves" },
  { brand: "Kerala Tourism", year: "2026", format: "Destination film + 6 Reels", result: "2.8M views" },
  { brand: "Godrej Yummiez", year: "2025", format: "Integrated recipe film", result: "1.2M views, 9.4% ER" },
  { brand: "Marriott Bonvoy", year: "2025", format: "Hotel residency, 4 days", result: "1.9M reach" },
  { brand: "Amazon Fresh", year: "2024", format: "Market walk series", result: "3.3M views" },
  { brand: "Vahdam Teas", year: "2024", format: "Long-form + newsletter", result: "22% click-through" },
];

/* ── Case study ────────────────────────────────────────────────────── */
export const caseStudy = {
  client: "Kerala Tourism",
  title: "Two hundred kilometres for one fish curry",
  brief:
    "Drive coastal Kerala for a week and make people want to go, without producing another drone-over-backwaters film.",
  approach:
    "We found four cooks along the coast making the same curry four ways and built the film around the disagreement between them. The tourism board is in it for ninety seconds of a fourteen-minute film.",
  metrics: [
    { label: "Views, 30 days", value: "2.8M" },
    { label: "Avg. watch time", value: "6m 41s" },
    { label: "Saves", value: "51K" },
    { label: "Cost per view", value: "₹0.42" },
  ],
  quote: {
    line: "We have commissioned a lot of creator work. This is the only piece where the comments were about the state rather than about the creator.",
    person: "Campaign lead, Kerala Tourism",
  },
};

/* ── Rate card ─────────────────────────────────────────────────────── */
export const rates = [
  {
    name: "Reel",
    scope: "One short-form film",
    price: "₹2,20,000",
    includes: ["Concept, shoot and edit", "Posted on Instagram", "30-day usage on brand channels", "One round of revisions"],
    featured: false,
  },
  {
    name: "Origin film",
    scope: "Long-form, 6–12 min",
    price: "₹8,50,000",
    includes: [
      "Research and location scouting",
      "Two-day shoot with a crew of four",
      "YouTube + 3 cut-down Reels",
      "Newsletter feature",
      "90-day usage on brand channels",
    ],
    featured: true,
  },
  {
    name: "Campaign",
    scope: "Multi-format, one month",
    price: "From ₹18,00,000",
    includes: [
      "One origin film",
      "Six short-form pieces",
      "Two newsletters",
      "Stills package for brand use",
      "6-month usage, all owned channels",
    ],
    featured: false,
  },
  {
    name: "Add-ons",
    scope: "Priced per item",
    price: "On request",
    includes: [
      "Paid-media whitelisting — +40%",
      "Exclusivity in category — +60%",
      "Extended usage beyond term — pro rata",
      "Event appearance — ₹3,50,000 a day",
    ],
    featured: false,
  },
];

export const rateNotes = [
  "Rates exclude GST and production travel, which is billed at cost with receipts.",
  "Usage beyond the stated term is priced pro rata, never renegotiated from scratch.",
  "Paid-media whitelisting is always a separate line. A creator who bundles it is underpricing the most valuable part.",
  "Barter is declined, politely and always, including for hotels and restaurants.",
];

/* ── How I work with brands ────────────────────────────────────────── */
export const principles = [
  { title: "No script hand-back", body: "You get the concept and the cut for approval. You do not get to write the voiceover, because the audience can tell instantly." },
  { title: "One brand a month", body: "Category exclusivity is available, but even without it I take one paid partner a month. Feeds that are all advertising stop working for everyone." },
  { title: "Disclosure, always", body: "Paid partnership label on every platform, and the words in the video. This is not negotiable and it does not reduce performance." },
  { title: "Nothing I have not eaten", body: "I will not front a product I have not used or a place I have not been. That is most of what the audience is actually buying." },
];

export const press = [
  { source: "Condé Nast Traveller India", line: "The rare food creator who spends longer with the cook than with the plate.", year: "2026" },
  { source: "Mint Lounge", line: "Qureshi has turned the origin story into a format other creators are now copying badly.", year: "2025" },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you work on barter?",
    answer:
      "No. Not for hotels, restaurants, products or travel. A crew of four has to be paid whether or not the meal was free, and barter arrangements quietly transfer that cost onto my team.",
  },
  {
    question: "Can we see the analytics before signing?",
    answer:
      "Yes. Native analytics screenshots for every platform go out with the proposal, including the metrics that flatter me least. Ask for a specific number and you will get the screenshot rather than a figure retyped into a deck.",
  },
  {
    question: "How long from brief to delivery?",
    answer:
      "Four weeks for an origin film, ten days for a Reel, six to eight weeks for a campaign. Travel-dependent work depends on the season, and monsoon months are booked out early.",
  },
  {
    question: "Who owns the footage?",
    answer:
      "I retain copyright; you receive the licence you bought for the term stated. Raw footage is not released. If you need a longer or wider licence, it is priced pro rata at any point, including after the campaign.",
  },
  {
    question: "Will you take a competitor afterwards?",
    answer:
      "Not within the exclusivity term if you have bought one. Without it, I still leave a full month between direct competitors, because doing otherwise devalues both pieces of work.",
  },
];

export const enquiryTypes = [
  "Single Reel",
  "Origin film",
  "Multi-format campaign",
  "Event or appearance",
  "Newsletter only",
  "Press or interview",
];
