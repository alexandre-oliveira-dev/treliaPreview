import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Empathy from "@/components/Empathy";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Larissa Pauletti",
  description:
    "Consultório odontológico na Av. Itavuvu, Sorocaba - SP, especialista em extração de dente do siso, com atendimento individual e acolhedor.",
  telephone: CONTACT.mobileDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Itavuvu, 1309 - Sl 2 - Jardim Maria Antônia Prado",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    postalCode: "18078-005",
    addressCountry: "BR",
  },
  areaServed: "Sorocaba, SP",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [CONTACT.instagram],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Empathy />
        <Differentials />
        <Services />
        <Testimonials />
        <CtaBand />
        <LocationHours />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
