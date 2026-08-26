"use client";

import { motion } from "motion/react";
import { HeartPulse, Scale, Stethoscope, Video } from "lucide-react";

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-ink px-5 py-24 text-ivory sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-label text-xs uppercase tracking-[0.28em] text-brass"
        >
          Especialidades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-lg font-display text-3xl leading-tight text-balance sm:text-4xl"
        >
          Acompanhamento nutricional pensado pra cada fase do seu processo.
        </motion.h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl border border-brass/20 bg-navy/40 p-8 lg:col-span-2 lg:row-span-2"
          >
            <div>
              <Scale className="text-brass-light" size={32} strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl sm:text-3xl">
                Nutrição Bariátrica
              </h3>
              <p className="mt-4 max-w-md text-ivory-dim leading-relaxed">
                Especialista em nutrição bariátrica, Lorena acompanha o
                paciente antes e depois da cirurgia — protocolo alimentar,
                reintrodução de alimentos e ajustes de suplementação, com
                material próprio (guia de alimentação pós-bariátrica).
              </p>
            </div>
            <span className="mt-8 font-label text-[11px] uppercase tracking-[0.14em] text-brass">
              Pré e pós-operatório
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-brass/20 bg-ink-soft p-8"
          >
            <Stethoscope className="text-brass-light" size={28} strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-xl">Nutrição Clínica</h3>
            <p className="mt-3 text-sm text-ivory-dim leading-relaxed">
              Avaliação individualizada para condições de saúde específicas,
              com plano alimentar sob medida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-brass/20 bg-ink-soft p-8"
          >
            <HeartPulse className="text-brass-light" size={28} strokeWidth={1.5} />
            <h3 className="mt-5 font-display text-xl">Emagrecimento</h3>
            <p className="mt-3 text-sm text-ivory-dim leading-relaxed">
              Reeducação alimentar sem dietas restritivas — comendo o
              básico, de verdade, com resultado sustentável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 rounded-2xl border border-brass/20 bg-navy/40 p-8 lg:col-span-1"
          >
            <Video className="shrink-0 text-brass-light" size={28} strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-xl">Presencial ou online</h3>
              <p className="mt-2 text-sm text-ivory-dim leading-relaxed">
                Consultório em Funcionários, BH, ou atendimento por
                videochamada de qualquer lugar do Brasil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
