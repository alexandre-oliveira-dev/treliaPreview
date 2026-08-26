"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, AtSign } from "lucide-react";

const CREDENTIALS = [
  { value: "1º", label: "Campeã Brasileira\nFisiculturismo Natural" },
  { value: "CLIN", label: "Nutrição Clínica\n& Metabólica" },
  { value: "DOC", label: "Docente\nUniversitária" },
  { value: "CWB", label: "Atendimento\nCuritiba · Centro" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-coral-deep">
            Nutrição Clínica &amp; Metabólica · Curitiba
          </span>

          <h1 className="font-display mt-5 text-[15vw] leading-[0.86] uppercase text-ink sm:text-[6.4rem] lg:text-[5.2rem] xl:text-[6rem]">
            Método
            <br />
            clínico.
            <br />
            <span className="text-coral">Mentalidade</span>
            <br />
            de atleta.
          </h1>

          <p className="mt-7 max-w-md text-balance text-lg text-ink-soft">
            Emagrecimento, performance e saúde metabólica conduzidos pela Dra.
            Débora Mocelin — nutricionista clínica e ex-atleta que subiu ao
            pódio antes de subir na balança dos consultórios. Ciência aplicada
            ao corpo que você tem, não ao corpo genérico do protocolo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-coral"
            >
              Agendar avaliação
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://www.instagram.com/nutrideboramocelin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-coral-deep"
            >
              <AtSign size={16} />
              nutrideboramocelin
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink-soft">
            <Image
              src="/images/debora-retrato.jpg"
              alt="Dra. Débora Mocelin, nutricionista clínica e metabólica"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 24rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </div>
          <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ochre-light/60 blur-2xl sm:h-32 sm:w-32" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="scoreboard-strip relative z-10 mt-16"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {CREDENTIALS.map((item) => (
            <div
              key={item.value}
              className="scoreboard-cell flex flex-col gap-1 px-5 py-6 sm:px-8"
            >
              <span className="font-mono text-2xl font-bold text-ochre-light sm:text-3xl">
                {item.value}
              </span>
              <span className="whitespace-pre-line text-xs uppercase tracking-[0.08em] text-paper/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
