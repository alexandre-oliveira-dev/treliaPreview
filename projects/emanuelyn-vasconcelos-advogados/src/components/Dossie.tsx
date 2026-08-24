import Reveal from "./Reveal";

const servicos = [
  {
    ref: "01",
    titulo: "Análise de Contratos",
    resumo:
      "Revisão detalhada de contratos bancários para identificar cláusulas abusivas.",
  },
  {
    ref: "02",
    titulo: "Contestação de Juros Abusivos",
    resumo:
      "Identificação e contestação de juros abusivos cobrados por instituições financeiras.",
  },
  {
    ref: "03",
    titulo: "Negociações e Ações Judiciais",
    resumo:
      "Condução de negociações e ações judiciais para assegurar os direitos dos clientes.",
  },
  {
    ref: "04",
    titulo: "Revisão de Empréstimos Consignados e Financiamentos",
    resumo: "Verificação de cláusulas abusivas, taxas e encargos excessivos.",
  },
  {
    ref: "05",
    titulo: "Exclusão de Nome em Órgãos de Proteção ao Crédito",
    resumo: "Retirada do nome do cliente do SPC/Serasa por cobranças indevidas.",
  },
  {
    ref: "06",
    titulo: "Golpes Bancários e Fraudes Financeiras",
    resumo:
      "Ação judicial para reaver valores de transferências não reconhecidas.",
  },
];

export default function Dossie() {
  return (
    <section id="servicos" className="bg-paper px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-brass-dim">
            Dossiê de atuação
          </p>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
            Seis frentes de defesa contra abusos do sistema financeiro.
          </h2>
        </Reveal>

        <ol className="dossie-rail mt-16 space-y-10 sm:space-y-12">
          {servicos.map((servico, i) => (
            <Reveal key={servico.ref} delay={i * 0.06}>
              <li className="relative flex gap-6 pl-2 sm:gap-9">
                <span
                  className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass bg-paper font-display text-lg italic text-brass-dim sm:h-14 sm:w-14 sm:text-xl"
                  aria-hidden
                >
                  {servico.ref}
                </span>
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-display text-xl italic text-ink-900 sm:text-2xl">
                    {servico.titulo}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">
                    {servico.resumo}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
