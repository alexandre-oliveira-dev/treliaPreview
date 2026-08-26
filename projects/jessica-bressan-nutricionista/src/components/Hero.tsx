"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink pt-32 pb-24 text-paper sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 79px, #f6f1e4 79px, #f6f1e4 80px)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-lime"
          >
            Nutricionista · Curitiba/PR
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-[clamp(1.85rem,9vw,4.5rem)] leading-[0.95] tracking-tight"
          >
            Emagrecimento
            <br />
            sem firula.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-md text-lg text-paper/75"
          >
            Comendo de tudo. Sem dieta da moda, sem chá milagroso — só método,
            acompanhamento de verdade e resultado que se sustenta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappLink("Oi Jéssica! Quero saber mais sobre o método Eu+Magra.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-lime px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#metodo"
              className="font-mono text-sm uppercase tracking-widest text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-lime"
            >
              Conhecer o método
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mx-auto flex aspect-square w-44 shrink-0 flex-col items-center justify-center rounded-full border border-lime/40 bg-forest text-center sm:w-56 lg:ml-auto lg:mr-0"
        >
          <span className="font-display text-4xl text-lime sm:text-5xl">1500+</span>
          <span className="mt-1 px-4 font-mono text-[10px] uppercase tracking-widest text-paper/70">
            alunas no método Eu+Magra
          </span>
        </motion.div>
      </div>
    </section>
  );
}
