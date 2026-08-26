"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-lime py-20 text-ink sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:px-8"
      >
        <h2 className="max-w-2xl font-display text-4xl leading-[0.98] tracking-tight sm:text-6xl">
          Chega de dieta que não sai do papel.
        </h2>
        <a
          href={whatsappLink("Oi Jéssica! Quero começar meu acompanhamento nutricional.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink px-8 py-4 font-mono text-sm uppercase tracking-widest text-paper transition-transform hover:scale-[1.03]"
        >
          Começar agora pelo WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
