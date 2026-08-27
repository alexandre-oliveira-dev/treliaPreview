"use client";

import { motion } from "motion/react";
import clsx from "clsx";

type LeafDividerProps = {
  className?: string;
  flip?: boolean;
  tone?: "sage" | "ivory" | "stone";
};

const TONE_COLOR: Record<NonNullable<LeafDividerProps["tone"]>, string> = {
  sage: "var(--sage)",
  ivory: "var(--ivory)",
  stone: "var(--stone-dim)",
};

/**
 * Assinatura visual do projeto: traço orgânico único inspirado no perfil de
 * uma folha/gota (referência sutil à identidade "sálvia"). Usado como
 * divisor entre seções e como acento de fundo — nenhum outro projeto da
 * pasta usa esse motivo (os irmãos usam facetas geométricas, blobs ou
 * frisos dourados).
 */
export function LeafDivider({ className, flip, tone = "sage" }: LeafDividerProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none w-full overflow-hidden leading-[0]",
        flip && "-scale-y-100",
        className
      )}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-10 w-full sm:h-14"
      >
        <motion.path
          d="M0 30 C 180 4, 320 4, 460 30 C 560 48, 640 48, 700 30 C 800 0, 980 0, 1080 22 C 1130 32, 1170 32, 1200 24"
          fill="none"
          stroke={TONE_COLOR[tone]}
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}

/**
 * Marca compacta usada no cabeçalho/rodapé: silhueta minimal de gota/folha.
 */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className={className}
      fill="none"
    >
      <path
        d="M16 4c6 4 10 10 10 16a10 10 0 1 1-20 0c0-6 4-12 10-16Z"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path d="M16 11v15" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  );
}
