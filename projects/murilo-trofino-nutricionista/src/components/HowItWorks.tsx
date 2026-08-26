"use client";

import { motion } from "motion/react";

const ETAPAS = [
  {
    numero: "01",
    titulo: "Avaliação completa",
    texto:
      "Consulta inicial com avaliação clínica, física e do consumo alimentar — entendendo rotina, preferências e objetivos antes de propor qualquer coisa.",
  },
  {
    numero: "02",
    titulo: "Plano personalizado",
    texto:
      "Estratégia nutricional construída para a sua realidade: seus gostos, seus horários, seu treino. Nada de modelo pronto.",
  },
  {
    numero: "03",
    titulo: "Acompanhamento contínuo",
    texto:
      "Suporte entre as consultas e retornos periódicos para ajustar o plano conforme o corpo responde e a rotina muda.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Um processo simples, em três etapas
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-3 sm:gap-8">
          {ETAPAS.map((etapa, i) => (
            <motion.div
              key={etapa.numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
              className="relative border-t border-white/10 py-8 sm:border-t-0 sm:py-0"
            >
              <span className="font-mono text-4xl font-medium text-signal/40 sm:text-5xl">
                {etapa.numero}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-paper">
                {etapa.titulo}
              </h3>
              <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-steel">
                {etapa.texto}
              </p>
              {i < ETAPAS.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-4 bg-white/10 sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
