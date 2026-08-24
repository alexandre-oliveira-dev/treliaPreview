"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { waLink } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink-950 text-paper">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-brass-light"
          >
            Direito Bancário &amp; Defesa do Consumidor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-xl text-balance font-display text-[2.6rem] font-medium leading-[1.08] sm:text-[3.4rem] lg:text-[3.8rem]"
          >
            Defesa Estratégica em Direito Bancário
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-md text-base leading-relaxed text-paper/75"
          >
            Especialista em proteger consumidores contra práticas abusivas de
            instituições financeiras, garantindo equilíbrio financeiro e
            segurança jurídica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-brass px-7 py-3.5 text-sm font-medium text-ink-950 shadow-sm transition-colors hover:bg-brass-light"
            >
              Falar com a advogada
            </a>
            <a
              href="#servicos"
              className="text-xs font-medium uppercase tracking-[0.15em] text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-brass-light"
            >
              Ver serviços
            </a>
          </motion.div>

          <div className="mt-16 flex items-center gap-4 border-t border-paper/10 pt-6 text-[0.68rem] uppercase tracking-[0.15em] text-paper/50">
            <span>OAB/SP nº 518.977</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-brass/60" />
            <span>Atuação em todo o Brasil</span>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-0">
          <div className="diagonal-clip absolute inset-0">
            <Image
              src="/advogada.jpg"
              alt="Dra. Emanuelyn Vasconcelos, advogada especialista em Direito Bancário"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
              priority
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink-950/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
