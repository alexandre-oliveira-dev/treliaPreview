"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { RingMotif } from "./RingMotif";
import { whatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-white/5 bg-ink"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <span className="mb-5 inline-block font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Nutrição esportiva · Curitiba-PR
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.4rem]">
            Comida de verdade,
            <br />
            <span className="text-signal">performance real.</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-steel sm:text-lg">
            Nutricionista esportivo em Curitiba. Estratégia alimentar
            personalizada para quem treina — sem dieta restritiva, sem
            fórmula pronta, com acompanhamento de verdade entre as consultas.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href={whatsappLink(
                "Olá, Murilo! Vim pelo site e gostaria de agendar uma consulta."
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-signal px-7 py-3.5 font-body text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(255,106,61,0.3)]"
            >
              Agendar consulta no WhatsApp
            </motion.a>
            <a
              href="#metodo"
              className="font-body text-sm font-medium text-paper underline decoration-steel/40 underline-offset-4 transition-colors hover:decoration-paper"
            >
              Conhecer o método
            </a>
          </div>
        </motion.div>

        {/* Foto + anéis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative order-1 mx-auto aspect-[4/5] w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <RingMotif
            variant="hero"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
          />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src="/images/murilo-trofino.jpeg"
              alt="Murilo Trofino, nutricionista esportivo"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
