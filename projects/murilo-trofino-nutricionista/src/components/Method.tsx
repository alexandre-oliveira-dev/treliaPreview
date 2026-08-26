"use client";

import { motion } from "motion/react";
import { RingMotif } from "./RingMotif";

const PRINCIPIOS = [
  {
    titulo: "Nada de dieta restritiva",
    texto:
      "O plano parte do que você já come e gosta de comer. Ajustamos a rotina real, não uma rotina ideal que ninguém segue.",
  },
  {
    titulo: "Avaliação além da balança",
    texto:
      "Métricas físicas, consumo alimentar, hábitos e preferências entram na análise — peso é só um número entre vários.",
  },
  {
    titulo: "Baseado em ciência",
    texto:
      "Estratégias construídas em evidência, não em modismo. O objetivo é resultado real e sustentável, sem sofrimento.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative bg-ink py-20 sm:py-28">
      <RingMotif
        variant="divider"
        className="pointer-events-none absolute -left-8 top-0 h-40 w-40 opacity-70 sm:h-56 sm:w-56"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-calm">
            Método
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Alimentação pensada para a sua rotina, não o contrário
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-steel sm:text-lg">
            Cada plano começa com uma avaliação clínica completa: rotina,
            preferências, hábitos e histórico. A partir daí, a estratégia
            nutricional é desenhada sob medida — com suporte contínuo entre
            as consultas e ajustes a cada retorno, conforme o corpo e a vida
            real respondem.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PRINCIPIOS.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-surface p-6"
            >
              <h3 className="font-display text-lg font-semibold text-paper">
                {p.titulo}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-steel">
                {p.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
