import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
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
      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Sócias-fundadoras"
            title="Quem responde pela gestão e condução estratégica dos casos"
            align="center"
          />
        </Container>
      </section>

      {partners.map((partner, i) => (
        <section key={partner.slug} className={`border-b border-line ${i % 2 === 1 ? "bg-paper-alt/60" : ""}`}>
          <Container
            className={`grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-20 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <PlaceholderMedia label={partner.name} className="aspect-[3/4] w-full" />
            <div>
              <h2 className="font-serif-display text-2xl text-ink md:text-3xl">{partner.name}</h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-bronze">
                {partner.role}
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-body/80">{partner.bio}</p>
              <div className="mt-8">
                <WhatsAppCTA
                  message={`Olá, gostaria de falar com ${partner.name}.`}
                  context={`socia_${partner.slug}`}
                  variant="secondary"
                >
                  Falar com {partner.name.replace("Dra. ", "")}
                </WhatsAppCTA>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-serif-display text-2xl leading-tight text-ink md:text-3xl">
            Fale diretamente com o escritório
          </h2>
          <WhatsAppCTA message="Olá, gostaria de falar com o escritório." context="socias_cta">
            Falar no WhatsApp
          </WhatsAppCTA>
        </Container>
      </section>
    </>
  );
}
