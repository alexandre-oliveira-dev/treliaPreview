"use client";

import { motion } from "framer-motion";
import { Ruler, Activity } from "lucide-react";

const METODOS = [
  {
    icon: Ruler,
    title: "Antropometria",
    description:
      "Medidas de peso, dobras cutâneas e circunferências para mapear sua composição corporal com precisão, ponto de partida do acompanhamento.",
  },
  {
    icon: Activity,
    title: "Bioimpedância",
    description:
      "Exame que estima massa magra, massa gorda e água corporal, usado para acompanhar sua evolução ao longo do plano.",
  },
];

export default function AvaliacaoNutricional() {
  return (
    <section id="avaliacao" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-lg"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-tomato-dark">
            Avaliação nutricional
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            Antes do cardápio, entender o seu corpo
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-600">
            Toda consulta parte de uma avaliação nutricional completa, que
            combina antropometria e bioimpedância para montar um plano
            baseado em dados reais — não em tabela genérica.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {METODOS.map((metodo, index) => (
            <motion.div
              key={metodo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              className="flex flex-col rounded-3xl border border-ink-950/10 bg-cream-dim p-7"
            >
              <metodo.icon size={26} className="text-pine" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">
                {metodo.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {metodo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
