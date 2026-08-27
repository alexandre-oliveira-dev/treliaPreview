"use client";

import { motion } from "motion/react";

export function Positioning() {
  return (
    <section id="sobre" className="relative bg-lilac text-plum">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-body font-bold uppercase tracking-[0.25em] text-xs text-rosegold-deep"
        >
          Posicionamento
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance mt-5 text-3xl sm:text-4xl md:text-5xl leading-[1.15]"
        >
          &ldquo;Nutrição não precisa ter neura. Precisa ter estratégia.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg text-plum/75 max-w-xl mx-auto leading-relaxed"
        >
          Nancy Drumond é nutricionista no Centro de Belo Horizonte desde
          2018, formada pela Faculdade Pitágoras com especialização em
          Nutrição Clínica e Emagrecimento. O foco vai além da balança:
          qualidade de vida para quem convive com SOP, com um método prático
          e acolhedor.
        </motion.p>
      </div>
    </section>
  );
}
