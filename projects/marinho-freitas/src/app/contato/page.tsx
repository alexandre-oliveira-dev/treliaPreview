import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o escritório Marinho & Freitas Advogados por WhatsApp, agende uma consulta ou envie sua mensagem.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-16 md:grid-cols-2">
        <FadeIn>
          <SectionHeading
            eyebrow="Contato"
            title="Seu problema é urgente para nós"
            description="Escolha a forma mais conveniente de falar com o escritório. Respondemos com atenção a cada mensagem."
          />

          <div className="mt-10 flex flex-col gap-4">
            <WhatsAppCTA
              message="Olá, gostaria de falar com Advogado Online."
              context="contato_page"
              className="justify-start"
            >
              Falar com Advogado Online
            </WhatsAppCTA>
            <WhatsAppCTA
              message="Olá, gostaria de agendar uma consulta virtual."
              context="contato_page_virtual"
              variant="secondary"
              className="justify-start"
            >
              Agendar uma Consulta Virtual
            </WhatsAppCTA>
            <WhatsAppCTA
              message="Olá, gostaria de agendar uma consulta presencial."
              context="contato_page_presencial"
              variant="secondary"
              className="justify-start"
            >
              Agendar uma Consulta Presencial
            </WhatsAppCTA>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-graphite">Endereço</p>
            <p className="mt-2 text-sm text-body/80">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-graphite">Telefone</p>
            <p className="mt-2 text-sm text-body/80">{site.phoneDisplay}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="border border-line bg-paper-alt/40 p-8">
          <h2 className="font-serif-display text-xl text-ink">Envie sua mensagem</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
