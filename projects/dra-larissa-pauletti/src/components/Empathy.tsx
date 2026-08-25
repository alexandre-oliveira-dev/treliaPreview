"use client";

import { motion } from "framer-motion";
import SmileArc from "./SmileArc";

export default function Empathy() {
  return (
    <section className="relative bg-sand-dim py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark"
        >
          A gente entende o medo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-5 font-display text-3xl leading-snug text-ink-950 text-balance sm:text-4xl"
        >
          Quase todo mundo adia a extração do siso porque já ouviu uma
          história de terror sobre ela.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg"
        >
          A Dra. Larissa se especializou exatamente nisso: explicar cada
          etapa, respeitar o tempo de cada paciente e conduzir o
          procedimento com uma calma que muda completamente a experiência —
          antes, durante e depois.
        </motion.p>

        <div className="mt-10 flex justify-center text-clay/50">
          <SmileArc className="max-w-xs" />
        </div>
      </div>
    </section>
  );
}
