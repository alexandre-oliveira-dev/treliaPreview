"use client";

import { motion } from "motion/react";
import { SERVICOS, whatsappLink } from "@/lib/constants";

export function Services() {
  return (
    <section id="servicos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Serviços
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Como podemos trabalhar juntos
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-6">
          {SERVICOS.map((servico, i) => {
            const isFeatured = i === 0;
            return (
              <motion.a
                key={servico.titulo}
                href={whatsappLink(
                  `Olá, Murilo! Tenho interesse em: ${servico.titulo}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={`group flex flex-col justify-between rounded-2xl border border-white/8 bg-surface p-6 transition-colors hover:border-signal/40 sm:p-7 ${
                  isFeatured
                    ? "sm:col-span-4 sm:row-span-2"
                    : "sm:col-span-3 lg:col-span-2"
                }`}
              >
                <div>
                  <h3
                    className={`font-display font-semibold text-paper ${
                      isFeatured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {servico.titulo}
                  </h3>
                  <p
                    className={`mt-3 font-body leading-relaxed text-steel ${
                      isFeatured ? "text-base" : "text-sm"
                    }`}
                  >
                    {servico.descricao}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-medium text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  Saber mais no WhatsApp
                  <span aria-hidden="true">→</span>
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
