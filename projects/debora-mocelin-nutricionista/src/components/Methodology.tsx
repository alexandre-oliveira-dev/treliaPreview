"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    n: "01",
    title: "Avaliação inicial",
    description:
      "Anamnese completa, histórico de saúde, rotina de treino e composição corporal — o ponto de partida real, não uma tabela padrão.",
  },
  {
    n: "02",
    title: "Diagnóstico metabólico",
    description:
      "Leitura clínica dos exames e marcadores metabólicos para entender como o seu corpo responde hoje, antes de prescrever qualquer coisa.",
  },
  {
    n: "03",
    title: "Plano individualizado",
    description:
      "Estratégia nutricional montada para a sua rotina, seus treinos e seu objetivo — emagrecimento, performance ou saúde metabólica.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    description:
      "Ajustes periódicos com base em resultado real, não em calendário fixo. O plano muda conforme o seu corpo responde.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl"
      >
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-coral-deep">
          Metodologia
        </span>
        <h2 className="font-display mt-4 text-5xl uppercase leading-[0.92] text-ink sm:text-6xl">
          Quatro etapas,
          <br />
          zero achismo
        </h2>
      </motion.div>

      <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
            className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-8 sm:grid-cols-[5rem_1fr_2fr] sm:gap-10"
          >
            <span className="font-mono text-3xl font-bold text-ochre-deep sm:text-4xl">
              {step.n}
            </span>
            <h3 className="font-display text-2xl uppercase tracking-wide text-ink sm:col-start-2">
              {step.title}
            </h3>
            <p className="col-span-2 mt-1 text-ink-soft sm:col-span-1 sm:col-start-3 sm:mt-0">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
