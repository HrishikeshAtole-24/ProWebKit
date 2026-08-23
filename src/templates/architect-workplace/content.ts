import type { FaqItem, NavLink, StatItem } from "@/types/template";

/** All copy for the Workplace Design template. */
export const studio = {
  name: "Kernel Workspace",
  discipline: "Commercial interiors & workplace strategy",
  founded: 2015,
  phone: "+91 22 6291 7400",
  email: "projects@kernelworkspace.in",
  address: { line1: "Unit 210, Kalpataru Prime", line2: "Vikhroli West", city: "Mumbai 400079" },
  coverage: "Mumbai · Pune · Bengaluru · Hyderabad",
};

export const navLinks: NavLink[] = [
  { label: "Cost per seat", href: "#cost" },
  { label: "Scope", href: "#scope" },
  { label: "Density", href: "#density" },
  { label: "Phasing", href: "#phasing" },
  { label: "Projects", href: "#projects" },
  { label: "Brief us", href: "#brief" },
];

export const hero = {
  eyebrow: `${studio.discipline} · since ${studio.founded}`,
  title: "Office fit-out, quoted per seat and delivered without shutting you down.",
  subtitle:
    "We design and build commercial workspaces for companies between 40 and 900 people. Costs are quoted per seat before design starts, and 70% of our projects are executed while the client keeps working in the building.",
  primaryCta: { label: "Send us a brief", href: "#brief" },
  secondaryCta: { label: "See cost per seat", href: "#cost" },
};

export const stats: StatItem[] = [
  { value: "2.1M", label: "Sq ft delivered" },
  { value: "148", label: "Fit-outs completed" },
  { value: "70%", label: "Executed in live offices" },
  { value: "11 wks", label: "Median 100-seat delivery" },
];

export const costTiers = [
  {
    tier: "Efficient",
    perSeat: "₹95,000 – 1,35,000",
    suits: "Back office, BPO, shared services",
    includes: [
      "Open-plan workstations",
      "Basic meeting rooms & pantry",
      "Standard flooring and lighting",
      "Ducted AC modification",
      "Fire and life-safety compliance",
    ],
    featured: false,
  },
  {
    tier: "Standard",
    perSeat: "₹1,45,000 – 2,10,000",
    suits: "Technology, professional services, GCC floors",
    includes: [
      "Everything in Efficient",
      "Acoustic treatment and phone booths",
      "Branded reception and collaboration zones",
      "Task lighting and sit-stand desks",
      "AV in every meeting room",
      "Full MEP and IT infrastructure",
    ],
    featured: true,
  },
  {
    tier: "Signature",
    perSeat: "₹2,40,000 onwards",
    suits: "Headquarters, client-facing floors",
    includes: [
      "Everything in Standard",
      "Bespoke joinery and feature ceilings",
      "Imported stone and specialist finishes",
      "Cafeteria and wellness facilities",
      "Custom furniture design",
      "Art and wayfinding programme",
    ],
    featured: false,
  },
];

export const costNote =
  "Figures are all-in: design, materials, furniture, MEP, IT infrastructure, execution and statutory approvals. They exclude landlord scope, rent-free-period penalties and IT hardware. We quote per seat because that is the only number a CFO can actually compare.";

export const scope = [
  {
    stage: "Strategy",
    items: ["Headcount and growth modelling", "Utilisation study of the current office", "Space programme and adjacency plan", "Test fits across shortlisted buildings"],
  },
  {
    stage: "Design",
    items: ["Concept and 3D visualisation", "Furniture specification and mock-up", "MEP, lighting and acoustic design", "Signage, branding and wayfinding"],
  },
  {
    stage: "Approvals",
    items: ["Landlord fit-out approvals", "Fire NOC and municipal permissions", "Building management coordination", "Statutory compliance documentation"],
  },
  {
    stage: "Build",
    items: ["Civil, MEP and joinery execution", "Furniture procurement and install", "IT and AV coordination", "Snagging, handover and defect liability"],
  },
];

export const density = {
  title: "Density is a decision, not an accident",
  body: "Most companies discover their real density after signing the lease. We model it before, against your actual meeting-room utilisation rather than an industry average.",
  standards: [
    { type: "Efficient open plan", sqft: "60 – 75 sq ft", ratio: "1 meeting seat per 6 desks", note: "Works for high-attendance, low-call-volume teams" },
    { type: "Balanced", sqft: "80 – 100 sq ft", ratio: "1 meeting seat per 4 desks", note: "The default for most technology and services floors" },
    { type: "Collaborative", sqft: "110 – 135 sq ft", ratio: "1 meeting seat per 2.5 desks", note: "Design, product and consulting teams" },
    { type: "Hybrid / hot desk", sqft: "45 – 60 sq ft", ratio: "0.6 desks per employee", note: "Requires booking discipline or it fails visibly" },
  ],
};

export const phasing = {
  title: "Working around you, floor by floor",
  body: "Vacating an office for sixteen weeks costs more than the fit-out. Most of our projects run in phases while the business continues in the same building.",
  steps: [
    { phase: "01", title: "Decant plan", body: "We agree which teams move where, and for how long, before a single wall comes down. Written and circulated to your facilities team." },
    { phase: "02", title: "Zone one build", body: "Work is contained behind acoustic hoarding. Noisy activity is scheduled after 19:00 and on weekends, at no extra charge." },
    { phase: "03", title: "Rotate", body: "Teams move into the completed zone over a weekend. IT and AV are tested on the Saturday, not on Monday morning." },
    { phase: "04", title: "Repeat and hand over", body: "The cycle repeats per zone. Handover includes as-built drawings, warranties and a facilities manual." },
  ],
};

export const projects = [
  { client: "Global capability centre", seats: 640, area: "58,000 sq ft", city: "Hyderabad", duration: "18 weeks", note: "Delivered across four phases with zero business downtime" },
  { client: "Technology product company", seats: 220, area: "24,000 sq ft", city: "Bengaluru", duration: "12 weeks", note: "Acoustic-first design for a floor of 180 engineers" },
  { client: "Investment advisory firm", seats: 95, area: "14,500 sq ft", city: "Mumbai", duration: "10 weeks", note: "Client-facing floor with 11 meeting rooms and a boardroom" },
  { client: "Manufacturing head office", seats: 310, area: "33,000 sq ft", city: "Pune", duration: "16 weeks", note: "Live-office phasing across two floors and a cafeteria" },
];

export const sustainability = [
  { label: "LEED and IGBC", value: "34 certified fit-outs, including 9 at Platinum" },
  { label: "Reuse", value: "Existing furniture assessed and refurbished before new is specified" },
  { label: "Waste", value: "Site waste segregated and diverted from landfill; certificates issued" },
  { label: "Energy", value: "Lighting design targets under 0.8 W per sq ft with daylight linking" },
];

export const faqs: FaqItem[] = [
  {
    question: "Why quote per seat rather than per square foot?",
    answer:
      "Because a CFO approves a headcount, not an area. Per-square-foot pricing hides the fact that a low rate on a badly planned floor plate can cost more per person than a higher rate on an efficient one. We publish both, but we lead with the number that governs the decision.",
  },
  {
    question: "Do you do design only, or design and build?",
    answer:
      "Both. Around three-quarters of projects are design-and-build under a single contract, which is faster and removes the gap between drawing and site. Design-only mandates are taken where you have an existing contractor relationship.",
  },
  {
    question: "Can you work during our office hours?",
    answer:
      "Yes, and most projects do. Silent activity runs in the day behind acoustic hoarding; drilling, core cutting and demolition run after 19:00 and at weekends. That is built into the programme and the price, not billed as an extra.",
  },
  {
    question: "Who handles landlord and fire approvals?",
    answer:
      "We do, as part of the scope. Landlord fit-out approvals, fire NOC and building-management coordination are our responsibility, and delays attributable to us do not extend your rent-free period at your cost.",
  },
  {
    question: "What happens after handover?",
    answer:
      "A twelve-month defect liability period with a named site engineer, plus as-built drawings, warranty documents and a facilities manual on day one. We also return at the six-month mark to check how the space is actually being used.",
  },
];

export const briefTypes = [
  "New office fit-out",
  "Office relocation",
  "Refurbishment of existing space",
  "Test fit / building comparison",
  "Workplace strategy only",
  "Expansion of a current floor",
];
