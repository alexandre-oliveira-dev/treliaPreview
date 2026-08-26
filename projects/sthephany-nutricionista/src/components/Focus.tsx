"use client";

import { motion } from "motion/react";
import FichaCheck from "./FichaCheck";

const FOCUS_AREAS = [
  {
    label: "Emagrecimento feminino",
    text: "Protocolos individuais que respeitam o ciclo hormonal — sem dietas restritivas que não se sustentam.",
  },
  {
    label: "Saúde da mulher",
    text: "Nutrição para TPM, tireoide, intestino e disposição — o corpo funcionando a seu favor.",
  },
  {
    label: "Longevidade",
    text: "Hábitos alimentares construídos para durar décadas, não só até a próxima balança.",
  },
  {
    label: "Performance",
    text: "Energia e recuperação para treino, trabalho e rotina — sem depender de força de vontade.",
  },
];

export default function Focus() {
  return (
    <section id="abordagem" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-dark">
            Ficha de atuação
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-espresso sm:text-4xl">
            Nutricionista focada em quatro frentes,{" "}
            <span className="italic">não em fórmula pronta.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`ficha-tab bg-white/60 border border-espresso/10 px-6 py-7 sm:px-8 sm:py-8 ${
                i === 0 ? "sm:translate-y-6" : ""
              } ${i === 3 ? "sm:-translate-y-6" : ""}`}
            >
              <FichaCheck className="h-8 w-8 text-signal" delay={i * 0.05} />
              <h3 className="mt-4 font-display text-xl text-espresso">
                {area.label}
              </h3>
              <div className="ficha-rule mt-3 mb-3 text-espresso/15" />
              <p className="text-sm leading-relaxed text-espresso-600">
                {area.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
