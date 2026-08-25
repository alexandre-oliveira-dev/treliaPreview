"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/contact";
import SmileArc from "./SmileArc";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 text-clay/30">
        <SmileArc />
      </div>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl italic text-sand text-balance sm:text-4xl">
          Chegou a hora de resolver o siso, com calma
        </h2>
        <p className="max-w-md text-base leading-relaxed text-sand/70">
          Marque uma avaliação e entenda, sem compromisso, qual o melhor
          caminho para o seu caso.
        </p>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={CONTACT.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center rounded-full bg-clay-dark px-8 py-4 text-sm font-semibold text-sand shadow-lg shadow-black/20 cursor-pointer"
        >
          Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
