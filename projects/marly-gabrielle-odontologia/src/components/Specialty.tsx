"use client";

import { motion } from "motion/react";

const ITEMS = [
  {
    code: "01",
    title: "Endodontia",
    description:
      "Tratamento de canal com a Dra. Gabrielle Taveira Brianêz, pós-graduada na especialidade (CROSP 119.595).",
  },
  {
    code: "02",
    title: "Atendimento odontológico geral",
    description:
      "Consultas e acompanhamento com as duas dentistas, no mesmo consultório.",
  },
];

export function Specialty() {
  return (
    <section id="especialidade" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-coral-dark">
            Fig. 03 — Atendimento
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Uma especialidade declarada, cuidado completo.
          </h2>
        </motion.div>

        <div className="divide-y divide-ink/12 border-y border-ink/12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-sm text-coral-dark">
                {item.code}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink sm:w-64 sm:shrink-0">
                {item.title}
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-ink-700 sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
