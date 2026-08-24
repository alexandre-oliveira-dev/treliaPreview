"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Formação sólida",
    text: "Cirurgiã-dentista com atualização contínua em estética e clínica geral.",
  },
  {
    icon: HeartHandshake,
    title: "Escuta humanizada",
    text: "Cada consulta começa por ouvir você — sem pressa, sem julgamento.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança clínica",
    text: "Protocolos rigorosos de biossegurança em cada etapa do atendimento.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-mist pb-24 pt-4 text-ink-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xs lg:mx-0"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-lg shadow-ink-900/10">
            <Image
              src="/images/portrait-bio-v2.jpg"
              alt="Dra. Emanuelle Morais em consultório"
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-wood px-5 py-4 text-center text-white shadow-xl sm:block">
            <p className="font-display text-3xl leading-none italic">CRO</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-widest">
              Ativo · Santos/SP
            </p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600"
          >
            Sobre a Dra. Emanuelle
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-display text-3xl leading-tight text-balance sm:text-4xl"
          >
            Cuidar de sorrisos é, antes de tudo,{" "}
            <em className="text-coral not-italic">cuidar de pessoas</em>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-700"
          >
            No Boqueirão, a poucos passos da praia, o consultório da Dra.
            Emanuelle Morais foi pensado para tirar o peso da ida ao dentista.
            Aqui, cada plano de tratamento é construído com calma, explicando
            cada passo — do check-up de rotina aos procedimentos estéticos
            mais delicados.
          </motion.p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {CREDENTIALS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-ink-900/8 bg-white/60 p-5 shadow-sm shadow-ink-950/5"
              >
                <item.icon className="text-coral" size={22} strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold text-ink-950">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
