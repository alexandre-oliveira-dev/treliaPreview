"use client";

import { motion } from "motion/react";

export function Services() {
  return (
    <section id="servicos" className="bg-carbon px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-label text-xs uppercase tracking-[0.28em] text-ignite"
        >
          Escolha o ritmo
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-4 font-display text-4xl tracking-wide text-chalk sm:text-5xl"
        >
          DOIS JEITOS DE COMEÇAR.
        </motion.h2>

        <div className="relative mt-14 grid overflow-hidden border border-chalk/10 md:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col justify-between bg-carbon-soft p-8 sm:p-12 [clip-path:polygon(0_0,100%_0,94%_100%,0%_100%)] md:pr-16"
          >
            <div>
              <span className="font-label text-xs uppercase tracking-[0.24em] text-ignite">
                Acompanhamento
              </span>
              <h3 className="mt-3 font-display text-5xl tracking-wide text-chalk">
                VIP
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-chalk-dim sm:text-base">
                Atendimento premium, com lista de espera — pra quem quer o
                acompanhamento mais próximo do Victor. Vaga liberada conforme
                abertura.
              </p>
            </div>
            <a
              href="https://wa.me/5531936193062?text=Quero%20entrar%20na%20lista%20de%20espera%20do%20VIP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit cursor-pointer items-center gap-2 border border-ignite px-6 py-3 font-label text-xs uppercase tracking-[0.14em] text-ignite transition-colors hover:bg-ignite hover:text-carbon"
            >
              Entrar na lista de espera
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative flex flex-col justify-between bg-ignite p-8 text-carbon sm:p-12"
          >
            <div>
              <span className="font-label text-xs uppercase tracking-[0.24em] text-carbon/70">
                Acompanhamento
              </span>
              <h3 className="mt-3 font-display text-5xl tracking-wide text-carbon">
                SMART
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-carbon/80 sm:text-base">
                Início imediato, direto no WhatsApp — sem fila de espera.
                Plano objetivo pra quem quer começar agora.
              </p>
            </div>
            <a
              href="https://wa.me/5531936193062?text=Quero%20come%C3%A7ar%20o%20SMART%20agora"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit cursor-pointer items-center gap-2 bg-carbon px-6 py-3 font-label text-xs uppercase tracking-[0.14em] text-chalk transition-colors hover:bg-carbon-soft"
            >
              Começar agora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
