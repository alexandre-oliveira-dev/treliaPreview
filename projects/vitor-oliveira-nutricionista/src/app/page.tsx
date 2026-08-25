import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Filosofia from "@/components/Filosofia";
import ComoFunciona from "@/components/ComoFunciona";
import Servicos from "@/components/Servicos";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Vitor Oliveira Nutricionista · Nutrichef",
  description:
    "Consultório de nutrição clínica na Bela Vista, São Paulo - SP, com foco em metabolismo, emagrecimento e cardápios personalizados, além de marmitas Nutrichef.",
  medicalSpecialty: "Nutrition",
  telephone: CONTACT.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Paim - Bela Vista",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01306-010",
    addressCountry: "BR",
  },
  areaServed: "São Paulo, SP",
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
        <Filosofia />
        <ComoFunciona />
        <Servicos />
        <LocationHours />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
