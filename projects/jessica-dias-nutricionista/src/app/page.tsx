import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { Methodology } from "@/components/Methodology";
import { ClinicGallery } from "@/components/ClinicGallery";
import { ContactLocation } from "@/components/ContactLocation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <About />
        <Specialties />
        <Methodology />
        <ClinicGallery />
        <ContactLocation />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
