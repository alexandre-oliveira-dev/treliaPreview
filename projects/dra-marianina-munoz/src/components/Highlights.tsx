"use client";

import { motion } from "framer-motion";
import { Clock3, Sparkles, Stethoscope } from "lucide-react";

const ITEMS = [
  {
    icon: Clock3,
    title: "24 horas",
    text: "Emergência odontológica atendida a qualquer hora, todos os dias.",
  },
  {
    icon: Stethoscope,
    title: "23 anos",
    text: "De experiência clínica dedicada à saúde bucal dos pacientes.",
  },
  {
    icon: Sparkles,
    title: "Tudo em um lugar",
    text: "Todas as especialidades odontológicas em um único consultório.",
  },
];

export default function Highlights() {
  return (
    <section className="relative border-y border-charcoal-950/10 bg-ivory-dim">
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
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal-950 text-gold-light">
              <item.icon size={20} />
            </span>
            <div>
              <p className="font-display text-2xl italic text-charcoal-950">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-charcoal-600">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
