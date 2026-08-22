import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Corporate & Technology law firm template. */
export const firm = {
  name: "Sterling Legal",
  tagline: "Corporate & technology counsel",
  phone: "+91 22 6155 4000",
  email: "deals@sterlinglegal.in",
  offices: "Mumbai · Bengaluru · Gurugram",
  address: { line1: "12th Floor, One BKC", line2: "Bandra Kurla Complex", city: "Mumbai 400051" },
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Transactions", href: "#transactions" },
  { label: "Sectors", href: "#sectors" },
  { label: "Packages", href: "#packages" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Term sheet to closing, without the two-week silence",
  title: "Deal counsel that moves at the speed of the deal.",
  subtitle:
    "A transactional practice for founders, funds and acquirers. Fundraises, acquisitions, ESOPs and commercial contracts — with turnaround commitments in the engagement letter, not just the pitch.",
  primaryCta: { label: "Discuss a transaction", href: "#contact" },
  secondaryCta: { label: "See fixed-fee packages", href: "#packages" },
};

export const stats: StatItem[] = [
  { value: "₹18,400cr", label: "Transaction value advised" },
  { value: "340+", label: "Fundraises closed" },
  { value: "48 hrs", label: "First markup, guaranteed" },
  { value: "26", label: "Lawyers" },
];

export const services = [
  {
    stage: "Formation",
    title: "Getting the structure right once",
    items: [
      "Incorporation & founder agreements",
      "Cap table and vesting design",
      "IP assignment from founders and contractors",
      "Employment and contractor templates",
    ],
  },
  {
    stage: "Fundraising",
    title: "Seed through growth rounds",
    items: [
      "Term sheet negotiation",
      "SHA, SSA and CCPS documentation",
      "Legal due diligence response",
      "FEMA, FC-GPR and ODI compliance",
    ],
  },
  {
    stage: "Scale",
    title: "Contracts that hold at volume",
    items: [
      "Master services and SaaS agreements",
      "Data protection under the DPDP Act",
      "ESOP schemes and grant documentation",
      "Vendor, channel and reseller contracts",
    ],
  },
  {
    stage: "Exit",
    title: "Acquisitions and secondaries",
    items: [
      "Share purchase and asset purchase agreements",
      "Buy-side and sell-side diligence",
      "Secondary sales and buybacks",
      "Escrow, earn-out and indemnity structuring",
    ],
  },
];

export const transactions = [
  { value: "₹740cr", type: "Series C", detail: "Represented the company in a growth round led by a global crossover fund", year: "2025" },
  { value: "₹1,120cr", type: "Acquisition", detail: "Buy-side counsel on the acquisition of a logistics technology platform", year: "2025" },
  { value: "₹210cr", type: "Series A", detail: "Company-side counsel, term sheet to closing in 31 days", year: "2024" },
  { value: "₹390cr", type: "Secondary", detail: "Structured an employee and angel secondary alongside a primary round", year: "2024" },
  { value: "₹96cr", type: "Seed", detail: "Represented a fund on a multi-tranche seed investment with milestone conditions", year: "2024" },
  { value: "₹2,300cr", type: "Merger", detail: "Advised on a cross-border merger with CCI notification and approval", year: "2023" },
];

export const sectors = [
  { name: "SaaS & enterprise software", note: "Contracting, data protection, cross-border revenue" },
  { name: "Fintech & lending", note: "RBI licensing, co-lending structures, digital lending guidelines" },
  { name: "Consumer & D2C", note: "Marketplace terms, advertising compliance, supply agreements" },
  { name: "Healthtech & diagnostics", note: "Clinical data, telemedicine rules, regulatory approvals" },
  { name: "Deep tech & semiconductors", note: "IP ownership, government incentives, export controls" },
  { name: "Climate & mobility", note: "Project structuring, subsidies, infrastructure contracts" },
];

export const packages = [
  {
    name: "Incorporation",
    price: "₹85,000",
    turnaround: "10 working days",
    blurb: "For founders starting clean.",
    includes: [
      "Private limited incorporation",
      "Founder agreement with vesting",
      "IP assignment deeds",
      "Standard employment contract",
      "First-year secretarial calendar",
    ],
    featured: false,
  },
  {
    name: "Seed round",
    price: "₹4,50,000",
    turnaround: "3–5 weeks to closing",
    blurb: "Company-side, priced or SAFE-style rounds.",
    includes: [
      "Term sheet review & negotiation",
      "SHA and SSA drafting",
      "Diligence response management",
      "Board and shareholder resolutions",
      "FEMA / FC-GPR filings",
      "Closing checklist to completion",
    ],
    featured: true,
  },
  {
    name: "ESOP scheme",
    price: "₹1,75,000",
    turnaround: "2 weeks",
    blurb: "Scheme design through first grants.",
    includes: [
      "Scheme drafting and board approval",
      "Grant letters and exercise mechanics",
      "Trust vs direct route advice",
      "Tax treatment note for employees",
      "Cap table integration",
    ],
    featured: false,
  },
];

export const team = [
  { name: "Rhea Anand", role: "Managing Partner", focus: "Venture capital & M&A", detail: "Formerly with a magic circle firm in London. Has closed over 200 venture transactions." },
  { name: "Karthik Subramanian", role: "Partner", focus: "Technology & data", detail: "Advises SaaS and fintech companies on contracting, DPDP compliance and cross-border data." },
  { name: "Nandini Rao", role: "Partner", focus: "Regulatory & fintech", detail: "Ex-regulator. Leads RBI licensing, digital lending and payments mandates." },
  { name: "Jai Oberoi", role: "Partner", focus: "Employment & ESOP", detail: "Designs equity programmes and handles senior-executive transitions and disputes." },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Term sheet on a Tuesday, first markup Thursday morning. Our previous firm took eleven days for the same document and charged more for it.",
    author: "Founder & CEO",
    role: "Series B SaaS company",
  },
  {
    quote:
      "They ran the diligence response so tightly that our investors commented on it. We closed three weeks ahead of schedule.",
    author: "CFO",
    role: "Consumer brand, Series C",
  },
  {
    quote:
      "As a fund, what we care about is whether the other side is going to waste our time. When Sterling is on the company side, they do not.",
    author: "Principal",
    role: "Early-stage venture fund",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is the 48-hour markup commitment?",
    answer:
      "On engaged transactions, the first markup of a term sheet or transaction document is delivered within 48 working hours of receipt. It is written into the engagement letter, and if it slips, that stage is not billed.",
  },
  {
    question: "Do you act for funds as well as companies?",
    answer:
      "Both, on different transactions. A conflict check runs before any engagement, and the firm will not act on both sides of the same deal or against a client on a related matter.",
  },
  {
    question: "Are the package prices really fixed?",
    answer:
      "Yes, for the scope listed. They change only if the deal shape changes — a second investor class, an unexpected regulatory approval, a restructuring mid-round. Any change is quoted and approved before work continues.",
  },
  {
    question: "Can you handle overseas structures?",
    answer:
      "Yes. Delaware flips, Singapore holdcos and GIFT City structures are handled with vetted counsel in the relevant jurisdiction, coordinated from here so you deal with one team.",
  },
  {
    question: "What happens after closing?",
    answer:
      "Every closing ends with a post-closing checklist: filings, share certificates, register updates and board minutes, tracked to completion. Most disputes years later trace back to a step nobody finished.",
  },
];

export const enquiryTypes = [
  "Fundraise (company side)",
  "Fundraise (investor side)",
  "Acquisition or merger",
  "ESOP scheme",
  "Commercial contracts",
  "Regulatory or licensing",
  "Incorporation & founder documents",
];
