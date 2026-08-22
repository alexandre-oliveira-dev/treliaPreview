import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { RealPhoto } from "@/components/RealPhoto";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { differentiators, process, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre o Escritório",
  description:
    "Conheça o Marinho & Freitas Advogados: história, posicionamento e forma de atuação do escritório.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              Sobre o escritório
            </p>
            <h1 className="mt-4 font-serif-display text-3xl leading-tight text-ink md:text-4xl">
              Uma equipe multidisciplinar preparada para atuar com excelência em todo o Direito
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body/80">
              Com {site.founded} nas áreas de Direito Criminal, Família, Consumidor e Empresarial,
              o escritório construiu uma trajetória marcada por comprometimento, resultados
              consistentes e atuação ética.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <RealPhoto
              src="/images/socias-office.png"
              alt="Escritório Marinho & Freitas Advogados"
              className="aspect-[4/3] w-full"
              priority
            />
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-alt/60 py-16 md:py-24">
        <Container className="max-w-3xl">
          <FadeIn>
            <SectionHeading eyebrow="Posicionamento" title="Advocacia estratégica, técnica e personalizada" />
            <p className="mt-8 text-base leading-relaxed text-body/80">
              À frente da estrutura estão as sócias-fundadoras, Dra. Larissa Freitas e Dra. Ana
              Marinho, responsáveis pela gestão, organização e condução estratégica dos casos.
              Especializadas em suas respectivas áreas, aliam conhecimento técnico, visão
              estratégica e sensibilidade humana para oferecer um atendimento jurídico de
              excelência, sempre focado na proteção dos interesses dos clientes e na busca por
              soluções eficazes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body/80">
              O compromisso do escritório é entregar um serviço jurídico de alto nível, com
              agilidade, dedicação e responsabilidade.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Diferenciais" title="O que orienta o nosso trabalho" />
          </FadeIn>
          <FadeInStagger className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {differentiators.map((item) => (
              <FadeInStaggerItem
                key={item.title}
                className="bg-paper p-8 transition-colors hover:bg-paper-alt"
              >
                <h3 className="font-serif-display text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body/70">{item.description}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-alt/60 py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Como funciona" title="Processo de atendimento" />
          </FadeIn>
          <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map((item) => (
              <FadeInStaggerItem key={item.step}>
                <span className="font-serif-display text-2xl text-bronze">{item.step}</span>
                <h3 className="mt-3 font-serif-display text-base text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/70">{item.description}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <FadeIn className="flex flex-col items-center gap-6">
            <h2 className="max-w-xl font-serif-display text-2xl leading-tight text-ink md:text-3xl">
              Quer entender como podemos ajudar na sua situação?
            </h2>
            <WhatsAppCTA message="Olá, gostaria de falar com o escritório." context="sobre_cta">
              Falar com o escritório
            </WhatsAppCTA>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
