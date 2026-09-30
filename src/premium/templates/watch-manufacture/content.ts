/**
 * All copy for Maison Valdère — a fictional haute-horlogerie manufacture.
 * Photography is licensed from Unsplash (free for commercial use); none of
 * it shows a real brand's mark or a recognisable person.
 */

export const brand = {
  name: "Valdère",
  full: "Maison Valdère",
  place: "Le Brassus, Vallée de Joux",
  founded: 1871,
  email: "rendezvous@valdere.ch",
  phone: "+41 21 845 18 71",
};

export const nav = [
  { label: "Collections", href: "#collections" },
  { label: "Manufacture", href: "#manufacture" },
  { label: "Calibre", href: "#calibre" },
  { label: "Heritage", href: "#heritage" },
  { label: "Boutiques", href: "#boutiques" },
];

/** Unsplash photo ids. Resized on Unsplash's CDN by the premium Photo loader. */
export const photos = {
  movementGilt: "photo-1731446451174-f03dedf514ff",
  engraved: "photo-1582043568773-a7a2b57239f5",
  rubyTrain: "photo-1633451238208-11c8e6c1fed4",
  wheels: "photo-1712890933285-7a4371686947",
  bench: "photo-1788125856699-ddd59e4f24c6",
  valley: "photo-1783060789114-ee8d2b7df237",
  village: "photo-1773529411109-cbc73b0c9f97",
};

/* ── Stage: hero and the scroll-driven anatomy ─────────────────────── */
export const hero = {
  eyebrow: `Manufacture d'horlogerie · since ${brand.founded}`,
  titleLines: ["Time,", "kept by hand."],
  body: "Eleven watches leave the Vallée de Joux each week. Each one is made, finished and regulated by the same four pairs of hands.",
  cta: "Request a private viewing",
};

export const anatomy = [
  {
    index: "I",
    label: "The case",
    title: "Thirty-nine millimetres of 18k gold, turned from a single bar.",
    body: "Eight point nine millimetres thin. The bezel is polished on a tin disc by hand; the flanks are satin-brushed in one pass so the grain never breaks.",
  },
  {
    index: "II",
    label: "The dial",
    title: "Grand feu enamel, fired eleven times.",
    body: "A midnight-blue sunburst over a hand-turned guilloché rosette. Applied indices in 18k gold, each one set by eye beneath a loupe.",
  },
  {
    index: "III",
    label: "The movement",
    title: "Calibre VD·1871. Watch it breathe.",
    body: "Two hundred and seventy-four parts beating at 4 Hz behind a sapphire caseback. Côtes de Genève, perlage, blued screws and bevels polished to a mirror, even where no one will look.",
  },
];

export const finale = {
  title: "Yours, for the next hundred and fifty years.",
  body: "Every Valdère is serviced in Le Brassus for as long as the Maison exists. We have not yet declined a watch we made.",
};

/* ── Manifesto ─────────────────────────────────────────────────────── */
export const marquee = ["Le Brassus", "Grand Feu", "Calibre VD·1871", "Côtes de Genève", "Since 1871", "Hand-finished"];

export const manifesto =
  "We make fewer watches than we could, slower than we should, in the same valley where our founder worked through the winters of 1871. Nothing about that is efficient. All of it is the point.";

/* ── Collections ───────────────────────────────────────────────────── */
export type Complication = "time" | "moonphase" | "perpetual" | "tourbillon" | "small-seconds";

export interface Reference {
  name: string;
  ref: string;
  line: string;
  complication: Complication;
  case: string;
  dial: string;
  price: string;
  /** Dial artwork colours. */
  art: { dial: [string, string]; print: string; metal: [string, string]; hands: string };
}

export const collections: Reference[] = [
  {
    name: "Heure Bleue",
    ref: "Ref. VD 3910",
    line: "The first Valdère, drawn again. Time only, and nothing to distract from it.",
    complication: "time",
    case: "39 mm · 18k white gold",
    dial: "Midnight grand feu enamel",
    price: "CHF 38,500",
    art: { dial: ["#243c70", "#0a1328"], print: "#e2d2ae", metal: ["#f2f2f0", "#9a9ca3"], hands: "#f3efe6" },
  },
  {
    name: "Lune Opaline",
    ref: "Ref. VD 4120",
    line: "A moon that is accurate for 122 years, on an opaline dial the colour of new snow.",
    complication: "moonphase",
    case: "38 mm · 18k rose gold",
    dial: "Silvered opaline",
    price: "CHF 46,000",
    art: { dial: ["#f4efe6", "#d9d1c3"], print: "#6b4a2b", metal: ["#f6cfb0", "#a8704f"], hands: "#8a5a3a" },
  },
  {
    name: "Quantième Perpétuel",
    ref: "Ref. VD 5271",
    line: "Knows the length of every month and every leap year, until 2100. Set it once.",
    complication: "perpetual",
    case: "40 mm · 18k rose gold",
    dial: "Salmon, vertical satin",
    price: "CHF 142,000",
    art: { dial: ["#efb79a", "#c98466"], print: "#3e2418", metal: ["#f6cfb0", "#a8704f"], hands: "#3e2418" },
  },
  {
    name: "Petite Seconde",
    ref: "Ref. VD 2804",
    line: "Small seconds at six, as the 1930s pocket watches in our archive had it.",
    complication: "small-seconds",
    case: "37 mm · platinum 950",
    dial: "White grand feu enamel",
    price: "CHF 64,000",
    art: { dial: ["#fbfaf6", "#e6e2d8"], print: "#1a1a22", metal: ["#e9ebee", "#8d9199"], hands: "#1d2e66" },
  },
  {
    name: "Tourbillon Nuit",
    ref: "Ref. VD 9001",
    line: "A one-minute flying tourbillon, visible at six, against slate-grey meteorite.",
    complication: "tourbillon",
    case: "41 mm · platinum 950",
    dial: "Slate meteorite",
    price: "Price on application",
    art: { dial: ["#4a4d52", "#1c1d20"], print: "#e6e2d8", metal: ["#e9ebee", "#8d9199"], hands: "#f1eee7" },
  },
];

/* ── Manufacture ───────────────────────────────────────────────────── */
export const manufacture = {
  eyebrow: "La Manufacture",
  titleLines: ["Four hands.", "Eleven months."],
  body: "A Valdère movement is assembled twice. The first time to prove it works; then it is taken apart, every part is finished by hand, and it is assembled again by the same watchmaker, who signs the inside of the caseback.",
  crafts: [
    {
      name: "Anglage",
      body: "Every bridge edge is bevelled at 45° and polished with wood and diamond paste. An inward angle takes a finisher a full day.",
      photo: "engraved" as const,
    },
    {
      name: "Côtes de Genève",
      body: "Parallel waves ground into the bridges with a rotating wooden peg. They exist to catch dust, and because they are beautiful.",
      photo: "rubyTrain" as const,
    },
    {
      name: "Regulation",
      body: "Each watch is regulated in six positions and three temperatures over forty days before it is allowed a serial number.",
      photo: "bench" as const,
    },
  ],
  stats: [
    { value: 274, suffix: "", label: "Components in Calibre VD·1871" },
    { value: 11, suffix: " mo", label: "From first part to delivery" },
    { value: 72, suffix: " h", label: "Power reserve, twin barrels" },
    { value: 580, suffix: "", label: "Watches made each year" },
  ],
};

/* ── Calibre spec sheet ────────────────────────────────────────────── */
export const calibre = {
  eyebrow: "Fiche technique",
  title: "Calibre VD·1871",
  body: "Designed, made and finished in Le Brassus. Hand-wound, because a watch you wind is a watch you keep.",
  specs: [
    ["Winding", "Manual, twin series-coupled barrels"],
    ["Power reserve", "72 hours"],
    ["Frequency", "28,800 vph · 4 Hz"],
    ["Jewels", "31 rubies in gold chatons"],
    ["Components", "274"],
    ["Diameter", "30.6 mm · 13¼ lignes"],
    ["Thickness", "3.9 mm"],
    ["Balance", "Free-sprung, gold inertia screws"],
    ["Hairspring", "Breguet overcoil"],
    ["Precision", "−1 / +3 seconds a day, in-house certified"],
    ["Finishing", "Côtes de Genève, perlage, hand anglage, black polish"],
    ["Hallmark", "Sceau Valdère, awarded per watch"],
  ] as Array<[string, string]>,
};

/* ── Heritage ──────────────────────────────────────────────────────── */
export const heritage = [
  {
    year: "1871",
    title: "A farmhouse in Le Brassus",
    body: "Élie Valdère, a farmer, makes movement blanks through the winter for the Geneva houses. The first watch signed with his own name follows in the spring.",
  },
  {
    year: "1904",
    title: "The grande complication",
    body: "Six years in the making: a pocket watch with minute repeater, perpetual calendar and split-seconds chronograph, now in the Maison's archive.",
  },
  {
    year: "1948",
    title: "The Heure Bleue",
    body: "The first Valdère wristwatch with an enamel dial. Three hundred were made. The Maison buys them back whenever one appears.",
  },
  {
    year: "1976",
    title: "No to quartz",
    body: "With the valley's workshops closing, the family refuses to build a quartz line and keeps eleven watchmakers on half pay through the crisis.",
  },
  {
    year: "2021",
    title: "Calibre VD·1871",
    body: "The first movement designed entirely in-house in fifty years, hand-wound and finished to the Maison's own seal.",
  },
];

export const valley = {
  quote: "The valley is snowed in for five months a year. That is why watches were made here, and why they still are.",
  credit: "Anne-Laure Valdère, fifth generation",
};

/* ── Boutiques ─────────────────────────────────────────────────────── */
export const boutiques = [
  { city: "Le Brassus", address: "Route de France 18", note: "The Manufacture · by appointment", photo: "village" as const },
  { city: "Genève", address: "Quai du Général-Guisan 26", note: "Flagship salon", photo: "movementGilt" as const },
  { city: "Paris", address: "Place Vendôme 12", note: "Salon privé", photo: "engraved" as const },
  { city: "London", address: "New Bond Street 41", note: "Boutique", photo: "wheels" as const },
  { city: "Dubai", address: "The Dubai Mall, Fashion Avenue", note: "Boutique", photo: "rubyTrain" as const },
  { city: "Singapore", address: "Marina Bay Sands, L1", note: "Boutique", photo: "bench" as const },
];

/* ── Appointment ───────────────────────────────────────────────────── */
export const appointment = {
  eyebrow: "Rendez-vous privé",
  titleLines: ["See it on", "your wrist."],
  body: "Viewings are private and unhurried, in a boutique or at the Manufacture in Le Brassus. A watchmaker will be there to open the caseback for you.",
  interests: ["Heure Bleue", "Lune Opaline", "Quantième Perpétuel", "Petite Seconde", "Tourbillon Nuit", "A bespoke commission"],
  thanks: "Merci. Your request is with the boutique, and a client adviser will write to you personally within one working day.",
};

export const footer = {
  links: [
    { label: "Servicing & restoration", href: "#calibre" },
    { label: "Certificate of origin", href: "#heritage" },
    { label: "Careers at the Manufacture", href: "#manufacture" },
    { label: "Press", href: "#heritage" },
  ],
  legal: "Maison Valdère is a fictional brand created to demonstrate a ProWebKit premium template.",
};
