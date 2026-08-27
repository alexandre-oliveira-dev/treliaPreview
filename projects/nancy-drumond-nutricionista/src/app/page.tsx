import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { Specialties } from "@/components/Specialties";
import { Differentials } from "@/components/Differentials";
import { ContactLocation } from "@/components/ContactLocation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Specialties />
        <Differentials />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
