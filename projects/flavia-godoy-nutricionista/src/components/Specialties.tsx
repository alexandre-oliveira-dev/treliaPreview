"use client";

import { motion } from "motion/react";

const ITEMS = [
  {
    n: "01",
    title: "Ganho de massa",
    text: "Estratégia nutricional para quem treina pesado e quer resultado de composição corporal de verdade.",
  },
  {
    n: "02",
    title: "Emagrecimento com performance",
    text: "Perder peso sem perder energia para treinar — sem dieta restritiva que não se sustenta.",
  },
  {
    n: "03",
    title: "Nutrição esportiva",
    text: "Alimentação ajustada à rotina de treino, com foco em recuperação e desempenho no dia a dia.",
  },
  {
    n: "04",
    title: "Acompanhamento online",
    text: "Consultas por vídeo para quem não está em Belo Horizonte, com o mesmo acompanhamento próximo.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-petrol py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-body font-bold uppercase tracking-[0.25em] text-xs text-copper-light"
        >
          Especialidades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display uppercase text-balance mt-3 text-3xl sm:text-4xl md:text-5xl text-stone max-w-xl"
        >
          Onde a Flavia entra
        </motion.h2>

        <div className="mt-14 divide-y divide-white/10 border-t border-b border-white/10">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-6 md:gap-10 py-7 md:py-8"
            >
              <span className="font-display text-2xl md:text-3xl text-copper/60 group-hover:text-copper transition-colors shrink-0 w-12">
                {item.n}
              </span>
              <div className="flex-1">
                <h3 className="font-display uppercase text-xl md:text-2xl text-stone tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-stone-dim max-w-xl leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
