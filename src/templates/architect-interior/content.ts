import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Interior Design template. */
export const studio = {
  name: "Casa Interiors",
  lead: "Ananya Deshmukh",
  discipline: "Residential interior design",
  founded: 2016,
  phone: "+91 20 4890 3311",
  whatsapp: "+91 98600 33110",
  email: "hello@casainteriors.in",
  address: { line1: "Studio 4, Kalyani Nagar", line2: "", city: "Pune 411006" },
};

export const navLinks: NavLink[] = [
  { label: "Packages", href: "#packages" },
  { label: "Rooms", href: "#rooms" },
  { label: "Materials", href: "#materials" },
  { label: "Process", href: "#process" },
  { label: "Homes", href: "#homes" },
  { label: "Consult", href: "#consult" },
];

export const hero = {
  eyebrow: `Designing homes in Pune since ${studio.founded}`,
  title: "A home that looks like the people living in it.",
  subtitle:
    "Full-service residential interiors — design, material selection, custom joinery and execution supervision. Fixed scope, published packages, and a timeline you can plan a move around.",
  primaryCta: { label: "Book a home consultation", href: "#consult" },
  secondaryCta: { label: "See packages", href: "#packages" },
};

export const stats: StatItem[] = [
  { value: "180+", label: "Homes completed" },
  { value: "9 yrs", label: "In practice" },
  { value: "14 wks", label: "Median 3BHK timeline" },
  { value: "94%", label: "Handed over on schedule" },
];

export const packages = [
  {
    name: "Essentials",
    homes: "1 & 2 BHK",
    price: "₹6.5 – 11 lakh",
    duration: "8 – 10 weeks",
    blurb: "A complete, liveable home without the extras.",
    includes: [
      "Full design & 3D visualisation",
      "Modular kitchen & wardrobes",
      "TV unit and shoe storage",
      "Painting and electrical modification",
      "False ceiling in living & bedrooms",
      "Execution supervision",
    ],
    featured: false,
  },
  {
    name: "Signature",
    homes: "3 BHK & duplexes",
    price: "₹14 – 26 lakh",
    duration: "12 – 16 weeks",
    blurb: "Where most of our homes land.",
    includes: [
      "Everything in Essentials",
      "Custom joinery in solid veneer",
      "Designer lighting scheme",
      "Bathroom and flooring upgrades",
      "Soft furnishing & curtain package",
      "Furniture selection and procurement",
      "Dedicated project manager on site",
    ],
    featured: true,
  },
  {
    name: "Bespoke",
    homes: "Villas & penthouses",
    price: "₹32 lakh onwards",
    duration: "20 – 30 weeks",
    blurb: "Design-led, with no template applied.",
    includes: [
      "Everything in Signature",
      "Space planning & structural coordination",
      "Bespoke furniture design",
      "Imported stone and finish sourcing",
      "Art and object curation",
      "Landscape and terrace design",
      "Weekly site walkthroughs",
    ],
    featured: false,
  },
];

export const rooms = [
  { name: "Kitchen", body: "Layout, modular systems, counters and the ventilation that most kitchens get wrong.", detail: "Soft-close hardware, quartz or granite counters, tall-unit planning" },
  { name: "Living & dining", body: "The room guests see and the family actually uses — planned for both.", detail: "Seating layouts, media walls, dining storage, lighting layers" },
  { name: "Bedrooms", body: "Storage first, then everything else. Wardrobes designed around what you own.", detail: "Wardrobes, bed backs, study nooks, blackout treatments" },
  { name: "Children's rooms", body: "Designed to survive the next eight years, not just look good on handover day." , detail: "Convertible study desks, wipeable finishes, expandable storage" },
  { name: "Bathrooms", body: "Waterproofing and slope before tile selection. In that order.", detail: "Vanity design, storage, fittings, anti-skid specification" },
  { name: "Balconies & utility", body: "The spaces every builder wastes and every family needs.", detail: "Utility planning, planters, weatherproof seating" },
];

export const materials = [
  { palette: "Warm minimal", tones: ["Oak veneer", "Off-white matte", "Brushed brass", "Beige quartz"], suits: "Compact apartments, north-facing homes" },
  { palette: "Earthen", tones: ["Terracotta", "Lime plaster", "Cane", "Kota stone"], suits: "Villas, homes with generous daylight" },
  { palette: "Contemporary dark", tones: ["Walnut", "Charcoal laminate", "Black metal", "Fluted glass"], suits: "Duplexes and media-heavy living rooms" },
  { palette: "Coastal light", tones: ["Bleached ash", "Chalk white", "Rattan", "Sea-green tile"], suits: "Second homes and airy layouts" },
];

export const process = [
  { step: "01", title: "Home visit", duration: "Week 1", body: "We measure the space, understand how you actually live in it, and agree a budget band. Free, and no design is presented yet." },
  { step: "02", title: "Design & 3D", duration: "Weeks 2–4", body: "Layouts, material palettes and photorealistic 3D views of every room. Two rounds of changes are included." },
  { step: "03", title: "Final quote", duration: "Week 4", body: "An itemised quote against approved drawings. This is the number in the contract — it does not move unless the scope does." },
  { step: "04", title: "Execution", duration: "Weeks 5–14", body: "Factory production, site work and installation, with a project manager on site and weekly photo updates to you." },
  { step: "05", title: "Handover", duration: "Final week", body: "Snag list closed, warranties issued, and a care guide for every surface in the home." },
];

export const homes = [
  { title: "3BHK, Kharadi", palette: "Warm minimal", area: "1,450 sq ft", duration: "13 weeks" },
  { title: "Villa, Bhugaon", palette: "Earthen", area: "3,800 sq ft", duration: "26 weeks" },
  { title: "2BHK, Baner", palette: "Coastal light", area: "980 sq ft", duration: "9 weeks" },
  { title: "Duplex, Koregaon Park", palette: "Contemporary dark", area: "2,600 sq ft", duration: "18 weeks" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The quote we signed in March was the invoice we paid in July. After two previous renovations, I did not think that was possible.",
    author: "Sneha & Amit Rao",
    role: "3BHK, Kharadi",
  },
  {
    quote:
      "They redesigned the kitchen around the fact that we cook twice a day, not around a Pinterest board. Nine months in, nothing is in the wrong place.",
    author: "Farah Qureshi",
    role: "2BHK, Baner",
  },
  {
    quote:
      "Weekly photographs from site meant we could stay in Dubai through the whole project and still know exactly what was happening.",
    author: "Karan Bhalla",
    role: "Villa, Bhugaon",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Is the design fee separate from execution?",
    answer:
      "Design is charged at ₹35 per sq ft and is adjusted in full against the execution cost if you go ahead with us. If you take the drawings elsewhere, the fee stands and the drawings are yours.",
  },
  {
    question: "What is not included in the package prices?",
    answer:
      "Civil work such as wall demolition or plumbing relocation, appliances, loose furniture beyond the listed package, and society deposits. Everything excluded is listed explicitly in the quote — there is no fine print.",
  },
  {
    question: "What if the project runs late?",
    answer:
      "The contract carries a delay clause: beyond the agreed handover date, we credit 0.5% of the contract value per week, capped at 5%. Delays caused by client-side approvals or society restrictions are excluded, and we tell you in writing the day one occurs.",
  },
  {
    question: "What warranty do you give?",
    answer:
      "Ten years on modular carcass, five years on hardware, and one year on workmanship including painting and electrical. Warranty cards are handed over at closing, not promised verbally.",
  },
  {
    question: "Can we live in the house during work?",
    answer:
      "For a full-home project, we strongly advise against it — dust and noise make it miserable and it slows the site by three to four weeks. For single-room work it is usually manageable.",
  },
];

export const consultTypes = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "Duplex or penthouse",
  "Villa or bungalow",
  "Single room or kitchen only",
];
