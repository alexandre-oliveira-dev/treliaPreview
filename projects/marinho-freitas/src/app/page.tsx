import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AreaCard } from "@/components/AreaCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { RealPhoto } from "@/components/RealPhoto";
import { AnimatedHero } from "@/components/AnimatedHero";
import { Counter } from "@/components/Counter";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { areas, differentiators, process, site } from "@/lib/site";

const situations = [
  "Estou respondendo a um processo criminal ou fui intimado por uma investigação.",
  "Preciso resolver uma questão de divórcio, guarda ou inventário.",
  "Uma empresa cobrou algo indevido ou descumpriu um contrato comigo.",
  "Minha empresa precisa de segurança jurídica em contratos ou operações.",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <AnimatedHero />
        <Container className="relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-graphite">
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
              <WhatsAppCTA message="Olá, gostaria de falar com o escritório." context="hero">
                Falar com o escritório
              </WhatsAppCTA>
              <Link
                href="/areas-de-atuacao"
                className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Conhecer nossa atuação
              </Link>
            </div>
            <div className="mt-10 flex max-w-md flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs text-body/60">
              <span className="inline-flex items-baseline gap-1.5">
                <Counter to={10} suffix="+" small />
                anos de experiência
              </span>
              <span className="text-line">•</span>
              <span className="inline-flex items-baseline gap-1.5">
                <Counter to={4} small />
                áreas do Direito
              </span>
              <span className="text-line">•</span>
              <span className="inline-flex items-baseline gap-1.5">
                <Counter to={2} small />
                sócias-fundadoras
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 hidden aspect-[4/5] w-full border border-graphite/30 md:block"
            />
            <RealPhoto
              src="/images/socias-office.png"
              alt="Dra. Larissa Freitas e Dra. Ana Marinho, sócias-fundadoras do Marinho & Freitas Advogados"
              className="relative aspect-[4/5] w-full"
              priority
            />
          </FadeIn>
        </Container>
      </section>

      <section id="situacoes" className="border-b border-line bg-paper-alt/60 py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Como podemos ajudar"
              title="Identifique sua situação"
              description="Cada pessoa chega até nós com um problema diferente. Veja se alguma dessas situações se aproxima da sua."
            />
          </FadeIn>
          <FadeInStagger className="mt-12 grid gap-4 md:grid-cols-2">
            {situations.map((situation, i) => (
              <FadeInStaggerItem
                key={situation}
                className="flex gap-4 border border-line bg-paper p-6 transition-colors hover:border-graphite"
              >
                <span className="font-serif-display text-lg text-graphite">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-body/80">{situation}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section id="areas" className="border-b border-line py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Áreas de Atuação"
              title="Atuação especializada em quatro frentes do Direito"
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

      <section id="autoridade" className="border-b border-line bg-ink py-20 text-paper md:py-28">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-graphite-soft">
              Autoridade
            </p>
            <h2 className="mt-3 font-serif-display text-3xl leading-tight md:text-4xl">
              Experiência jurídica conduzida de perto.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/70">
              Dra. Larissa Freitas e Dra. Ana Marinho respondem pela gestão, organização e
              condução estratégica dos casos, com mais de 10 anos de experiência nas áreas em que
              o escritório atua.
            </p>
            <Link
              href="/socias"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-graphite-soft transition-colors hover:text-paper"
            >
              Conhecer as sócias
              <span aria-hidden>→</span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.15} className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden aspect-[4/5] w-full border border-graphite-soft/30 md:block"
            />
            <RealPhoto
              src="/images/socias-office.png"
              alt="Sócias-fundadoras no escritório Marinho & Freitas Advogados"
              className="relative aspect-[4/5] w-full"
              caption="Dra. Larissa Freitas & Dra. Ana Marinho"
            />
          </FadeIn>
        </Container>
      </section>

      <section id="diferenciais" className="border-b border-line py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading eyebrow="Diferenciais" title="Por que confiar no escritório" />
          </FadeIn>
          <FadeInStagger className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {differentiators.map((item) => (
              <FadeInStaggerItem
                key={item.title}
                className="relative bg-paper p-8 pl-10 transition-colors hover:bg-paper-alt"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-8 h-8 w-px bg-graphite/40"
                />
                <h3 className="font-serif-display text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body/70">{item.description}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section id="como-funciona" className="border-b border-line bg-paper-alt/60 py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Como funciona"
              title="Um processo de atendimento claro, do primeiro contato ao acompanhamento"
            />
          </FadeIn>
          <FadeInStagger className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-3 hidden h-px bg-line md:block"
            />
            {process.map((item) => (
              <FadeInStaggerItem key={item.step} className="relative">
                <span className="relative z-10 inline-block bg-paper-alt pr-4 font-serif-display text-2xl text-graphite md:bg-paper-alt">
                  {item.step}
                </span>
                <h3 className="mt-3 font-serif-display text-base text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/70">{item.description}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-line py-20 text-paper md:py-32">
        <div className="absolute inset-0">
          <RealPhoto
            src="/images/socias-office.png"
            alt="Sócias-fundadoras do Marinho & Freitas Advogados"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-ink/80" />
        </div>
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <FadeIn className="flex flex-col items-center gap-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-graphite-soft">
              Seu problema é urgente para nós
            </p>
            <h2 className="max-w-2xl font-serif-display text-3xl leading-tight md:text-4xl">
              Seu caso merece atenção, estratégia e segurança.
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <WhatsAppCTA
                message="Olá, gostaria de falar com o escritório."
                context="home_final_cta"
              >
                Falar com o escritório
              </WhatsAppCTA>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-paper/40 px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Agendar uma consulta
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
