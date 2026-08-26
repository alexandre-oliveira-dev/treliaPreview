"use client";

import Image from "next/image";
import { motion } from "motion/react";

const CREDENTIALS = [
  { value: "7", label: "anos de atuação" },
  { value: "+1200", label: "pacientes atendidos" },
  { value: "CRN9", label: "23102" },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24 pb-16"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/lorena-retrato.jpg"
          alt="Lorena Rosa, nutricionista"
          fill
          priority
          className="object-cover object-[65%_18%] opacity-90 sm:object-[78%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10 sm:from-ink sm:via-ink/70 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-label text-xs uppercase tracking-[0.28em] text-brass"
          >
            Nutrição Clínica &amp; Bariátrica · Belo Horizonte
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-5 font-display text-4xl leading-[1.05] text-balance text-ivory sm:text-5xl lg:text-6xl"
          >
            Emagrecer comendo o básico —{" "}
            <span className="italic text-brass-light">sem dietas malucas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ivory-dim sm:text-lg"
          >
            Sim, você pode emagrecer comendo pão. Acompanhamento nutricional
            clínico e bariátrico com Lorena Rosa, presencial em BH ou online,
            para quem quer resultado real sem restrição extrema.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/5531997667888"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-brass px-7 py-3.5 font-label text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:bg-brass-light"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#sobre"
              className="font-label text-xs uppercase tracking-[0.14em] text-ivory-dim transition-colors hover:text-brass"
            >
              Conhecer o método ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-brass/20 pt-6"
          >
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-label text-xl text-brass-light">
                  {item.value}
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.12em] text-ivory-dim">
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
