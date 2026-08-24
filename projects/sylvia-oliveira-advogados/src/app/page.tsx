import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import Escritorio from "@/components/Escritorio";
import Conteudo from "@/components/Conteudo";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <Escritorio />
        <Conteudo />
      </main>
      <Contato />
    </>
  );
}
