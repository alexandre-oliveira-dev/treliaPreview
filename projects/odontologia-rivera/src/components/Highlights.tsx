"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Stethoscope } from "lucide-react";

const ITEMS = [
  {
    icon: Stethoscope,
    title: "Endodontia",
    text: "Especialização em tratamento de canal pelo ILAPEO, com foco em conforto e conservação do dente.",
  },
  {
    icon: GraduationCap,
    title: "UFPR",
    text: "Formação pela Universidade Federal do Paraná, com atualização contínua em odontologia estética.",
  },
  {
    icon: Sparkles,
    title: "Atendimento humano",
    text: "Consultas sem pressa, ouvindo as expectativas e os medos de cada paciente.",
  },
];

export default function Highlights() {
  return (
    <section className="relative border-y border-ink-950/10 bg-linen-dim">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="flex items-start gap-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-950 text-clay-light">
              <item.icon size={20} />
            </span>
            <div>
              <p className="font-display text-2xl italic text-ink-950">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
