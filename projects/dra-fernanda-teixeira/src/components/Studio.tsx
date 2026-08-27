"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT } from "@/lib/contact";

export function Studio() {
  return (
    <section id="consultorio" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-dark">
            O consultório
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Um espaço clean, sofisticado e pensado para o seu conforto.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {CONTACT.displayName} recebe cada paciente num consultório
            projetado para transmitir tranquilidade desde a entrada — sem o
            clima frio de clínica hospitalar, com atenção aos detalhes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]"
        >
          <Image
            src="/images/consultorio.jpeg"
            alt="Recepção do consultório da Dra. Fernanda Teixeira: mármore branco, luminária dourada e piso em porcelanato"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
