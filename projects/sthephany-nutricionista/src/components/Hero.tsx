"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col md:flex-row md:min-h-[92vh] overflow-hidden"
    >
      {/* Painel esquerdo — papel */}
      <div className="relative z-10 flex flex-1 items-center bg-paper px-5 pt-32 pb-16 sm:px-8 md:w-[48%] md:flex-none md:pt-40 md:pb-24 lg:px-16">
        <div className="max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-signal-dark"
          >
            Nutrição funcional para mulheres · Curitiba
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 font-display text-[2.6rem] leading-[1.05] text-balance text-espresso sm:text-5xl lg:text-[3.4rem]"
          >
            Chega de dieta
            <br />
            que não cabe
            <br />
            <span className="italic text-signal-dark">na sua vida.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 text-base leading-relaxed text-espresso-600 sm:text-lg"
          >
            Acompanhamento nutricional para mulheres com rotina corrida — foco
            em emagrecimento real, saúde hormonal e autoestima, sem
            restrição vazia. Atendimento presencial em Curitiba ou online,
            de onde você estiver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-signal/20 transition-colors hover:bg-signal-dark cursor-pointer"
            >
              Quero começar minha jornada
            </a>
            <a
              href="#abordagem"
              className="inline-flex items-center justify-center rounded-full border border-espresso/20 px-6 py-3.5 text-sm font-semibold text-espresso transition-colors hover:border-espresso/40 cursor-pointer"
            >
              Ver abordagem
            </a>
          </motion.div>
        </div>
      </div>

      {/* Painel direito — retrato em vermelho, full-bleed */}
      <div className="relative min-h-[62vh] flex-1 md:min-h-0">
        <Image
          src="/images/hero-retrato.jpg"
          alt="Sthephany, nutricionista, em retrato de corpo inteiro"
          fill
          priority
          sizes="(min-width: 768px) 52vw, 100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent md:bg-gradient-to-r md:from-paper/10 md:via-transparent md:to-transparent" />

        {/* Ficha flutuante — assinatura visual, sobrepõe a costura */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="ficha-tab absolute left-4 bottom-6 w-[calc(100%-2rem)] max-w-[280px] bg-paper px-5 pt-4 pb-7 shadow-xl shadow-black/20 md:-left-10 md:bottom-10"
        >
          <div className="flex items-center gap-1 text-signal-dark">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-1 font-mono text-sm font-medium text-espresso">
              {CONTACT.rating}
            </span>
          </div>
          <div className="ficha-rule mt-2 text-espresso/30" />
          <p className="mt-2 text-xs leading-snug text-espresso-600">
            {CONTACT.reviewCount} avaliações de pacientes no Google
          </p>
        </motion.div>
      </div>
    </section>
  );
}
