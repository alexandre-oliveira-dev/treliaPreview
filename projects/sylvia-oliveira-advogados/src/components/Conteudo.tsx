import Reveal from "./Reveal";

const recortes = [
  {
    tag: "Família",
    titulo: "Divórcio consensual: quando dá para resolver sem disputa judicial",
    resumo:
      "Existindo acordo sobre partilha e guarda, o processo pode ser feito em cartório — mais rápido e menos desgastante para todos.",
    rotacao: "-rotate-2",
  },
  {
    tag: "Sucessões",
    titulo: "Inventário: por que o prazo de 2 meses raramente é cumprido",
    resumo:
      "A lei prevê abertura em até 60 dias do óbito, mas levantamento de bens e documentação costumam levar mais tempo — o importante é começar cedo.",
    rotacao: "rotate-1",
  },
  {
    tag: "Família",
    titulo: "União estável tem os mesmos efeitos sucessórios do casamento",
    resumo:
      "Reconhecida a união, o companheiro concorre à herança nas mesmas condições de um cônjuge, conforme entendimento consolidado do STF.",
    rotacao: "-rotate-1",
  },
  {
    tag: "Cível",
    titulo: "Cobrança indevida: o que caracteriza dano moral",
    resumo:
      "Nem todo aborrecimento gera indenização — mas cobrança vexatória, negativação indevida e exposição pública costumam configurar.",
    rotacao: "rotate-2",
  },
];

export default function Conteudo() {
  return (
    <section id="conteudo" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-wine">
            Conteúdo
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink-950 text-balance sm:text-4xl">
            Anotações do escritório sobre o que costuma gerar dúvida.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {recortes.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 0.05}>
              <article
                className={`h-full rounded-sm border border-dashed border-ink-950/25 bg-[#f6f4ec] p-7 shadow-[0_12px_30px_-18px_rgba(42,33,48,0.4)] transition-transform hover:rotate-0 ${r.rotacao}`}
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-wine">
                  {r.tag}
                </span>
                <h3 className="mt-3 font-display text-xl leading-snug text-ink-900">
                  {r.titulo}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-700">
                  {r.resumo}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
