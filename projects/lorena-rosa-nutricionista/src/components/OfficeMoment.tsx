"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BrassVein } from "./BrassVein";

export function OfficeMoment() {
  return (
    <section
      id="consultorio"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink px-5 py-24 sm:px-8"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/consultorio-recepcao.jpg"
          alt="Recepção do consultório de Lorena Rosa, com mármore grafite, madeira e sofá azul-marinho"
          fill
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-label text-xs uppercase tracking-[0.28em] text-brass"
        >
          O consultório
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-3xl italic leading-snug text-balance sm:text-4xl"
        >
          Um espaço pensado para você se sentir à vontade em cada retorno.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-ivory-dim leading-relaxed"
        >
          Atendimento presencial na Rua Bernardo Guimarães, no bairro
          Funcionários — Belo Horizonte.
        </motion.p>

        <div className="mx-auto mt-10 max-w-xs">
          <BrassVein className="h-8" />
        </div>
      </div>
    </section>
  );
}
