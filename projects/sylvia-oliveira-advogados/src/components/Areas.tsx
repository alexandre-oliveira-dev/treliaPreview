import Reveal from "./Reveal";

const areas = [
  {
    ref: "01",
    titulo: "Direito de Família",
    resumo:
      "Divórcio, guarda, pensão alimentícia, união estável e reconhecimento de paternidade — conduzidos com atenção ao que cada família precisa preservar.",
    topicos: ["Divórcio consensual e litigioso", "Guarda e regulamentação de visitas", "Pensão alimentícia", "União estável"],
  },
  {
    ref: "02",
    titulo: "Direito das Sucessões",
    resumo:
      "Inventário judicial e extrajudicial, partilha de bens e planejamento sucessório, para que a transição patrimonial não vire desgaste entre quem fica.",
    topicos: ["Inventário e partilha", "Testamento", "Planejamento sucessório", "Sobrepartilha"],
  },
  {
    ref: "03",
    titulo: "Direito Civil",
    resumo:
      "Contratos, responsabilidade civil e questões patrimoniais do dia a dia — resolvidas com clareza sobre prazos, riscos e caminhos possíveis.",
    topicos: ["Contratos e obrigações", "Responsabilidade civil", "Ações possessórias", "Cobranças e indenizações"],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-wine">
            Áreas de atuação
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink-950 text-balance sm:text-4xl">
            Três frentes, um mesmo compromisso: entender antes de agir.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-ink-950/10 border-y border-ink-950/10">
          {areas.map((area, i) => (
            <Reveal key={area.ref} delay={i * 0.05}>
              <div
                className={`grid grid-cols-1 gap-8 py-12 sm:py-14 md:grid-cols-[auto_1fr_1.1fr] md:items-start md:gap-12 ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <span className="font-mono text-sm text-neutral md:order-1">
                  Ref. {area.ref}/03
                </span>

                <h3
                  className={`font-display text-2xl italic text-ink-900 sm:text-3xl md:order-2 ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  {area.titulo}
                </h3>

                <div className={`md:order-3 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <p className="font-body text-base leading-relaxed text-ink-700">
                    {area.resumo}
                  </p>
                  <ul
                    className={`mt-5 flex flex-wrap gap-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-olive-dim ${
                      i % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {area.topicos.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-olive/30 bg-olive/10 px-3 py-1"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
