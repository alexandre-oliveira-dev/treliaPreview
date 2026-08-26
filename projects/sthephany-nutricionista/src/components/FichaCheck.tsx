"use client";

import { motion } from "motion/react";

export default function FichaCheck({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M6 17.5 C9.5 20.5 11.8 22.8 13.2 24.5 C17.5 17.8 22 12 26.5 8"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      />
    </svg>
  );
}
