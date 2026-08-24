"use client";

import { motion } from "motion/react";
import { CONTACT, waLink } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-cream pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full bg-nude-200/60 blur-3xl md:-right-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="script-mark mb-3 text-3xl text-gold-dark">
            Agenda aberta
          </p>
          <h1 className="font-display text-balance text-4xl leading-[1.15] text-brown-900 sm:text-5xl md:text-6xl">
            Hora de cuidar de você{" "}
            <span className="italic text-gold-dark">e elevar</span> a
            autoestima.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brown-700 md:text-lg">
            Estúdio de depilação a cera em Sapopemba, São Paulo. Atendimento
            individual, materiais descartáveis e todo o cuidado que a sua
            pele merece.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink("Olá, Bianca! Gostaria de agendar um horário.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brown-900 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-cream transition-transform hover:scale-[1.03] hover:bg-gold-dark"
            >
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-brown-900/25 px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-brown-800 transition-colors hover:border-gold-dark hover:text-gold-dark"
            >
              Ver serviços
            </a>
          </div>

          <p className="mt-8 text-sm text-brown-700/80">
            {CONTACT.addressLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
