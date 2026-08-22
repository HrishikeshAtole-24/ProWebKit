import {
  Activity,
  Baby,
  Bone,
  Brain,
  HeartPulse,
  Microscope,
  Stethoscope,
  Syringe,
} from "lucide-react";
import type { FaqItem, NavLink, ServiceItem, StatItem, Testimonial } from "@/types/template";

/**
 * All copy for the Clinic template lives here.
 * Replace these values to rebrand the template — no JSX edits required.
 */
export const clinic = {
  name: "Aarogya Clinic",
  doctor: "Dr. Ananya Rao",
  qualifications: "MBBS, MD (Internal Medicine), DNB (Cardiology)",
  registration: "Reg. No. KMC 62184",
  designation: "Consultant Physician & Cardiologist",
  experience: 14,
  phone: "+91 80 4712 3300",
  whatsapp: "+91 98450 11220",
  email: "appointments@aarogyaclinic.in",
  address: {
    line1: "No. 42, 3rd Cross, Sadashivanagar",
    line2: "Opposite Sankey Tank",
    city: "Bengaluru 560080",
  },
  emergencyNote: "For a medical emergency call 108 or go to the nearest emergency department.",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Specialisations", href: "#specialisations" },
  { label: "Treatments", href: "#treatments" },
  { label: "Timings", href: "#timings" },
  { label: "Patient stories", href: "#stories" },
  { label: "Contact", href: "#appointment" },
];

export const hero = {
  eyebrow: `${clinic.experience} years in practice · ${clinic.registration}`,
  title: "Unhurried consultations, in plain language.",
  subtitle:
    "General medicine and preventive cardiology in Sadashivanagar. Twenty-minute appointments, same-day reports, and a doctor who explains the why — not just the prescription.",
  points: [
    "Same-day appointments before 11 AM",
    "In-house ECG, ECHO and blood collection",
    "Digital prescriptions and reports on WhatsApp",
  ],
};

export const stats: StatItem[] = [
  { value: `${clinic.experience}+`, label: "Years of practice" },
  { value: "11,000+", label: "Consultations" },
  { value: "20 min", label: "Average appointment" },
  { value: "4.9 / 5", label: "Patient rating" },
];

export const specialisations: ServiceItem[] = [
  {
    icon: HeartPulse,
    title: "Preventive cardiology",
    description:
      "Risk assessment, blood pressure and lipid management, and follow-up for patients with a family history of heart disease.",
  },
  {
    icon: Activity,
    title: "Diabetes & thyroid care",
    description:
      "Long-term management of type 2 diabetes, insulin resistance and thyroid disorders with quarterly reviews.",
  },
  {
    icon: Stethoscope,
    title: "General medicine",
    description:
      "Fever, infection, fatigue and the undiagnosed complaint that three other clinics could not place.",
  },
  {
    icon: Brain,
    title: "Lifestyle & sleep",
    description:
      "Stress-linked hypertension, insomnia and burnout, addressed clinically rather than dismissed.",
  },
  {
    icon: Bone,
    title: "Bone & joint health",
    description:
      "Vitamin D and calcium disorders, osteoporosis screening, and referral pathways for orthopaedic care.",
  },
  {
    icon: Baby,
    title: "Adolescent & young adult",
    description:
      "PCOS, anaemia and early metabolic screening for patients between 14 and 25.",
  },
];

export const treatments = [
  {
    icon: Microscope,
    title: "Diagnostics on site",
    items: ["12-lead ECG", "2D Echocardiography", "Treadmill test (TMT)", "Blood collection, 7 AM onwards"],
  },
  {
    icon: Syringe,
    title: "Procedures & immunisation",
    items: ["Adult vaccination", "Influenza & pneumococcal", "IV hydration & injectables", "Minor wound care"],
  },
  {
    icon: Activity,
    title: "Programmes",
    items: ["12-week diabetes reversal", "Post-cardiac-event follow-up", "Annual executive health check", "Weight & metabolic coaching"],
  },
];

export const about = {
  title: `Meet ${clinic.doctor}`,
  paragraphs: [
    "Dr. Rao trained in internal medicine at St. Johns Medical College and completed a DNB in cardiology at Narayana Health, followed by four years in the coronary care unit before starting private practice.",
    "The clinic runs on one rule: no appointment is shorter than twenty minutes. Most diagnostic errors come from rushing the history, and most non-adherence comes from a patient not understanding the plan.",
    "Consultations are available in English, Kannada and Hindi.",
  ],
  credentials: [
    { label: "MBBS", detail: "St. Johns Medical College, Bengaluru" },
    { label: "MD — Internal Medicine", detail: "Kasturba Medical College, Manipal" },
    { label: "DNB — Cardiology", detail: "Narayana Institute of Cardiac Sciences" },
    { label: "Fellowship", detail: "Preventive Cardiology, ACC (2019)" },
  ],
  memberships: ["Indian Medical Association", "Cardiological Society of India", "RSSDI"],
};

export const timings = [
  { day: "Monday – Friday", morning: "09:00 – 13:00", evening: "17:00 – 20:00" },
  { day: "Saturday", morning: "09:00 – 14:00", evening: "Closed" },
  { day: "Sunday", morning: "By appointment", evening: "Closed" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My father had been told his blood pressure was fine at three clinics. Dr. Rao asked for a home log, spotted a pattern in a week, and adjusted the medication. He has not had a dizzy spell since.",
    author: "Sneha K.",
    role: "Patient since 2021",
  },
  {
    quote:
      "She drew my heart on a sheet of paper and explained exactly what the report meant. First time in ten years anybody has done that.",
    author: "Ravi Prasad",
    role: "Preventive cardiology",
  },
  {
    quote:
      "The 12-week diabetes programme was hard work but my HbA1c went from 8.4 to 6.1. Nobody sold me a supplement.",
    author: "Farida Sheikh",
    role: "Diabetes care",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Appointments are strongly preferred and can be booked by phone, WhatsApp or the form below. A limited number of walk-in slots are held each morning for acute complaints; expect to wait.",
  },
  {
    question: "What should I bring to a first consultation?",
    answer:
      "Any previous prescriptions, reports from the last two years, a list of medicines you currently take including supplements, and if relevant, a two-week home blood pressure or sugar log.",
  },
  {
    question: "Do you accept insurance or corporate panels?",
    answer:
      "Consultations are settled directly and a GST invoice is issued for reimbursement. The clinic is empanelled with several corporate health plans — call ahead to confirm yours.",
  },
  {
    question: "Can I get a follow-up by video?",
    answer:
      "Yes, for existing patients with a stable diagnosis. Video follow-ups are 15 minutes and are not appropriate for new complaints, chest pain or breathlessness.",
  },
  {
    question: "How long do reports take?",
    answer:
      "ECG and echocardiography results are discussed in the same visit. Blood work collected before 9 AM is usually reported the same evening on WhatsApp.",
  },
];

export const appointmentReasons = [
  "New consultation",
  "Follow-up visit",
  "Preventive health check",
  "Diabetes or thyroid review",
  "Cardiac evaluation",
  "Report interpretation",
];
