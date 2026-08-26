import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { MetricsBand } from "@/components/MetricsBand";
import { Specialties } from "@/components/Specialties";
import { OfficeMoment } from "@/components/OfficeMoment";
import { ContactLocation } from "@/components/ContactLocation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positioning />
        <MetricsBand />
        <Specialties />
        <OfficeMoment />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
