"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-0">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 lg:py-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-sand/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
            <ShieldCheck size={14} /> Especialista em siso
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-ink-950 text-balance sm:text-5xl lg:text-6xl">
            Arrancar o siso{" "}
            <span className="italic text-clay-dark">sem medo</span>, com quem
            entende de calma
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
            Atendimento individual, sem pressa e sem convênios, na Av.
            Itavuvu, em Sorocaba. Cada paciente é tratado como único — do
            primeiro papo até o pós-operatório.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-clay-dark px-7 py-3.5 text-sm font-semibold text-sand shadow-lg shadow-ink-950/10 transition-colors hover:bg-clay cursor-pointer"
            >
              Agendar avaliação
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-clay-dark"
            >
              <HeartHandshake size={18} className="text-clay-dark" />
              Ver serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative h-[380px] sm:h-[460px] lg:h-[640px]"
        >
          <div
            className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
            style={{ borderRadius: "1.5rem" }}
          >
            <Image
              src="/images/procedimento.jpg"
              alt="Dra. Larissa Pauletti realizando um procedimento odontológico com atenção e cuidado"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-5 left-5 rounded-2xl bg-sand/95 px-5 py-4 shadow-xl shadow-ink-950/10 backdrop-blur sm:left-8"
          >
            <p className="font-display text-2xl italic text-clay-dark">
              Sem convênio,
            </p>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-600">
              atendimento 100% particular e dedicado
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
