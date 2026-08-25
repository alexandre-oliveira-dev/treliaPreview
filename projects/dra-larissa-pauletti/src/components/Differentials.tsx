"use client";

import { motion } from "framer-motion";
import { Sparkles, UserRound, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: UserRound,
    title: "Tratamento sob medida",
    text: "Cada paciente é único. O plano de tratamento é pensado para a sua ansiedade, seu histórico e seu tempo — nada de protocolo genérico.",
  },
  {
    icon: Sparkles,
    title: "Consultório tranquilo e acolhedor",
    text: "Um ambiente pensado para reduzir a tensão de quem chega com medo, com atendimento humano do começo ao fim da consulta.",
  },
  {
    icon: ShieldCheck,
    title: "Alta qualificação em extrações",
    text: "Foco e experiência em extração de siso, com protocolos seguros e eficazes que tornam o procedimento mais previsível e confortável.",
  },
];

export default function Differentials() {
  return (
    <section id="abordagem" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark">
            Como cuidamos de você
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-ink-950 sm:text-4xl">
            Uma abordagem pensada para o seu conforto
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-col gap-14 sm:gap-20">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: reversed ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10 ${
                  reversed ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-clay-dark/10 text-clay-dark">
                  <Icon size={28} />
                </div>
                <div className={reversed ? "sm:text-right" : ""}>
                  <h3 className="font-display text-xl italic text-ink-950 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-base leading-relaxed text-ink-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
