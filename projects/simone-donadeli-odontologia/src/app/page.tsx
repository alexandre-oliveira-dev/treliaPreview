import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FacetDivider } from "@/components/FacetDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FacetDivider from="var(--stone)" to="var(--stone-dim)" />
        <Specialties />
        <FacetDivider from="var(--stone-dim)" to="var(--stone)" flip />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
