import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { RealPhoto } from "@/components/RealPhoto";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { partners } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sócias",
  description:
    "Conheça Dra. Larissa Freitas e Dra. Ana Marinho, sócias-fundadoras do escritório Marinho & Freitas Advogados.",
  alternates: { canonical: "/socias" },
};

export default function SociasPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              Sócias-fundadoras
            </p>
            <h1 className="mt-3 font-serif-display text-3xl leading-tight text-ink md:text-4xl">
              Quem responde pela gestão e condução estratégica dos casos
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-body/80">
              Dra. Larissa Freitas e Dra. Ana Marinho fundaram o escritório e seguem à frente de
              cada caso, unindo conhecimento técnico, visão estratégica e sensibilidade humana.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <RealPhoto
              src="/images/socias-office.png"
              alt="Dra. Larissa Freitas e Dra. Ana Marinho no escritório Marinho & Freitas Advogados"
              className="aspect-[4/5] w-full"
              priority
            />
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <FadeInStagger className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {partners.map((partner) => (
              <FadeInStaggerItem key={partner.slug} className="bg-paper p-8 md:p-10">
                <h2 className="font-serif-display text-2xl text-ink">{partner.name}</h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-bronze">
                  {partner.role}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-body/80">{partner.bio}</p>
                <div className="mt-8">
                  <WhatsAppCTA
                    message={`Olá, gostaria de falar com ${partner.name}.`}
                    context={`socia_${partner.slug}`}
                    variant="secondary"
                  >
                    Falar com {partner.name.replace("Dra. ", "")}
                  </WhatsAppCTA>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <FadeIn className="flex flex-col items-center gap-6">
            <h2 className="max-w-xl font-serif-display text-2xl leading-tight text-ink md:text-3xl">
              Fale diretamente com o escritório
            </h2>
            <WhatsAppCTA message="Olá, gostaria de falar com o escritório." context="socias_cta">
              Falar no WhatsApp
            </WhatsAppCTA>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
