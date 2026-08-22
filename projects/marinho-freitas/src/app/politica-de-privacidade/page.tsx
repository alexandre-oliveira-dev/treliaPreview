import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados do escritório Marinho & Freitas Advogados.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <SectionHeading eyebrow="Legal" title="Política de Privacidade" />
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-body/80">
          <p>
            [Conteúdo a ser preenchido pelo escritório em conformidade com a Lei Geral de
            Proteção de Dados (LGPD — Lei nº 13.709/2018).]
          </p>
          <p>
            Esta página deve detalhar quais dados pessoais são coletados através do site e do
            formulário de contato, a finalidade do tratamento, o tempo de retenção, os direitos do
            titular dos dados e os canais de contato do encarregado de proteção de dados (DPO),
            quando aplicável.
          </p>
          <p>
            Para dúvidas sobre privacidade e tratamento de dados, entre em contato pelo WhatsApp{" "}
            {site.phoneDisplay} ou pelos demais canais informados na página de Contato.
          </p>
        </div>
      </Container>
    </section>
  );
}
