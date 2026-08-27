"use client";

import { motion } from "motion/react";

type Facet = {
  points: string;
  fill: string;
  opacity?: number;
};

const FACETS: Facet[] = [
  { points: "0,0 38,0 22,30 0,26", fill: "var(--teal)", opacity: 0.9 },
  { points: "38,0 68,0 58,22 22,30", fill: "var(--teal-light)", opacity: 0.55 },
  { points: "68,0 100,0 100,18 58,22", fill: "var(--stone-deep)", opacity: 0.6 },
  { points: "0,26 22,30 26,58 0,60", fill: "var(--stone-deep)", opacity: 0.5 },
  { points: "22,30 58,22 60,52 26,58", fill: "var(--teal-dark)", opacity: 0.85 },
  { points: "58,22 100,18 100,46 60,52", fill: "var(--teal)", opacity: 0.4 },
  { points: "0,60 26,58 30,100 0,100", fill: "var(--teal-dark)", opacity: 0.35 },
  { points: "26,58 60,52 64,100 30,100", fill: "var(--stone-deep)", opacity: 0.7 },
  { points: "60,52 100,46 100,100 64,100", fill: "var(--teal-light)", opacity: 0.45 },
];

/**
 * Motivo de assinatura: facetas irregulares inspiradas no corte da pedra
 * travertino real do consultório. Usado como backdrop do retrato, textura de
 * seção e divisor. As facetas "montam" em stagger no load/scroll.
 */
export function FacetField({
  className,
  viewportTriggered = false,
}: {
  className?: string;
  viewportTriggered?: boolean;
}) {
  const animProps = viewportTriggered
    ? { whileInView: "shown", viewport: { once: true, amount: 0.4 } }
    : { animate: "shown" };

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {FACETS.map((facet, i) => (
        <motion.polygon
          key={facet.points}
          points={facet.points}
          fill={facet.fill}
          initial={{ opacity: 0, scale: 0.85 }}
          variants={{ shown: { opacity: facet.opacity ?? 1, scale: 1 } }}
          transition={{
            duration: 0.55,
            delay: i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "50% 50%" }}
          {...animProps}
        />
      ))}
    </svg>
  );
}
