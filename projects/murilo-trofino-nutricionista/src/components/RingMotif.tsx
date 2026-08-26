"use client";

import { motion } from "motion/react";

type RingArc = {
  radius: number;
  color: string;
  strokeWidth: number;
  dashArray: string;
  rotate: number;
  duration: number;
  opacity?: number;
};

const HERO_ARCS: RingArc[] = [
  {
    radius: 170,
    color: "var(--signal)",
    strokeWidth: 3,
    dashArray: "760 1200",
    rotate: -40,
    duration: 1.6,
  },
  {
    radius: 130,
    color: "var(--calm)",
    strokeWidth: 3,
    dashArray: "560 900",
    rotate: 120,
    duration: 1.8,
  },
  {
    radius: 92,
    color: "var(--steel)",
    strokeWidth: 2,
    dashArray: "380 620",
    rotate: 210,
    duration: 2,
    opacity: 0.6,
  },
];

/**
 * Elemento de assinatura visual do projeto: anel/arco (activity ring / anel
 * de macronutrientes). Reaproveitado em três contextos:
 * - "hero": composição grande de 3 arcos concêntricos parciais, atrás da foto
 * - "icon": anel simples com um corte, usado como logomarca no header
 * - "divider": arco parcial único, sutil, usado como divisor entre seções
 */
export function RingMotif({
  variant = "hero",
  className,
}: {
  variant?: "hero" | "icon" | "divider";
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 40 40"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="var(--signal)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="88 100"
          strokeDashoffset="10"
        />
      </svg>
    );
  }

  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        aria-hidden="true"
        fill="none"
      >
        <motion.path
          d="M 20 100 A 80 80 0 0 1 140 30"
          stroke="var(--calm)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {HERO_ARCS.map((arc, i) => (
        <motion.circle
          key={i}
          cx="200"
          cy="200"
          r={arc.radius}
          stroke={arc.color}
          strokeWidth={arc.strokeWidth}
          strokeLinecap="round"
          strokeDasharray={arc.dashArray}
          transform={`rotate(${arc.rotate} 200 200)`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: arc.opacity ?? 1 }}
          transition={{
            duration: arc.duration,
            ease: "easeOut",
            delay: 0.2 + i * 0.25,
          }}
        />
      ))}
    </svg>
  );
}
