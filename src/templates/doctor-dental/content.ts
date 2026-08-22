import type { FaqItem, NavLink, Testimonial } from "@/types/template";

/** All copy for the Dental Studio template. */
export const practice = {
  name: "Smile Studio Dental",
  lead: "Dr. Meher Kapadia",
  qualifications: "BDS, MDS (Prosthodontics)",
  registration: "Reg. No. MSDC A-24817",
  phone: "+91 22 2600 4455",
  whatsapp: "+91 98200 44551",
  email: "hello@smilestudio.in",
  address: { line1: "Ground Floor, Turner Road", line2: "Bandra West", city: "Mumbai 400050" },
  hours: "Mon–Sat, 10:00–20:00 · Sunday by appointment",
};

export const navLinks: NavLink[] = [
  { label: "Treatments", href: "#treatments" },
  { label: "Your visit", href: "#visit" },
  { label: "Technology", href: "#technology" },
  { label: "Anxious patients", href: "#anxious" },
  { label: "Results", href: "#results" },
  { label: "Book", href: "#book" },
];

export const hero = {
  badge: "Same-day emergency slots held daily",
  title: "Dentistry that tells you the price before it starts.",
  subtitle:
    "A two-chair studio in Bandra. Every treatment plan comes with an indicative cost, the number of sittings and what happens if you do nothing — before you sit in the chair.",
  trustMarkers: [
    { value: "12 yrs", label: "In practice" },
    { value: "6,400+", label: "Treatments" },
    { value: "4.9", label: "Google rating" },
    { value: "0%", label: "Interest on EMI" },
  ],
};

export const treatments = [
  {
    group: "Everyday care",
    items: [
      { name: "Consultation & examination", price: "₹500", sittings: "1 sitting, 30 min", note: "Waived if treatment is booked the same day" },
      { name: "Scaling & polishing", price: "₹1,500 – 2,500", sittings: "1 sitting", note: "Recommended twice a year" },
      { name: "Composite filling", price: "₹1,800 – 3,500", sittings: "1 sitting", note: "Tooth-coloured, per tooth" },
      { name: "Extraction", price: "₹1,500 – 4,000", sittings: "1 sitting", note: "Surgical extraction priced higher" },
    ],
  },
  {
    group: "Restorative",
    items: [
      { name: "Root canal treatment", price: "₹6,000 – 12,000", sittings: "1–2 sittings", note: "Single, multi or re-treatment" },
      { name: "Zirconia crown", price: "₹9,000 – 14,000", sittings: "2 sittings, 7 days apart", note: "Five-year warranty on the crown" },
      { name: "Dental implant", price: "₹32,000 – 55,000", sittings: "2 visits over 4 months", note: "Includes abutment and crown" },
      { name: "Complete denture", price: "₹22,000 – 40,000", sittings: "4 sittings", note: "Acrylic or flexible options" },
    ],
  },
  {
    group: "Cosmetic & alignment",
    items: [
      { name: "Teeth whitening", price: "₹8,000 – 12,000", sittings: "1 sitting, 90 min", note: "In-chair, with home top-up kit" },
      { name: "Porcelain veneers", price: "₹14,000 per tooth", sittings: "2–3 sittings", note: "Digital smile preview first" },
      { name: "Clear aligners", price: "₹1,20,000 – 2,10,000", sittings: "12–24 months", note: "Scan, plan and refinements included" },
      { name: "Metal braces", price: "₹45,000 – 70,000", sittings: "18–30 months", note: "Monthly adjustment visits" },
    ],
  },
];

export const visitSteps = [
  {
    step: "01",
    title: "Examination & scan",
    duration: "30 minutes",
    body: "A full-mouth check, digital X-ray where needed, and photographs so you can see what we see.",
  },
  {
    step: "02",
    title: "Written plan & cost",
    duration: "Same visit",
    body: "You leave with a printed plan: what is urgent, what can wait, what each stage costs and how many sittings it takes.",
  },
  {
    step: "03",
    title: "Treatment",
    duration: "Booked to suit you",
    body: "Longer appointments so fewer visits are needed. Anaesthetic is given time to work properly, every time.",
  },
  {
    step: "04",
    title: "Review & recall",
    duration: "6 months",
    body: "A review at two weeks, then a reminder every six months. No membership plan, no upselling.",
  },
];

export const technology = [
  { name: "Digital intraoral scanner", benefit: "No impression putty, and you see the scan on screen" },
  { name: "RVG digital X-ray", benefit: "Around 80% less radiation than conventional film" },
  { name: "Rotary endodontics", benefit: "Most root canals finished in a single sitting" },
  { name: "In-house sterilisation", benefit: "Class B autoclave, pouches opened in front of you" },
  { name: "Digital smile design", benefit: "See the outcome before any tooth is prepared" },
  { name: "Intraoral camera", benefit: "Photographs of the problem, not just a description" },
];

export const anxious = {
  title: "If you have been avoiding the dentist for years, start here",
  body: "Roughly one in four of our new patients has not seen a dentist in over five years. Nobody is lectured about it.",
  promises: [
    "A first visit that is examination only — no treatment, no pressure",
    "A stop signal agreed before we begin, and we stop when you use it",
    "Topical numbing gel before every injection",
    "Costs discussed in writing, never mid-procedure",
    "Longer appointments so nothing feels rushed",
    "Nitrous oxide sedation available for longer treatments",
  ],
};

export const results = [
  { title: "Anterior veneers", detail: "Six upper veneers, 3 sittings", duration: "2 weeks" },
  { title: "Full-mouth rehabilitation", detail: "14 crowns and 2 implants", duration: "5 months" },
  { title: "Clear aligner correction", detail: "Moderate crowding, upper and lower", duration: "14 months" },
  { title: "Single implant", detail: "Lower first molar with zirconia crown", duration: "4 months" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had not been to a dentist in nine years. Dr. Kapadia did nothing at all on the first visit except look and explain. I came back the next week, which I would not have otherwise.",
    author: "Rohit A.",
    role: "Root canal & crown",
  },
  {
    quote:
      "The plan had a number on it. The final bill was that number. After three previous clinics, that is worth more than the dentistry.",
    author: "Sara M.",
    role: "Implant patient",
  },
  {
    quote:
      "My daughter is twelve and terrified of needles. They spent twenty minutes just letting her hold the mirror. Filling was done without a single tear.",
    author: "Preeti Naik",
    role: "Parent",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Will the price on the plan change?",
    answer:
      "Only if the clinical picture changes once treatment starts — for example, a tooth that looked restorable turns out not to be. If that happens, we stop, explain and re-quote before continuing. You are never billed for something you did not agree to.",
  },
  {
    question: "Do you offer EMI?",
    answer:
      "Yes. Treatments above ₹20,000 can be split across three, six or nine months at zero interest through partner cards, or over a longer period with a finance partner. Ask at the plan stage.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Most Indian health policies cover dental only for accident or hospitalisation-linked treatment. We issue a detailed invoice with procedure codes for reimbursement, and are on several corporate panels.",
  },
  {
    question: "How urgent is a broken tooth or sudden pain?",
    answer:
      "Same day. Emergency slots are held every morning and evening. Call rather than using the form — pain is not something a form should queue.",
  },
  {
    question: "Is a root canal painful?",
    answer:
      "The pain people remember is usually the infection, not the treatment. With proper anaesthesia and rotary instruments, most single-visit root canals are comparable to having a filling done.",
  },
];

export const bookingReasons = [
  "New patient examination",
  "Pain or emergency",
  "Cleaning & scaling",
  "Root canal or crown",
  "Implants",
  "Braces or aligners",
  "Whitening or veneers",
];
