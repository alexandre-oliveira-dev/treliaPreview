import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Empatia from "@/components/Empatia";
import Situacoes from "@/components/Situacoes";
import Advogada from "@/components/Advogada";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Letícia Gomes Advocacia",
  description:
    "Advocacia especializada em Direito de Família e Sucessões em Santos/SP.",
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Anna Costa, 275, Cj. 12, Gonzaga",
    addressLocality: "Santos",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "Santos, SP",
  knowsAbout: [
    "Divórcio",
    "Guarda e Convivência",
    "Pensão Alimentícia",
    "Inventário e Planejamento Sucessório",
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
        <Empatia />
        <Situacoes />
        <Advogada />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
