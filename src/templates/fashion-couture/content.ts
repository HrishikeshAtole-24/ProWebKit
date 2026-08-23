import type { FaqItem, NavLink } from "@/types/template";

/** All copy for the Couture Atelier template. */
export const house = {
  name: "Atelier Rhea",
  designer: "Rhea Kapoor Malhotra",
  discipline: "Made-to-measure couture",
  founded: 2014,
  phone: "+91 11 4106 8800",
  email: "atelier@rhea.co.in",
  address: { line1: "14 Sunder Nagar Market", line2: "", city: "New Delhi 110003" },
  hours: "By appointment · Tuesday to Saturday",
};

export const navLinks: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "Commissions", href: "#commission" },
  { label: "Atelier", href: "#atelier" },
  { label: "Fittings", href: "#fittings" },
  { label: "Press", href: "#press" },
  { label: "Appointments", href: "#appointment" },
];

export const hero = {
  season: "Autumn / Winter 2026",
  title: "Kalidar",
  subtitle:
    "Twenty-two pieces in handwoven Chanderi and raw mulberry silk, cut on the panelled kalidar line and finished entirely by hand at the Sunder Nagar atelier.",
  note: "Presented at India Couture Week, July 2026",
};

export const collections = [
  {
    name: "Kalidar",
    season: "Autumn / Winter 2026",
    pieces: 22,
    materials: "Handwoven Chanderi · raw mulberry silk · zardozi",
    note: "Panelled silhouettes drawn from nineteenth-century court dress, rebuilt for a body that moves.",
    status: "Current",
  },
  {
    name: "Salt Line",
    season: "Spring / Summer 2026",
    pieces: 18,
    materials: "Khadi cotton · organza · shell buttons",
    note: "An unlined, undyed summer collection developed with weavers in Kutch over fourteen months.",
    status: "Archive",
  },
  {
    name: "Nightjar",
    season: "Autumn / Winter 2025",
    pieces: 26,
    materials: "Silk velvet · French tulle · antique sequin",
    note: "Evening wear in near-black, built around hand-set sequin work that took 4,100 hours across the collection.",
    status: "Archive",
  },
  {
    name: "Field Notes",
    season: "Resort 2025",
    pieces: 14,
    materials: "Linen · handloom cotton · mother of pearl",
    note: "A pared-back resort capsule, and the first collection produced entirely without synthetic lining.",
    status: "Archive",
  },
];

export const commission = {
  title: "How a commission works",
  body: "Everything leaving the atelier is made for one person. Nothing is stocked, and nothing is cut before the first fitting.",
  steps: [
    { number: "I", title: "Consultation", duration: "90 minutes", body: "In the atelier or by video. We discuss the occasion, the silhouette and the budget honestly before any sketch exists." },
    { number: "II", title: "Sketch & fabric", duration: "2 weeks", body: "Two or three drawn directions with fabric swatches. One is chosen and developed; the others are set aside." },
    { number: "III", title: "Toile fitting", duration: "Week 4", body: "A calico mock-up fitted on you. This is where the silhouette is actually decided, on the body rather than on paper." },
    { number: "IV", title: "Construction", duration: "8–16 weeks", body: "Cutting, hand embroidery and construction at the atelier. Progress photographs are shared at each stage." },
    { number: "V", title: "Final fittings", duration: "2–3 sittings", body: "Fittings continue until the garment sits correctly standing, seated and walking. There is no fixed number." },
  ],
};

export const atelier = {
  title: "Eleven pairs of hands in Sunder Nagar",
  paragraphs: [
    "The atelier employs eleven people: two pattern cutters, four karigars specialising in zardozi and aari, three tailors, a finisher and a studio manager. Everyone is on salary, not piece rate.",
    "Embroidery is done in house rather than sent to a workshop. It is slower and considerably more expensive, and it is the only way to know exactly whose hands did the work and what they were paid for it.",
    "Cloth is sourced directly from weaving clusters in Chanderi, Bhuj and Murshidabad. We publish the cluster for every fabric used in a collection.",
  ],
  facts: [
    { label: "Founded", value: `${house.founded}, New Delhi` },
    { label: "Atelier", value: "11 people, all salaried" },
    { label: "Embroidery", value: "In house, never outsourced" },
    { label: "Production", value: "Made to measure only" },
  ],
};

export const fittings = [
  { garment: "Occasion sari & blouse", timeline: "8 – 10 weeks", fittings: "2 fittings", note: "Blouse construction begins after the toile" },
  { garment: "Lehenga, hand embroidered", timeline: "16 – 22 weeks", fittings: "3 – 4 fittings", note: "Embroidery time dominates the schedule" },
  { garment: "Evening gown", timeline: "10 – 14 weeks", fittings: "3 fittings", note: "Longer for structured or corseted bodices" },
  { garment: "Sherwani & bundi", timeline: "10 – 12 weeks", fittings: "3 fittings", note: "Includes hand-finished buttonholes" },
  { garment: "Bridal commission", timeline: "6 – 9 months", fittings: "4 – 6 fittings", note: "Book at least nine months before the date" },
];

export const press = [
  { publication: "Vogue India", headline: "The quiet radicalism of Atelier Rhea", year: "2026" },
  { publication: "The Business of Fashion", headline: "India's small ateliers are betting on transparency", year: "2025" },
  { publication: "Harper's Bazaar India", headline: "Nightjar, and 4,100 hours of sequin", year: "2025" },
  { publication: "The Voice of Fashion", headline: "Naming the weaver: a fabric-sourcing experiment", year: "2024" },
];

export const stockists = [
  { name: "The Atelier", city: "New Delhi", note: "Sunder Nagar · by appointment" },
  { name: "Ogaan", city: "Mumbai", note: "Selected archive pieces" },
  { name: "Amaya", city: "Hyderabad", note: "Trunk shows, twice yearly" },
  { name: "Trunk show", city: "London", note: "October, by invitation" },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you sell ready-to-wear?",
    answer:
      "No. Every garment is cut for one client after a toile fitting. Archive pieces occasionally become available in the client's size, and those are offered privately rather than listed.",
  },
  {
    question: "What does a commission cost?",
    answer:
      "Occasion wear begins around ₹1,80,000 and hand-embroidered bridal commissions typically run between ₹6,00,000 and ₹22,00,000 depending on the embroidery. A precise figure is given after the sketch stage, in writing, before any cloth is cut.",
  },
  {
    question: "How far ahead should I book a bridal commission?",
    answer:
      "Nine months before the date, and twelve if the embroidery is extensive. The atelier accepts a limited number of bridal commissions each season and closes the book once those are taken.",
  },
  {
    question: "Can you work with a client outside Delhi?",
    answer:
      "Yes. The first consultation can be by video, and fittings are arranged during trunk shows in Mumbai, Hyderabad and London, or by the atelier travelling to you at cost.",
  },
  {
    question: "Where does the fabric come from?",
    answer:
      "Directly from weaving clusters in Chanderi, Bhuj and Murshidabad. The cluster and, where the weaver consents, the weaver are named on the label of every finished garment.",
  },
];

export const appointmentTypes = [
  "Occasion wear",
  "Bridal commission",
  "Evening gown",
  "Menswear",
  "Archive enquiry",
  "Press or stockist",
];
