"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const TAGS = ["Metabolismo", "Emagrecimento", "Nutrição clínica", "Gastronomia funcional"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-pine/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-tomato/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pine/25 bg-pine/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pine-dark">
            <Sparkles size={14} /> {CONTACT.crn}
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-ink-950 text-balance sm:text-5xl lg:text-[3.4rem]">
            Nutrição com ciência,{" "}
            <span className="text-pine">técnica culinária</span> e afeto
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
            Sou o Vitor: nutricionista clínico e criador do Nutrichef.
            Monto cardápios que cabem na sua rotina real — pensados para
            metabolismo e emagrecimento, com o sabor de comida de verdade.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-tomato px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-ink-950/10 transition-colors hover:bg-tomato-dark cursor-pointer"
            >
              Agendar consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-pine"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cream-dim px-3.5 py-1.5 text-xs font-medium text-ink-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="relative aspect-[4/5] overflow-hidden border-4 border-cream shadow-2xl shadow-ink-950/15"
            style={{ borderRadius: "44% 56% 58% 42% / 46% 42% 58% 54%" }}
          >
            <Image
              src="/images/retrato-vitor.png"
              alt="Vitor Oliveira, nutricionista, vestindo jaleco branco"
              fill
              priority
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover object-[50%_15%]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-4 -left-6 flex items-center gap-3 rounded-2xl bg-pine px-5 py-4 shadow-xl shadow-ink-950/20 sm:-left-10"
          >
            <span className="font-display text-2xl font-bold text-cream">
              Nutrichef
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
