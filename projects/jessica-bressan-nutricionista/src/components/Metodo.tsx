"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    n: "01",
    title: "Avaliação real",
    text: "Rotina, histórico e relação com a comida — sem julgamento, sem ficha genérica.",
  },
  {
    n: "02",
    title: "Plano sem firula",
    text: "Cardápio construído com o que você já come, ajustado pra gerar resultado de verdade.",
  },
  {
    n: "03",
    title: "Acompanhamento",
    text: "Ajustes ao longo do caminho — o plano muda com você, não o contrário.",
  },
  {
    n: "04",
    title: "Resultado que fica",
    text: "Emagrecimento que se sustenta porque virou hábito, não força de vontade.",
  },
];

export function Metodo() {
  return (
    <section id="metodo" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-clay">Método Eu+Magra</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
            Um caminho, não uma dieta de 30 dias.
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block"
          />
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-lime font-mono text-sm text-ink">
                  {step.n}
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-clay">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
