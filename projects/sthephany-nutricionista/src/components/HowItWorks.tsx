"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    n: "01",
    title: "Anamnese completa",
    text: "Uma conversa a fundo sobre rotina, histórico, exames e objetivos — presencial em Curitiba ou por videochamada.",
  },
  {
    n: "02",
    title: "Plano sob medida",
    text: "Cardápio flexível construído para a sua realidade, não um modelo genérico de tabela de calorias.",
  },
  {
    n: "03",
    title: "Acompanhamento contínuo",
    text: "Ajustes ao longo do caminho, suporte direto pelo WhatsApp e retornos periódicos para manter o progresso.",
  },
];

export default function HowItWorks() {
  return (
    <section id="atendimento" className="bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-dark">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-espresso sm:text-4xl">
            Presencial em Curitiba
            <span className="italic"> ou online</span>, o processo é o
            mesmo.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-6 border-t border-espresso/10 py-8 first:border-t-0 sm:gap-10"
            >
              <span className="font-mono text-sm text-signal-dark shrink-0 pt-1">
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-xl text-espresso sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-espresso-600 sm:text-base">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
