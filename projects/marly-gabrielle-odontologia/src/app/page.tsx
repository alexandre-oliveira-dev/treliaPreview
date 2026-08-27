import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialty } from "@/components/Specialty";
import { Dentists } from "@/components/Dentists";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MeasureDivider } from "@/components/MeasureDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MeasureDivider label="Fig. 02" />
        <Dentists />
        <Specialty />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
