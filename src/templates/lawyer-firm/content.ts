import {
  Briefcase,
  Building,
  Gavel,
  Handshake,
  Home,
  Scale,
  ScrollText,
  Users,
} from "lucide-react";
import type { FaqItem, NavLink, ServiceItem, StatItem, Testimonial } from "@/types/template";

/**
 * All copy for the Law Firm template lives here.
 * Replace these values to rebrand the template — no JSX edits required.
 */
export const firm = {
  name: "Mehta & Partners",
  shortName: "M&P",
  tagline: "Advocates & Legal Consultants",
  established: 1994,
  barCouncil: "Enrolled with the Bar Council of Delhi",
  phone: "+91 11 4603 8800",
  email: "chambers@mehtapartners.in",
  offices: [
    {
      city: "New Delhi",
      role: "Principal office",
      lines: ["C-14, Jangpura Extension", "New Delhi 110014"],
      courts: "Supreme Court · Delhi High Court · NCLT",
    },
    {
      city: "Mumbai",
      role: "Commercial practice",
      lines: ["3rd Floor, Bharat House, Fort", "Mumbai 400001"],
      courts: "Bombay High Court · NCLT · SAT",
    },
    {
      city: "Bengaluru",
      role: "Technology & IP",
      lines: ["Prestige Atrium, Central Street", "Bengaluru 560001"],
      courts: "Karnataka High Court · CCI",
    },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Practice areas", href: "#practice" },
  { label: "The firm", href: "#firm" },
  { label: "Counsel", href: "#counsel" },
  { label: "Matters", href: "#matters" },
  { label: "Offices", href: "#offices" },
  { label: "Enquiries", href: "#enquiry" },
];

export const hero = {
  eyebrow: `Established ${firm.established}`,
  title: "Counsel for the matters that decide the outcome.",
  subtitle:
    "A litigation-led practice across commercial disputes, insolvency, arbitration and regulatory work — appearing before the Supreme Court, five High Courts and the NCLT.",
  primaryCta: { label: "Request a consultation", href: "#enquiry" },
  secondaryCta: { label: "Practice areas", href: "#practice" },
};

export const stats: StatItem[] = [
  { value: `${new Date().getFullYear() - firm.established}`, label: "Years of practice" },
  { value: "1,100+", label: "Matters handled" },
  { value: "18", label: "Advocates on record" },
  { value: "3", label: "Offices" },
];

export const practiceAreas: ServiceItem[] = [
  {
    icon: Gavel,
    title: "Commercial litigation",
    description:
      "Contract, shareholder and partnership disputes before commercial courts and High Courts, from interim relief through to execution.",
  },
  {
    icon: Scale,
    title: "Arbitration",
    description:
      "Domestic and institutional arbitration under SIAC, ICC and the Arbitration and Conciliation Act, including Section 34 and 37 challenges.",
  },
  {
    icon: Building,
    title: "Insolvency & restructuring",
    description:
      "Section 7, 9 and 10 petitions, resolution plan advisory and committee-of-creditors representation before the NCLT and NCLAT.",
  },
  {
    icon: Briefcase,
    title: "Corporate & M&A",
    description:
      "Transaction structuring, legal due diligence, shareholder agreements and post-closing disputes for promoters and investors.",
  },
  {
    icon: ScrollText,
    title: "Regulatory & compliance",
    description:
      "Representation before SEBI, CCI, RBI and sectoral regulators, including show-cause responses and settlement applications.",
  },
  {
    icon: Home,
    title: "Real estate & RERA",
    description:
      "Title diligence, development agreements, and allottee and promoter representation before RERA authorities and appellate tribunals.",
  },
  {
    icon: Users,
    title: "Employment",
    description:
      "Senior-executive exits, restrictive covenants, workplace investigations and industrial disputes.",
  },
  {
    icon: Handshake,
    title: "Private client",
    description:
      "Succession planning, family settlements, trusts and probate — handled discreetly and, where possible, outside court.",
  },
];

export const firmStory = {
  title: "A litigation chamber that never became a factory",
  paragraphs: [
    "Mehta & Partners was founded in 1994 as a two-advocate chamber in Jangpura. Three decades later it remains, deliberately, a chamber — eighteen advocates who argue their own briefs rather than a pyramid that outsources them.",
    "The firm takes fewer matters than it is offered. A partner reads every brief before it is accepted, and the partner who accepts it appears on it. Clients are told early and honestly when a case is not worth fighting.",
  ],
  commitments: [
    {
      title: "Partner-argued",
      description: "The advocate who takes your conference is the advocate who appears in court.",
    },
    {
      title: "Written strategy",
      description: "Every matter opens with a written case theory, risk assessment and cost estimate.",
    },
    {
      title: "Fee clarity",
      description: "Fees are agreed in writing before filing — per appearance, per stage, or as a retainer.",
    },
    {
      title: "Candid advice",
      description: "If settlement serves you better than a decree, that is the advice you will get.",
    },
  ],
};

export const counsel = [
  {
    name: "Vikram Mehta",
    role: "Founding Partner",
    focus: "Commercial litigation & arbitration",
    bio: "Designated Senior Advocate. Appears regularly before the Supreme Court and Delhi High Court in shareholder and contractual disputes.",
    admitted: "Enrolled 1991",
    education: "LL.M., University of Cambridge",
  },
  {
    name: "Ira Bhattacharya",
    role: "Partner",
    focus: "Insolvency & restructuring",
    bio: "Leads the NCLT practice. Has acted for financial creditors and resolution professionals in matters exceeding ₹9,000 crore in claims.",
    admitted: "Enrolled 2005",
    education: "B.A. LL.B. (Hons.), NLSIU Bengaluru",
  },
  {
    name: "Arjun Sethi",
    role: "Partner",
    focus: "Regulatory & competition",
    bio: "Advises listed companies on SEBI and CCI proceedings, including settlement applications and leniency filings.",
    admitted: "Enrolled 2008",
    education: "LL.M., Columbia Law School",
  },
  {
    name: "Fatima Qureshi",
    role: "Partner",
    focus: "Employment & private client",
    bio: "Handles senior-executive disputes, workplace investigations and contested succession matters.",
    admitted: "Enrolled 2010",
    education: "B.A. LL.B. (Hons.), NALSAR Hyderabad",
  },
];

export const matters = [
  {
    year: "2025",
    forum: "Supreme Court of India",
    title: "Shareholder oppression appeal",
    summary:
      "Successfully resisted an appeal against an NCLAT order, preserving a minority shareholder buy-back valued at ₹410 crore.",
  },
  {
    year: "2024",
    forum: "Delhi High Court",
    title: "Section 34 challenge set aside",
    summary:
      "Defended a domestic arbitral award of ₹188 crore for an infrastructure client through a challenge and appeal.",
  },
  {
    year: "2024",
    forum: "NCLT, Mumbai",
    title: "Corporate insolvency resolution",
    summary:
      "Acted for the committee of creditors in a textiles insolvency, achieving a 63% recovery against admitted claims.",
  },
  {
    year: "2023",
    forum: "Competition Commission of India",
    title: "Cartel investigation closed",
    summary:
      "Obtained closure of a Section 3 investigation against a logistics client without penalty following a detailed response.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They told us in the first conference that two of our four claims were weak. Dropping them shortened the trial by a year and we won the two that mattered.",
    author: "General Counsel",
    role: "Listed infrastructure company",
  },
  {
    quote:
      "In an insolvency where every other advisor was managing optics, Ira was managing the claim. The recovery speaks for itself.",
    author: "Head of Special Assets",
    role: "Private sector bank",
  },
  {
    quote:
      "Discreet, fast, and completely unsentimental about a family dispute that everyone else wanted to litigate for a decade.",
    author: "Private client",
    role: "Succession matter, New Delhi",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How does a first consultation work?",
    answer:
      "You send a brief summary and any core documents. A partner reviews them before the meeting, and the consultation itself runs 45 to 60 minutes, in chambers or by video. You leave with a preliminary view on merits, forum and likely timeline.",
  },
  {
    question: "How are fees structured?",
    answer:
      "Litigation is billed per appearance or per stage against a written engagement letter; advisory and transactional work is quoted as a fixed fee or a monthly retainer. Contingency fees are prohibited for advocates in India and the firm does not offer them.",
  },
  {
    question: "Do you accept matters outside Delhi, Mumbai and Bengaluru?",
    answer:
      "Yes. The firm appears before High Courts and tribunals across India, and engages local counsel where rules of appearance require it. Travel and local counsel costs are estimated in advance.",
  },
  {
    question: "Is my enquiry confidential?",
    answer:
      "Communications with the firm are treated as privileged. Before accepting a matter the firm runs a conflict check, which may require the names of opposing parties; nothing is disclosed beyond that check.",
  },
  {
    question: "Will you tell me if I should settle?",
    answer:
      "Yes, and often. A written case assessment covers settlement value alongside litigation outcomes. The firm has withdrawn from matters where a client insisted on litigating a case it considered unwinnable.",
  },
];

export const enquiryMatters = [
  "Commercial dispute",
  "Arbitration",
  "Insolvency (IBC)",
  "Corporate / M&A",
  "Regulatory proceeding",
  "Real estate / RERA",
  "Employment",
  "Private client / succession",
];
