import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Personal Stylist template. */
export const practice = {
  name: "Form & Figure",
  stylist: "Tara Menon",
  discipline: "Personal styling & image consulting",
  founded: 2018,
  phone: "+91 80 4890 2200",
  whatsapp: "+91 99000 22001",
  email: "tara@formandfigure.in",
  address: { line1: "Studio 2, Indiranagar 12th Main", line2: "", city: "Bengaluru 560038" },
  coverage: "In person in Bengaluru · virtually anywhere",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Wardrobe audit", href: "#audit" },
  { label: "For companies", href: "#corporate" },
  { label: "Clients", href: "#clients" },
  { label: "Book", href: "#book" },
];

export const hero = {
  eyebrow: `Personal styling since ${practice.founded} · Bengaluru`,
  title: "You do not need more clothes. You need the right forty.",
  subtitle:
    "Image consulting for people who are tired of a full wardrobe and nothing to wear. We work with what you own first, buy deliberately second, and never sell you anything we earn a commission on.",
  primaryCta: { label: "Book a consultation", href: "#book" },
  secondaryCta: { label: "See services", href: "#services" },
};

export const stats: StatItem[] = [
  { value: "480+", label: "Clients styled" },
  { value: "62%", label: "Of an average wardrobe unworn" },
  { value: "0", label: "Brand commissions taken" },
  { value: "8 yrs", label: "In practice" },
];

export const services = [
  {
    name: "Wardrobe Audit",
    price: "₹14,000",
    duration: "4 hours, at your home",
    blurb: "The one to start with. Most people need nothing else for a year.",
    includes: [
      "Every item tried on and assessed",
      "Keep, alter, donate and discard piles",
      "Outfit combinations photographed and shared",
      "Alteration list with a tailor brief",
      "A written gap list of what is genuinely missing",
    ],
    featured: true,
  },
  {
    name: "Personal Shopping",
    price: "₹18,000",
    duration: "5 hours, plus prep",
    blurb: "Buying the gap list, without eight hours in a mall.",
    includes: [
      "Pre-shopping research and appointments booked",
      "Stores and sizes pre-checked before you arrive",
      "Fit assessment and alteration guidance in store",
      "Purchases photographed against your existing wardrobe",
      "No commission taken from any brand, ever",
    ],
    featured: false,
  },
  {
    name: "Signature Style",
    price: "₹48,000",
    duration: "Six weeks",
    blurb: "The full engagement, for a real inflection point.",
    includes: [
      "Everything in Audit and Personal Shopping",
      "Colour and proportion analysis",
      "A written style guide document you keep",
      "Occasion dressing plan for the year ahead",
      "Two follow-up sessions at three and six months",
      "WhatsApp access for outfit questions throughout",
    ],
    featured: false,
  },
  {
    name: "Virtual Styling",
    price: "₹9,500",
    duration: "2 sessions of 90 minutes",
    blurb: "Same method, done over video, anywhere.",
    includes: [
      "Wardrobe reviewed over video call",
      "Digital lookbook of outfit combinations",
      "Shopping list with direct links and sizes",
      "One follow-up session after purchases arrive",
    ],
    featured: false,
  },
];

export const process = [
  { step: "01", title: "The conversation", duration: "30 minutes, free", body: "What you do, where you go, what you avoid wearing and why. No clothes involved yet." },
  { step: "02", title: "The audit", duration: "4 hours", body: "Everything comes out of the wardrobe and goes back in four piles. This is the uncomfortable part, and it is where the value is." },
  { step: "03", title: "The gap list", duration: "Within a week", body: "A written list of what is genuinely missing, in priority order, with a budget against each line." },
  { step: "04", title: "Shopping", duration: "One day", body: "Only if you want it. Plenty of clients take the gap list and shop themselves, which is a perfectly good outcome." },
  { step: "05", title: "Follow-up", duration: "3 and 6 months", body: "Does it hold up in real life? What did you actually reach for? What did we get wrong?" },
];

export const audit = {
  title: "What actually happens in a wardrobe audit",
  body: "People expect judgement. What they get is arithmetic — most wardrobes are 60% unworn, and the reason is almost never taste.",
  findings: [
    { stat: "62%", label: "Of the average wardrobe is unworn in a year", note: "Measured across 480 audits" },
    { stat: "4", label: "Of five unworn items fail on fit, not style", note: "Usually shoulder or rise" },
    { stat: "₹28k", label: "Median value of clothes fixable by alteration", note: "Per wardrobe" },
    { stat: "11", label: "Items in a typical gap list", note: "Not forty. Eleven." },
  ],
  truths: [
    "Nothing is thrown away without your say. Ever.",
    "Sentimental items get a separate pile and no argument.",
    "If something is fixable by a tailor for ₹400, we fix it rather than replace it.",
    "We do not comment on your body. We comment on the garment.",
    "You are not told to buy anything on the day of the audit.",
  ],
};

export const corporate = {
  title: "Image workshops for teams",
  body: "Run for client-facing teams, leadership cohorts and campus-hire batches. Practical rather than prescriptive, and it does not turn into a lecture about tucking your shirt in.",
  offerings: [
    { name: "Half-day workshop", price: "₹85,000", detail: "Up to 25 people. Dress codes decoded, fit fundamentals, video-call presence." },
    { name: "Leadership one-to-one", price: "₹32,000 per person", detail: "Two sessions for senior leaders ahead of a visible role change." },
    { name: "Campus-hire batch", price: "₹1,40,000", detail: "Full day for up to 60 first-jobbers. Includes a budget shopping guide." },
  ],
};

export const clients: Testimonial[] = [
  {
    quote:
      "Tara made me try on 140 items in an afternoon. Ninety went to donation and eleven went to the tailor. I bought six things after that and I have not thought about clothes since.",
    author: "Ananya R.",
    role: "Product lead, Wardrobe Audit",
  },
  {
    quote:
      "I was promoted into a role with a lot of external visibility and had genuinely no idea what to wear. Six weeks later I stopped thinking about it entirely, which was the whole point.",
    author: "Vikram S.",
    role: "Signature Style client",
  },
  {
    quote:
      "The thing I did not expect: she talked me out of two expensive purchases. A stylist on commission would not have done that.",
    author: "Meher D.",
    role: "Personal Shopping",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Will you make me throw everything out?",
    answer:
      "No. Nothing leaves your home without your explicit agreement, and sentimental items get a separate pile with no argument from me. The typical audit sends about a third to donation, keeps a third, and sends a third to the tailor.",
  },
  {
    question: "Do you take commission from brands or stores?",
    answer:
      "Never, and it is the single most important thing on this page. My fee is the only money I make from your engagement. That is why I can tell you to keep the jacket you own and skip the one in the window.",
  },
  {
    question: "Is this only for people with a big budget?",
    answer:
      "The audit works hardest for people with a modest budget, because most of the value comes from what you already own and from a ₹400 alteration. If you want a service that starts with a shopping trip, I am probably not the right fit.",
  },
  {
    question: "Do you style for weddings and special occasions?",
    answer:
      "Yes, as part of Signature Style or as a standalone occasion session. Book at least eight weeks ahead if anything needs to be made or altered.",
  },
  {
    question: "Do you work with men?",
    answer:
      "Around 40% of clients are men, and the method is identical. Fit, proportion and colour do not change by gender.",
  },
];

export const bookingServices = services.map((service) => `${service.name} — ${service.price}`);
