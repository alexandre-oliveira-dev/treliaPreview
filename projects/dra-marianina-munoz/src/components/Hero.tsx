"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock3, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-0"
    >
      <div className="facet-field facet-field-soft facet-field-animated pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 lg:py-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            <Clock3 size={14} /> Emergência odontológica 24h
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-charcoal-950 text-balance sm:text-5xl lg:text-6xl">
            Um sorriso cuidado com{" "}
            <span className="italic text-gold-dark">23 anos</span> de
            experiência
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-700 sm:text-lg">
            Todas as especialidades da odontologia em um só endereço, no
            Capão Raso, Curitiba — com atendimento humano, técnico e
            disponível a qualquer hora.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-charcoal-950 px-7 py-3.5 text-sm font-semibold text-ivory shadow-lg shadow-charcoal-950/20 transition-colors hover:bg-gold-dark cursor-pointer"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-800 transition-colors hover:text-gold-dark"
            >
              <ShieldCheck size={18} className="text-gold-dark" />
              Ver especialidades
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
              src="/images/portrait.jpg"
              alt="Dra. Marianina Muñoz, cirurgiã-dentista, sorrindo em seu consultório"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/35 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-5 left-5 rounded-2xl bg-ivory/95 px-5 py-4 shadow-xl shadow-charcoal-950/10 backdrop-blur sm:left-8"
          >
            <p className="font-display text-3xl italic text-gold-dark">23</p>
            <p className="text-xs font-medium uppercase tracking-wide text-charcoal-600">
              anos de experiência
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
