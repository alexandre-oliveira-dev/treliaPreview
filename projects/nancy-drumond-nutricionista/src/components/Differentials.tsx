"use client";

import { motion } from "motion/react";
import { RingCheck } from "./icons/RingCheck";

const ITEMS = [
  "Abordagem individualizada, pensada para o seu corpo e sua rotina",
  "Foco em qualidade de vida além do número na balança",
  "Nutrição sem neura — sem listas de proibições intermináveis",
  "Método prático e acolhedor, construído junto com você",
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-lilac text-plum">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-body font-bold uppercase tracking-[0.25em] text-xs text-rosegold-deep text-center"
        >
          Diferenciais
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-balance mt-3 text-3xl sm:text-4xl md:text-5xl text-center"
        >
          Como funciona o acompanhamento
        </motion.h2>

        <div className="mt-14 flex flex-col gap-6 max-w-lg mx-auto">
          {ITEMS.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <RingCheck size={26} className="text-rosegold-deep shrink-0 mt-0.5" />
              <p className="text-lg leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
