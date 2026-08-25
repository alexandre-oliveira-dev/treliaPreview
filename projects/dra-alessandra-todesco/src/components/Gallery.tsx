"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Gallery() {
  return (
    <section className="bg-blush px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-wine">
            O consultório
          </span>
          <h2 className="mt-3 font-display text-3xl italic text-ink sm:text-4xl">
            Conheça a clínica
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg sm:mt-10"
          >
            <Image
              src="/images/clinica-consultorio.jpg"
              alt="Sala de atendimento clara e moderna, com cadeira odontológica e vista para a cidade"
              fill
              sizes="(min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg sm:-mt-10"
          >
            <Image
              src="/images/clinica-equipamento.jpg"
              alt="Equipamento odontológico organizado e pronto para atendimento"
              fill
              sizes="(min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
