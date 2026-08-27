"use client";

import { motion } from "motion/react";
import { CONTACT, whatsAppLink } from "@/lib/contact";
import { RootCanalDiagram } from "./RootCanalDiagram";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-paper pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 border border-ink/25 px-3 py-1 font-display text-xs font-medium tracking-wide text-ink-700"
          >
            Fig. 01 — Bairro Aeroporto, Barretos-SP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Duas dentistas, um cuidado <span className="text-coral">de precisão</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-700 sm:text-lg"
          >
            Dra. Marly Caroline P.Z.Cital e Dra. Gabrielle Taveira Brianêz
            (Endodontia, CROSP 119.595) atendem juntas no mesmo consultório,
            no bairro Aeroporto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsAppLink("Olá! Vi o site e quero agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-coral-dark active:scale-[0.98] sm:text-base"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={`tel:+${CONTACT.phoneWhatsApp}`}
              className="text-sm font-medium text-ink-700 underline decoration-coral/50 decoration-2 underline-offset-4 transition-colors hover:text-coral-dark sm:text-base"
            >
              {CONTACT.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <RootCanalDiagram className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
