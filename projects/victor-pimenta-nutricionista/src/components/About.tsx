"use client";

import { motion } from "motion/react";
import { PulseLine } from "./PulseLine";

export function About() {
  return (
    <section id="sobre" className="bg-carbon px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-label text-xs uppercase tracking-[0.28em] text-ignite"
        >
          Quem acompanha
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-4 max-w-2xl font-display text-4xl leading-[0.98] tracking-wide text-chalk sm:text-5xl"
        >
          NUTRIÇÃO SEM ROMANTIZAR RESULTADO.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-chalk-dim sm:text-lg"
        >
          Victor Pimenta é nutricionista esportivo em Belo Horizonte, com
          mais de 55 mil pessoas acompanhando o trabalho no Instagram
          (@ovictorpimenta). A proposta é direta: plano nutricional objetivo,
          orientação honesta e resultado real pra quem treina — sem dieta
          genérica de internet e sem prometer milagre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <PulseLine className="h-10 max-w-md" />
        </motion.div>
      </div>
    </section>
  );
}
