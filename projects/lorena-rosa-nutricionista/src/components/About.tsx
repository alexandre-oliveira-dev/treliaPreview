"use client";

import { motion } from "motion/react";
import { BrassVein } from "./BrassVein";

export function About() {
  return (
    <section id="sobre" className="bg-ivory px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-label text-xs uppercase tracking-[0.28em] text-brass-deep"
        >
          Sobre a nutricionista
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-3xl italic leading-snug text-balance sm:text-4xl"
        >
          &ldquo;Te ajudo a emagrecer comendo o básico — sem dietas
          malucas.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          Há 7 anos Lorena Rosa acompanha pacientes em Belo Horizonte com
          nutrição clínica e nutrição bariátrica, unindo rigor técnico a uma
          abordagem realista: sem restrição extrema, sem dieta da moda —
          reeducação alimentar que cabe na rotina de verdade. Já são mais de
          1.200 pacientes atendidos, presencialmente no consultório em
          Funcionários ou por atendimento online.
        </motion.p>

        <div className="mt-12">
          <BrassVein className="h-8 opacity-70" />
        </div>
      </div>
    </section>
  );
}
