"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ToothFlourish } from "./ToothFlourish";

export function About() {
  return (
    <section className="relative overflow-hidden bg-blush px-6 py-24 sm:px-10">
      <ToothFlourish className="absolute -right-6 top-10 h-24 w-36 text-mauve-light" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(140,58,75,0.35)]"
        >
          <Image
            src="/images/retrato-dra-alessandra.jpg"
            alt="Dra. Alessandra Todesco em seu consultório"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-wine">
            Quem cuida de você
          </span>
          <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
            &ldquo;Antes de dentista, sou mãe e esposa — e trato cada
            paciente como gostaria que tratassem minha própria família.&rdquo;
          </h2>
          <p className="font-body leading-relaxed text-ink-muted">
            É essa filosofia que guia o consultório da Dra. Alessandra Vaz
            Todesco em Sorocaba. Formada em Ortodontia e especialista em
            Endodontia, ela une técnica apurada a um atendimento calmo e
            atencioso, para que cada consulta seja tranquila do início ao
            fim.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
