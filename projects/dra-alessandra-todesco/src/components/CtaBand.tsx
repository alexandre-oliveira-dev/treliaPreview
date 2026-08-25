"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/contact";
import { ToothFlourish } from "./ToothFlourish";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 text-center sm:px-10">
      <ToothFlourish className="absolute -bottom-6 -left-6 h-28 w-40 text-wine/30" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-6"
      >
        <h2 className="font-display text-3xl italic text-blush sm:text-4xl">
          Vamos cuidar do seu sorriso com calma e atenção?
        </h2>
        <p className="font-body text-blush/75">
          Fale agora pelo WhatsApp e agende um horário no consultório da Dra.
          Alessandra Todesco, em Sorocaba.
        </p>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-mauve px-8 py-3 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          Agendar consulta
        </a>
      </motion.div>
    </section>
  );
}
