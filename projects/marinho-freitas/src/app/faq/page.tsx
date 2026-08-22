import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Tire suas dúvidas sobre como funciona o atendimento do escritório Marinho & Freitas Advogados.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "Como funciona o primeiro contato com o escritório?",
    answer:
      "Você entra em contato pelo WhatsApp ou pelo formulário do site, descreve brevemente sua situação e recebe orientação sobre os próximos passos, incluindo a possibilidade de agendar uma consulta.",
  },
  {
    question: "É possível fazer uma consulta virtual?",
    answer:
      "Sim. O escritório atende tanto por consulta virtual quanto presencial, conforme a disponibilidade e a preferência do cliente.",
  },
  {
    question: "Em quais áreas o escritório atua?",
    answer:
      "Direito Criminal, Direito de Família e Sucessões, Direito do Consumidor e Direito Empresarial.",
  },
  {
    question: "O escritório atende em São Paulo?",
    answer: `Sim, o escritório está localizado na ${site.address.line1}, ${site.address.line2}.`,
  },
  {
    question: "Quanto tempo leva para receber uma resposta?",
    answer:
      "Situações urgentes recebem atenção prioritária. Para os demais casos, a equipe retorna o contato em um prazo curto para dar andamento à análise.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Perguntas frequentes"
              description="Dúvidas comuns sobre como funciona o atendimento. Para questões específicas sobre o seu caso, fale diretamente com o escritório."
            />
          </FadeIn>

          <FadeInStagger className="mt-12 divide-y divide-line border-t border-line">
            {faqs.map((faq) => (
              <FadeInStaggerItem key={faq.question} y={12}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-display text-lg text-ink">
                    {faq.question}
                    <span className="shrink-0 text-bronze transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body/80">{faq.answer}</p>
                </details>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <FadeIn className="flex flex-col items-center gap-6">
            <h2 className="max-w-xl font-serif-display text-2xl leading-tight text-ink md:text-3xl">
              Não encontrou o que precisava?
            </h2>
            <WhatsAppCTA message="Olá, tenho uma dúvida sobre o atendimento." context="faq_cta">
              Falar com o escritório
            </WhatsAppCTA>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
