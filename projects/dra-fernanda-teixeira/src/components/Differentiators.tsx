"use client";

import { motion } from "motion/react";
import { Sparkles, HeartHandshake, Clock, MapPinned } from "lucide-react";

const ITEMS = [
  {
    icon: HeartHandshake,
    title: "Atendimento individualizado",
    text: "Cada consulta é conduzida com calma, respeitando o tempo e as dúvidas de cada paciente.",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    icon: Sparkles,
    title: "Ambiente clean e cuidado",
    text: "Consultório planejado para ser um espaço confortável, longe do clima frio de clínica hospitalar.",
    span: "lg:col-span-2",
  },
  {
    icon: Clock,
    title: "Horários flexíveis",
    text: "Agendamento combinado direto pelo WhatsApp, sem burocracia.",
    span: "lg:col-span-2",
  },
  {
    icon: MapPinned,
    title: "No bairro Fortaleza",
    text: "Fácil de chegar, em Barretos - SP.",
    span: "lg:col-span-5",
  },
] as const;

export function Differentiators() {
  return (
    <section id="diferenciais" className="bg-stone/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-dark">
            Por que escolher
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Um jeito mais tranquilo de cuidar do seu sorriso.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5 lg:grid-rows-2">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-ink/8 bg-ivory p-7 shadow-sm ${item.span}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sage/10 text-sage-dark">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
