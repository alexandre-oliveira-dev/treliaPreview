"use client";

import { motion } from "motion/react";

type CycleRingProps = {
  className?: string;
};

/**
 * Assinatura visual do projeto: arco concêntrico incompleto, referência
 * sutil ao ciclo hormonal (tema do posicionamento em SOP). Desenhado via
 * stroke-dasharray (pathLength) ao entrar em viewport.
 */
export function CycleRing({ className = "" }: CycleRingProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="92"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 10"
        opacity={0.35}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <motion.path
        d="M100 20 A80 80 0 0 1 178 92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path
        d="M100 180 A80 80 0 0 1 22 108"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>
  );
}
