import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Areas from "@/components/Areas";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Flávia Souza Advocacia",
  description:
    "Advocacia especializada em Direito do Trabalho e Direito de Família, conveniada à Defensoria Pública e à OAB.",
  telephone: `+${CONTACT.phoneFixed}`,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Penha de França, 655 - Sala 1",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "São Paulo",
  knowsAbout: [
    "Direito do Trabalho",
    "Direito de Família",
    "Convênio Defensoria Pública OAB",
  ],
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
        <Sobre />
        <Areas />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
