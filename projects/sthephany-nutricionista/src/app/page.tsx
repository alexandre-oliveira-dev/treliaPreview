import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Focus from "@/components/Focus";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: CONTACT.fullName,
  description:
    "Nutricionista em Curitiba especialista em emagrecimento feminino, saúde da mulher, longevidade e performance. Atendimento presencial e online.",
  telephone: CONTACT.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. João Alencar Guimarães, 963 - Santa Quiteria",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "80310-420",
    addressCountry: "BR",
  },
  areaServed: "Curitiba, PR",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CONTACT.rating.replace(",", "."),
    reviewCount: CONTACT.reviewCount,
  },
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
        <About />
        <Focus />
        <HowItWorks />
        <Testimonials />
        <CtaBand />
        <LocationHours />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
