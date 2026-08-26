import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsTicker } from "@/components/StatsTicker";
import { Metodo } from "@/components/Metodo";
import { Diferenciais } from "@/components/Diferenciais";
import { Espaco } from "@/components/Espaco";
import { ProvaSocial } from "@/components/ProvaSocial";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsTicker />
        <Metodo />
        <Diferenciais />
        <Espaco />
        <ProvaSocial />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
