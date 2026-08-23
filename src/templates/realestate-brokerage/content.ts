import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Property Brokerage template. */
export const agency = {
  name: "Anchor Property Advisors",
  tagline: "Resale & rental advisory",
  founded: 2011,
  rera: "RERA Agent Reg. A51700012884",
  phone: "+91 22 4970 1100",
  whatsapp: "+91 98670 11001",
  email: "desk@anchorproperty.in",
  address: { line1: "Shop 4, Hiranandani Gardens", line2: "Powai", city: "Mumbai 400076" },
};

export const navLinks: NavLink[] = [
  { label: "Listings", href: "#listings" },
  { label: "Buy / Rent / Sell", href: "#tracks" },
  { label: "Localities", href: "#localities" },
  { label: "Our fee", href: "#fee" },
  { label: "Paperwork", href: "#paperwork" },
  { label: "Enquire", href: "#enquire" },
];

export const hero = {
  eyebrow: `${agency.rera} · Powai, Mumbai`,
  title: "We will tell you what a flat is actually worth, not what it is listed at.",
  subtitle:
    "A resale and rental brokerage covering Powai, Chandivali and Vikhroli. Verified listings only, a published commission, and we will talk you out of a bad deal even though it costs us the fee.",
  primaryCta: { label: "Tell us what you need", href: "#enquire" },
  secondaryCta: { label: "Browse listings", href: "#listings" },
};

export const stats: StatItem[] = [
  { value: "1,340", label: "Transactions closed" },
  { value: "14 yrs", label: "In Powai" },
  { value: "100%", label: "Listings physically verified" },
  { value: "19 days", label: "Median time to close a rental" },
];

export const listings = [
  {
    title: "3 BHK · Hiranandani Eldora",
    type: "Sale",
    price: "₹4.15 cr",
    area: "1,640 sq ft carpet",
    floor: "12th of 22",
    facing: "Lake facing",
    status: "Available",
    note: "Renovated in 2023. Society NOC and share certificate verified.",
  },
  {
    title: "2 BHK · Chandivali Aster",
    type: "Rent",
    price: "₹78,000 / month",
    area: "980 sq ft carpet",
    floor: "7th of 14",
    facing: "Garden facing",
    status: "Available",
    note: "Semi-furnished. Company lease accepted, 3 months deposit.",
  },
  {
    title: "4 BHK duplex · Powai Vista",
    type: "Sale",
    price: "₹8.90 cr",
    area: "3,120 sq ft carpet",
    floor: "18th & 19th",
    facing: "Lake and city",
    status: "Under offer",
    note: "Two car parks. Chain of title clear for 40 years.",
  },
  {
    title: "1 BHK · Vikhroli Parkside",
    type: "Rent",
    price: "₹42,000 / month",
    area: "560 sq ft carpet",
    floor: "4th of 11",
    facing: "Internal",
    status: "Available",
    note: "Fully furnished. Walking distance to Godrej campus.",
  },
  {
    title: "3 BHK · Galleria Heights",
    type: "Sale",
    price: "₹3.40 cr",
    area: "1,280 sq ft carpet",
    floor: "9th of 17",
    facing: "Podium",
    status: "Available",
    note: "Original owner, single-hand sale. Priced for a quick close.",
  },
  {
    title: "Commercial · Supreme Business Park",
    type: "Rent",
    price: "₹2.10 lakh / month",
    area: "2,400 sq ft carpet",
    floor: "6th of 12",
    facing: "Main road",
    status: "Available",
    note: "Warm shell with 30 workstations in place. Immediate possession.",
  },
];

export const tracks = [
  {
    audience: "Buying",
    promise: "A shortlist, and an honest valuation of each one",
    points: [
      "Five to eight verified options, not forty forwarded listings",
      "Comparable-sale data for every property we show you",
      "Title and society document check before you pay a token",
      "Loan coordination with four lenders, no referral commission taken",
    ],
  },
  {
    audience: "Selling",
    promise: "Priced to sell, not priced to flatter",
    points: [
      "Valuation backed by the last twelve months of registered sales",
      "Professional photography and a floor plan at our cost",
      "Buyer screening so you meet three serious people, not thirty",
      "Negotiation and registration handled to completion",
    ],
  },
  {
    audience: "Renting",
    promise: "Moved in within a month",
    points: [
      "Options that match your actual budget and commute",
      "Landlord background and society NOC checked in advance",
      "Leave and licence agreement drafted and registered",
      "Handover inventory documented with photographs",
    ],
  },
  {
    audience: "Landlords",
    promise: "Tenants who pay and stay",
    points: [
      "Employment and previous-landlord verification on every tenant",
      "Police intimation and registration filed on your behalf",
      "Annual escalation and renewal tracked and reminded",
      "Exit inspection with a documented deposit settlement",
    ],
  },
];

export const localities = [
  { name: "Powai", sale: "₹24,000 – 34,000 / sq ft", rent: "₹55k – 1.6 lakh", note: "Lake-facing stock commands a 12–18% premium. School catchment drives family demand." },
  { name: "Chandivali", sale: "₹18,000 – 25,000 / sq ft", rent: "₹38k – 95k", note: "Better value per square foot; traffic on the link road is the trade-off." },
  { name: "Vikhroli", sale: "₹21,000 – 29,000 / sq ft", rent: "₹42k – 1.1 lakh", note: "Godrej campus and the metro line have pushed rental demand up sharply since 2024." },
  { name: "Kanjurmarg", sale: "₹17,000 – 23,000 / sq ft", rent: "₹32k – 70k", note: "The value play. Newer inventory and metro connectivity, less established society stock." },
];

export const fee = {
  title: "Our commission, in public",
  body: "Brokerage in this market is negotiated in whispers. Ours is printed here, it is the same for everyone, and it is the only money we take on a transaction.",
  rates: [
    { service: "Residential sale", rate: "1% of consideration", payer: "Paid by the seller", note: "Buyers pay us nothing" },
    { service: "Residential rental", rate: "One month rent", payer: "Split equally, tenant and landlord", note: "Half a month each" },
    { service: "Commercial lease", rate: "One month rent per year of tenure", payer: "Paid by the licensor", note: "Capped at two months" },
    { service: "Valuation only", rate: "₹8,000", payer: "Paid by whoever asks", note: "Adjusted if we go on to transact" },
  ],
  never: [
    "We do not take a cut from lenders, lawyers or movers we refer you to",
    "We do not take money from both sides of a sale",
    "We do not charge a registration fee, a file charge or a marketing fee",
  ],
};

export const paperwork = [
  { step: "Title check", detail: "Chain of documents traced, encumbrance certificate obtained, and society records verified before any token is paid." },
  { step: "Agreement", detail: "Draft agreement for sale or leave and licence prepared with a panel advocate, reviewed with you line by line." },
  { step: "Stamp duty & registration", detail: "Duty computed, appointment booked, and we attend the sub-registrar office with you." },
  { step: "Society transfer", detail: "NOC, transfer forms, share certificate endorsement and the society meeting followed through to completion." },
  { step: "Handover", detail: "Meter readings, keys, inventory and a documented condition report on the day of possession." },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They told us the flat we loved was overpriced by about thirty lakh and showed us the registered sales to prove it. We waited four months and bought in the same tower for less.",
    author: "Aditya & Ruchi Nair",
    role: "Bought in Powai, 2025",
  },
  {
    quote:
      "As a landlord sitting in Singapore, the tenant verification and the deposit settlement report are what I pay for. Two tenancies, zero disputes.",
    author: "S. Venkataraman",
    role: "Landlord since 2021",
  },
  {
    quote:
      "Nineteen days from the first call to the keys, including registration. My previous rental search took four months and two brokers.",
    author: "Priya Deshmukh",
    role: "Rented in Chandivali",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What does verified actually mean?",
    answer:
      "Someone from our office has physically been inside the flat within the last thirty days, met the owner or their authorised representative, and seen the society NOC position. We do not list a property we have not stood inside.",
  },
  {
    question: "Do buyers pay you anything?",
    answer:
      "No. On a residential sale our fee is 1% and it is paid by the seller. If a broker asks you for a fee from both sides on the same transaction, that is the moment to walk away.",
  },
  {
    question: "Will you show me properties outside these four localities?",
    answer:
      "Rarely, and only for existing clients. We know Powai, Chandivali, Vikhroli and Kanjurmarg well enough to price them from memory. Everywhere else we would be guessing, and you can find a broker who is not.",
  },
  {
    question: "Can you help with the home loan?",
    answer:
      "We coordinate with four lenders and prepare your file, and we take no referral fee from any of them. That means the recommendation is about your rate, not our commission.",
  },
  {
    question: "What if a deal falls through after the token?",
    answer:
      "We do not charge until the transaction completes, so a collapse costs you nothing in brokerage. Recovering the token itself depends on the agreement terms, which is exactly why we insist on a written token receipt with conditions.",
  },
];

export const enquiryTypes = [
  "Buying a home",
  "Selling a home",
  "Renting a home",
  "Letting out my property",
  "Commercial space",
  "Valuation only",
];
