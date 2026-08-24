import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dossie from "@/components/Dossie";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dossie />
        <Sobre />
      </main>
      <Contato />
    </>
  );
}
