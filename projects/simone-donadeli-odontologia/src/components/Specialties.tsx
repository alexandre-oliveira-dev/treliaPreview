"use client";

import { motion } from "motion/react";
import { Sparkles, Wrench, Stethoscope, Scissors } from "lucide-react";

const ITEMS = [
  {
    title: "Harmonização facial",
    description:
      "Procedimentos estéticos para equilibrar as proporções do rosto, com avaliação individual.",
    icon: Sparkles,
    span: "lg:col-span-2 lg:row-span-2",
    tone: "teal" as const,
  },
  {
    title: "Implantes dentários",
    description: "Reposição de dentes perdidos com planejamento cirúrgico.",
    icon: Wrench,
    span: "",
    tone: "stone" as const,
  },
  {
    title: "Clínico-geral",
    description: "Diagnóstico, prevenção e tratamento odontológico completo.",
    icon: Stethoscope,
    span: "",
    tone: "stone" as const,
  },
  {
    title: "Cirurgias",
    description: "Procedimentos cirúrgicos odontológicos com segurança.",
    icon: Scissors,
    span: "lg:col-span-2",
    tone: "teal" as const,
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-stone-dim py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-dark">
            Especialidades
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Atendimento completo, sob um único cuidado.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[9rem]">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            const isTeal = item.tone === "teal";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`${item.span} ${
                  i % 2 === 0 ? "facet-card-a" : "facet-card-b"
                } flex flex-col justify-between p-6 ${
                  isTeal
                    ? "bg-teal text-stone"
                    : "bg-stone text-ink-950 border border-ink-950/8"
                }`}
              >
                <Icon
                  size={28}
                  strokeWidth={1.75}
                  className={isTeal ? "text-stone" : "text-teal-dark"}
                />
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      isTeal ? "text-stone/85" : "text-ink-700"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
