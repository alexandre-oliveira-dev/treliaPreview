"use client";

import { motion } from "motion/react";

const METRICS = [
  { value: "20", suffix: "anos", label: "de atuação em nutrição esportiva" },
  { value: "7.8K", suffix: "", label: "pessoas acompanham no Instagram" },
  { value: "2", suffix: "formatos", label: "atendimento presencial e online" },
];

export function MetricsBand() {
  return (
    <section className="bg-petrol border-y border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center sm:border-l sm:first:border-l-0 sm:border-white/10 sm:px-6"
          >
            <div className="font-display text-5xl md:text-6xl text-copper flex items-baseline justify-center gap-2">
              {m.value}
              {m.suffix && (
                <span className="font-body text-base font-bold uppercase tracking-wider text-stone-dim">
                  {m.suffix}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-stone-dim max-w-[220px] mx-auto leading-relaxed">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
