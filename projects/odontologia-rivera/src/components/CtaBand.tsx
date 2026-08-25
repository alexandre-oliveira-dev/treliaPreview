"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-light/15 text-clay-light">
          <HeartHandshake size={26} />
        </span>
        <h2 className="font-display text-3xl italic text-linen sm:text-4xl">
          Pronta para cuidar do seu sorriso
        </h2>
        <p className="max-w-md text-linen/75">
          Fale agora mesmo pelo WhatsApp e agende uma avaliação com a Dra.
          Jessica Rivera de Melo.
        </p>
        <a
          href={CONTACT.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center rounded-full bg-clay px-8 py-3.5 text-sm font-semibold text-linen shadow-lg shadow-black/20 transition-colors hover:bg-clay-light hover:text-ink-950 cursor-pointer"
        >
          Chamar no WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
