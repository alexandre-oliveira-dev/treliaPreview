"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-clay/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-olive/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 mx-auto h-[320px] w-[280px] sm:h-[400px] sm:w-[350px] lg:order-1"
        >
          <div className="blob-frame relative h-full w-full overflow-hidden shadow-2xl shadow-ink-950/15">
            <Image
              src="/images/dra-jessica-retrato.jpeg"
              alt="Dra. Jessica Rivera de Melo, cirurgiã-dentista da Odontologia Rivera"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_18%]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="wax-seal absolute -bottom-4 -right-4 flex h-24 w-24 flex-col items-center justify-center bg-linen text-center shadow-xl shadow-ink-950/10 sm:h-28 sm:w-28"
          >
            <p className="font-display italic text-lg text-clay-dark sm:text-xl">
              CRO/PR
            </p>
            <p className="text-sm font-bold tracking-wide text-ink-800">
              25.539
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 order-1 text-center lg:order-2 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-linen/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
            <HeartHandshake size={14} /> Atendimento humanizado no Xaxim
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-ink-950 text-balance sm:text-5xl lg:text-6xl">
            Odontologia com{" "}
            <span className="italic text-clay-dark">amor e empatia</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-700 sm:text-lg lg:mx-0">
            Consultório da Dra. Jessica Rivera de Melo, especialista em
            Endodontia, no Xaxim — Curitiba. Cuidado próximo, técnico e sem
            pressa para tratar o seu sorriso.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-olive px-7 py-3.5 text-sm font-semibold text-linen shadow-lg shadow-olive/25 transition-colors hover:bg-olive-dark cursor-pointer"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-clay-dark"
            >
              Ver especialidades
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
