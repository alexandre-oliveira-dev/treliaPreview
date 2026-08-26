"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-ink-soft lg:max-w-none"
        >
          <Image
            src="/images/clinica-recepcao.jpg"
            alt="Recepção da clínica Mocelin Nutrição, em tons de amarelo e madeira clara"
            fill
            sizes="(min-width: 1024px) 32rem, 24rem"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-coral-deep">
            Sobre a Dra. Débora
          </span>
          <h2 className="font-display mt-4 text-5xl uppercase leading-[0.92] text-ink sm:text-6xl">
            Do pódio para
            <br />o consultório
          </h2>

          <div className="mt-7 space-y-5 text-lg text-ink-soft">
            <p>
              Antes de tratar da nutrição dos outros, Débora Mocelin
              disputou — e venceu — no próprio corpo: é ex-atleta e Campeã
              Brasileira de Fisiculturismo Natural, com anos de rotina de
              treino, dieta e ajuste fino de resultado sob pressão de
              competição.
            </p>
            <p>
              Essa vivência virou método clínico. Hoje, como nutricionista
              especialista em nutrição clínica e metabólica e docente
              universitária, ela une rigor científico e leitura fina de
              composição corporal para conduzir emagrecimento, performance
              esportiva e saúde metabólica sem fórmula genérica de dieta
              pronta.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-ink/10 pt-7">
            {[
              "Nutrição Clínica",
              "Nutrição Metabólica",
              "Nutrição Esportiva",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs uppercase leading-tight tracking-[0.06em] text-ink-mute"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
