import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Online Coaching template. */
export const coach = {
  brand: "Foundry Coaching",
  name: "Simran Kaur",
  title: "Online Strength & Nutrition Coach",
  since: 2017,
  phone: "+91 98111 60420",
  whatsapp: "+91 98111 60420",
  email: "simran@foundrycoaching.in",
  base: "Based in Gurugram · coaching worldwide",
  hours: "Check-ins reviewed Mon–Fri, replies within 24 hours",
};

export const navLinks: NavLink[] = [
  { label: "How it works", href: "#how" },
  { label: "Programs", href: "#programs" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "About", href: "#about" },
  { label: "Knowledge", href: "#research" },
  { label: "Results", href: "#results" },
];

export const hero = {
  eyebrow: `Online coaching since ${coach.since}`,
  title: "Coaching that follows you, not your gym.",
  subtitle:
    "Structured strength and nutrition coaching delivered remotely. You get a programme written for your equipment, weekly video form reviews, and a coach who reads your check-in properly instead of sending a thumbs-up.",
  whatsappMessage: "Hi Simran, I am interested in online coaching. Here is my goal:",
  highlight: { value: "Applications open", detail: "12 coaching slots free for October" },
};

export const stats: StatItem[] = [
  { value: "9 yrs", label: "Coaching" },
  { value: "1,100+", label: "Clients" },
  { value: "14", label: "Countries" },
  { value: "<24h", label: "Reply time" },
];

/* ── How online coaching runs ──────────────────────────────────────── */
export const how = {
  title: "What a week actually looks like",
  body: "Online coaching fails when it is a PDF and a group chat. Here is the loop, and it runs every single week you are with me.",
  week: [
    { day: "Monday", title: "Programme drops", body: "Your week lands in the app with loads, sets, RPE targets and video demos for anything new." },
    { day: "Mid-week", title: "Form review", body: "Upload a working set. I watch it frame by frame and send a voice note back, usually the same day." },
    { day: "Friday", title: "Check-in", body: "Weight trend, measurements, sleep, energy, adherence and how the sessions felt. Takes you five minutes." },
    { day: "Weekend", title: "I adjust", body: "Calories, volume or exercise selection change based on your data — not on a fixed four-week template." },
  ],
  tools: [
    "Programme delivered in an app",
    "Video form review, weekly",
    "Check-in form, five minutes",
    "WhatsApp for anything urgent",
  ],
};

/* ── Training Programs ─────────────────────────────────────────────── */
export const programs = [
  {
    name: "Foundations",
    audience: "New to structured training",
    price: "₹5,500",
    cadence: "per month",
    detail: "For people starting out, or coming back after years away.",
    includes: [
      "Programme updated monthly",
      "Technique library for every lift",
      "Calorie & protein targets",
      "Check-in reviewed fortnightly",
      "WhatsApp support",
    ],
    featured: false,
  },
  {
    name: "Full Coaching",
    audience: "Weight loss or muscle building",
    price: "₹9,500",
    cadence: "per month",
    detail: "The core service. Where most clients are, and where the results are.",
    includes: [
      "Programme updated weekly",
      "Weekly video form review",
      "Weekly check-in with written response",
      "Nutrition adjusted on your data",
      "Monthly video call",
      "WhatsApp support, same-day",
    ],
    featured: true,
  },
  {
    name: "Specialist",
    audience: "Female fitness & special populations",
    price: "₹13,000",
    cadence: "per month",
    detail: "Pre and post-natal, PCOS, perimenopause, and training with a managed medical condition.",
    includes: [
      "Everything in Full Coaching",
      "Cycle-aware or trimester-aware programming",
      "Coordination with your doctor",
      "Fortnightly video call",
      "Symptom and recovery tracking",
    ],
    featured: false,
  },
];

export const specialisms = [
  { name: "Personal training, online", detail: "One-to-one coaching delivered remotely — the same relationship, without the commute." },
  { name: "Weight loss", detail: "Sustainable deficits with resistance training to hold muscle. Most clients run 12 to 20 weeks." },
  { name: "Muscle building", detail: "Periodised hypertrophy with real load progression, for people who have plateaued." },
  { name: "Female fitness", detail: "Cycle-aware programming, pre and post-natal blocks, pelvic floor and core rehabilitation." },
  { name: "Special populations", detail: "PCOS, thyroid, type 2 diabetes and hypertension — run alongside your treating doctor." },
  { name: "Home & minimal kit", detail: "Full programmes for a pair of dumbbells and a bench, if that is what you have." },
];

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export const nutrition = {
  title: "Nutrition coaching, not a diet chart",
  body: "You will not be handed a six-meal plan with boiled chicken. We set targets, fit them around how you already eat, and move them when the data says to.",
  pillars: [
    { title: "Targets, not menus", body: "Calories and protein, with a flexible structure you build your own meals inside." },
    { title: "Built around your cuisine", body: "North Indian, South Indian, vegetarian, Jain, eating-out-four-nights-a-week — all workable." },
    { title: "Adjusted fortnightly", body: "Weight trend and waist measurement drive the next change, never a guess." },
    { title: "Refeeds and diet breaks", body: "Planned into long fat-loss blocks so adherence and hormones hold up." },
  ],
  note: "I am a certified nutrition coach, not a registered dietitian. Anything requiring a therapeutic or clinical diet is referred out, and I coach the training around it.",
};

/* ── About Me & Certifications ─────────────────────────────────────── */
export const about = {
  title: "Nine years, and about eleven hundred people",
  paragraphs: [
    "I coached on the floor at a Delhi gym for three years before moving fully online in 2017 — not because it was fashionable, but because half my clients kept relocating for work and wanted to keep training with me.",
    "Since then I have coached roughly 1,100 people across 14 countries. A large share are women, and a growing share are training through PCOS, pregnancy or perimenopause, which is where most generic programmes fall apart.",
    "I cap the roster deliberately. A coach carrying 200 clients is a newsletter, not a coach.",
  ],
};

export const certifications = [
  { body: "NASM", title: "Certified Personal Trainer", year: "2016" },
  { body: "ISSA", title: "Certified Nutritionist", year: "2018" },
  { body: "GGS", title: "Pre & Post-Natal Coaching Specialist", year: "2020" },
  { body: "GGS", title: "Women's Coaching Specialist", year: "2021" },
  { body: "ACE", title: "Behaviour Change Specialist", year: "2023" },
  { body: "Red Cross", title: "First Aid & CPR", year: "2025" },
];

/* ── Research & Knowledge ──────────────────────────────────────────── */
export const research = {
  title: "Evidence over opinion",
  body: "Every position below is one I will change if the evidence does. These are the ones that come up on almost every first call.",
  positions: [
    { q: "Do I need to train fasted to burn fat?", a: "No. Twenty-four-hour energy balance decides fat loss. Fasted training suits some people and ruins sessions for others — it is a preference, not a mechanism." },
    { q: "Will lifting heavy make me bulky?", a: "No. Building visible muscle takes years of deliberate surplus. Resistance training is the most effective thing you can do for body composition and bone density." },
    { q: "Is soreness needed for progress?", a: "No. Soreness tracks unfamiliarity, not stimulus. Progressive overload does, and you can measure it." },
    { q: "How many days a week do I need?", a: "Three well-structured full-body sessions beats six unstructured ones. More frequency helps, but adherence matters more than optimisation." },
    { q: "Are detox teas or fat burners worth it?", a: "No. They work through appetite suppression or a diuretic effect, and I do not sell or recommend any of them." },
    { q: "Does training change around the menstrual cycle?", a: "Sometimes usefully. Evidence for strict cycle-based periodisation is weak, but adjusting intensity around symptoms improves adherence, which is what matters." },
  ],
};

/* ── Client Testimonials ───────────────────────────────────────────── */
export const results = [
  { name: "Aarti M.", detail: "Down 14 kg over 9 months", note: "PCOS · Bengaluru", stat: "9 months" },
  { name: "Rahul D.", detail: "Up 8 kg lean mass, bench 60 to 100 kg", note: "Muscle building · Dubai", stat: "14 months" },
  { name: "Fiona T.", detail: "Returned to lifting 6 months post-partum", note: "Post-natal · London", stat: "6 months" },
  { name: "Kunal S.", detail: "HbA1c 7.8 to 5.9, down 11 kg", note: "Type 2 diabetes · Pune", stat: "12 months" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I have paid for three online coaches before. Simran is the first one who read my check-in and changed something because of it, every single week.",
    author: "Aarti M.",
    role: "Full Coaching, 9 months",
  },
  {
    quote:
      "Training through pregnancy and after, with a coach who actually held the certification for it rather than improvising, was worth every rupee.",
    author: "Fiona T.",
    role: "Specialist, post-natal",
  },
  {
    quote:
      "Eight-hour time difference and it never mattered. Programme on Monday, voice note on my form by Wednesday.",
    author: "Rahul D.",
    role: "Full Coaching, Dubai",
  },
];

/* ── Location & service areas ──────────────────────────────────────── */
export const serviceAreas = {
  title: "Where clients train from",
  body: "Coaching is fully remote, so the only constraint is that check-ins are reviewed on Indian business days.",
  regions: [
    { region: "India", detail: "Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad and beyond", zone: "IST" },
    { region: "Middle East", detail: "UAE, Qatar, Saudi Arabia", zone: "GST · IST −1.5" },
    { region: "UK & Europe", detail: "London, Manchester, Berlin, Amsterdam", zone: "GMT/CET · IST −4.5" },
    { region: "North America", detail: "East and West coast, calls scheduled early IST", zone: "EST/PST · IST −9.5 to −12.5" },
  ],
};

export const faqs: FaqItem[] = [
  {
    question: "What equipment do I need?",
    answer:
      "Ideally a gym. If you have dumbbells, a bench and somewhere to hang, that is a workable programme too — tell me what you have on the application and the programme is written to it.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "Three months. Meaningful change in body composition does not happen in four weeks, and a one-month subscription mostly sells hope. Cancel any time after that with two weeks notice.",
  },
  {
    question: "What if I travel a lot?",
    answer:
      "Roughly a third of clients do. Travel weeks get a hotel-gym or bodyweight variant of the same block, so the progression does not break.",
  },
  {
    question: "Do you offer a refund?",
    answer:
      "If you complete the programme and log your check-ins for three months with no measurable progress, the third month is refunded. Adherence is the condition, and it is stated in the agreement rather than the fine print.",
  },
  {
    question: "Why is there an application instead of a buy button?",
    answer:
      "Because the roster is capped and not everyone is a fit. If your goal needs a physiotherapist or a registered dietitian first, I would rather tell you on the call than take three months of fees.",
  },
];

export const applyGoals = [
  "Weight loss",
  "Muscle building",
  "General strength & health",
  "Female fitness (PCOS, cycle, perimenopause)",
  "Pre or post-natal",
  "Training with a medical condition",
  "Return from injury",
];
