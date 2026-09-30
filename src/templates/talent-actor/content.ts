import type { NavLink } from "@/types/template";

/** All copy for the Screen Actor template. */
export const actor = {
  name: "Aarav Nair",
  discipline: "Actor",
  union: "CINTAA · Equity (UK)",
  based: "Mumbai · London",
  languages: "Hindi, English, Malayalam, conversational Tamil",
  email: "aarav@aaravnair.in",
};

export const agent = {
  agency: "Kwan Talent",
  name: "Rhea Mathur",
  email: "rhea@kwan.in",
  phone: "+91 22 6666 4400",
  territory: "Worldwide",
  uk: { agency: "Curtis Brown", name: "James Okonjo", email: "james@curtisbrown.co.uk" },
};

export const navLinks: NavLink[] = [
  { label: "Showreel", href: "#reel" },
  { label: "Credits", href: "#credits" },
  { label: "Casting", href: "#casting" },
  { label: "Training", href: "#training" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Currently — 'The Long Road Back', Season 2",
  titleLines: ["Aarav", "Nair"],
  strapline: "Actor · screen and stage",
  note: "Represented worldwide by Kwan Talent",
};

/* ── Showreel ──────────────────────────────────────────────────────── */
export const reel = {
  title: "Showreel",
  runtime: "2 min 48 sec",
  updated: "Updated August 2026",
  body: "Scenes from The Long Road Back, Bombay Velvet Redux and Kaadu. Full-length self-tapes and the theatre reel are available from the agent on request.",
  clips: [
    { title: "The Long Road Back", role: "DCP Mathew Varghese", type: "Series · Netflix", at: "00:00" },
    { title: "Kaadu", role: "Rajan", type: "Feature · Malayalam", at: "00:52" },
    { title: "Bombay Velvet Redux", role: "Faiz", type: "Feature", at: "01:34" },
    { title: "Hamlet", role: "Laertes", type: "Stage · Prithvi", at: "02:15" },
  ],
};

/* ── Credits ───────────────────────────────────────────────────────── */
export const credits = {
  screen: [
    { year: "2026", production: "The Long Road Back (S2)", role: "DCP Mathew Varghese", company: "Netflix", director: "Reema Kagti" },
    { year: "2025", production: "Kaadu", role: "Rajan · Lead", company: "Wayfarer Films", director: "Lijo Jose" },
    { year: "2025", production: "The Long Road Back (S1)", role: "DCP Mathew Varghese", company: "Netflix", director: "Reema Kagti" },
    { year: "2024", production: "Bombay Velvet Redux", role: "Faiz · Supporting", company: "Phantom", director: "Anurag Kashyap" },
    { year: "2023", production: "Salt in the Wound", role: "Ismail", company: "Amazon Prime", director: "Konkona Sen Sharma" },
    { year: "2022", production: "Nineteen Hours", role: "Sub-Inspector Rane", company: "Applause", director: "Hansal Mehta" },
  ],
  stage: [
    { year: "2024", production: "Hamlet", role: "Laertes", company: "Prithvi Theatre", director: "Rajat Kapoor" },
    { year: "2022", production: "A View from the Bridge", role: "Rodolpho", company: "Motley", director: "Naseeruddin Shah" },
    { year: "2019", production: "Detective Nau Do Gyarah", role: "Ensemble", company: "Aadyam", director: "Akarsh Khurana" },
  ],
  commercial: [
    { year: "2026", production: "Royal Enfield — 'Distance'", role: "Principal", company: "Ogilvy", director: "Vivek Kakkad" },
    { year: "2024", production: "Tata Tea — 'Jaago Re'", role: "Principal", company: "Lowe Lintas", director: "Shimit Amin" },
  ],
};

/* ── Casting information ───────────────────────────────────────────── */
export const casting = [
  { label: "Playing age", value: "28 – 38" },
  { label: "Height", value: "5 ft 11 in · 180 cm" },
  { label: "Build", value: "Athletic" },
  { label: "Hair", value: "Black" },
  { label: "Eyes", value: "Dark brown" },
  { label: "Base", value: "Mumbai & London" },
];

export const skills = {
  accents: ["Neutral Indian", "Malayali", "Bombay", "RP", "General American", "Estuary"],
  languages: ["Hindi — fluent", "English — fluent", "Malayalam — fluent", "Tamil — conversational"],
  physical: ["Stage combat (BASSC, Intermediate)", "Horse riding", "Swimming", "Kalaripayattu, 4 years", "Motorcycle licence"],
  other: ["Singing — baritone", "Classical guitar", "Voice-over, home booth", "Valid US B1/B2 and UK work visa"],
};

/* ── Training ──────────────────────────────────────────────────────── */
export const training = [
  { years: "2018 – 2020", detail: "MA Acting, Royal Central School of Speech and Drama, London" },
  { years: "2017", detail: "Meisner intensive, The Actors Studio, Mumbai" },
  { years: "2015 – 2017", detail: "Ensemble member, Motley Theatre Group" },
  { years: "2016", detail: "Stage combat certification, BASSC — Intermediate with distinction" },
  { years: "2014", detail: "BA English Literature, St Xavier's College, Mumbai" },
];

/* ── Press ─────────────────────────────────────────────────────────── */
export const press = [
  { source: "The Hollywood Reporter India", line: "Nair plays the whole second season on a held breath, and it is the most controlled work in the ensemble.", subject: "The Long Road Back", year: "2026" },
  { source: "Film Companion", line: "He does the hardest thing available to an actor in a procedural: he listens.", subject: "The Long Road Back", year: "2025" },
  { source: "The Hindu", line: "A Laertes who finally makes the fifth act feel like a consequence rather than a plot device.", subject: "Hamlet, Prithvi", year: "2024" },
];

export const awards = [
  { year: "2026", detail: "Filmfare OTT Awards — Best Supporting Actor, nominated" },
  { year: "2025", detail: "Kerala State Film Awards — Special Jury Mention, Kaadu" },
  { year: "2024", detail: "META Awards — Best Supporting Actor, Hamlet" },
];

/* ── Gallery ───────────────────────────────────────────────────────── */
export const gallery = [
  { label: "Commercial headshot", ratio: "aspect-[4/5]" },
  { label: "Theatrical headshot", ratio: "aspect-[4/5]" },
  { label: "Full length", ratio: "aspect-[4/5]" },
  { label: "Character — DCP Varghese", ratio: "aspect-[4/5]" },
  { label: "Character — Rajan", ratio: "aspect-[4/5]" },
  { label: "Stage — Laertes", ratio: "aspect-[4/5]" },
];

export const enquiryTypes = [
  "Casting enquiry",
  "Audition or self-tape request",
  "Press or interview",
  "Brand or commercial",
  "Theatre",
  "Other",
];
