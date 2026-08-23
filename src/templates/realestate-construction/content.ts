import type { FaqItem, NavLink, StatItem } from "@/types/template";

/** All copy for the Construction Company template. */
export const company = {
  name: "Ironwood Constructions",
  tagline: "Civil & structural contracting since 2004",
  registration: "CIN U45200MH2004PTC148291 · Class I registered contractor",
  phone: "+91 22 4915 6000",
  tenderEmail: "tenders@ironwoodconstructions.in",
  email: "info@ironwoodconstructions.in",
  address: { line1: "Plot 44, MIDC Andheri East", line2: "", city: "Mumbai 400093" },
};

export const navLinks: NavLink[] = [
  { label: "Capability", href: "#capability" },
  { label: "Projects", href: "#projects" },
  { label: "Plant", href: "#plant" },
  { label: "Safety", href: "#safety" },
  { label: "Certifications", href: "#certifications" },
  { label: "Tenders", href: "#tender" },
];

export const hero = {
  eyebrow: "Class I contractor · 21 years · Western India",
  title: "Structures delivered to programme, and a safety record to prove it.",
  subtitle:
    "Civil and structural contracting for industrial, institutional and infrastructure clients. Owned plant, in-house formwork, and a lost-time injury frequency rate of 0.21.",
  primaryCta: { label: "Submit a tender enquiry", href: "#tender" },
  secondaryCta: { label: "Download capability statement", href: "#capability" },
};

export const stats: StatItem[] = [
  { value: "₹4,200cr", label: "Contract value executed" },
  { value: "186", label: "Projects completed" },
  { value: "0.21", label: "LTIFR (rolling 12 months)" },
  { value: "1,140", label: "Direct employees" },
];

export const capability = [
  {
    sector: "Industrial",
    body: "Manufacturing plants, warehousing and cold chain, executed on live sites without stopping the client operation.",
    scope: ["RCC & PEB structures", "Heavy foundations", "Industrial flooring", "Plant utilities & piping civil"],
  },
  {
    sector: "Institutional",
    body: "Hospitals, campuses and laboratories where the finish tolerance and the services coordination matter more than the shell.",
    scope: ["Hospital & lab buildings", "Educational campuses", "Clean-room civil works", "MEP coordination"],
  },
  {
    sector: "Infrastructure",
    body: "Roads, bridges and water infrastructure delivered under government and PPP contract conditions.",
    scope: ["Flyovers & ROBs", "Roads & stormwater", "Water treatment structures", "Piling & marine works"],
  },
  {
    sector: "Commercial",
    body: "Office and retail structures on constrained urban sites, with logistics planned before mobilisation.",
    scope: ["High-rise RCC", "Basement & shoring", "Facade support structures", "Fit-out civil works"],
  },
];

export const projects = [
  { name: "Pharmaceutical formulation plant", client: "Confidential — listed pharma", value: "₹412 cr", location: "Ambernath, Maharashtra", scope: "Civil, structural and clean-room shell", status: "Completed 2025", duration: "22 months" },
  { name: "600-bed teaching hospital", client: "State health department", value: "₹680 cr", location: "Nashik, Maharashtra", scope: "Full civil package including basements", status: "Completed 2024", duration: "34 months" },
  { name: "Rail over-bridge, package 3", client: "MSRDC", value: "₹238 cr", location: "Pune district", scope: "Piling, substructure and superstructure", status: "Completed 2024", duration: "26 months" },
  { name: "Automated distribution centre", client: "National retail chain", value: "₹154 cr", location: "Bhiwandi, Maharashtra", scope: "PEB, flooring to FM2 tolerance, yard works", status: "Completed 2023", duration: "14 months" },
  { name: "Sewage treatment plant, 120 MLD", client: "Municipal corporation", value: "₹296 cr", location: "Thane, Maharashtra", scope: "Civil structures and allied works", status: "In progress", duration: "30 months" },
  { name: "Corporate campus, phase 2", client: "Confidential — IT services", value: "₹520 cr", location: "Navi Mumbai", scope: "Two towers, three-level basement", status: "In progress", duration: "28 months" },
];

export const plant = [
  { item: "Tower cranes", count: "14", detail: "Potain and Liebherr, 8t to 16t capacity" },
  { item: "Concrete batching plants", count: "9", detail: "30 to 60 cum/hr, owned and site-deployed" },
  { item: "Transit mixers", count: "62", detail: "6 and 8 cum, GPS tracked" },
  { item: "Boom placers & pumps", count: "21", detail: "36m to 52m boom placers" },
  { item: "Piling rigs", count: "8", detail: "Rotary hydraulic, up to 1,200mm diameter" },
  { item: "Aluminium formwork sets", count: "11", detail: "In-house, 4-day floor cycle capability" },
  { item: "Excavators & loaders", count: "46", detail: "Owned fleet, 20t to 45t class" },
  { item: "Site laboratories", count: "12", detail: "NABL-correlated cube testing at every site" },
];

export const safety = {
  title: "Safety is a schedule input, not a poster on the gate",
  body: "Every hour lost to an incident is an hour lost to the programme. The numbers below are audited annually and are provided to clients on request with the underlying incident register.",
  metrics: [
    { value: "0.21", label: "LTIFR, rolling 12 months", note: "Industry benchmark: 1.4" },
    { value: "0", label: "Fatalities in 5 years", note: "Across 186 projects" },
    { value: "4.2M", label: "Safe man-hours, 2025", note: "Without a lost-time injury" },
    { value: "100%", label: "Workforce inducted", note: "Site induction before first entry" },
  ],
  practices: [
    "Daily toolbox talks recorded and signed at every work front",
    "Third-party audit of scaffolding and lifting gear every quarter",
    "Mandatory full-body harness above two metres, no exceptions",
    "On-site occupational health centre on projects above ₹100 crore",
    "Near-miss reporting with no disciplinary consequence to the reporter",
  ],
};

export const certifications = [
  { name: "ISO 9001:2015", detail: "Quality management systems" },
  { name: "ISO 14001:2015", detail: "Environmental management" },
  { name: "ISO 45001:2018", detail: "Occupational health and safety" },
  { name: "Class I contractor", detail: "Registered with PWD Maharashtra and MSRDC" },
  { name: "CIDC Grade A1", detail: "Construction Industry Development Council" },
  { name: "GRIHA & IGBC", detail: "Accredited professionals on staff" },
];

export const clients = [
  "Listed pharmaceutical manufacturers",
  "State public works departments",
  "Municipal corporations",
  "National retail and logistics chains",
  "IT services campuses",
  "Private hospital groups",
];

export const faqs: FaqItem[] = [
  {
    question: "What contract values do you bid for?",
    answer:
      "Single packages between ₹50 crore and ₹800 crore. Below ₹50 crore the overhead structure does not serve the client well, and we say so rather than bidding and under-resourcing.",
  },
  {
    question: "Do you work on EPC or item-rate contracts?",
    answer:
      "Both, plus design-build. Around 60% of current turnover is item-rate under FIDIC or CPWD conditions, with the balance EPC. Design-build is undertaken with empanelled consultants.",
  },
  {
    question: "How is subcontracting handled?",
    answer:
      "Structural work, formwork and concreting are self-performed with owned plant and direct labour. Specialist trades are subcontracted to a pre-qualified panel, and every subcontractor is bound to the same safety standard with audit rights.",
  },
  {
    question: "What is your typical mobilisation time?",
    answer:
      "Two to four weeks from letter of intent for projects within Maharashtra, assuming site handover and approvals are in place. Plant is owned, so mobilisation does not wait on hire market availability.",
  },
  {
    question: "Can you provide references?",
    answer:
      "Yes. Client references, completion certificates and performance reports are provided at pre-qualification stage on request, including for projects that ran into difficulty.",
  },
];

export const tenderTypes = [
  "Industrial / manufacturing",
  "Institutional / healthcare",
  "Infrastructure / roads & bridges",
  "Water & environment",
  "Commercial / high-rise",
  "Pre-qualification enquiry",
];
