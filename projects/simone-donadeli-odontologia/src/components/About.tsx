"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT } from "@/lib/contact";

export function About() {
  return (
    <section id="sobre" className="bg-stone py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="facet-frame relative aspect-[6/5] w-full bg-ink-950"
        >
          <Image
            src="/images/consultorio.jpeg"
            alt="Consultório odontológico da Dra. Simone Donadeli Camelo"
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-dark">
            O consultório
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Um espaço pensado para atendimento tranquilo, no centro de
            Barretos.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700 sm:text-lg">
            A Dra. Simone Donadeli Camelo ({CONTACT.cro}) atende como
            clínico-geral e conduz procedimentos de implantes dentários,
            harmonização facial e cirurgias diretamente no consultório,
            acompanhando cada etapa do tratamento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
