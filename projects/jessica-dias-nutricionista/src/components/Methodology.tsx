"use client";

import { motion } from "motion/react";
import { LeafMark } from "./LeafMark";

const STEPS = [
  {
    n: "01",
    title: "Primeira conversa",
    description:
      "Anamnese completa: rotina, histórico de saúde, relação com a comida e o que já foi tentado antes — sem julgamento.",
  },
  {
    n: "02",
    title: "Objetivos claros",
    description:
      "Definição conjunta de metas realistas, considerando sua rotina de verdade, não a rotina ideal de um plano de dieta genérico.",
  },
  {
    n: "03",
    title: "Plano individual",
    description:
      "Orientação nutricional construída para o seu dia a dia, com espaço para os alimentos que você gosta de comer.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    description:
      "Retornos periódicos para ajustar o plano conforme seu corpo e sua rotina respondem — sem abandono após a primeira consulta.",
  },
];

export function Methodology() {
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
          Como funciona
        </span>
        <h2 className="font-display mt-4 text-4xl leading-[1.1] text-bark sm:text-5xl">
          Um caminho,
          <br />
          passo a passo
        </h2>
      </motion.div>

      <div className="relative mt-16 pl-8 sm:pl-10">
        <div className="stem-line absolute top-2 bottom-2 left-[7px] w-[2px] sm:left-[9px]" />
        {STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            className="relative pb-14 last:pb-0"
          >
            <LeafMark
              size={18}
              className="absolute -left-8 top-1 text-gold sm:-left-10"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bark-mute">
              Etapa {step.n}
            </span>
            <h3 className="font-display mt-2 text-2xl text-bark">
              {step.title}
            </h3>
            <p className="mt-2 max-w-lg text-bark-soft">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
