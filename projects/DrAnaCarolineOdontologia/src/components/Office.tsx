"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Office() {
  return (
    <section id="consultorio" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-rose-500">
            Ambiente
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brown-800 mt-3">
            Um consultório feito para o seu conforto
          </h2>
          <p className="text-brown-700/70 mt-4">
            Espaço claro, tranquilo e totalmente equipado para proporcionar
            uma experiência agradável em cada visita.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl max-w-4xl mx-auto aspect-[16/10]"
        >
          <Image
            src="/images/consultorio.jpeg"
            alt="Sala de atendimento do consultório"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-800/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
