"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Ambiente() {
  return (
    <section id="ambiente" className="relative overflow-hidden py-20 sm:py-28">
      <div className="facet-field facet-field-soft pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Ambiente
          </span>
          <h2 className="mt-4 font-display text-3xl italic text-charcoal-950 sm:text-4xl">
            Um consultório pensado para acolher
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-700">
            Mármore, dourado e detalhes cuidados em cada canto — para que a
            visita ao dentista seja uma experiência tranquila, do início ao
            fim.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:col-span-3"
          >
            <Image
              src="/images/recepcao.jpg"
              alt="Recepção do consultório da Dra. Marianina Muñoz, com mármore e detalhes dourados"
              fill
              sizes="(min-width: 640px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:col-span-2"
          >
            <Image
              src="/images/consultorio-atendimento.jpg"
              alt="Dra. Marianina Muñoz conversando com uma paciente no consultório"
              fill
              sizes="(min-width: 640px) 35vw, 100vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
