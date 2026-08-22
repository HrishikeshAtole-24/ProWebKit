import type { TemplateCategory, TemplateMeta } from "@/types/template";

/**
 * Single source of truth for the gallery, sitemap and docs.
 * Adding a template = add an entry here + a folder under src/templates.
 */
export const templates: TemplateMeta[] = [
  {
    slug: "ca-corporate",
    category: "ca",
    name: "Corporate CA",
    demoBrand: "Aurum & Associates",
    description:
      "An institutional practice site for a chartered accountancy firm — compliance calendar, service depth and partner credibility above the fold.",
    href: "/templates/ca/corporate",
    themeClass: "theme-ca",
    swatch: ["#0F2544", "#B08A3C"],
    sections: [
      "Sticky navigation",
      "Hero with credibility band",
      "Service grid",
      "Industries served",
      "Engagement process",
      "Partners",
      "Testimonials",
      "FAQ",
      "Consultation form",
    ],
    status: "stable",
  },
  {
    slug: "doctor-clinic",
    category: "doctor",
    name: "Clinic",
    demoBrand: "Aarogya Clinic",
    description:
      "A single-practitioner clinic site built around one job: getting a patient to book. Appointment card, timings, treatments and directions.",
    href: "/templates/doctor/clinic",
    themeClass: "theme-doctor",
    swatch: ["#0D736C", "#CA6914"],
    sections: [
      "Utility bar + navigation",
      "Hero with booking card",
      "Specialisations",
      "About the doctor",
      "Treatments",
      "Clinic timings",
      "Patient stories",
      "FAQ",
      "Appointment form",
    ],
    status: "stable",
  },
  {
    slug: "lawyer-firm",
    category: "lawyer",
    name: "Law Firm",
    demoBrand: "Mehta & Partners",
    description:
      "An editorial, serif-led litigation practice site — practice areas, reported matters, counsel profiles and a confidential enquiry form.",
    href: "/templates/lawyer/firm",
    themeClass: "theme-lawyer",
    swatch: ["#1A202C", "#A07946"],
    sections: [
      "Navigation",
      "Editorial hero",
      "Practice areas",
      "Firm record",
      "Counsel profiles",
      "Reported matters",
      "Client testimonials",
      "Offices",
      "Enquiry form",
    ],
    status: "stable",
  },
];

export const categoryLabels: Record<TemplateCategory, string> = {
  ca: "Chartered Accountants",
  doctor: "Doctors & Clinics",
  lawyer: "Lawyers & Law Firms",
};

export function templatesByCategory(category: TemplateCategory) {
  return templates.filter((template) => template.category === category);
}
