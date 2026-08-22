import type { Metadata } from "next";
import { PreviewBar } from "@/components/layout/preview-bar";
import {
  Appointment,
  Doctors,
  Facilities,
  Footer,
  Header,
  Hero,
  Insurance,
  Packages,
  Patients,
  Specialities,
} from "@/templates/doctor-hospital/sections";
import { hospital } from "@/templates/doctor-hospital/content";

export const metadata: Metadata = {
  title: `${hospital.name} — Multi-speciality hospital in Baner, Pune`,
  description:
    "NABH accredited 240-bed multi-speciality hospital in Baner, Pune. 24x7 emergency and trauma, 48 critical care beds, 22 specialities, cashless insurance and health check packages.",
  openGraph: {
    title: `${hospital.name} — ${hospital.descriptor}`,
    description: "Tertiary care, emergency services and preventive health checks in Baner, Pune.",
    type: "website",
  },
};

export default function HospitalTemplate() {
  return (
    <div className="theme-doctor-hospital bg-bg text-ink">
      <PreviewBar template="Multi-speciality Hospital · Sanjeevani Hospital" />
      <Header />
      <main>
        <Hero />
        <Specialities />
        <Doctors />
        <Facilities />
        <Packages />
        <Insurance />
        <Patients />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
