import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Ambiente from "@/components/Ambiente";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Marianina Muñoz",
  description:
    "Consultório odontológico no Capão Raso, Curitiba - PR. 23 anos de experiência, todas as especialidades e emergência odontológica 24 horas.",
  telephone: CONTACT.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Mal. Rondon, 327",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "81130-170",
    addressCountry: "BR",
  },
  areaServed: "Curitiba, PR",
  openingHours: "Mo-Su 00:00-23:59",
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
        <Highlights />
        <About />
        <Specialties />
        <Ambiente />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
