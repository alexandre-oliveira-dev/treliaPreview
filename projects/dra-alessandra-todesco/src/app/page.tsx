import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { Gallery } from "@/components/Gallery";
import { Credentials } from "@/components/Credentials";
import { Testimonials } from "@/components/Testimonials";
import { LocationHours } from "@/components/LocationHours";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Credentials />
      <Testimonials />
      <LocationHours />
      <CtaBand />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
