"use client";

import { motion } from "motion/react";

type BrassVeinProps = {
  className?: string;
  flip?: boolean;
};

/**
 * Assinatura visual do projeto: traço fino inspirado nos veios reais do
 * mármore do consultório, desenhado à mão (não é textura literal). Anima
 * como se estivesse sendo "riscado" ao entrar em viewport.
 */
export function BrassVein({ className = "", flip = false }: BrassVeinProps) {
  return (
    <svg
      viewBox="0 0 800 60"
      fill="none"
      className={`brass-vein-divider w-full ${flip ? "-scale-y-100" : ""} ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 30 C 90 8, 140 52, 220 28 C 270 12, 300 44, 360 26 C 410 10, 440 40, 500 30 C 560 20, 600 48, 660 24 C 710 6, 750 36, 800 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.9 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M60 40 C 130 46, 180 18, 250 34"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity={0.5}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M520 16 C 580 30, 630 6, 700 18"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity={0.5}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}
