import type { FaqItem, NavLink, StatItem, Testimonial } from "@/types/template";

/** All copy for the Strength Studio template. */
export const studio = {
  name: "Anvil Strength",
  descriptor: "Small-group strength studio",
  founder: "Neha Rajput",
  since: 2019,
  phone: "+91 80 4996 2200",
  whatsapp: "+91 99450 62200",
  email: "frontdesk@anvilstrength.in",
  address: {
    line1: "No. 7, 5th Cross, Indiranagar",
    line2: "Opposite Defence Colony Park",
    city: "Bengaluru 560038",
  },
  hours: "Mon–Sat 06:00–21:00 · Sunday 07:00–12:00",
  capacity: "Eight members per class, never more",
};

export const navLinks: NavLink[] = [
  { label: "Programs", href: "#programs" },
  { label: "Timetable", href: "#timetable" },
  { label: "About", href: "#about" },
  { label: "Coaches", href: "#coaches" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Visit", href: "#location" },
];

export const hero = {
  eyebrow: `Indiranagar · since ${studio.since}`,
  title: "A strength gym that coaches, not a gym with coaches on the floor.",
  subtitle:
    "Small-group barbell training in Indiranagar, capped at eight people per class so every rep is actually watched. Free trial session, no joining fee, and no annual lock-in contract.",
  whatsappMessage: "Hi, I would like to book a free trial session at Anvil Strength.",
  points: [
    "First session free, no card required",
    "Eight members per class, always coached",
    "Monthly memberships — cancel any time",
  ],
};

export const stats: StatItem[] = [
  { value: "7 yrs", label: "In Indiranagar" },
  { value: "8", label: "Max per class" },
  { value: "6", label: "Certified coaches" },
  { value: "420+", label: "Active members" },
];

/* ── Training Programs ─────────────────────────────────────────────── */
export const programs = [
  {
    name: "Personal Training",
    format: "1:1",
    price: "₹14,000 / month",
    detail: "Three private sessions a week with an assigned coach and a programme written only for you.",
    includes: ["3 private sessions weekly", "Movement screen & quarterly re-test", "Nutrition targets included", "Open-gym access included"],
    featured: false,
  },
  {
    name: "Small Group Strength",
    format: "Max 8",
    price: "₹6,500 / month",
    detail: "The core class. Barbell strength work on a periodised block, coached the whole way through.",
    includes: ["Unlimited group classes", "Coached squat, press, deadlift", "Progress tracked in the app", "Open-gym access included"],
    featured: true,
  },
  {
    name: "Online Training",
    format: "Remote",
    price: "₹5,500 / month",
    detail: "Programming for members who travel or relocate, written by the coach who already knows how you lift.",
    includes: ["Weekly programme in the app", "Video form review", "Monthly video call", "Pause membership instead of losing it"],
    featured: false,
  },
  {
    name: "Weight Loss",
    format: "12-week block",
    price: "₹16,000 / block",
    detail: "Strength plus conditioning on a structured deficit, with fortnightly measurements and a nutrition review.",
    includes: ["Unlimited classes", "Fortnightly measurements", "Nutrition consult included", "Conditioning sessions programmed"],
    featured: false,
  },
  {
    name: "Muscle Building",
    format: "16-week block",
    price: "₹8,500 / month",
    detail: "Hypertrophy-focused programming with load tracking, for members who have outgrown general classes.",
    includes: ["Periodised hypertrophy blocks", "Volume & load tracking", "Programmed deloads", "Surplus nutrition plan"],
    featured: false,
  },
  {
    name: "Female Fitness",
    format: "Women-only slots",
    price: "₹6,500 / month",
    detail: "Women-only classes at 07:00 and 18:00, plus cycle-aware and pre/post-natal programming with a certified coach.",
    includes: ["Women-only class slots", "Cycle-aware programming", "Pre & post-natal blocks", "Pelvic floor and core work"],
    featured: false,
  },
  {
    name: "Special Populations",
    format: "By assessment",
    price: "₹15,000 / month",
    detail: "Coaching for members managing diabetes, hypertension, osteoporosis or a joint replacement, with doctor coordination.",
    includes: ["Physician clearance required", "1:1 or 1:2 only", "Load capped to protocol", "Quarterly reports to your doctor"],
    featured: false,
  },
];

/* ── Weekly timetable ──────────────────────────────────────────────── */
export const timetable = [
  { slot: "06:00", mon: "Strength A", tue: "Conditioning", wed: "Strength B", thu: "Conditioning", fri: "Strength C", sat: "Open gym" },
  { slot: "07:00", mon: "Women only", tue: "Strength A", wed: "Women only", thu: "Strength B", fri: "Women only", sat: "Strength A" },
  { slot: "09:00", mon: "Open gym", tue: "Open gym", wed: "Open gym", thu: "Open gym", fri: "Open gym", sat: "Beginners" },
  { slot: "18:00", mon: "Women only", tue: "Strength B", wed: "Women only", thu: "Strength C", fri: "Women only", sat: "—" },
  { slot: "19:30", mon: "Strength C", tue: "Beginners", wed: "Strength A", thu: "Beginners", fri: "Conditioning", sat: "—" },
];

/* ── About ─────────────────────────────────────────────────────────── */
export const about = {
  title: "Built because the alternative was not working",
  paragraphs: [
    "Neha Rajput coached at two large commercial gyms in Bengaluru for eight years. The pattern was always the same: a member signs an annual contract in January, trains unsupervised on machines, sees nothing by March and never comes back.",
    "Anvil opened in 2019 with three rules that have not changed — eight people to a class so every rep is watched, monthly memberships so we have to earn the next month, and a coach on the floor during open gym.",
    "Seven years later it is 420 members and six coaches. We have turned down two offers to open a second location, because the thing that works here does not obviously survive being doubled.",
  ],
  timeline: [
    { year: "2011 – 2019", detail: "Neha coaches at commercial gyms across Bengaluru" },
    { year: "2019", detail: "Anvil opens on 5th Cross with one rack and eleven members" },
    { year: "2022", detail: "Women-only slots and the pre/post-natal programme added" },
    { year: "2024", detail: "Physiotherapist joins; the special populations track opens" },
  ],
};

/* ── Coaches & certifications ──────────────────────────────────────── */
export const coaches = [
  {
    name: "Neha Rajput",
    role: "Founder & Head Coach",
    focus: "Strength & female fitness",
    experience: "12 years",
    certifications: ["NSCA CSCS", "GGS Pre & Post-Natal", "Precision Nutrition L1"],
    bio: "Opened Anvil in 2019 after eight years coaching at commercial gyms. Leads the women-only classes and the pre/post-natal programme.",
  },
  {
    name: "Imran Shaikh",
    role: "Senior Coach",
    focus: "Powerlifting & hypertrophy",
    experience: "9 years",
    certifications: ["NASM CPT", "IPF Level 1 Coach", "ISSN Sports Nutrition"],
    bio: "Competes in the 83 kg class. Runs the strength blocks and programmes for members chasing a specific lift.",
  },
  {
    name: "Dr. Shruti Menon",
    role: "Coach & Consultant Physiotherapist",
    focus: "Special populations & rehab return",
    experience: "8 years",
    certifications: ["MPT (Sports)", "ACSM Exercise is Medicine", "First Aid & CPR"],
    bio: "Handles every special-population assessment and coordinates with members treating doctors.",
  },
  {
    name: "Arjun Balan",
    role: "Coach",
    focus: "Conditioning & beginners",
    experience: "5 years",
    certifications: ["ACE CPT", "Kettlebell L2", "First Aid & CPR"],
    bio: "Takes the beginners class, which is where roughly two-thirds of our members start.",
  },
];

/* ── Nutrition & Diet ──────────────────────────────────────────────── */
export const nutrition = {
  title: "Nutrition support, included with membership",
  body: "Every member gets a nutrition consult at sign-up and a review each quarter. It is part of the membership, not a separate package sold to you at the counter.",
  offering: [
    { title: "Sign-up consult", body: "Forty-five minutes with a certified coach to set calorie and protein targets around how you already eat." },
    { title: "Quarterly review", body: "Targets reassessed against measurements and training performance every three months." },
    { title: "Bengaluru-specific", body: "Built for the way people here actually eat — tiffin, canteen lunches, and eating out several nights a week." },
    { title: "Referral when needed", body: "Anything needing a therapeutic diet goes to a registered dietitian we work with. We do not improvise on clinical nutrition." },
  ],
  note: "Our coaches hold sports nutrition certifications. They are not registered dietitians, and the studio does not sell supplements.",
};

/* ── Research & Knowledge ──────────────────────────────────────────── */
export const research = {
  title: "How we decide what to programme",
  body: "The studio runs on a written training philosophy rather than whatever is trending. Members can read it in full at the front desk.",
  principles: [
    { title: "Progressive overload above all", body: "Load, reps or quality has to move over a block. If nothing measurable is improving, the programme changes." },
    { title: "Compound lifts first", body: "Squat, hinge, press and pull carry the session. Isolation work supports them; it does not replace them." },
    { title: "Intensity is programmed, not improvised", body: "We use RPE and percentage targets. Grinding every session to failure is how people get hurt and stall." },
    { title: "Recovery is part of the plan", body: "Deloads are scheduled every fourth to sixth week. Sleep and step count are tracked in the check-in." },
    { title: "Technique gates load", body: "Nobody adds weight to a pattern they cannot own. Coaches hold members back more often than they push them." },
    { title: "We update when evidence does", body: "The philosophy document is revised annually, and what changed is posted on the board." },
  ],
};

/* ── Member testimonials ───────────────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I joined three big-chain gyms before this and quit all three within two months. Two years at Anvil because someone actually knows my name and my programme.",
    author: "Divya N.",
    role: "Member since 2024",
  },
  {
    quote:
      "Squat went from an empty bar to 85 kg in fourteen months, at 46. The coaching is the entire difference.",
    author: "Ganesh R.",
    role: "Small group strength",
  },
  {
    quote:
      "Trained here through my second pregnancy and came back after. Neha coordinated with my obstetrician without me having to chase either of them.",
    author: "Ayesha K.",
    role: "Pre & post-natal",
  },
];

/* ── Location & facilities ─────────────────────────────────────────── */
export const facilities = [
  "6 competition barbells & calibrated plates",
  "4 power racks with safeties",
  "Dumbbells to 50 kg",
  "Trap bar, safety squat bar, specialty bars",
  "Assault bikes & rowers",
  "Turf strip for sled work",
  "Changing rooms with showers",
  "Two-wheeler and car parking",
];

export const faqs: FaqItem[] = [
  {
    question: "Is there a joining fee or annual contract?",
    answer:
      "Neither. Memberships are monthly, there is no joining fee, and you can cancel with two weeks notice. The annual lock-in model exists to profit from people who stop coming, and we would rather you kept coming.",
  },
  {
    question: "I have never touched a barbell. Where do I start?",
    answer:
      "The beginners class, which runs four times a week. Two-thirds of our members started there. You will spend the first two weeks on movement patterns with an empty bar, and nobody will rush you.",
  },
  {
    question: "Can I just use the gym without classes?",
    answer:
      "Open-gym access is included with every membership and runs through the mid-morning block and outside class times. A coach is on the floor for most of it.",
  },
  {
    question: "Do you take members with injuries or medical conditions?",
    answer:
      "Yes, through the special populations track. Dr. Shruti Menon assesses every such member, we require written clearance from your treating doctor, and we send quarterly progress reports back to them.",
  },
  {
    question: "What if I travel or need to pause?",
    answer:
      "Membership can be frozen for up to two months a year at no charge, or switched to the online training plan so the programme continues. Tell the front desk or WhatsApp us before the billing date.",
  },
];

export const trialInterests = [
  "Small group strength",
  "Personal training",
  "Online training",
  "Weight loss block",
  "Muscle building",
  "Women-only classes",
  "Pre or post-natal",
  "Special populations / medical",
  "Beginners class",
];
