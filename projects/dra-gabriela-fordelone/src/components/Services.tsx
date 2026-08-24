"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Baby,
  Stethoscope,
  AlignCenter,
  Siren,
} from "lucide-react";
import { Blob } from "./Blobs";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Clínica geral",
    text: "Diagnóstico, prevenção e tratamentos do dia a dia com acompanhamento completo.",
  },
  {
    icon: Sparkles,
    title: "Estética dental",
    text: "Clareamento e facetas para um sorriso mais luminoso, no seu ritmo.",
  },
  {
    icon: AlignCenter,
    title: "Ortodontia",
    text: "Alinhamento planejado, com retornos claros sobre cada etapa do tratamento.",
  },
  {
    icon: Smile,
    title: "Implantes",
    text: "Reabilitação de dentes ausentes com planejamento cuidadoso e conforto.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    text: "Primeiras consultas sem trauma, num ambiente leve para as crianças.",
  },
  {
    icon: Siren,
    title: "Urgência",
    text: "Atendimento rápido para dor e desconfortos, com retorno pelo WhatsApp.",
  },
];

const RADII = [
  "rounded-[2.5rem_1.25rem_2.5rem_1.25rem]",
  "rounded-[1.25rem_2.5rem_1.25rem_2.5rem]",
  "rounded-[2.5rem]",
];

export default function Services() {
  return (
    <section
      id="tratamentos"
      className="relative overflow-hidden bg-cloud-dim py-24 sm:py-32"
    >
      <Blob color="butter" className="left-[-6%] bottom-[-4%] h-72 w-72" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.32em] text-flamingo-dark"
        >
          Tratamentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance mt-4 max-w-xl font-display italic text-4xl leading-tight text-ink-950 sm:text-5xl"
        >
          Cuidado completo, de ponta a ponta.
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`bg-cloud p-7 shadow-sm shadow-ink-950/5 ${RADII[i % RADII.length]}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flamingo-light/40 text-flamingo-dark">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 font-semibold text-lg text-ink-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
