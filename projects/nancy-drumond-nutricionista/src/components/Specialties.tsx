"use client";

import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Síndrome dos Ovários Policísticos",
    text: "Estratégia nutricional para destravar o emagrecimento e controlar os sintomas de quem tem SOP.",
  },
  {
    title: "Saúde da mulher",
    text: "Acompanhamento que olha para o ciclo hormonal como parte do resultado, não como obstáculo.",
  },
  {
    title: "Emagrecimento com qualidade de vida",
    text: "Resultado sustentável, sem restrição extrema — foco em como você vive o dia a dia, não só no peso.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-plum py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-body font-bold uppercase tracking-[0.25em] text-xs text-rosegold-light text-center"
        >
          Especialidades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-balance mt-3 text-3xl sm:text-4xl md:text-5xl text-ivory text-center"
        >
          Onde a Nancy entra
        </motion.h2>

        <div className="mt-14 flex flex-col gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-rosegold pl-6 py-2"
            >
              <h3 className="font-display text-xl md:text-2xl text-ivory">
                {item.title}
              </h3>
              <p className="mt-2 text-lilac-dim max-w-xl leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
