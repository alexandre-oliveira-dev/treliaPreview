import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Philosophy from "@/components/Philosophy";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CONTACT.clinicName,
  description:
    "Consultório odontológico da Dra. Jessica Rivera de Melo no Xaxim, Curitiba - PR. Endodontia, estética dental, clínica geral e mais.",
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Professor Leonel Moro, 27 - sala 04",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "81710-250",
    addressCountry: "BR",
  },
  areaServed: "Xaxim, Curitiba, PR",
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
        <Philosophy />
        <Specialties />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
