import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Property Developer template. */
export const developer = {
  name: "Meridian Developers",
  tagline: "Residential development since 1998",
  phone: "+91 40 6677 8800",
  whatsapp: "+91 90000 78800",
  email: "sales@meridiandevelopers.in",
  address: { line1: "Meridian House, Road No. 12", line2: "Banjara Hills", city: "Hyderabad 500034" },
  reraNote: "All projects registered with the Telangana Real Estate Regulatory Authority.",
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Configurations", href: "#configurations" },
  { label: "Amenities", href: "#amenities" },
  { label: "Construction", href: "#construction" },
  { label: "Why Meridian", href: "#why" },
  { label: "Site visit", href: "#visit" },
];

export const hero = {
  eyebrow: "27 years · 41 delivered projects · 6,800 homes",
  title: "Homes handed over on the date printed in the agreement.",
  subtitle:
    "Four residential projects underway across Hyderabad. Every one RERA registered, every one with construction status published monthly on this page.",
  primaryCta: { label: "Book a site visit", href: "#visit" },
  secondaryCta: { label: "See current projects", href: "#projects" },
};

export const stats: StatItem[] = [
  { value: "41", label: "Projects delivered" },
  { value: "6,800", label: "Homes handed over" },
  { value: "27 yrs", label: "In development" },
  { value: "94%", label: "Delivered on or before date" },
];

export const projects = [
  {
    name: "Meridian Ridgeview",
    status: "Under construction",
    location: "Kokapet, Hyderabad",
    configurations: "3 & 4 BHK",
    sizes: "1,940 – 3,180 sq ft",
    price: "₹1.68 – 2.95 cr",
    possession: "December 2027",
    rera: "P02400008841",
    towers: "4 towers · 22 floors · 468 homes",
    highlight: "Corner plot with a protected green buffer on two sides",
  },
  {
    name: "Meridian Canopy",
    status: "Under construction",
    location: "Tellapur, Hyderabad",
    configurations: "2 & 3 BHK",
    sizes: "1,180 – 1,760 sq ft",
    price: "₹92 lakh – 1.42 cr",
    possession: "June 2027",
    rera: "P02400009117",
    towers: "6 towers · 18 floors · 720 homes",
    highlight: "Two-acre central park, no tower faces another directly",
  },
  {
    name: "Meridian Row",
    status: "New launch",
    location: "Shankarpally Road",
    configurations: "4 BHK villas",
    sizes: "3,400 – 4,200 sq ft",
    price: "₹3.20 – 4.10 cr",
    possession: "March 2028",
    rera: "P02400009642",
    towers: "62 villas · gated · 9 acres",
    highlight: "Every villa on a minimum 300 sq yd plot with a private garden",
  },
  {
    name: "Meridian Aster",
    status: "Ready to move",
    location: "Nallagandla, Hyderabad",
    configurations: "2 & 3 BHK",
    sizes: "1,240 – 1,690 sq ft",
    price: "₹1.05 – 1.48 cr",
    possession: "Completed, OC received",
    rera: "P02400006218",
    towers: "3 towers · 16 floors · 312 homes",
    highlight: "Occupation certificate received; 84% of homes occupied",
  },
];

export const configurations = [
  { type: "2 BHK", carpet: "780 – 1,010 sq ft", built: "1,180 – 1,420 sq ft", baths: "2", range: "₹92 lakh – 1.24 cr" },
  { type: "3 BHK", carpet: "1,080 – 1,420 sq ft", built: "1,640 – 2,120 sq ft", baths: "3", range: "₹1.32 – 2.10 cr" },
  { type: "3 BHK + study", carpet: "1,460 – 1,610 sq ft", built: "2,180 – 2,420 sq ft", baths: "3", range: "₹2.15 – 2.48 cr" },
  { type: "4 BHK", carpet: "1,880 – 2,140 sq ft", built: "2,820 – 3,180 sq ft", baths: "4", range: "₹2.60 – 2.95 cr" },
  { type: "4 BHK villa", carpet: "2,600 – 3,180 sq ft", built: "3,400 – 4,200 sq ft", baths: "4 + powder", range: "₹3.20 – 4.10 cr" },
];

export const amenities = [
  { group: "Wellness", items: ["25m lap pool", "Gymnasium & spin studio", "Yoga and meditation deck", "Jogging track, 640m"] },
  { group: "Community", items: ["Clubhouse, 22,000 sq ft", "Multipurpose banquet hall", "Co-working lounge", "Amphitheatre"] },
  { group: "Family", items: ["Creche and toddler play", "Children's play park", "Indoor games room", "Senior citizens court"] },
  { group: "Infrastructure", items: ["100% power backup", "Sewage treatment plant", "Rainwater harvesting", "EV charging on every level"] },
];

export const construction = [
  { project: "Meridian Ridgeview", milestone: "Tower B — 14th slab cast", progress: 58, updated: "August 2026" },
  { project: "Meridian Canopy", milestone: "Towers A–C plastering; D–F finishing", progress: 76, updated: "August 2026" },
  { project: "Meridian Row", milestone: "Excavation and foundation, Phase 1", progress: 12, updated: "August 2026" },
  { project: "Meridian Aster", milestone: "Completed — OC received", progress: 100, updated: "Handover ongoing" },
];

export const why = [
  { title: "Delivered, not promised", body: "Thirty-eight of forty-one completed projects were handed over on or before the date in the agreement. The three that slipped are listed on request." },
  { title: "Construction-linked payment", body: "You pay against completed slabs, verified by your own bank engineer. No advance-heavy schedules." },
  { title: "One title, checked twice", body: "Every land parcel carries a title opinion from two independent law firms, published in the sales kit." },
  { title: "Handover kit, not a keyring", body: "Approved drawings, warranty cards for every fitting, and a maintenance manual on the day you take possession." },
];

export const legal = [
  { label: "RERA registration", value: "Every project registered before the first booking; numbers listed on each project card" },
  { label: "Title verification", value: "Independent opinions from two law firms, available in the sales kit" },
  { label: "Approvals", value: "HMDA / GHMC sanction, fire NOC and environmental clearance obtained before launch" },
  { label: "Bank approvals", value: "Projects approved by SBI, HDFC, LIC Housing, ICICI and Axis for home loans" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Possession was in the agreement as March 2023. We got the keys in February. I had budgeted eighteen months of rent beyond that, based on my last builder.",
    author: "Srinivas R.",
    role: "Meridian Aster, 3 BHK",
  },
  {
    quote:
      "The monthly construction photographs are not marketing. When Tower B slipped a month, they said so in the update before I noticed.",
    author: "Deepa Menon",
    role: "Meridian Ridgeview buyer",
  },
  {
    quote:
      "Two title opinions in the sales kit. My lawyer read both, found nothing to add, and told me to stop worrying.",
    author: "Imran Sheikh",
    role: "Meridian Canopy buyer",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is the payment schedule?",
    answer:
      "Construction-linked: 10% on booking, 10% on agreement, and the balance against verified slab and finishing milestones. Nothing is due before the corresponding work is complete and certified.",
  },
  {
    question: "What exactly is included in the quoted price?",
    answer:
      "Base price, floor rise and preferred-location charges where applicable. Registration, stamp duty, GST, corpus fund and eighteen months of maintenance are additional, and every one of them is itemised in the cost sheet before you book.",
  },
  {
    question: "Can I get a home loan?",
    answer:
      "All projects are approved by SBI, HDFC, LIC Housing, ICICI and Axis. Our sales team will share the APF numbers; you are free to use any lender, and we do not receive referral fees from any of them.",
  },
  {
    question: "What happens if possession is delayed?",
    answer:
      "The agreement carries the compensation prescribed under RERA for delay beyond the registered possession date, paid monthly without you having to ask. Force majeure events are defined narrowly in the agreement, not left open-ended.",
  },
  {
    question: "Can I visit the site before booking?",
    answer:
      "Yes, and we insist on it. Site visits run seven days a week between 10:00 and 18:00, including to towers under construction with safety gear provided.",
  },
];

export const visitProjects = projects.map((project) => project.name);
