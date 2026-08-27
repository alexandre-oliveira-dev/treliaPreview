"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const CORNERS = [
  { key: "tl", className: "top-0 left-0", path: "M0 10 V0 H10" },
  { key: "tr", className: "top-0 right-0", path: "M0 0 H10 V10" },
  { key: "bl", className: "bottom-0 left-0", path: "M0 0 V10 H10" },
  { key: "br", className: "bottom-0 right-0", path: "M10 0 V10 H0" },
];

/**
 * Marca de canto estilo desenho técnico/blueprint — motivo de assinatura.
 * As linhas "desenham" (stroke-dashoffset) na primeira vez que entram em
 * vista.
 */
export function CornerFrame({
  children,
  className,
  color = "var(--ink)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {CORNERS.map((corner, i) => (
        <svg
          key={corner.key}
          viewBox="0 0 10 10"
          className={`absolute h-4 w-4 ${corner.className}`}
          aria-hidden="true"
        >
          <motion.path
            d={corner.path}
            fill="none"
            stroke={color}
            strokeWidth={1.4}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.05 }}
          />
        </svg>
      ))}
      {children}
    </div>
  );
}
