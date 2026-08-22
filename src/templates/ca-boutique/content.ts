import type { FaqItem, NavLink } from "@/types/template";

/** All copy for the Boutique Tax Chamber template. */
export const chamber = {
  name: "Kothari Tax Chambers",
  practitioner: "CA Nikhil Kothari",
  credentials: "FCA, LLB · Enrolled 2007",
  tagline: "Tax counsel, one client at a time",
  phone: "+91 79 4004 6611",
  email: "nikhil@kotharitax.in",
  address: { line1: "204, Shivalik Plaza", line2: "Ambawadi", city: "Ahmedabad 380015" },
  capacity: "The chamber takes on roughly thirty retainer clients at a time.",
};

export const navLinks: NavLink[] = [
  { label: "The chamber", href: "#chamber" },
  { label: "Work", href: "#work" },
  { label: "Who it suits", href: "#fit" },
  { label: "Fees", href: "#fees" },
  { label: "Questions", href: "#faq" },
  { label: "Enquire", href: "#enquire" },
];

export const hero = {
  greeting: "A note from the chamber",
  body: [
    "Most tax problems are not solved by a bigger firm. They are solved by one person who has read the file properly, knows the officer across the table, and is still there next year when the notice arrives.",
    "This is a chamber, not a firm. I take a limited number of clients, I read every file myself, and I tell you early when a position will not hold.",
  ],
  signoff: "CA Nikhil Kothari",
  cta: { label: "Write to the chamber", href: "#enquire" },
};

export const principles = [
  {
    number: "I",
    title: "One reader, one file",
    body: "Your matter is not handed to an article assistant. The person who advises you is the person who argues it.",
  },
  {
    number: "II",
    title: "Written positions",
    body: "Every material tax position is recorded in a short note with the section, the precedent and the risk. You keep the note.",
  },
  {
    number: "III",
    title: "No volume work",
    body: "Bookkeeping and payroll are not offered. The chamber does tax, and refers the rest to people who do it better.",
  },
  {
    number: "IV",
    title: "Told early",
    body: "If a claim is aggressive, you hear it before you file — not after the assessment order.",
  },
];

export const work = [
  {
    title: "Assessment & scrutiny",
    body: "Representation through faceless assessment, reassessment under Section 148 and search-related proceedings.",
  },
  {
    title: "Appeals & tribunal",
    body: "Drafting and arguing appeals before the CIT(A) and ITAT, and briefing counsel for High Court references.",
  },
  {
    title: "Capital gains & property",
    body: "Structuring of land, development-rights and inherited-property transactions before the deed is signed.",
  },
  {
    title: "Cross-border & residency",
    body: "Residency determination, DTAA relief, Form 15CA/CB and FEMA reporting for NRIs and returning residents.",
  },
  {
    title: "Trusts & succession",
    body: "Family settlements, private trusts, 12A and 80G registrations, and succession planning for promoter families.",
  },
  {
    title: "Second opinions",
    body: "A written view on a position your existing advisor has taken, delivered without taking over the relationship.",
  },
];

export const fit = {
  suits: [
    "Promoter families with property, trust or succession questions",
    "Professionals and NRIs with residency or foreign-income complexity",
    "Businesses facing a scrutiny notice, reassessment or appeal",
    "Anyone who wants a written second opinion before filing",
  ],
  doesNotSuit: [
    "Monthly bookkeeping, payroll or GST return filing",
    "Company incorporation and routine ROC work",
    "Clients who need a twenty-person team on call",
  ],
};

export const fees = [
  {
    label: "Consultation",
    amount: "₹12,000",
    unit: "per hour",
    detail: "A single sitting with a written summary of the view taken. Adjusted against a retainer if one follows.",
  },
  {
    label: "Written opinion",
    amount: "₹45,000",
    unit: "onwards",
    detail: "A researched note on a specific position, with sections, precedent and a risk grading.",
  },
  {
    label: "Representation",
    amount: "Per stage",
    unit: "quoted upfront",
    detail: "Assessment, appeal or tribunal work quoted per stage before the engagement begins.",
  },
  {
    label: "Annual retainer",
    amount: "By discussion",
    unit: "limited slots",
    detail: "Year-round access for families and closely held businesses. Availability depends on capacity.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you take on new clients?",
    answer:
      "Sometimes. The chamber holds about thirty retainer clients and takes new ones only when a slot opens. One-off consultations, opinions and representation work are usually available within a fortnight.",
  },
  {
    question: "Will you work alongside my existing chartered accountant?",
    answer:
      "Yes, and often. A second opinion or a specific appeal can be handled without disturbing your existing compliance arrangement. Your accountant is kept informed with your consent.",
  },
  {
    question: "How quickly can you look at a notice?",
    answer:
      "Send the notice by email. You will hear back within two working days with a preliminary view on the section invoked, the timeline and what the chamber would charge to respond.",
  },
  {
    question: "Do you appear outside Ahmedabad?",
    answer:
      "Faceless proceedings are handled from here regardless of jurisdiction. For physical hearings the chamber appears across Gujarat and travels for tribunal matters elsewhere.",
  },
];

export const enquiryTopics = [
  "A notice or assessment",
  "An appeal or tribunal matter",
  "Capital gains or property",
  "NRI residency or foreign income",
  "Trust, succession or family settlement",
  "A second opinion",
];
