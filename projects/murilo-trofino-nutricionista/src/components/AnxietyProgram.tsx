"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/constants";

export function AnxietyProgram() {
  return (
    <section className="relative overflow-hidden bg-[#1a2320] py-24 sm:py-36">
      <div className="pointer-events-none absolute -right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 opacity-40">
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            stroke="var(--calm)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="640 950"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-calm">
            Programa Ansiedade e Comer Consciente
          </span>
          <h2 className="mx-auto mt-6 max-w-xl font-display text-3xl font-semibold leading-snug text-paper sm:text-4xl">
            Uma pausa na intensidade — para quem come pela ansiedade, não
            pela fome
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-base leading-loose text-steel">
            Um espaço próprio, mais lento, para reconstruir a relação com a
            comida sem culpa e sem regras rígidas. Trabalhamos consciência
            alimentar, reconhecimento dos gatilhos emocionais e uma rotina
            que faça sentido para você — com o mesmo cuidado clínico, em outro
            ritmo.
          </p>

          <motion.a
            href={whatsappLink(
              "Olá, Murilo! Tenho interesse no Programa Ansiedade e Comer Consciente."
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10 inline-block rounded-full border border-calm/50 px-7 py-3.5 font-body text-sm font-medium text-paper transition-colors hover:bg-calm/10"
          >
            Conversar sobre o programa
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
