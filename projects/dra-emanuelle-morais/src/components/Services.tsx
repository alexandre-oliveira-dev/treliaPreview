"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Stethoscope,
  Baby,
  ShieldPlus,
  AlignCenter,
} from "lucide-react";
import WaveDivider from "./WaveDivider";

const SERVICES = [
  {
    icon: Sparkles,
    title: "Estética dental",
    text: "Clareamento, facetas e lentes de contato dental para um sorriso natural.",
    span: "sm:col-span-2",
  },
  {
    icon: Stethoscope,
    title: "Clínica geral",
    text: "Check-ups, restaurações e tratamento de cáries com conforto.",
    span: "",
  },
  {
    icon: AlignCenter,
    title: "Ortodontia",
    text: "Aparelhos fixos e alinhadores para reorganizar o sorriso.",
    span: "",
  },
  {
    icon: ShieldPlus,
    title: "Prevenção & limpeza",
    text: "Profilaxia e acompanhamento periódico para manter a saúde bucal.",
    span: "",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    text: "Atendimento acolhedor para os pequenos, com muita paciência.",
    span: "",
  },
  {
    icon: Smile,
    title: "Reabilitação oral",
    text: "Próteses e implantes para devolver função e confiança ao sorriso.",
    span: "sm:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-paper pt-20 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600"
        >
          Tratamentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink-950 text-balance sm:text-4xl"
        >
          Cuidado completo, de ponta a ponta.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group rounded-3xl border border-ink-900/8 bg-white/60 p-6 shadow-sm shadow-ink-950/5 transition-shadow hover:shadow-lg hover:shadow-coral/10 ${service.span}`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-ink-800 transition-colors group-hover:bg-coral group-hover:text-paper ${
                  i % 2 === 0 ? "bg-seafoam-dim" : "bg-wood-light/60"
                }`}
              >
                <service.icon size={20} strokeWidth={1.75} />
              </div>
              <p className="mt-4 font-display text-xl text-ink-950">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 rotate-180">
        <WaveDivider fill="var(--ink-900)" />
      </div>
    </section>
  );
}
