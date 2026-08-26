"use client";

import Image from "next/image";
import { motion } from "motion/react";

const STATS = [
  { value: "55.7K", label: "seguidores" },
  { value: "NUTRICIONISTA", label: "esportivo" },
  { value: "BH", label: "Santa Efigênia" },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-carbon pt-24 pb-16"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/escritorio-skyline.jpg"
          alt="Escritório de Victor Pimenta com vista para Belo Horizonte"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/90 to-carbon/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/60" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-label text-xs uppercase tracking-[0.28em] text-ignite"
          >
            Nutrição Esportiva · Belo Horizonte
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 font-display text-6xl leading-[0.95] tracking-wide text-chalk sm:text-7xl lg:text-8xl"
          >
            DIETAS SIMPLES.
            <br />
            <span className="text-ignite">SEM FRESCURA.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-chalk-dim sm:text-lg"
          >
            Planos nutricionais diretos e orientação honesta pra quem treina
            de verdade. Sem enrolação, sem dieta genérica — acompanhamento
            esportivo com Victor Pimenta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="https://wa.me/5531936193062"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-none bg-ignite px-8 py-3.5 font-label text-xs uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ignite-light"
            >
              Começar agora — SMART
            </a>
            <a
              href="#servicos"
              className="font-label text-xs uppercase tracking-[0.14em] text-chalk-dim transition-colors hover:text-ignite"
            >
              Ver acompanhamentos ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-ignite/25 pt-6"
          >
            {STATS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-label text-lg text-ignite-light">
                  {item.value}
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.12em] text-chalk-dim">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
