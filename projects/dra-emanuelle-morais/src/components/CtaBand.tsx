"use client";

import { motion } from "framer-motion";
import { Quote, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function CtaBand() {
  return (
    <section className="relative bg-coral py-20 text-paper sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="mx-auto text-paper/70" size={32} strokeWidth={1.5} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-2xl leading-snug text-balance sm:text-3xl"
        >
          &ldquo;Saí do consultório sem aquele frio na barriga de sempre — a
          Dra. Emanuelle explica tudo com muita calma.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-paper/85"
        >
          Paciente do consultório · Boqueirão
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-ink-950/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <CalendarCheck size={18} />
            Quero agendar minha consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
}
