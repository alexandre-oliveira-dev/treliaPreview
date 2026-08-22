import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { RealPhoto } from "@/components/RealPhoto";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { site } from "@/lib/site";

const sobreLinks = [
  {
    href: "/areas-de-atuacao",
    title: "Áreas de Atuação",
    description: "Direito Criminal, Família e Sucessões, Consumidor e Empresarial.",
  },
  {
    href: "/socias",
    title: "Sócias-fundadoras",
    description: "Conheça Dra. Larissa Freitas e Dra. Ana Marinho.",
  },
  {
    href: "/#diferenciais",
    title: "Diferenciais",
    description: "O que orienta o trabalho do escritório.",
  },
  {
    href: "/#como-funciona",
    title: "Como funciona o atendimento",
    description: "Do primeiro contato ao acompanhamento do caso.",
  },
  {
    href: "/faq",
    title: "Perguntas frequentes",
    description: "Dúvidas comuns sobre o atendimento.",
  },
  {
    href: "/contato",
    title: "Contato",
    description: "Fale com o escritório por WhatsApp, formulário ou agende uma consulta.",
  },
];

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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-graphite">
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
            <SectionHeading eyebrow="Explore" title="Para onde ir a partir daqui" />
          </FadeIn>
          <FadeInStagger className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {sobreLinks.map((item) => (
              <FadeInStaggerItem key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between bg-paper p-8 transition-colors hover:bg-paper-alt"
                >
                  <div>
                    <h3 className="font-serif-display text-lg text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-body/70">{item.description}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-graphite">
                    Ver mais
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
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
