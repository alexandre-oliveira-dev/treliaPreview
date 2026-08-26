"use client";

import { motion } from "motion/react";

type TrackLaneProps = {
  className?: string;
  flip?: boolean;
};

/**
 * Assinatura visual do projeto: curva de raia de pista de atletismo com
 * linha pontilhada central, desenhada via stroke-dasharray (pathLength) ao
 * entrar em viewport. Usada como divisor autoral entre seções.
 */
export function TrackLane({ className = "", flip = false }: TrackLaneProps) {
  return (
    <svg
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      className={`w-full h-full ${flip ? "-scale-y-100" : ""} ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M0,50 C100,50 90,10 200,10 C310,10 300,50 400,50"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,50 C100,50 90,10 200,10 C310,10 300,50 400,50"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.15 }}
      />
    </svg>
  );
}
