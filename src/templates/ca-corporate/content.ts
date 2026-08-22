import {
  Building2,
  Calculator,
  ClipboardCheck,
  Factory,
  FileSpreadsheet,
  Globe2,
  HeartPulse,
  Landmark,
  Laptop,
  Receipt,
  ScrollText,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import type { FaqItem, NavLink, ServiceItem, StatItem, Testimonial } from "@/types/template";

/**
 * All copy for the Corporate CA template lives here.
 * Replace these values to rebrand the template — no JSX edits required.
 */
export const firm = {
  name: "Aurum & Associates",
  shortName: "Aurum",
  tagline: "Chartered Accountants",
  registration: "Firm Reg. No. 118742W · ICAI",
  established: 2009,
  phone: "+91 22 4890 1200",
  email: "connect@aurumca.in",
  address: {
    line1: "Level 8, Marathon Futurex",
    line2: "N. M. Joshi Marg, Lower Parel",
    city: "Mumbai 400013",
  },
  hours: "Mon–Fri, 10:00–19:00 IST",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Approach", href: "#approach" },
  { label: "Partners", href: "#partners" },
  { label: "Insights", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: `Established ${firm.established} · Mumbai & Pune`,
  title: "Compliance handled. Attention back on the business.",
  subtitle:
    "A full-service chartered accountancy practice for founders, promoters and finance teams — direct tax, indirect tax, statutory audit and transaction advisory under one engagement partner.",
  primaryCta: { label: "Book a consultation", href: "#contact" },
  secondaryCta: { label: "See our services", href: "#services" },
  highlights: [
    "Fixed-fee retainers, no surprise billing",
    "One partner accountable end to end",
    "Filings tracked against a shared calendar",
  ],
};

export const stats: StatItem[] = [
  { value: "16+", label: "Years in practice" },
  { value: "480+", label: "Active clients" },
  { value: "₹2,400cr", label: "Turnover under audit" },
  { value: "9", label: "Chartered accountants" },
];

export const services: ServiceItem[] = [
  {
    icon: Receipt,
    title: "Goods & Services Tax",
    description:
      "End-to-end GST ownership — registrations, monthly returns, annual reconciliation and representation before the department.",
    points: ["GSTR-1 / 3B / 9 & 9C", "Input credit reconciliation", "Refunds & departmental notices"],
  },
  {
    icon: Calculator,
    title: "Direct Taxation",
    description:
      "Corporate and personal income tax planning that survives scrutiny, filed on time and defended when questioned.",
    points: ["Corporate & personal ITR", "Advance tax planning", "Assessment & appeals"],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description:
      "Statutory, internal and tax audits conducted to ICAI standards, with a management letter you can actually act on.",
    points: ["Statutory audit", "Internal & process audit", "Tax audit u/s 44AB"],
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting & Payroll",
    description:
      "Outsourced books closed monthly, not scrambled in March — with payroll, TDS and PF/ESIC handled alongside.",
    points: ["Monthly book closure", "Payroll & TDS", "MIS dashboards"],
  },
  {
    icon: Landmark,
    title: "Company Law & ROC",
    description:
      "Incorporation, secretarial compliance and every MCA filing, so your registers stay clean before diligence starts.",
    points: ["Incorporation & conversions", "Annual ROC filings", "Board & statutory registers"],
  },
  {
    icon: TrendingUp,
    title: "Transaction Advisory",
    description:
      "Valuations, due diligence and structuring support for fundraises, acquisitions and promoter restructuring.",
    points: ["Financial due diligence", "Valuation & 409A-equivalents", "Deal structuring"],
  },
];

export const industries = [
  { icon: Laptop, label: "SaaS & IT services" },
  { icon: Factory, label: "Manufacturing & MSME" },
  { icon: ShoppingBag, label: "Retail & D2C" },
  { icon: Building2, label: "Real estate & infra" },
  { icon: HeartPulse, label: "Healthcare & pharma" },
  { icon: Globe2, label: "Exporters & GCCs" },
  { icon: ScrollText, label: "Trusts, NGOs & 12A/80G" },
  { icon: Landmark, label: "NBFCs & fintech" },
];

export const approach = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "A 45-minute review of your entity structure, current filings and open exposures. No fee, no obligation.",
  },
  {
    step: "02",
    title: "Scope & fixed quote",
    description:
      "You receive a written scope with deliverables, turnaround times and an annual fee. The number does not move mid-year.",
  },
  {
    step: "03",
    title: "Transition & clean-up",
    description:
      "We take over records from your previous accountant, reconcile the ledgers and close any pending filings.",
  },
  {
    step: "04",
    title: "Ongoing compliance",
    description:
      "A shared compliance calendar, monthly MIS and a named partner who answers the phone during assessment season.",
  },
];

export const partners = [
  {
    name: "CA Rohan Deshpande",
    role: "Managing Partner",
    focus: "Direct tax & transaction advisory",
    bio: "Sixteen years across Big Four and independent practice. Leads tax litigation and deal diligence engagements.",
    credentials: ["FCA", "DISA (ICAI)", "LLB"],
  },
  {
    name: "CA Meera Iyer",
    role: "Partner — Assurance",
    focus: "Statutory & internal audit",
    bio: "Heads the assurance vertical with a manufacturing and listed-company portfolio. Ind AS conversion specialist.",
    credentials: ["FCA", "Ind AS Cert.", "CISA"],
  },
  {
    name: "CA Aditya Nair",
    role: "Partner — Indirect Tax",
    focus: "GST, customs & FTP",
    bio: "Advises exporters and D2C brands on GST structuring, refunds and departmental representation.",
    credentials: ["ACA", "GST Cert. (ICAI)"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We moved to Aurum after two years of last-minute filings. The first thing they did was rebuild our ledgers, not sell us a retainer. Our Series A diligence closed in nine days.",
    author: "Karan Malhotra",
    role: "Co-founder, Northbound SaaS",
  },
  {
    quote:
      "Their audit team asks the questions our board should have been asking. The management letter changed how we run inventory.",
    author: "S. Ramanathan",
    role: "CFO, Vardhman Components",
  },
  {
    quote:
      "A GST notice that had been open for fourteen months was closed in one hearing. They knew the officer, the section and the precedent.",
    author: "Nisha Patel",
    role: "Director, Aster Exports",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How are your fees structured?",
    answer:
      "Retainers are quoted annually as a fixed fee against a written scope, billed quarterly. One-off work — a valuation, a diligence, an appeal — is quoted per engagement before we begin. We do not bill by the hour for compliance work.",
  },
  {
    question: "Can you take over from our existing accountant mid-year?",
    answer:
      "Yes, and roughly half our new clients arrive that way. Transition takes two to four weeks: we obtain records, reconcile opening balances, list every pending filing and give you a written clean-up plan before touching a return.",
  },
  {
    question: "Do you work with clients outside Mumbai?",
    answer:
      "We serve clients across India and several overseas promoters. Filings, reviews and board meetings run remotely; we travel for statutory audit fieldwork and departmental hearings.",
  },
  {
    question: "Who will actually handle our account?",
    answer:
      "A named engagement partner, supported by a qualified manager and an article team. You get direct phone and email access to the partner — not a shared inbox.",
  },
  {
    question: "Can you support a fundraise or acquisition?",
    answer:
      "Yes. We run financial due diligence from either side, prepare valuation reports under Rule 11UA and the Companies Act, and coordinate with legal counsel through to closing.",
  },
];

export const consultationTopics = [
  "GST & indirect tax",
  "Income tax & assessments",
  "Statutory or internal audit",
  "Accounting & payroll outsourcing",
  "Company law / ROC compliance",
  "Fundraise, valuation or diligence",
  "Something else",
];
