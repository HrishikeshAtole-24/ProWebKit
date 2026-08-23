import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Performing Arts Academy template. */
export const academy = {
  name: "Swaralaya Academy",
  tagline: "Music & dance, taught in the traditional lineage",
  founded: 1998,
  principal: "Guru Lakshmi Venkataraman",
  phone: "+91 44 2811 6600",
  whatsapp: "+91 98410 16600",
  email: "office@swaralaya.in",
  address: { line1: "18 Bhattad Street, Mylapore", line2: "", city: "Chennai 600004" },
  hours: "Classes Tue–Sun · Office 10:00–19:00",
};

export const navLinks: NavLink[] = [
  { label: "Disciplines", href: "#disciplines" },
  { label: "Grades", href: "#grades" },
  { label: "Gurus", href: "#gurus" },
  { label: "Fees", href: "#fees" },
  { label: "Recital", href: "#recital" },
  { label: "Trial class", href: "#trial" },
];

export const hero = {
  eyebrow: `Established ${academy.founded} · Mylapore, Chennai`,
  title: "Twenty-eight years of teaching, and not one shortcut in any of them.",
  subtitle:
    "Carnatic vocal, veena, mridangam and Bharatanatyam, taught in the guru-shishya tradition alongside graded examinations. Small classes, one guru per student, and an annual recital every student performs at.",
  primaryCta: { label: "Book a trial class", href: "#trial" },
  secondaryCta: { label: "See disciplines", href: "#disciplines" },
};

export const stats: StatItem[] = [
  { value: "28 yrs", label: "Since 1998" },
  { value: "1,900+", label: "Students taught" },
  { value: "6", label: "Disciplines" },
  { value: "6:1", label: "Students per guru" },
];

export const disciplines = [
  {
    name: "Carnatic vocal",
    guru: "Guru Lakshmi Venkataraman",
    ages: "From age 6",
    format: "Group of 6, twice weekly",
    detail: "Sarali varisai through varnams, kritis and manodharma. The full traditional progression, not a shortened syllabus.",
  },
  {
    name: "Veena",
    guru: "Vidwan S. Raghunathan",
    ages: "From age 9",
    format: "Group of 4, twice weekly",
    detail: "Instrument provided for the first six months so a family is not asked to buy before the child is sure.",
  },
  {
    name: "Mridangam",
    guru: "Vidwan K. Sundaresan",
    ages: "From age 8",
    format: "Group of 4, twice weekly",
    detail: "Tala, korvai and accompaniment practice, with regular sessions playing alongside the vocal classes.",
  },
  {
    name: "Violin",
    guru: "Smt. Anuradha Iyer",
    ages: "From age 8",
    format: "Group of 5, twice weekly",
    detail: "Carnatic violin including accompaniment technique, which is where most solo-trained students struggle.",
  },
  {
    name: "Bharatanatyam",
    guru: "Guru Meenakshi Sundaram",
    ages: "From age 5",
    format: "Group of 10, thrice weekly",
    detail: "Pandanallur style. Adavus through margam, with abhinaya taught from the third year rather than the eighth.",
  },
  {
    name: "Adult beginners",
    guru: "Rotating faculty",
    ages: "18 and above",
    format: "Group of 8, once weekly",
    detail: "For adults starting from nothing or returning after decades. No examinations unless you want them.",
  },
];

export const grades = {
  title: "Graded examinations, and what they actually mean",
  body: "The academy prepares students for the Tamil Nadu Government Music examinations and the Trinity Rock & Pop equivalents where relevant. Grades are optional — around half our students never sit one, and their training is identical.",
  levels: [
    { level: "Preparatory", years: "Years 1 – 2", covers: "Sarali, janta, alankaram, basic tala", exam: "Internal assessment only" },
    { level: "Junior", years: "Years 3 – 4", covers: "Geetham, swarajathi, first varnam", exam: "TN Govt. Lower Grade" },
    { level: "Senior", years: "Years 5 – 7", covers: "Varnams, kritis in major ragas, basic manodharma", exam: "TN Govt. Higher Grade" },
    { level: "Advanced", years: "Years 8+", covers: "Ragam-tanam-pallavi, full concert repertoire", exam: "Diploma & arangetram preparation" },
  ],
};

export const gurus = [
  { name: "Guru Lakshmi Venkataraman", discipline: "Carnatic vocal · Principal", lineage: "Disciple of Sangita Kalanidhi T. Brinda", years: "42 years of teaching", detail: "Founded the academy in 1998 after two decades of concert performance. Still teaches four classes a week." },
  { name: "Guru Meenakshi Sundaram", discipline: "Bharatanatyam", lineage: "Pandanallur lineage, trained under Smt. Kausalya", years: "31 years", detail: "Has presented over 180 arangetrams. Choreographs the annual recital." },
  { name: "Vidwan S. Raghunathan", discipline: "Veena", lineage: "Karaikudi style", years: "26 years", detail: "Performs regularly during the December season and records for All India Radio." },
  { name: "Vidwan K. Sundaresan", discipline: "Mridangam", lineage: "Palghat Mani Iyer bani", years: "24 years", detail: "Accompanies senior students at their arangetrams at no additional fee." },
  { name: "Smt. Anuradha Iyer", discipline: "Violin", lineage: "Lalgudi bani", years: "18 years", detail: "Specialises in accompaniment technique and teaches the ensemble class." },
];

export const fees = [
  { discipline: "Carnatic vocal", quarterly: "₹9,600", sessions: "2 classes a week", note: "Includes notation books" },
  { discipline: "Veena", quarterly: "₹12,000", sessions: "2 classes a week", note: "Instrument loaned for 6 months" },
  { discipline: "Mridangam", quarterly: "₹11,400", sessions: "2 classes a week", note: "Practice pad provided" },
  { discipline: "Violin", quarterly: "₹11,400", sessions: "2 classes a week", note: "Instrument to be arranged" },
  { discipline: "Bharatanatyam", quarterly: "₹13,800", sessions: "3 classes a week", note: "Excludes costume and salangai" },
  { discipline: "Adult beginners", quarterly: "₹7,200", sessions: "1 class a week", note: "Any discipline" },
];

export const feeNotes = [
  "Fees are quarterly, payable in the first week of the quarter",
  "Sibling discount of 20% on the second and subsequent enrolments",
  "Four full scholarships each year, awarded on ability and need, with no public announcement",
  "No admission fee, no annual charge and no recital participation fee",
];

export const recital = {
  title: "Every student performs. Every single year.",
  body: "The annual recital in December is not an audition and not a showcase of the best. A six-year-old in her second year performs on the same stage as a student preparing for arangetram, because standing in front of an audience is part of the training, not a reward for it.",
  facts: [
    { label: "When", value: "Second week of December, during the Chennai season" },
    { label: "Where", value: "Narada Gana Sabha, Alwarpet" },
    { label: "Who performs", value: "Every enrolled student, from year one" },
    { label: "Cost to families", value: "Nothing. The academy funds the venue and accompaniment." },
  ],
};

export const outcomes: Testimonial[] = [
  {
    quote:
      "My daughter joined at six and could not hold a shruti. She sang a full varnam at the recital in her fourth year. Nobody ever made her feel slow in between.",
    author: "Revathi Krishnan",
    role: "Parent, Carnatic vocal",
  },
  {
    quote:
      "I started veena at forty-three in the adult class. Fourteen of us, all beginners, and not one condescending moment in three years.",
    author: "Arun Prakash",
    role: "Adult beginner, veena",
  },
  {
    quote:
      "The academy prepared me for my arangetram over two years and did not charge a rupee extra for the additional classes. That is not how most places work.",
    author: "Divya Subramanian",
    role: "Bharatanatyam, arangetram 2025",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "My child has no musical background. Is that a problem?",
    answer:
      "No, and it is how almost everyone starts. There is no audition to join. The trial class exists so the child and the guru can meet, not so the child can be assessed.",
  },
  {
    question: "How much daily practice is expected?",
    answer:
      "Fifteen to twenty minutes a day for beginners, rising to about an hour by the senior level. Consistency matters far more than duration, and we would rather have fifteen honest minutes daily than two hours on a Sunday.",
  },
  {
    question: "Do I have to sit for the graded examinations?",
    answer:
      "No. Roughly half our students never take one and their training is identical. Grades are useful if a student wants a documented record or is considering a music degree; otherwise they are optional.",
  },
  {
    question: "What does an arangetram cost?",
    answer:
      "The academy charges nothing for arangetram preparation beyond normal fees, and our accompanists play without an additional fee. The venue, costumes and hospitality are arranged by the family and typically run between ₹2 and ₹6 lakh depending on scale. We will happily advise on doing it modestly.",
  },
  {
    question: "Are online classes available?",
    answer:
      "For students who have already completed two years in person, and for students living abroad. We do not start beginners online — posture, breath and hand position need someone in the room.",
  },
];

export const trialDisciplines = disciplines.map((discipline) => discipline.name);
