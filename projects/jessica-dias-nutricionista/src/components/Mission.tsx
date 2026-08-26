"use client";

import { motion } from "motion/react";
import { LeafMark } from "./LeafMark";

export function Mission() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <LeafMark size={26} className="text-gold-deep" />
        <p className="font-display mt-6 text-balance text-3xl leading-snug text-bark sm:text-4xl">
          &ldquo;Transformar a vida das pessoas através da alimentação.&rdquo;
        </p>
        <span className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-bark-mute">
          Missão · Jéssica Dias
        </span>
      </motion.div>
    </section>
  );
}
