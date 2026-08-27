"use client";

import { motion } from "motion/react";

const LEADERS = [
  { y: 68, label: "Coroa", x2: 285 },
  { y: 190, label: "Canal", x2: 285 },
  { y: 330, label: "Raiz", x2: 285 },
];

/**
 * Diagrama técnico de corte de dente (referência direta à Endodontia) — peça
 * central da assinatura visual do hero, no lugar de fotografia.
 */
export function RootCanalDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 400"
      className={className}
      role="img"
      aria-label="Diagrama técnico de corte de um dente, mostrando coroa, canal radicular e raiz"
    >
      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Contorno do dente */}
        <path
          d="M90 40
             C90 15, 250 15, 250 40
             C258 70, 250 100, 230 118
             C224 150, 224 210, 216 250
             C213 285, 200 330, 188 365
             C184 378, 168 378, 164 365
             C158 330, 154 290, 150 250
             C146 290, 142 330, 136 365
             C132 378, 116 378, 112 365
             C100 330, 96 285, 93 250
             C85 210, 85 150, 79 118
             C59 100, 51 70, 60 40
             C60 15, 90 15, 90 40 Z"
          fill="var(--indigo-tint)"
          stroke="var(--ink)"
          strokeWidth={2}
        />
        {/* Linha de esmalte/gengiva */}
        <path
          d="M62 118 C120 130, 220 130, 248 118"
          fill="none"
          stroke="var(--ink)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          opacity={0.6}
        />

        {/* Canal radicular em destaque */}
        <motion.path
          d="M164 70 L162 200 L150 360"
          fill="none"
          stroke="var(--coral)"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {LEADERS.map((leader, i) => (
          <motion.g
            key={leader.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
          >
            <line
              x1={230}
              y1={leader.y}
              x2={leader.x2}
              y2={leader.y}
              stroke="var(--ink-500)"
              strokeWidth={1}
            />
            <circle cx={230} cy={leader.y} r={2.5} fill="var(--ink)" />
            <text
              x={leader.x2 + 6}
              y={leader.y + 4}
              fontFamily="var(--font-body)"
              fontSize={13}
              fill="var(--ink-700)"
            >
              {leader.label}
            </text>
          </motion.g>
        ))}
      </motion.g>
    </svg>
  );
}
