"use client";

import { motion } from "motion/react";

const PARTNERS = [
  { name: "Heavy Suppz", note: "suplementos · cupom VITAO" },
  { name: "MXD Conceito", note: "roupas fitness · cupom VITAO" },
  { name: "Vivaí Marmitas", note: "marmitas personalizadas · cupom VICTOR5" },
];

export function Partners() {
  return (
    <section className="border-y border-chalk/10 bg-carbon-soft px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-label text-xs uppercase tracking-[0.28em] text-steel shrink-0">
          Parceiros
        </span>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col"
            >
              <span className="font-display text-2xl tracking-wide text-chalk">
                {partner.name}
              </span>
              <span className="font-label text-[10px] uppercase tracking-[0.1em] text-ignite">
                {partner.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
