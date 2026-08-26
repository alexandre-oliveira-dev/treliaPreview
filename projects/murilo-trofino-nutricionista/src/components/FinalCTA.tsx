"use client";

import { motion } from "motion/react";
import { RingMotif } from "./RingMotif";
import { whatsappLink } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <RingMotif
        variant="hero"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Pronto para treinar comendo melhor?
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-steel sm:text-lg">
            Chama no WhatsApp e vamos marcar sua primeira consulta —
            presencial em Curitiba ou online, de onde você estiver.
          </p>
          <motion.a
            href={whatsappLink(
              "Olá, Murilo! Vim pelo site e gostaria de agendar uma consulta."
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-9 inline-block rounded-full bg-signal px-8 py-4 font-body text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(255,106,61,0.3)]"
          >
            Agendar consulta no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
