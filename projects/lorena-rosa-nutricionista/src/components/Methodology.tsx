"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Avaliação inicial",
    description:
      "Anamnese completa, histórico de saúde e objetivos — presencial ou por videochamada.",
  },
  {
    number: "02",
    title: "Plano sob medida",
    description:
      "Protocolo alimentar realista, construído a partir da sua rotina real — sem dieta genérica de gaveta.",
  },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Retornos periódicos para ajustar o plano conforme o resultado e a fase do processo.",
  },
];

export function Methodology() {
  return (
    <section id="metodo" className="bg-ivory px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-label text-xs uppercase tracking-[0.28em] text-brass-deep"
        >
          Como funciona
        </motion.p>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative border-t-2 border-brass pt-6"
            >
              <span className="font-label text-4xl text-brass-deep/40">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
