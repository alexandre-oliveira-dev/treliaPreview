import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { AnxietyProgram } from "@/components/AnxietyProgram";
import { Locations } from "@/components/Locations";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Method />
        <HowItWorks />
        <Services />
        <AnxietyProgram />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
