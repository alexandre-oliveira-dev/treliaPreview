"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { waLink } from "@/lib/contact";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="portrait-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.12,0.05 C0.02,0.05 0,0.12 0,0.22 L0,0.86 C0,0.95 0.06,1 0.16,1 L0.78,1 C0.9,1 1,0.93 1,0.82 L1,0.18 C1,0.07 0.93,0 0.8,0 L0.28,0 C0.2,0 0.16,0.02 0.12,0.05 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-clay/10 blur-3xl md:h-96 md:w-96"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-8">
        <div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-clay-dim">
              Direito de Família &amp; Sucessões — Santos/SP
            </p>
            <h1 className="text-balance font-display text-4xl italic leading-[1.15] text-ink-950 sm:text-5xl md:text-[3.4rem]">
              A guarda, a pensão e o divórcio te tiram o sono?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-800/85 md:text-lg">
              Proteja o seu patrimônio, a sua família e os seus direitos.
              Atendimento presencial em Santos ou 100% online — agora é hora
              de dar o primeiro passo.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={waLink(
                  "Olá, Dra. Letícia! Gostaria de falar sobre o meu caso."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink-950 shadow-sm"
              >
                Falar com a advogada
              </motion.a>
              <a
                href="#situacoes"
                className="rounded-full border border-ink-950/15 px-7 py-3.5 text-sm uppercase tracking-[0.06em] text-ink-800 transition-colors hover:border-clay/60 hover:text-clay-dim"
              >
                Ver áreas de atuação
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 text-sm text-ink-800/70">
              Clicando no botão verde, o atendimento é imediato.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto aspect-[0.8] w-full max-w-sm md:max-w-none"
        >
          <div className="hero-portrait-mask relative h-full w-full bg-ink-900">
            <Image
              src="/leticia-gomes-hero.jpg"
              alt="Dra. Letícia Gomes, advogada especialista em Direito de Família e Sucessões"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-clay/40 md:h-32 md:w-32"
          />
        </motion.div>
      </div>
    </section>
  );
}
