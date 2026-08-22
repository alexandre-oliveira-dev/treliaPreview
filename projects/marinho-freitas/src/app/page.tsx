import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AreaCard } from "@/components/AreaCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { areas, differentiators, partners, process, site } from "@/lib/site";

const situations = [
  "Estou respondendo a um processo criminal ou fui intimado por uma investigação.",
  "Preciso resolver uma questão de divórcio, guarda ou inventário.",
  "Uma empresa cobrou algo indevido ou descumpriu um contrato comigo.",
  "Minha empresa precisa de segurança jurídica em contratos ou operações.",
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              {site.founded}
            </p>
            <h1 className="mt-4 font-serif-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Segurança jurídica para decisões que exigem experiência, estratégia e confiança.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body/80">
              {site.positioning} Atuamos em Direito Criminal, Família e Sucessões, Consumidor e
              Empresarial, com atendimento próximo e condução técnica em cada etapa do processo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppCTA
                message="Olá, gostaria de falar com o escritório."
                context="hero"
              >
                Falar com o escritório
              </WhatsAppCTA>
              <Link
                href="/areas-de-atuacao"
                className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Conhecer nossa atuação
              </Link>
            </div>
          </div>
          <PlaceholderMedia label="Marinho & Freitas Advogados" className="aspect-[4/5] w-full" />
        </Container>
      </section>

      <section className="border-b border-line bg-paper-alt/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Como podemos ajudar"
            title="Identifique sua situação"
            description="Cada pessoa chega até nós com um problema diferente. Veja se alguma dessas situações se aproxima da sua."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {situations.map((situation, i) => (
              <div
                key={situation}
                className="flex gap-4 border border-line bg-paper p-6"
              >
                <span className="font-serif-display text-lg text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-body/80">{situation}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Áreas de Atuação"
            title="Atuação especializada em quatro frentes do Direito"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <AreaCard key={area.slug} area={area} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-ink py-20 text-paper md:py-28">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze-soft">
              Autoridade
            </p>
            <h2 className="mt-3 font-serif-display text-3xl leading-tight md:text-4xl">
              Conduzido por duas sócias-fundadoras dedicadas a cada caso
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/70">
              Dra. Larissa Freitas e Dra. Ana Marinho respondem pela gestão, organização e
              condução estratégica dos casos, com mais de 10 anos de experiência nas áreas em que
              o escritório atua.
            </p>
            <Link
              href="/socias"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-bronze-soft hover:text-paper"
            >
              Conhecer as sócias
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner) => (
              <div key={partner.slug} className="flex flex-col gap-3">
                <PlaceholderMedia label={partner.name} className="aspect-[3/4] w-full" />
                <div>
                  <p className="font-serif-display text-base text-paper">{partner.name}</p>
                  <p className="text-xs uppercase tracking-widest text-paper/50">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Diferenciais" title="Por que confiar no escritório" />
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-paper p-8">
                <h3 className="font-serif-display text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-alt/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Como funciona"
            title="Um processo de atendimento claro, do primeiro contato ao acompanhamento"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <span className="font-serif-display text-2xl text-bronze">{item.step}</span>
                <h3 className="mt-3 font-serif-display text-base text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
            Seu problema é urgente para nós
          </p>
          <h2 className="max-w-2xl font-serif-display text-3xl leading-tight text-ink md:text-4xl">
            Fale com o escritório e entenda como podemos ajudar na sua situação
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <WhatsAppCTA message="Olá, gostaria de falar com o escritório." context="home_final_cta">
              Falar com Advogado Online
            </WhatsAppCTA>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Agendar uma consulta
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
