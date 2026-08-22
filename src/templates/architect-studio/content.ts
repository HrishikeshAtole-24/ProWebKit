import type { NavLink } from "@/types/template";

/** All copy for the Architecture Studio template. */
export const studio = {
  name: "Terrain Studio",
  discipline: "Architecture & Urbanism",
  founded: 2012,
  principal: "Ar. Devika Menon",
  registration: "COA Reg. CA/2012/58104",
  phone: "+91 80 4123 7700",
  email: "studio@terrain.co.in",
  address: { line1: "18 Wood Street", line2: "Richmond Town", city: "Bengaluru 560025" },
};

export const navLinks: NavLink[] = [
  { label: "Works", href: "#works" },
  { label: "Practice", href: "#practice" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "Enquiries", href: "#enquiry" },
];

export const hero = {
  statement: "Buildings that belong to their ground.",
  subtitle:
    "An architecture and urbanism practice working across residential, cultural and adaptive-reuse projects in South India. Twenty-eight built works since 2012.",
};

export const works = [
  {
    index: "01",
    title: "Laterite House",
    typology: "Private residence",
    location: "Kasaragod, Kerala",
    year: "2025",
    area: "4,200 sq ft",
    note: "A courtyard house built in exposed laterite quarried within nine kilometres of the site.",
  },
  {
    index: "02",
    title: "The Weaving Shed",
    typology: "Adaptive reuse",
    location: "Chennimalai, Tamil Nadu",
    year: "2024",
    area: "16,000 sq ft",
    note: "A defunct handloom shed converted into a craft school, retaining the original steel trusses.",
  },
  {
    index: "03",
    title: "Ridge Pavilion",
    typology: "Cultural",
    location: "Coorg, Karnataka",
    year: "2024",
    area: "3,100 sq ft",
    note: "A rammed-earth performance pavilion sited along an existing contour, with no cut and fill.",
  },
  {
    index: "04",
    title: "Sixty Feet Road Housing",
    typology: "Multi-family residential",
    location: "Bengaluru",
    year: "2023",
    area: "48,000 sq ft",
    note: "Twenty-four apartments organised around three stacked courtyards for cross ventilation.",
  },
  {
    index: "05",
    title: "Ferry Terminal, Vypin",
    typology: "Public infrastructure",
    location: "Kochi, Kerala",
    year: "2022",
    area: "9,400 sq ft",
    note: "A civic waiting hall designed for monsoon wind loads and daily tidal variation.",
  },
  {
    index: "06",
    title: "The Reading Room",
    typology: "Institutional",
    location: "Mysuru, Karnataka",
    year: "2021",
    area: "6,800 sq ft",
    note: "A library addition to a 1930s school, built in load-bearing brick to match the original.",
  },
];

export const practice = {
  title: "A practice statement, not a mission statement",
  paragraphs: [
    "Terrain Studio was founded in 2012 around a narrow conviction: that a building should be legible as a response to its site, its climate and the materials available within a day of it.",
    "The studio does not have a house style. It has a method — long site studies, material sourcing before form-making, and a refusal to draw a section until the ground has been surveyed properly.",
    "We build slowly. Twenty-eight works in thirteen years is not a volume practice, and the studio turns down more projects than it accepts.",
  ],
  positions: [
    { label: "Material", body: "Sourced within a hundred kilometres wherever structurally possible." },
    { label: "Climate", body: "Passive first. Mechanical cooling is a failure of the section, not a specification." },
    { label: "Ground", body: "Existing contours, trees and water paths are constraints, not obstacles." },
    { label: "Time", body: "One project per principal at a time, through to completion on site." },
  ],
};

export const services = [
  {
    title: "Architecture",
    scope: ["Feasibility & site analysis", "Schematic design", "Design development", "Working drawings", "Construction administration"],
  },
  {
    title: "Interiors",
    scope: ["Interior architecture", "Bespoke joinery detailing", "Material and finish schedules", "Lighting design coordination", "Furniture curation"],
  },
  {
    title: "Urbanism & research",
    scope: ["Masterplanning", "Adaptive reuse studies", "Heritage documentation", "Public space design", "Competition entries"],
  },
];

export const process = [
  { phase: "01", title: "Site & brief", duration: "4–6 weeks", body: "Survey, climate study, material scouting and a written brief agreed with you before any drawing begins." },
  { phase: "02", title: "Schematic design", duration: "6–8 weeks", body: "Two or three distinct schemes at model scale. You choose a direction; we do not present a favourite." },
  { phase: "03", title: "Design development", duration: "10–14 weeks", body: "Structure, services and materials resolved together. Costs are tested at this stage, not after tender." },
  { phase: "04", title: "Documentation", duration: "8–12 weeks", body: "Working drawings, specifications and tender documents issued for contractor pricing." },
  { phase: "05", title: "On site", duration: "Project duration", body: "Fortnightly site visits, contractor coordination and detail resolution through to handover." },
];

export const recognition = [
  { year: "2025", award: "IIA Award for Excellence", detail: "Laterite House — Residential (South Zone)" },
  { year: "2024", award: "Architectural Review, Emerging Practices", detail: "Shortlisted, Asia-Pacific" },
  { year: "2024", award: "INSIDE World Festival", detail: "The Weaving Shed — Adaptive Reuse, finalist" },
  { year: "2022", award: "Kerala State Award for Architecture", detail: "Ferry Terminal, Vypin" },
];

export const press = [
  "Domus India — The ground comes first, March 2025",
  "The Architectural Review — Emerging practices, Asia-Pacific, 2024",
  "Architectural Digest India — Twelve houses that get monsoon right, 2023",
  "The Hindu — Building with what is already there, 2022",
];

export const people = [
  { name: "Ar. Devika Menon", role: "Principal Architect", detail: "B.Arch (CEPT), M.Arch Urban Design (Berlage). Founded the studio in 2012." },
  { name: "Ar. Suraj Pillai", role: "Associate", detail: "Leads documentation and site administration. With the studio since 2016." },
  { name: "Ar. Tara Krishnan", role: "Associate", detail: "Heads material research and the adaptive reuse portfolio." },
  { name: "Nikhil Bose", role: "Studio Manager", detail: "Contracts, tendering and project administration." },
];

export const enquiryTypes = [
  "Private residence",
  "Multi-family residential",
  "Interior architecture",
  "Adaptive reuse",
  "Institutional or cultural",
  "Masterplanning",
  "Press or academic",
];
