import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/contact";

const AREAS = [
  {
    title: "Direito do Trabalho",
    text: "Rescisões, verbas não pagas, horas extras, assédio, acidentes de trabalho e ações contra demissões irregulares.",
    itens: [
      "Cálculo e cobrança de verbas rescisórias",
      "Reconhecimento de vínculo empregatício",
      "Assédio moral e condições de trabalho",
    ],
  },
  {
    title: "Direito de Família",
    text: "Orientação e representação em processos que exigem sensibilidade tanto quanto técnica jurídica.",
    itens: [
      "Divórcio e partilha de bens",
      "Guarda, visitas e pensão alimentícia",
      "Reconhecimento de união estável",
    ],
  },
  {
    title: "Defensoria Pública / Convênio OAB",
    text: "Atendimento conveniado que amplia o acesso à orientação jurídica de qualidade a quem precisa.",
    itens: [
      "Triagem e orientação inicial",
      "Encaminhamento via convênio OAB",
      "Acompanhamento processual",
    ],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="bg-bordo-950 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-dim">
            Como podemos ajudar
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-snug text-cream md:text-4xl">
            Áreas de atuação
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delayMs={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-gold/15 bg-bordo-900 p-7 transition-colors hover:border-gold/40">
                <h3 className="font-display text-xl text-gold-light">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {area.text}
                </p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-gold/15 pt-5 text-sm text-cream-dim">
                  {area.itens.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(
                    `Olá, Dra. Flávia! Gostaria de tirar uma dúvida sobre ${area.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-gold transition-colors hover:text-gold-light"
                >
                  Falar sobre isso →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
