"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/Reveal";

const DEPOIMENTOS = [
  {
    quote:
      "Eu me senti acolhida desde a primeira conversa. A Dra. Letícia explicou cada passo do processo e conseguiu a guarda dos meus filhos sem que eu precisasse enfrentar tudo sozinha.",
    author: "M. S.",
    context: "Guarda e convivência",
  },
  {
    quote:
      "O divórcio parecia impossível até eu encontrar o escritório. Rápida, direta e extremamente competente — hoje sigo minha vida em paz.",
    author: "R. A.",
    context: "Divórcio",
  },
  {
    quote:
      "Depois de meses tentando resolver o inventário sozinha, em poucas semanas com a Dra. Letícia tudo se encaminhou. Recomendo de olhos fechados.",
    author: "C. F.",
    context: "Inventário",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);
  const current = DEPOIMENTOS[index];

  return (
    <section id="depoimentos" className="bg-sand-dim py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay-dim">
            O que algumas clientes estão falando
          </p>
        </Reveal>

        <div className="relative mt-10 min-h-[220px] sm:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-balance font-display text-2xl italic leading-snug text-ink-950 sm:text-3xl">
                “{current.quote}”
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-clay-dim">
                {current.author} — {current.context}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {DEPOIMENTOS.map((d, i) => (
            <button
              key={d.author}
              aria-label={`Ver depoimento de ${d.author}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-clay" : "bg-ink-950/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
