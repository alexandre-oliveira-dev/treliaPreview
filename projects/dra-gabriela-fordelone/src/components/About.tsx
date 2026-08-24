"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Clock, ShieldCheck } from "lucide-react";
import { Blob } from "./Blobs";

const POINTS = [
  {
    icon: HeartHandshake,
    title: "Acolhimento em primeiro lugar",
    text: "Cada consulta começa com uma conversa tranquila, sem pressa, para entender o que te traz até aqui.",
  },
  {
    icon: ShieldCheck,
    title: "Técnica atualizada",
    text: "Protocolos modernos de biossegurança e materiais de qualidade em cada procedimento.",
  },
  {
    icon: Clock,
    title: "Horários flexíveis",
    text: "Agenda pensada para caber na sua rotina, com confirmação simples pelo WhatsApp.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <Blob color="periwinkle" slow className="right-[-6%] top-10 h-64 w-64" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[3rem]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait.jpg"
            alt="Dra. Gabriela Fordelone"
            className="h-full w-[145%] max-w-none object-cover"
            style={{ objectPosition: "62% 8%" }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-ink-950/10" />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-flamingo-dark"
          >
            Sobre a Dra. Gabriela
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance mt-4 font-display italic text-4xl leading-tight text-ink-950 sm:text-5xl"
          >
            Odontologia pensada para quem tem pressa no dia a dia, mas não
            quer pressa na cadeira.
          </motion.h2>

          <div className="mt-10 space-y-6">
            {POINTS.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cloud-dim text-flamingo-dark">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink-950">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
