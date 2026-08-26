"use client";

import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Comendo de tudo",
    text: "Sem lista de proibidos. O plano se adapta à sua rotina — não o contrário.",
  },
  {
    title: "Foco na mulher",
    text: "Ciclo hormonal, fases da vida e rotina real entram na conta do plano alimentar.",
  },
  {
    title: "Acompanhamento próximo",
    text: "Ajustes constantes, não uma consulta isolada uma vez por mês.",
  },
  {
    title: "Presencial ou online",
    text: "Atendimento no consultório em Juvevê (Curitiba) ou por videochamada, de onde você estiver.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-forest py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-lime"
        >
          Diferenciais
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-forest p-8 sm:p-10"
            >
              <h3 className="font-display text-2xl tracking-tight text-lime">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-paper/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
