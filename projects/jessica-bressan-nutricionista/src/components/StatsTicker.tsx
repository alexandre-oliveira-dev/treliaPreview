"use client";

import { motion } from "motion/react";

const ITEMS = [
  "+1500 alunas",
  "Método Eu+Magra",
  "Emagrecimento sem firula",
  "Saúde da mulher",
  "Comendo de tudo",
  "Curitiba · Juvevê",
];

export function StatsTicker() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-line bg-lime py-3">
      <motion.div
        className="flex w-max items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <span aria-hidden className="text-ink/40">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
