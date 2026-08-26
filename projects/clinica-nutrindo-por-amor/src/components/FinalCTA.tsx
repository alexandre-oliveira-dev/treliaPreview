"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-tangerine">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold text-paper sm:text-4xl"
        >
          Vamos cuidar dessa fase juntos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-paper/90"
        >
          Agende uma conversa inicial pelo WhatsApp e conte pra gente o que
          está acontecendo à mesa.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-forest px-8 py-4 text-base font-semibold text-paper shadow-lg transition-colors hover:bg-forest-light"
        >
          Marcar consulta pelo WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
