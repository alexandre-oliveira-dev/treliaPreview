import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Gabriela Fordelone",
  description:
    "Consultório odontológico na Vila Belmiro, Santos - SP. Atendimento leve, acolhedor e moderno.",
  telephone: CONTACT.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Carvalho de Mendonça, 238 - Conj. 56",
    addressLocality: "Santos",
    addressRegion: "SP",
    postalCode: "11070-101",
    addressCountry: "BR",
  },
  areaServed: "Santos, SP",
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
        <Services />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
