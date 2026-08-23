import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Competitive Coaching template. */
export const institute = {
  name: "Apex Academy",
  tagline: "JEE & NEET coaching since 2009",
  phone: "+91 141 400 2200",
  admissions: "+91 90010 22001",
  email: "admissions@apexacademy.in",
  address: { line1: "Apex Tower, Gopalpura Bypass", line2: "", city: "Jaipur 302018" },
};

export const navLinks: NavLink[] = [
  { label: "Results", href: "#results" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Test series", href: "#tests" },
  { label: "Fees", href: "#fees" },
  { label: "Admissions", href: "#admission" },
];

export const hero = {
  badge: "2026 batch admissions open · Scholarship test on 14 September",
  title: "412 selections last year. Batch sizes still capped at 45.",
  subtitle:
    "A classroom coaching institute in Jaipur for JEE Main, JEE Advanced and NEET. Same faculty in every batch, no separate premium sections, and every result published with roll numbers.",
  primaryCta: { label: "Apply for admission", href: "#admission" },
  secondaryCta: { label: "See 2025 results", href: "#results" },
};

export const stats: StatItem[] = [
  { value: "412", label: "Selections in 2025" },
  { value: "45", label: "Maximum batch size" },
  { value: "16 yrs", label: "Since 2009" },
  { value: "38", label: "Faculty members" },
];

export const results = {
  headline: "2025 results, published in full",
  note: "Roll numbers for every selection listed below are available on the notice board and on request. We do not publish results of students who took a single test series with us.",
  toppers: [
    { name: "Aarav Sharma", rank: "AIR 41", exam: "JEE Advanced 2025", batch: "Two-year classroom" },
    { name: "Ishita Agarwal", rank: "AIR 88", exam: "NEET UG 2025", batch: "Two-year classroom" },
    { name: "Kabir Jain", rank: "AIR 214", exam: "JEE Advanced 2025", batch: "One-year classroom" },
    { name: "Meera Rathore", rank: "AIR 306", exam: "NEET UG 2025", batch: "Repeater batch" },
  ],
  breakdown: [
    { exam: "JEE Advanced", qualified: 148, total: 262, top1000: 9 },
    { exam: "JEE Main (95+ percentile)", qualified: 231, total: 262, top1000: 34 },
    { exam: "NEET UG (government college)", qualified: 181, total: 344, top1000: 12 },
  ],
};

export const courses = [
  {
    name: "Foundation",
    classes: "Classes 9 & 10",
    duration: "2 years",
    schedule: "3 days a week · after school",
    seats: "45 per batch",
    focus: "Concept building in physics, chemistry, maths and biology alongside the school syllabus, with NTSE and olympiad preparation.",
    featured: false,
  },
  {
    name: "Two-year classroom",
    classes: "Classes 11 & 12",
    duration: "2 years",
    schedule: "5 days a week · 4 hours daily",
    seats: "45 per batch",
    focus: "The core programme. Full syllabus coverage twice, weekly tests from month two, and board preparation integrated rather than bolted on.",
    featured: true,
  },
  {
    name: "One-year intensive",
    classes: "Class 12",
    duration: "1 year",
    schedule: "6 days a week · 5 hours daily",
    seats: "40 per batch",
    focus: "For students joining after class 11. Accelerated coverage with a compulsory diagnostic test before admission.",
    featured: false,
  },
  {
    name: "Repeater batch",
    classes: "Class 12 passed",
    duration: "1 year",
    schedule: "6 days a week · full day",
    seats: "40 per batch",
    focus: "A second attempt handled properly: gap analysis from the previous attempt, full-day structure, and counselling built into the schedule.",
    featured: false,
  },
];

export const faculty = [
  { name: "Dr. R. K. Sharma", subject: "Physics", experience: "22 years", detail: "Ph.D., former IIT Kanpur research associate. Heads the physics department." },
  { name: "Prof. Anjali Bhatt", subject: "Organic Chemistry", experience: "18 years", detail: "M.Sc. Chemistry. Has taught over 9,000 students since 2007." },
  { name: "Sandeep Verma", subject: "Mathematics", experience: "16 years", detail: "B.Tech, IIT Roorkee. Specialises in calculus and coordinate geometry." },
  { name: "Dr. Nisha Meena", subject: "Biology", experience: "14 years", detail: "MBBS. Leads NEET biology and the medical counselling programme." },
  { name: "Amit Khandelwal", subject: "Physical Chemistry", experience: "12 years", detail: "M.Sc., IIT Delhi. Handles numerical-heavy topics across both streams." },
  { name: "Pooja Saini", subject: "Inorganic Chemistry", experience: "11 years", detail: "M.Sc. Designs the revision and memory framework used across batches." },
];

export const tests = {
  title: "Testing is the programme, not an add-on",
  body: "A student who has written forty full-length papers under exam conditions does not panic in the hall. That is most of what separates a selection from a near miss.",
  features: [
    { title: "Weekly unit tests", detail: "Every Sunday from month two, on the OMR sheet and the timing pattern of the actual exam." },
    { title: "Full-length mocks", detail: "Twenty-four full syllabus papers in the final year, with all-India percentile ranking." },
    { title: "Performance analytics", detail: "Chapter-level accuracy and time-per-question reports issued to student and parent after each test." },
    { title: "Doubt sessions", detail: "Daily 90-minute doubt counter staffed by subject faculty, not by senior students." },
    { title: "Parent-teacher meetings", detail: "Every six weeks, with the actual test data on the table." },
    { title: "Counselling support", detail: "JoSAA and NEET counselling guidance for every selected student, at no extra fee." },
  ],
};

export const fees = [
  { course: "Foundation (Class 9 / 10)", fee: "₹58,000 per year", note: "Includes study material and test series" },
  { course: "Two-year classroom (11 & 12)", fee: "₹1,64,000 total", note: "Payable in four instalments" },
  { course: "One-year intensive (Class 12)", fee: "₹1,08,000", note: "Payable in three instalments" },
  { course: "Repeater batch", fee: "₹1,24,000", note: "Includes hostel guidance, not hostel fees" },
  { course: "Test series only", fee: "₹14,000", note: "24 full-length papers with analytics" },
];

export const scholarships = [
  "Up to 100% fee waiver through the Apex Scholarship Test, held twice a year",
  "25% waiver for students scoring above 90% in class 10 boards",
  "Full waiver for one student per batch under the merit-cum-means scheme",
  "Sibling discount of 15% on the second admission",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We chose Apex because they let us sit in a class before paying. Two years later, my son is at IIT Bombay. The batch never grew beyond 45 students, exactly as promised.",
    author: "Rajesh Agarwal",
    role: "Parent, JEE Advanced 2025",
  },
  {
    quote:
      "After failing NEET once, the repeater batch was the first place that analysed what actually went wrong instead of telling me to work harder.",
    author: "Meera Rathore",
    role: "AIR 306, NEET UG 2025",
  },
  {
    quote:
      "The six-weekly parent meetings had real data. No vague reassurance, no excuses when things dipped in class 11.",
    author: "Sunita Jain",
    role: "Parent, two-year classroom",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Are the results independently verifiable?",
    answer:
      "Yes. Roll numbers and admission dates for every selection are available on the notice board and on request. We only count students who completed a full classroom programme with us — not test-series-only students, and not students who attended for a few weeks.",
  },
  {
    question: "Is there a separate batch for top students?",
    answer:
      "No. Every batch gets the same faculty and the same schedule. Segregating a premium section is how most institutes protect their result percentage, and we do not do it.",
  },
  {
    question: "Can we attend a class before deciding?",
    answer:
      "Yes. Prospective students can attend two full classes free of charge in any running batch. Ask at the admissions desk — no appointment needed.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Full refund less ₹5,000 administrative charge within 15 days of admission. Between 15 and 45 days, a proportionate refund. After 45 days, no refund. This is printed on the admission form, not buried in a policy document.",
  },
  {
    question: "Do you provide hostel accommodation?",
    answer:
      "The academy does not run a hostel. We maintain a list of vetted hostels and PGs within two kilometres, with the rates, and we do not take a commission from any of them.",
  },
];

export const admissionCourses = courses.map((course) => `${course.name} (${course.classes})`);
