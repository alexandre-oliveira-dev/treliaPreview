"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PulseLine } from "./PulseLine";

export function OfficeMoment() {
  return (
    <section
      id="consultorio"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-carbon px-5 py-24 sm:px-8"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/escritorio-skyline.jpg"
          alt="Sala de atendimento com vista para o skyline de Belo Horizonte"
          fill
          className="object-cover object-[60%_35%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/20" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-label text-xs uppercase tracking-[0.28em] text-ignite"
        >
          O consultório
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-4 font-display text-4xl leading-[0.98] tracking-wide text-chalk sm:text-5xl"
        >
          ATENDIMENTO NO CENTRO DE BH, COM VISTA PRA CIDADE.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-chalk-dim sm:text-lg"
        >
          Consultório na Santa Efigênia, pertinho do centro — atendimento
          presencial estruturado pra quem prefere sentar e conversar cara a
          cara.
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
