import type { FaqItem, NavLink, Testimonial } from "@/types/template";

/** All copy for the Solo Advocate template. */
export const advocate = {
  name: "Adv. Kavita Menon",
  practice: "Menon Law",
  tagline: "Family, matrimonial and criminal matters",
  enrolment: "Enrolled with the Bar Council of Kerala, 2011",
  phone: "+91 484 401 7788",
  email: "office@menonlaw.in",
  address: { line1: "2nd Floor, Chittoor Road", line2: "Ernakulam", city: "Kochi 682035" },
  languages: "Consultations in English, Malayalam and Hindi",
};

export const navLinks: NavLink[] = [
  { label: "Matters", href: "#matters" },
  { label: "What happens", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Fees", href: "#fees" },
  { label: "Questions", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Practising since 2011 · Kochi",
  title: "You are probably not having a good week. Start with a conversation.",
  subtitle:
    "Family and criminal matters arrive in the middle of someone's worst month. The first meeting is not about retaining me — it is about you understanding what the law actually says, what it will cost, and how long it takes.",
  reassurances: [
    "First consultation is 45 minutes and costs ₹1,500",
    "Nothing is filed without your written instruction",
    "You will be told if you do not need a lawyer",
  ],
};

export const matters = [
  {
    title: "Divorce & separation",
    body: "Mutual consent and contested petitions, judicial separation, and negotiated settlements that keep matters out of court where possible.",
    covers: ["Mutual consent divorce", "Contested petitions", "Settlement agreements"],
  },
  {
    title: "Child custody & maintenance",
    body: "Custody, guardianship and visitation arrangements, and maintenance claims under Section 125 CrPC and personal law.",
    covers: ["Custody & guardianship", "Visitation orders", "Maintenance claims"],
  },
  {
    title: "Domestic violence",
    body: "Protection, residence and monetary relief under the Protection of Women from Domestic Violence Act, including emergency applications.",
    covers: ["Protection orders", "Residence orders", "Interim relief"],
  },
  {
    title: "Criminal defence",
    body: "Bail applications, anticipatory bail, quashing petitions and trial defence in sessions and magistrate courts.",
    covers: ["Bail & anticipatory bail", "Quashing under 482", "Trial defence"],
  },
  {
    title: "Cheque bounce & recovery",
    body: "Complaints and defence under Section 138 of the Negotiable Instruments Act, and civil recovery suits.",
    covers: ["Section 138 complaints", "Defence", "Civil recovery"],
  },
  {
    title: "Property & succession",
    body: "Partition suits, succession certificates, will drafting and disputes between family members over inherited property.",
    covers: ["Partition suits", "Succession certificates", "Wills"],
  },
];

export const process = [
  {
    step: "1",
    title: "You call or write",
    body: "Describe the situation in a few lines. The office will tell you whether this is something the practice handles and book a time.",
  },
  {
    step: "2",
    title: "First consultation",
    body: "Forty-five minutes, in chambers or by video. You leave knowing the legal position, the likely timeline and an honest estimate of cost.",
  },
  {
    step: "3",
    title: "You decide",
    body: "No pressure to retain on the day. If you engage, you get a written engagement letter setting out scope and fees before anything is filed.",
  },
  {
    step: "4",
    title: "The matter proceeds",
    body: "You are told before every hearing and after every order, in plain language, by message or a call — not by a clerk you have never met.",
  },
];

export const about = {
  paragraphs: [
    "I have practised in Kochi since 2011, first with a litigation chamber handling matrimonial and criminal work, and independently since 2016.",
    "Most of my clients are people going through a divorce, a custody dispute, or a criminal case they never expected to face. Almost none of them have dealt with a court before. A good part of my job is translating.",
    "I do not take corporate retainers or commercial arbitration. The practice is deliberately limited to matters where the client is a person, not a company.",
  ],
  courts: [
    { name: "High Court of Kerala", detail: "Appeals, quashing petitions, writs" },
    { name: "Family Court, Ernakulam", detail: "Divorce, custody, maintenance" },
    { name: "Sessions & Magistrate Courts", detail: "Bail, trial defence, Section 138" },
    { name: "District Court, Ernakulam", detail: "Partition, succession, civil suits" },
  ],
};

export const fees = [
  { item: "First consultation", amount: "₹1,500", note: "45 minutes, in chambers or by video" },
  { item: "Follow-up consultation", amount: "₹1,000", note: "For existing matters" },
  { item: "Drafting (notice, agreement, will)", amount: "₹5,000 onwards", note: "Quoted before drafting begins" },
  { item: "Mutual consent divorce", amount: "₹35,000 onwards", note: "Both motions, excluding court fees" },
  { item: "Contested matters", amount: "Per stage", note: "Quoted in the engagement letter" },
  { item: "Bail application", amount: "₹15,000 onwards", note: "Depends on court and urgency" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "She told me in the first meeting that my case would take two years and that I should try mediation first. It worked. I paid for one consultation and never needed to file.",
    author: "A client",
    role: "Matrimonial matter, 2024",
  },
  {
    quote:
      "My custody hearing was explained to me twice, once in Malayalam, until I actually understood what would happen. Nobody had done that in eighteen months.",
    author: "A client",
    role: "Custody matter, 2023",
  },
  {
    quote:
      "Anticipatory bail on a Saturday, and she answered the phone at nine in the night to explain the conditions to my father.",
    author: "A client",
    role: "Criminal matter, 2025",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Is my first consultation confidential?",
    answer:
      "Yes. Everything you say is privileged, whether or not you go on to engage the practice. That protection applies from the first phone call.",
  },
  {
    question: "How long does a divorce take in Kerala?",
    answer:
      "A mutual consent divorce typically takes six to eight months across two motions, though the statutory cooling-off period can sometimes be waived. A contested petition realistically runs two to four years including appeals. You will be given a specific estimate for your facts, not this range.",
  },
  {
    question: "Can you help if I cannot afford the fees?",
    answer:
      "Say so at the first call. Fees can sometimes be staged across the matter, and for genuine hardship the practice takes a limited number of matters at reduced or no fee. You may also be entitled to free legal aid through the District Legal Services Authority, and you will be told if you are.",
  },
  {
    question: "Will I have to go to court myself?",
    answer:
      "In family matters, yes — the court will usually want to see you at least for evidence and for the settlement attempt. You will be prepared for it beforehand, and you will not be walking in cold.",
  },
  {
    question: "Do you handle matters outside Kochi?",
    answer:
      "High Court and Ernakulam district matters are handled directly. For other districts the practice appears where feasible and otherwise engages a trusted local advocate, with fees explained before that happens.",
  },
];

export const enquiryMatters = [
  "Divorce or separation",
  "Child custody or maintenance",
  "Domestic violence",
  "Criminal matter or bail",
  "Cheque bounce (Section 138)",
  "Property or succession",
  "Not sure",
];
