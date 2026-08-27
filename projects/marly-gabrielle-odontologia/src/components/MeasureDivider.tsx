"use client";

import { motion } from "motion/react";

/**
 * Divisor "linha de cota" (estilo desenho técnico), variação em linha do
 * motivo de assinatura — separa seções em vez de uma régua reta simples.
 */
export function MeasureDivider({ label }: { label?: string }) {
  return (
    <div
      className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-2 text-ink-500 sm:px-8"
      aria-hidden="true"
    >
      <span className="h-2 w-px bg-ink-500/50" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-px flex-1 bg-[repeating-linear-gradient(90deg,currentColor_0,currentColor_6px,transparent_6px,transparent_12px)] opacity-50"
      />
      {label ? (
        <span className="font-display text-[11px] tracking-widest uppercase">
          {label}
        </span>
      ) : null}
      <span className="h-2 w-px bg-ink-500/50" />
    </div>
  );
}
