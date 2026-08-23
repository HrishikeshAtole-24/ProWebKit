import type { Metadata } from "next";
import { TemplateShell } from "@/components/layout/template-shell";
import { ClinicFooter, ClinicHeader } from "@/templates/doctor-clinic/brand";
import { Hero } from "@/templates/doctor-clinic/sections/hero";
import { Specialisations, Treatments } from "@/templates/doctor-clinic/sections/care";
import { About, PatientStories, Timings } from "@/templates/doctor-clinic/sections/about";
import { Appointment, Faq } from "@/templates/doctor-clinic/sections/appointment";
import { clinic } from "@/templates/doctor-clinic/content";

export const metadata: Metadata = {
  title: `${clinic.doctor} — ${clinic.designation}, Bengaluru`,
  description:
    "General medicine and preventive cardiology in Sadashivanagar, Bengaluru. Twenty-minute consultations, in-house ECG and echocardiography, same-day reports.",
  openGraph: {
    title: `${clinic.name} — ${clinic.doctor}`,
    description:
      "Consultant physician and cardiologist. Book a consultation in Sadashivanagar, Bengaluru.",
    type: "website",
  },
};

export default function DoctorClinicTemplate() {
  return (
    <TemplateShell theme="theme-doctor" preview="Clinic · Aarogya Clinic">
      <ClinicHeader />
      <main>
        <Hero />
        <Specialisations />
        <About />
        <Treatments />
        <Timings />
        <PatientStories />
        <Faq />
        <Appointment />
      </main>
      <ClinicFooter />
    </TemplateShell>
  );
}
