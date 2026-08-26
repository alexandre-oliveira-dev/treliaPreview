"use client";

import { motion } from "motion/react";
import {
  Flame,
  Dumbbell,
  HeartPulse,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

type Specialty = {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: string;
};

const SPECIALTIES: Specialty[] = [
  {
    icon: Flame,
    title: "Emagrecimento",
    description:
      "Perda de gordura sustentável, sem efeito sanfona: ajuste calórico individualizado, comportamento alimentar e acompanhamento próximo.",
    span: "lg:col-span-2",
  },
  {
    icon: Dumbbell,
    title: "Performance esportiva",
    description:
      "Estratégia nutricional para quem treina sério — de amadores a atletas de competição, com a bagagem de quem já competiu.",
  },
  {
    icon: HeartPulse,
    title: "Saúde metabólica",
    description:
      "Investigação e manejo nutricional de marcadores metabólicos, resistência à insulina e composição corporal.",
  },
  {
    icon: Stethoscope,
    title: "Nutrição clínica",
    description:
      "Condução nutricional integrada ao quadro clínico do paciente, em diálogo com outros profissionais quando necessário.",
    span: "lg:col-span-2",
  },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-ink py-24 text-paper sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-ochre-light">
            Especialidades
          </span>
          <h2 className="font-display mt-4 text-5xl uppercase leading-[0.92] sm:text-6xl">
            Onde a ciência
            <br />
            encontra o resultado
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {SPECIALTIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                className={`group rounded-2xl border border-paper/12 bg-paper/[0.04] p-8 transition-colors hover:border-coral/50 hover:bg-paper/[0.07] ${
                  item.span ?? ""
                }`}
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="text-ochre-light transition-colors group-hover:text-coral"
                />
                <h3 className="font-display mt-6 text-2xl uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-paper/70">
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
