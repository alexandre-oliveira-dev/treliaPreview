import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Bianca Benatti Depilação",
  description:
    "Estúdio de depilação a cera em Sapopemba, São Paulo, com atendimento individual e materiais descartáveis.",
  telephone: `+${CONTACT.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Manuel Pimentel, 176",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "03983-020",
    addressCountry: "BR",
  },
  areaServed: "São Paulo",
  sameAs: [CONTACT.instagramUrl],
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
        <Servicos />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
