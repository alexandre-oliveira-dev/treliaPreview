"use client";

import { motion } from "motion/react";

export function PulseLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 60"
      fill="none"
      className={`pulse-line-divider w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 30 H180 L205 30 L220 6 L238 54 L256 16 L270 30 H600"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
}
