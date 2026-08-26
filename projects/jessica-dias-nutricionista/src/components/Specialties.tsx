"use client";

import { motion } from "motion/react";
import { Leaf, Salad, HeartHandshake, Laptop, type LucideIcon } from "lucide-react";

type Specialty = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SPECIALTIES: Specialty[] = [
  {
    icon: Leaf,
    title: "Emagrecimento saudável",
    description:
      "Perda de peso sustentável, sem dietas restritivas nem efeito sanfona: ajuste individual e acompanhamento próximo a cada etapa.",
  },
  {
    icon: Salad,
    title: "Reeducação alimentar",
    description:
      "Construção de hábitos que ficam — troca gradual, sem culpa e sem cortar tudo o que você gosta de uma vez.",
  },
  {
    icon: HeartHandshake,
    title: "Saúde digestiva",
    description:
      "Cuidado com o intestino e o bem-estar digestivo como parte central da alimentação, não um detalhe esquecido.",
  },
  {
    icon: Laptop,
    title: "Presencial ou online",
    description:
      "Consultas no consultório no Centro de Curitiba ou por videochamada, com o mesmo acompanhamento próximo.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-bark py-24 text-sand sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Especialidades
          </span>
          <h2 className="font-display mt-4 text-4xl leading-[1.1] sm:text-5xl">
            Cuidado nutricional
            <br />
            de várias frentes
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SPECIALTIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                className="group border-t-2 border-l-2 border-gold/40 py-7 pl-6 transition-colors hover:border-gold"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-olive-light transition-colors group-hover:text-gold"
                />
                <h3 className="font-display mt-5 text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-sand/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
