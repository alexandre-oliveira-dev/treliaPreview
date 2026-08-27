"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CycleRing } from "./CycleRing";

const WHATSAPP_URL =
  "https://wa.me/5531988326828?text=Oi%2C%20Nancy!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento.";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[72px] bg-plum overflow-hidden flex flex-col items-center text-center px-5 sm:px-8 pb-20 md:pb-28"
    >
      <div className="relative mt-14 md:mt-16 w-[240px] h-[300px] md:w-[300px] md:h-[380px]">
        <CycleRing className="absolute -inset-8 text-rosegold" />
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full overflow-hidden"
          style={{ borderRadius: "50% 50% 4% 4% / 60% 60% 4% 4%" }}
        >
          <Image
            src="/images/nancy-retrato.jpg"
            alt="Nancy Drumond, nutricionista especialista em SOP, em seu consultório"
            fill
            priority
            sizes="(max-width: 768px) 240px, 300px"
            className="object-cover object-[50%_18%]"
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 font-body font-bold uppercase tracking-[0.3em] text-xs text-rosegold-light"
      >
        Nutrição · Especialista em SOP
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="font-display text-balance mt-5 text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-2xl text-ivory"
      >
        Destrave seu emagrecimento mesmo tendo SOP
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-6 text-lg text-lilac-dim max-w-md leading-relaxed"
      >
        Controle seus sintomas com um acompanhamento nutricional
        individualizado, sem neura, no Centro de Belo Horizonte.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-9"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-rosegold px-7 py-3.5 text-base font-semibold text-plum hover:bg-rosegold-light transition-colors cursor-pointer"
        >
          Agendar consulta
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </section>
  );
}
