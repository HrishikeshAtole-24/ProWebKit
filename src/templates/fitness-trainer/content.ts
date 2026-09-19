import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Personal Trainer template. */
export const coach = {
  brand: "Pawar Strength",
  name: "Aakash Pawar",
  title: "Personal Trainer & Strength Coach",
  since: 2014,
  phone: "+91 98220 44170",
  whatsapp: "+91 98220 44170",
  email: "aakash@pawarstrength.in",
  gym: "Iron Yard Fitness, Baner",
  address: { line1: "Iron Yard Fitness, 2nd Floor", line2: "Baner Road", city: "Pune 411045" },
  hours: "Mon–Sat · 06:00–11:00 and 17:00–21:00",
};

export const navLinks: NavLink[] = [
  { label: "Programs", href: "#programs" },
  { label: "About me", href: "#about" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Knowledge", href: "#research" },
  { label: "Results", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: `Coaching in Pune since ${coach.since}`,
  title: "Train properly. Recover properly. Keep the result.",
  subtitle:
    "One-to-one and online strength coaching for people who have tried the crash-diet route and want the version that lasts. Assessment first, programme second, and a plan you can actually hold down alongside a job.",
  whatsappMessage: "Hi Aakash, I found your site. I would like to know about personal training.",
  points: [
    "First consultation and movement screen are free",
    "Programmes written for your schedule, not a template",
    "Nutrition guidance included — no separate diet fee",
  ],
};

export const stats: StatItem[] = [
  { value: "11 yrs", label: "Coaching experience" },
  { value: "640+", label: "Clients coached" },
  { value: "1:1", label: "Every session" },
  { value: "4.9", label: "Google rating" },
];

/* ── Training Programs ─────────────────────────────────────────────── */
export const programs = [
  {
    name: "Personal Training",
    mode: "In person · Baner",
    price: "₹12,000 / month",
    detail:
      "Three sessions a week on the floor with me. Movement screen, programme, and hands-on coaching of every lift.",
    includes: [
      "3 sessions a week",
      "Movement screen & re-test",
      "Form coaching on every lift",
      "WhatsApp support between sessions",
    ],
    featured: true,
  },
  {
    name: "Online Training",
    mode: "Remote · anywhere",
    price: "₹6,500 / month",
    detail:
      "The same programming, delivered remotely. Video form checks, weekly adjustments and a fortnightly call.",
    includes: [
      "Weekly programme in an app",
      "Video form review",
      "Fortnightly video call",
      "Nutrition targets included",
    ],
    featured: false,
  },
  {
    name: "Weight Loss",
    mode: "12 or 24 weeks",
    price: "₹14,000 / 12 weeks",
    detail:
      "A structured fat-loss block built around a calorie target you can sustain, with resistance training to hold muscle.",
    includes: [
      "Calorie & protein targets",
      "Progressive resistance plan",
      "Fortnightly measurements",
      "Plateau protocol",
    ],
    featured: false,
  },
  {
    name: "Muscle Building",
    mode: "16 weeks minimum",
    price: "₹13,000 / month",
    detail:
      "Hypertrophy blocks with real progression tracking. For people who have been lifting a while and stopped moving forward.",
    includes: [
      "Periodised hypertrophy blocks",
      "Volume & load tracking",
      "Deload scheduling",
      "Surplus nutrition plan",
    ],
    featured: false,
  },
  {
    name: "Female Fitness",
    mode: "In person or online",
    price: "₹12,000 / month",
    detail:
      "Strength-led coaching for women, including training through the menstrual cycle, and pre- and post-natal programming.",
    includes: [
      "Cycle-aware programming",
      "Pre & post-natal blocks",
      "Pelvic floor and core work",
      "Female-only slots available",
    ],
    featured: false,
  },
  {
    name: "Special Populations",
    mode: "By assessment",
    price: "From ₹15,000 / month",
    detail:
      "Coaching for clients with diabetes, hypertension, PCOS, joint replacements or a recent cardiac event — run in coordination with your doctor.",
    includes: [
      "Written clearance from your physician",
      "Load and intensity capped to protocol",
      "Session-by-session monitoring",
      "Reports shared with your doctor",
    ],
    featured: false,
  },
];

/* ── About Me ──────────────────────────────────────────────────────── */
export const about = {
  title: "Eleven years on the gym floor, not in a content studio",
  paragraphs: [
    "I started coaching in 2014 at a commercial gym in Kothrud, where I spent four years learning the thing nobody teaches you in a certification course: how to get a working adult to keep training in week nine.",
    "Since 2019 I have coached independently out of Iron Yard in Baner. Around 640 clients so far, roughly a third of them online, and a fair number who came to me after a crash programme somewhere else went wrong.",
    "I do not sell supplements, I do not take brand commissions, and I will tell you when you do not need a coach. Most people need eight to twelve weeks of structure and then they can run it themselves.",
  ],
  background: [
    { label: "2014 – 2018", detail: "Floor trainer, Pulse Fitness Kothrud — 1,200+ client sessions" },
    { label: "2018 – 2019", detail: "Strength & conditioning assistant, district-level athletics camp" },
    { label: "2019 – present", detail: "Independent coach, Iron Yard Baner, in person and online" },
  ],
};

/* ── Certifications ────────────────────────────────────────────────── */
export const certifications = [
  { body: "ACSM", title: "Certified Personal Trainer", year: "2014", note: "American College of Sports Medicine · renewed 2024" },
  { body: "NSCA", title: "Certified Strength & Conditioning Specialist", year: "2018", note: "National Strength and Conditioning Association" },
  { body: "ISSN", title: "Sports Nutrition Specialist", year: "2020", note: "International Society of Sports Nutrition" },
  { body: "PN", title: "Precision Nutrition Level 1", year: "2021", note: "Nutrition coaching methodology" },
  { body: "NASM", title: "Corrective Exercise Specialist", year: "2022", note: "Movement screening and correction" },
  { body: "Red Cross", title: "First Aid & CPR/AED", year: "2025", note: "Current — renewed every two years" },
];

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export const nutrition = {
  title: "Nutrition that survives a Pune work week",
  body: "No meal plan printed off a template. We set a calorie and protein target, build it around what you actually eat at home and in the canteen, and adjust it every fortnight against the scale and the tape.",
  principles: [
    { title: "Your food, not my food list", body: "Dal, roti, rice, eggs, paneer, chicken. If you will not eat it in month three, it does not go in the plan." },
    { title: "Protein first, then the rest", body: "We hit a protein floor before anything else. Most clients arrive at half of what they need." },
    { title: "Numbers, reviewed fortnightly", body: "Weight trend, waist measurement and training performance decide the next adjustment — not how the week felt." },
    { title: "No supplement selling", body: "Whey and creatine get recommended when they help. I earn nothing from either, and I will say when they are a waste." },
  ],
  note: "I am a certified sports nutritionist, not a clinical dietitian. Where a medical condition needs a therapeutic diet, you will be referred to a registered dietitian and I will build the training around their plan.",
};

/* ── Research & Knowledge ──────────────────────────────────────────── */
export const research = {
  title: "What the evidence actually says",
  body: "Most fitness advice online is a supplement advertisement wearing a lab coat. These are the positions I coach from, and the reasoning behind them.",
  articles: [
    { title: "Training to failure is mostly unnecessary", summary: "Stopping one to three reps short produces near-identical hypertrophy with far less fatigue, so you can train the muscle again sooner.", tag: "Hypertrophy" },
    { title: "Spot reduction still does not work", summary: "You cannot choose where fat comes off. Ab training builds abs; the calorie deficit is what reveals them.", tag: "Fat loss" },
    { title: "Protein is the one supplement worth the money", summary: "1.6 to 2.2 g per kg of bodyweight supports muscle retention in a deficit. Food first; powder only where convenience demands it.", tag: "Nutrition" },
    { title: "Soreness is not a measure of a good session", summary: "Soreness tracks novelty, not progress. A well-programmed week often leaves you barely sore and still progressing.", tag: "Recovery" },
    { title: "Women should lift heavy", summary: "Resistance training will not make you bulky. It is the single best intervention for bone density, and it matters more after 35, not less.", tag: "Female fitness" },
    { title: "Cardio does not kill your gains", summary: "Interference is real but modest, and mostly a problem at high running volumes. Two or three sessions a week helps recovery.", tag: "Conditioning" },
  ],
};

/* ── Client Testimonials ───────────────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I lost 18 kg over eleven months and kept it off for two years. The thing that worked was that he never once gave me a plan I had to be a different person to follow.",
    author: "Mandar J.",
    role: "Weight loss · 18 kg in 11 months",
  },
  {
    quote:
      "Post-partum, no other trainer would take me on without a doctor-note argument. Aakash asked for the clearance himself, spoke to my gynaecologist, and built around it.",
    author: "Priyanka S.",
    role: "Post-natal programme",
  },
  {
    quote:
      "Type 2 diabetic, 54, and terrified of the gym. Eight months in my HbA1c is 6.2 and I deadlift 90 kg. He sent progress reports to my physician every quarter.",
    author: "Suresh K.",
    role: "Special population coaching",
  },
  {
    quote:
      "Online client from Dubai. Video form checks every week and he actually watches them properly — he caught a hip shift on my squat from a phone video.",
    author: "Nikhil R.",
    role: "Online training, 2 years",
  },
];

/* ── Location & service areas ──────────────────────────────────────── */
export const location = {
  title: "Where I train clients",
  areas: [
    { area: "Baner & Balewadi", detail: "In-person sessions at Iron Yard Fitness. Most slots available." },
    { area: "Aundh & Pashan", detail: "In-person, limited evening slots. Ten-minute drive." },
    { area: "Wakad & Hinjewadi", detail: "Early morning slots only, or online coaching." },
    { area: "Anywhere else", detail: "Online coaching — currently with clients in Dubai, Singapore and Bengaluru." },
  ],
};

export const faqs: FaqItem[] = [
  {
    question: "I have never trained before. Is that a problem?",
    answer:
      "It is the easiest place to start from, honestly. Absolute beginners make the fastest progress because there are no bad habits to undo. The first two weeks are movement patterns and light loads, nothing heroic.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Strength changes in three to four weeks, the mirror in eight to twelve, and other people noticing at around sixteen. Anyone promising a transformation in 30 days is selling you a dehydration protocol.",
  },
  {
    question: "Do I have to give up rice and roti?",
    answer:
      "No, and a coach who tells you to is making your life harder for no reason. Carbohydrates are not the problem; the total calorie number is. Most of my clients eat rice daily throughout a fat-loss block.",
  },
  {
    question: "What if I have an injury or a medical condition?",
    answer:
      "Bring it up on the first call. For anything cardiac, post-surgical, or a managed condition like diabetes or hypertension, I require written clearance from your treating doctor before the first session, and I coordinate with them through the programme.",
  },
  {
    question: "Can I train with a friend or partner?",
    answer:
      "Yes. Partner sessions are ₹18,000 a month for the pair, which works out cheaper each and holds most people accountable better than training alone.",
  },
];

export const enquiryGoals = [
  "Weight loss",
  "Muscle building",
  "General strength & health",
  "Female fitness / pre or post-natal",
  "Medical condition or rehab return",
  "Online coaching",
  "Not sure yet",
];
