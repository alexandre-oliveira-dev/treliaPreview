"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Sparkles,
  Smile,
  Stethoscope,
  Gem,
  ShieldCheck,
} from "lucide-react";
import clsx from "clsx";

const SPECIALTIES = [
  {
    icon: Clock3,
    title: "Emergência 24h",
    text: "Atendimento imediato para dores, traumas e urgências odontológicas, a qualquer hora do dia.",
    span: "lg:col-span-2 lg:row-span-1",
    dark: true,
  },
  {
    icon: Sparkles,
    title: "Clareamento dental",
    text: "Procedimentos de clareamento seguros, com acompanhamento profissional.",
    span: "lg:col-span-1",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    text: "Alinhamento e correção do sorriso com aparelhos e planos personalizados.",
    span: "lg:col-span-1",
  },
  {
    icon: Stethoscope,
    title: "Odontologia geral",
    text: "Prevenção, diagnóstico e tratamento das principais condições bucais.",
    span: "lg:col-span-1",
  },
  {
    icon: Gem,
    title: "Estética & prótese",
    text: "Reabilitação e harmonização do sorriso com técnicas modernas.",
    span: "lg:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Todas as especialidades",
    text: "Um único consultório para acompanhar o tratamento completo do paciente, sem encaminhamentos externos.",
    span: "lg:col-span-2",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Especialidades
          </span>
          <h2 className="mt-4 font-display text-3xl italic text-charcoal-950 sm:text-4xl">
            Todas as especialidades em um só lugar
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className={clsx(
                "rounded-3xl p-7",
                item.span,
                item.dark
                  ? "bg-charcoal-950 text-ivory"
                  : "bg-ivory-dim text-charcoal-950 border border-charcoal-950/8"
              )}
            >
              <span
                className={clsx(
                  "flex h-11 w-11 items-center justify-center rounded-full",
                  item.dark ? "bg-gold-light/20 text-gold-light" : "bg-charcoal-950 text-gold-light"
                )}
              >
                <item.icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-xl italic">
                {item.title}
              </h3>
              <p
                className={clsx(
                  "mt-2 text-sm leading-relaxed",
                  item.dark ? "text-ivory/75" : "text-charcoal-600"
                )}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
