import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AreaCard } from "@/components/AreaCard";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { areas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação do escritório Marinho & Freitas Advogados: Direito Criminal, Família e Sucessões, Consumidor e Empresarial.",
  alternates: { canonical: "/areas-de-atuacao" },
};

export default function AreasDeAtuacaoPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Áreas de Atuação"
            title="Atuação especializada, com estratégia própria para cada área do Direito"
            description="Cada área possui abordagem, equipe e processo dedicados. Escolha a que mais se aproxima da sua situação para entender como podemos ajudar."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <FadeInStaggerItem key={area.slug}>
              <AreaCard area={area} index={i} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
