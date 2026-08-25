"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Avaliação completa",
    description:
      "Conversamos sobre seu histórico, rotina, exames e objetivos — presencial ou por videochamada.",
  },
  {
    number: "02",
    title: "Cardápio sob medida",
    description:
      "Monto um plano alimentar com técnica culinária real: receitas que você gosta e consegue manter.",
  },
  {
    number: "03",
    title: "Acompanhamento próximo",
    description:
      "Retornos periódicos para ajustar o plano conforme seu metabolismo responde, sem fórmula pronta.",
  },
  {
    number: "04",
    title: "Marmitas Nutrichef",
    description:
      "Quem prefere praticidade pode complementar com marmitas preparadas seguindo o próprio cardápio.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative bg-pine py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-lg"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
            Do primeiro contato ao prato na mesa
          </h2>
        </motion.div>

        <ol className="mt-14 flex flex-col gap-0">
          {STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className={`flex flex-col gap-4 border-t border-cream/15 py-8 sm:flex-row sm:items-baseline sm:gap-10 ${
                index === STEPS.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-display text-4xl font-bold text-tomato sm:w-24 sm:shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/70">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
