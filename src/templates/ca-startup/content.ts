import {
  BarChart3,
  Banknote,
  FileCheck2,
  Landmark,
  Receipt,
  Users,
} from "lucide-react";
import type { FaqItem, NavLink, ServiceItem, StatItem, Testimonial } from "@/types/template";

/** All copy for the Startup CFO Desk template. */
export const company = {
  name: "LedgerLab",
  tagline: "Finance & compliance for funded startups",
  phone: "+91 80 4718 9000",
  email: "hello@ledgerlab.in",
  address: { line1: "WeWork Galaxy, Residency Road", line2: "", city: "Bengaluru 560025" },
};

export const navLinks: NavLink[] = [
  { label: "What you get", href: "#stack" },
  { label: "Pricing", href: "#pricing" },
  { label: "Diligence", href: "#diligence" },
  { label: "Integrations", href: "#integrations" },
  { label: "Customers", href: "#customers" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Books closed by the 7th. Every month.",
  title: "Your finance function, without the first finance hire.",
  subtitle:
    "Bookkeeping, compliance, payroll and board reporting run as one subscription — by chartered accountants who have been through eighty-odd funding rounds and know what a diligence checklist actually asks for.",
  primaryCta: { label: "Book a 20-minute demo", href: "#demo" },
  secondaryCta: { label: "See pricing", href: "#pricing" },
};

export const stats: StatItem[] = [
  { value: "210+", label: "Startups on the desk" },
  { value: "7th", label: "Monthly close, by" },
  { value: "₹4,800cr", label: "Raised by customers" },
  { value: "9 days", label: "Median diligence turnaround" },
];

export const stack: ServiceItem[] = [
  {
    icon: BarChart3,
    title: "Monthly close & MIS",
    description: "Books closed by the seventh, with a P&L, cash view, burn and runway your board can read.",
    points: ["Accrual-basis close", "Burn & runway tracking", "Board-ready MIS pack"],
  },
  {
    icon: Receipt,
    title: "GST & TDS",
    description: "Every indirect and withholding obligation filed on time, with the input credit actually reconciled.",
    points: ["GSTR-1, 3B, 9 & 9C", "TDS returns & Form 16", "Credit reconciliation"],
  },
  {
    icon: Users,
    title: "Payroll & ESOP",
    description: "Salary processing, statutory deductions and ESOP accounting including perquisite tax at exercise.",
    points: ["Payroll & payslips", "PF, ESIC, PT", "ESOP pool accounting"],
  },
  {
    icon: Landmark,
    title: "Company law & FEMA",
    description: "ROC filings, board resolutions and the foreign-investment reporting that trips up most seed rounds.",
    points: ["Annual ROC filings", "FC-GPR & FLA returns", "Board & shareholder records"],
  },
  {
    icon: FileCheck2,
    title: "Audit & tax",
    description: "Statutory audit coordinated end to end, corporate tax filed, and Section 80-IAC applied for where eligible.",
    points: ["Statutory & tax audit", "Corporate ITR", "Startup India exemptions"],
  },
  {
    icon: Banknote,
    title: "Fundraise support",
    description: "Cap table hygiene, valuation reports and the data room your investors will ask for in week one.",
    points: ["Rule 11UA valuation", "Data room preparation", "Diligence response desk"],
  },
];

export const pricing = [
  {
    name: "Seed",
    price: "₹24,000",
    cadence: "per month",
    blurb: "Pre-revenue to ₹2cr ARR, under 15 people.",
    includes: [
      "Monthly close & MIS",
      "GST & TDS filings",
      "Payroll up to 15 employees",
      "Annual ROC filings",
      "Email support, 1 business day",
    ],
    featured: false,
  },
  {
    name: "Series A",
    price: "₹58,000",
    cadence: "per month",
    blurb: "₹2–20cr ARR, 15–75 people, institutional investors on the cap table.",
    includes: [
      "Everything in Seed",
      "Board MIS pack & investor reporting",
      "ESOP accounting & perquisite tax",
      "FEMA / FC-GPR reporting",
      "Statutory audit coordination",
      "Dedicated account CA on Slack",
    ],
    featured: true,
  },
  {
    name: "Growth",
    price: "Custom",
    cadence: "quoted per scope",
    blurb: "₹20cr+ ARR, multi-entity or overseas subsidiary structures.",
    includes: [
      "Everything in Series A",
      "Multi-entity consolidation",
      "Overseas subsidiary compliance",
      "Ind AS conversion support",
      "Fractional CFO hours",
      "Diligence response desk",
    ],
    featured: false,
  },
];

export const diligence = {
  title: "Diligence is not a fire drill if the books were right all along",
  body: "Most startups lose four to six weeks in a round because the data room is assembled from scratch. On the desk, the artefacts a diligence team asks for are produced monthly as a by-product of the close.",
  checklist: [
    { label: "Audited financials", status: "Maintained annually" },
    { label: "GST & TDS filing history", status: "Filed and archived monthly" },
    { label: "Cap table & ESOP register", status: "Reconciled every close" },
    { label: "Board & shareholder resolutions", status: "Indexed in the data room" },
    { label: "FEMA reporting for prior rounds", status: "Filed within 30 days" },
    { label: "Related-party schedule", status: "Refreshed at each close" },
  ],
};

export const integrations = [
  "Zoho Books",
  "QuickBooks",
  "Tally",
  "RazorpayX",
  "Stripe",
  "Slack",
  "Google Workspace",
  "Notion",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We switched two months before our Series A. The data room was ready on day three of diligence. Our lead investor asked who our CFO was.",
    author: "Ananya Bose",
    role: "Co-founder & CEO, Fernway",
  },
  {
    quote:
      "The ESOP perquisite tax working alone saved us a very awkward conversation with twenty employees at exercise.",
    author: "Dhruv Menon",
    role: "Co-founder, Stackline",
  },
  {
    quote:
      "Previous accountant sent a PDF on the 22nd. LedgerLab sends a board pack on the 7th. It changed how we run the company.",
    author: "Ritika Shah",
    role: "CEO, Loamly",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you replace our existing accountant?",
    answer:
      "Usually yes. Onboarding takes two to three weeks: we obtain your records, reconcile opening balances, list every pending filing and give you a written clean-up plan before we take over a single return.",
  },
  {
    question: "What if we already have a finance hire?",
    answer:
      "Then the desk runs underneath them. Plenty of customers have a finance manager who owns FP&A and vendor relationships while we handle close, compliance and audit. The plan is priced the same.",
  },
  {
    question: "Is this actually cheaper than hiring?",
    answer:
      "A competent finance manager in a metro costs ₹18–30 lakh a year plus tooling, and still needs an external CA for audit and filings. The Series A plan is under ₹7 lakh a year and includes both. Past roughly 100 people, hiring in-house starts to win.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "A named chartered accountant owns your account and is on your Slack. Behind them sits a compliance team that files, and a partner who signs. You are not routed through a ticket queue.",
  },
  {
    question: "Can you handle a US or Singapore subsidiary?",
    answer:
      "Yes, on the Growth plan. Indian entity compliance is handled in house; overseas filings run through vetted local partners with a single point of coordination here.",
  },
];

export const demoTopics = [
  "Pre-seed / bootstrapped",
  "Seed funded",
  "Series A",
  "Series B or later",
  "Multi-entity or overseas",
];
