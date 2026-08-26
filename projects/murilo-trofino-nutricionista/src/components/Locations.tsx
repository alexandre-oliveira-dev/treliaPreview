"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ACADEMIA, CONSULTORIO, HORARIOS } from "@/lib/constants";

export function Locations() {
  return (
    <section id="onde-atender" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Onde atender
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Dois endereços em Curitiba, e um em qualquer lugar
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Consultório */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-white/8 bg-ink"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/consultorio.png"
                alt="Fachada do prédio do consultório particular, Centro Cívico, Curitiba"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-paper">
                {CONSULTORIO.nome}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-steel">
                {CONSULTORIO.endereco}
              </p>
              <div className="mt-4 space-y-1 border-t border-white/8 pt-4">
                <p className="font-mono text-xs text-steel">
                  {HORARIOS.semana}
                </p>
                <p className="font-mono text-xs text-steel">
                  {HORARIOS.sabado}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Academia */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            className="flex flex-col justify-between rounded-2xl border border-white/8 bg-ink p-6 sm:p-7"
          >
            <div>
              <span className="inline-block rounded-full bg-signal/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-signal">
                Com estacionamento
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                {ACADEMIA.nome}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-steel">
                {ACADEMIA.endereco}
              </p>
            </div>
            <div className="mt-6 space-y-1 border-t border-white/8 pt-4">
              <p className="font-mono text-xs text-steel">
                {HORARIOS.semana}
              </p>
              <p className="font-mono text-xs text-steel">
                {HORARIOS.sabado}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-6 rounded-2xl border border-white/8 bg-ink/60 p-6 text-center sm:p-7"
        >
          <p className="font-body text-sm text-steel">
            Não está em Curitiba?{" "}
            <span className="font-medium text-paper">
              Atendimento também por consulta online
            </span>
            , com a mesma profundidade da consulta presencial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
