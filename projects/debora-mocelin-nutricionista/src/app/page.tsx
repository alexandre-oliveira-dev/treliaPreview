import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { Methodology } from "@/components/Methodology";
import { ClinicGallery } from "@/components/ClinicGallery";
import { ContactLocation } from "@/components/ContactLocation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Methodology />
        <ClinicGallery />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
