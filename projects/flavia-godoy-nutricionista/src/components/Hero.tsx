"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

const WHATSAPP_URL =
  "https://wa.me/5531988896106?text=Oi%2C%20Flavia!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento.";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[72px] flex flex-col md:flex-row min-h-[92svh] md:min-h-[88svh] bg-petrol overflow-hidden"
    >
      {/* Numeral gigante "20" como assinatura tipográfica do hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-6 top-[8%] md:top-[10%] font-display text-[38vw] md:text-[26vw] leading-none text-transparent"
        style={{ WebkitTextStroke: "1.5px rgba(181,113,59,0.35)" }}
      >
        20
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-8 md:pl-8 md:pr-4 py-16 md:py-0 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body font-bold uppercase tracking-[0.25em] text-sm text-copper-light"
        >
          Nutrição Esportiva · Belo Horizonte
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display uppercase text-balance mt-5 text-[13vw] leading-[0.95] sm:text-6xl md:text-6xl lg:text-7xl text-stone"
        >
          20 anos
          <br />
          transformando
          <br />
          <span className="text-copper">vidas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 text-lg text-stone-dim max-w-md leading-relaxed"
        >
          Performance sustentável, não fórmula pronta de suplemento.
          Acompanhamento nutricional presencial e online, para quem quer
          resultado que se mantém.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-base font-semibold text-petrol hover:bg-copper-light transition-colors cursor-pointer"
          >
            Agendar avaliação
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://www.instagram.com/flaviagodoynutri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-dim hover:text-stone transition-colors cursor-pointer"
          >
            <InstagramIcon size={18} />
            @flaviagodoynutri
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 md:flex-1 h-[46vh] md:h-auto"
      >
        <Image
          src="/images/flavia-retrato.jpg"
          alt="Flavia Godoy, nutricionista esportiva, sorrindo em seu consultório"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-petrol via-petrol/10 to-transparent md:from-petrol md:via-transparent md:to-transparent" />
      </motion.div>
    </section>
  );
}
