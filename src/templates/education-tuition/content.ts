import type { FaqItem, NavLink, Testimonial } from "@/types/template";

/** All copy for the Tuition Centre template. */
export const centre = {
  name: "BrightMinds Tuition",
  tagline: "Classes 6 to 12 · CBSE, ICSE & State Board",
  founded: 2014,
  phone: "+91 33 4602 1188",
  whatsapp: "+91 98300 21188",
  email: "hello@brightminds.co.in",
  address: { line1: "3rd Floor, 42 Rashbehari Avenue", line2: "Near Deshapriya Park", city: "Kolkata 700029" },
  hours: "Mon–Sat, 14:00–20:30",
};

export const navLinks: NavLink[] = [
  { label: "Classes", href: "#classes" },
  { label: "Timetable", href: "#timetable" },
  { label: "How we teach", href: "#method" },
  { label: "Teachers", href: "#teachers" },
  { label: "Fees", href: "#fees" },
  { label: "Enrol", href: "#enrol" },
];

export const hero = {
  badge: "Free demo class · no registration fee",
  title: "Small batches, patient teachers, and homework that actually gets checked.",
  subtitle:
    "A neighbourhood tuition centre in Rashbehari for classes 6 to 12. Twelve students to a batch, a WhatsApp update to parents every fortnight, and no lecture about competitive exams your child has not asked for.",
  primaryCta: { label: "Book a free demo class", href: "#enrol" },
  secondaryCta: { label: "See the timetable", href: "#timetable" },
  markers: [
    { value: "12", label: "Students per batch" },
    { value: "11 yrs", label: "In the neighbourhood" },
    { value: "640+", label: "Students taught" },
    { value: "6 – 12", label: "Classes covered" },
  ],
};

export const classes = [
  {
    group: "Classes 6 – 8",
    subjects: ["Mathematics", "Science", "English"],
    batch: "12 students",
    sessions: "3 days a week · 90 minutes",
    note: "Foundation years. The focus is on getting the basics genuinely solid and building a habit of daily work.",
  },
  {
    group: "Classes 9 – 10",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
    batch: "12 students",
    sessions: "4 days a week · 2 hours",
    note: "Board preparation begins in class 9, not in February of class 10. Weekly tests from the second month.",
  },
  {
    group: "Class 11 – 12 (Science)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    batch: "10 students",
    sessions: "5 days a week · 2 hours",
    note: "Board syllabus taught properly, with JEE and NEET foundation available as an optional add-on batch.",
  },
  {
    group: "Class 11 – 12 (Commerce)",
    subjects: ["Accountancy", "Economics", "Business Studies"],
    batch: "10 students",
    sessions: "4 days a week · 2 hours",
    note: "Taught by a practising chartered accountant on Saturdays, with real ledger examples rather than textbook ones.",
  },
];

export const timetable = [
  { slot: "14:00 – 15:30", mon: "Class 6–8 Maths", tue: "Class 6–8 Science", wed: "Class 6–8 Maths", thu: "Class 6–8 Science", fri: "Class 6–8 English", sat: "Doubt clearing" },
  { slot: "15:45 – 17:45", mon: "Class 9 PCM", tue: "Class 9 Bio + Eng", wed: "Class 9 PCM", thu: "Class 10 PCM", fri: "Class 10 Bio + Eng", sat: "Weekly test" },
  { slot: "18:00 – 20:00", mon: "Class 11 PCM", tue: "Class 12 PCM", wed: "Class 11 PCB", thu: "Class 12 PCB", fri: "Class 11–12 Commerce", sat: "Parent meetings" },
];

export const method = [
  { title: "Twelve to a batch", body: "Small enough that a teacher notices when a student has stopped following. That is the whole reason the batch size is capped." },
  { title: "Homework is checked", body: "Every assignment is marked and returned with corrections. Unmarked homework teaches a child that nobody is looking." },
  { title: "Fortnightly parent updates", body: "A short WhatsApp message with attendance, test marks and one honest line about how things are going. Good or bad." },
  { title: "Doubt hours, not doubt minutes", body: "Saturday afternoons are kept free for doubts. Students can come in even if their batch does not meet that day." },
  { title: "No shaming", body: "Marks are never read out in class or compared between students. Ever. Children learn less when they are embarrassed." },
  { title: "Board first", body: "The board syllabus is finished with two months to spare. Competitive prep is optional and never at the cost of boards." },
];

export const teachers = [
  { name: "Sujata Banerjee", subject: "Mathematics, Classes 9–12", experience: "16 years", detail: "M.Sc. Mathematics, Calcutta University. Founded the centre in 2014." },
  { name: "Arindam Ghosh", subject: "Physics & Chemistry", experience: "12 years", detail: "M.Sc. Physics. Formerly taught at a CBSE school in Salt Lake." },
  { name: "Riya Sengupta", subject: "Biology & Science", experience: "9 years", detail: "M.Sc. Zoology, B.Ed. Handles classes 6 to 12 biology." },
  { name: "Debjani Roy", subject: "English", experience: "14 years", detail: "M.A. English. Focuses on comprehension and writing rather than rote answers." },
  { name: "CA Nirmal Saha", subject: "Accountancy & Business Studies", experience: "8 years", detail: "Practising chartered accountant. Teaches commerce batches on Saturdays." },
];

export const fees = [
  { group: "Classes 6 – 8", monthly: "₹2,400", subjects: "All three subjects", note: "Includes worksheets and tests" },
  { group: "Classes 9 – 10", monthly: "₹3,600", subjects: "Up to five subjects", note: "Includes board test series" },
  { group: "Class 11 – 12 Science", monthly: "₹4,800", subjects: "Three or four subjects", note: "Single subject at ₹1,800" },
  { group: "Class 11 – 12 Commerce", monthly: "₹4,200", subjects: "Three subjects", note: "Single subject at ₹1,700" },
];

export const feeNotes = [
  "No admission fee and no annual charges — the monthly figure is the whole cost",
  "Fees payable by the 10th; a week of grace, no late fee",
  "Sibling discount of 15% on the second enrolment",
  "One month of free tuition each year for two students on need, quietly arranged",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter went from 54 to 81 in maths across one year. What actually changed was that she stopped being scared of asking questions in class.",
    author: "Moushumi Das",
    role: "Parent, Class 10",
  },
  {
    quote:
      "The fortnightly message is the best thing about this place. I always know where he stands, and they tell me when he has been slacking.",
    author: "Prasenjit Roy",
    role: "Parent, Class 8",
  },
  {
    quote:
      "They never once pushed me towards engineering coaching. When I said I wanted to study economics, Sujata di helped me plan for it.",
    author: "Ankita S.",
    role: "Former student, now at Presidency",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Can my child attend a class before we decide?",
    answer:
      "Yes. One full demo class in the relevant batch, free, with no registration or form. Come on any weekday between 14:00 and 20:00 — a phone call the day before helps us keep a seat.",
  },
  {
    question: "What if my child joins mid-session?",
    answer:
      "Mid-session joiners get two extra catch-up sessions at no cost, scheduled on Saturdays, to cover what the batch has already done. Fees start from the month of joining.",
  },
  {
    question: "Do you teach only the board syllabus?",
    answer:
      "The core batches follow the board syllabus completely. JEE and NEET foundation is a separate optional batch for classes 11 and 12, and no student is pushed into it.",
  },
  {
    question: "How do you handle a student who is falling behind?",
    answer:
      "We tell you within a fortnight, in the parent update, rather than at the end of the year. Then we schedule extra Saturday sessions at no additional charge. If it is not working after two months, we say so honestly.",
  },
  {
    question: "Is there online or hybrid tuition?",
    answer:
      "Classes are in person. Recordings of the week are shared for students who miss a session through illness, but the centre does not run a parallel online batch — the small-batch attention does not survive it.",
  },
];

export const enrolClasses = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11 (Science)",
  "Class 11 (Commerce)",
  "Class 12 (Science)",
  "Class 12 (Commerce)",
];
