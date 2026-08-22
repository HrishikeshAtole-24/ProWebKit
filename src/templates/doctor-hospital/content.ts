import {
  Activity,
  Baby,
  Bone,
  Brain,
  Eye,
  HeartPulse,
  Scissors,
  Stethoscope,
} from "lucide-react";
import type { NavLink, StatItem } from "@/types/template";

/** All copy for the Multi-speciality Hospital template. */
export const hospital = {
  name: "Sanjeevani Hospital",
  descriptor: "Multi-speciality · 240 beds",
  accreditation: "NABH accredited · NABL accredited laboratory",
  emergency: "1800 209 4455",
  ambulance: "104",
  reception: "+91 20 6712 0000",
  email: "care@sanjeevanihospital.in",
  address: { line1: "Survey No. 118, Baner Road", line2: "Baner", city: "Pune 411045" },
};

export const navLinks: NavLink[] = [
  { label: "Specialities", href: "#specialities" },
  { label: "Find a doctor", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Health checks", href: "#packages" },
  { label: "Insurance", href: "#insurance" },
  { label: "Patients", href: "#patients" },
];

export const hero = {
  title: "Tertiary care, twenty minutes from Baner Chowk.",
  subtitle:
    "Twenty-two specialities, a 24-hour emergency department and critical care across 48 ICU beds — with consultants who are resident, not visiting.",
  quickActions: [
    { label: "Book an appointment", href: "#appointment", tone: "accent" as const },
    { label: "Find a consultant", href: "#doctors", tone: "outline" as const },
  ],
};

export const stats: StatItem[] = [
  { value: "240", label: "Beds" },
  { value: "48", label: "Critical care beds" },
  { value: "22", label: "Specialities" },
  { value: "24×7", label: "Emergency & trauma" },
];

export const specialities = [
  { icon: HeartPulse, name: "Cardiac Sciences", detail: "Cath lab, angioplasty, CABG, electrophysiology", consultants: 9 },
  { icon: Brain, name: "Neurosciences", detail: "Stroke unit, neurosurgery, epilepsy care", consultants: 7 },
  { icon: Bone, name: "Orthopaedics", detail: "Joint replacement, arthroscopy, spine surgery", consultants: 8 },
  { icon: Scissors, name: "General & GI Surgery", detail: "Laparoscopic, bariatric and hepatobiliary surgery", consultants: 6 },
  { icon: Baby, name: "Mother & Child", detail: "Obstetrics, high-risk pregnancy, NICU level III", consultants: 11 },
  { icon: Activity, name: "Nephrology", detail: "Dialysis unit, renal transplant, critical nephrology", consultants: 5 },
  { icon: Eye, name: "Ophthalmology", detail: "Cataract, retina, glaucoma and corneal services", consultants: 4 },
  { icon: Stethoscope, name: "Internal Medicine", detail: "Diabetes, infectious disease, preventive health", consultants: 12 },
];

export const doctors = [
  { name: "Dr. Sunil Rajadhyaksha", speciality: "Cardiology", qualification: "MD, DM (Cardiology)", experience: "22 years", opd: "Mon, Wed, Fri · 10:00–14:00" },
  { name: "Dr. Anita Fernandes", speciality: "Obstetrics & Gynaecology", qualification: "MS (OBG), FRCOG", experience: "18 years", opd: "Tue, Thu, Sat · 09:00–13:00" },
  { name: "Dr. Prakash Joshi", speciality: "Neurosurgery", qualification: "MCh (Neurosurgery)", experience: "16 years", opd: "Mon, Thu · 15:00–19:00" },
  { name: "Dr. Reshma Kulkarni", speciality: "Paediatrics & Neonatology", qualification: "MD, DNB (Neonatology)", experience: "14 years", opd: "Daily · 11:00–15:00" },
  { name: "Dr. Vivek Shirodkar", speciality: "Orthopaedics", qualification: "MS (Ortho), Fellowship in Arthroplasty", experience: "19 years", opd: "Tue, Fri · 10:00–14:00" },
  { name: "Dr. Neha Bhagat", speciality: "Nephrology", qualification: "MD, DM (Nephrology)", experience: "11 years", opd: "Mon–Sat · 09:00–12:00" },
];

export const facilities = [
  { name: "Emergency & trauma", detail: "24×7 with a resident emergency physician and dedicated trauma bay" },
  { name: "Critical care", detail: "48 beds across MICU, SICU, CCU and level III NICU" },
  { name: "Operation theatres", detail: "8 modular theatres with laminar airflow" },
  { name: "Cardiac cath lab", detail: "Flat-panel lab with round-the-clock primary angioplasty" },
  { name: "Imaging", detail: "3T MRI, 128-slice CT, digital mammography and ultrasound" },
  { name: "Laboratory", detail: "NABL accredited, 24-hour reporting for routine investigations" },
  { name: "Dialysis unit", detail: "18 stations including isolation for seropositive patients" },
  { name: "Blood bank", detail: "Licensed in-house blood bank with component separation" },
];

export const packages = [
  {
    name: "Essential Health Check",
    price: "₹2,400",
    for: "Adults 25–40, first screening",
    includes: ["Complete blood count", "Blood sugar & HbA1c", "Lipid profile", "Liver & kidney panel", "Urine routine", "Physician consultation"],
    featured: false,
  },
  {
    name: "Comprehensive Check",
    price: "₹6,900",
    for: "Adults 40+, annual screening",
    includes: ["Everything in Essential", "ECG & 2D Echo", "Treadmill test", "Chest X-ray & USG abdomen", "Thyroid profile", "Vitamin D & B12", "Physician & dietitian consult"],
    featured: true,
  },
  {
    name: "Cardiac Risk Check",
    price: "₹9,500",
    for: "Family history or existing risk factors",
    includes: ["Everything in Comprehensive", "Coronary calcium score", "Carotid doppler", "Advanced lipid markers", "Cardiology consultation", "Written risk report"],
    featured: false,
  },
];

export const insurers = [
  "Star Health",
  "HDFC ERGO",
  "ICICI Lombard",
  "Niva Bupa",
  "New India Assurance",
  "Bajaj Allianz",
  "CGHS",
  "ECHS",
  "Mediassist",
  "Paramount TPA",
  "Vidal Health",
  "MDIndia",
];

export const patientInfo = [
  {
    title: "Visiting hours",
    body: "General wards 11:00–12:00 and 17:00–19:00. Critical care units allow one attendant for fifteen minutes at 11:00 and 18:00.",
  },
  {
    title: "Admission",
    body: "Carry photo identification, the referring prescription, insurance card and previous reports. Planned admissions are processed at counter 3 on the ground floor.",
  },
  {
    title: "Billing & estimates",
    body: "A written estimate is provided before any planned procedure. Interim bills are issued every 48 hours for inpatients so nothing is a surprise at discharge.",
  },
  {
    title: "Medical records",
    body: "Discharge summaries and reports can be collected from medical records between 10:00 and 17:00, or emailed on written request.",
  },
];

export const appointmentDepartments = specialities.map((speciality) => speciality.name);
