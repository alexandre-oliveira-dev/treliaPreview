"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Sparkle,
  Puzzle,
  Smile,
  Hammer,
  Baby,
} from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Extração de siso",
    text: "Especialidade da Dra. Larissa: avaliação, procedimento e pós-operatório acompanhados de perto.",
  },
  {
    icon: Sparkle,
    title: "Clareamento dental",
    text: "Técnicas seguras para um sorriso mais claro, com acompanhamento profissional.",
  },
  {
    icon: Puzzle,
    title: "Implantes dentários",
    text: "Reposição de dentes perdidos com planejamento individual e materiais de qualidade.",
  },
  {
    icon: Smile,
    title: "Aparelho ortodôntico",
    text: "Correção do alinhamento dos dentes com acompanhamento contínuo.",
  },
  {
    icon: Hammer,
    title: "Prótese e restaurações",
    text: "Recuperação da função e da estética dos dentes com trabalho detalhado.",
  },
  {
    icon: Baby,
    title: "Odontologia infantil",
    text: "Cuidado paciente e lúdico para os primeiros passos da criança no dentista.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-sand-dim py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark">
            Serviços
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl italic text-ink-950 sm:text-4xl">
            Tudo que o seu sorriso precisa, em um só endereço
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex w-[260px] shrink-0 snap-start flex-col gap-4 rounded-3xl border border-ink-950/8 bg-sand p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay-dark">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg italic text-ink-950">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">
                {service.text}
              </p>
            </div>
          );
        })}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </motion.div>

      <p className="mt-2 px-5 text-xs text-ink-600/70 sm:px-8">
        Arraste para o lado para ver todos os serviços →
      </p>
    </section>
  );
}
