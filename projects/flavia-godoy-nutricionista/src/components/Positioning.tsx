"use client";

import { motion } from "motion/react";
import { TrackLane } from "./TrackLane";

export function Positioning() {
  return (
    <section id="sobre" className="relative bg-stone text-petrol">
      <div className="h-10 md:h-14 text-copper-deep">
        <TrackLane />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8 pb-20 md:pb-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-body font-bold uppercase tracking-[0.25em] text-xs text-sage-deep"
        >
          Posicionamento
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display uppercase text-balance mt-5 text-3xl sm:text-4xl md:text-5xl leading-[1.08]"
        >
          Performance sustentável.
          <br />
          Não uma fórmula pronta
          <br />
          de suplemento.
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg text-petrol/70 max-w-xl mx-auto leading-relaxed"
        >
          Flavia Godoy é nutricionista esportiva há 20 anos em Belo Horizonte,
          com atendimento presencial e online — para quem busca ganho de
          massa, emagrecimento ou simplesmente comer melhor sem abrir mão de
          performance no dia a dia.
        </motion.p>
      </div>
    </section>
  );
}
