"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, ClipboardList, Utensils } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-tomato-dark">
            Serviços
          </span>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            Consulta clínica e marmitas prontas com o mesmo cuidado
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col rounded-3xl border border-ink-950/10 bg-cream-dim p-7 lg:col-span-1"
          >
            <Stethoscope size={26} className="text-pine" />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">
              Consulta clínica
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Avaliação individual com foco em metabolismo e emagrecimento,
              presencial na Bela Vista ou por videochamada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="flex flex-col rounded-3xl border border-ink-950/10 bg-cream-dim p-7 lg:col-span-1"
          >
            <ClipboardList size={26} className="text-pine" />
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">
              Cardápio personalizado
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Planos alimentares construídos com técnica culinária, feitos
              para caber na sua rotina — não uma dieta genérica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-pine-dark p-7 text-cream lg:col-span-1"
          >
            <Utensils size={26} className="text-tomato" />
            <h3 className="mt-5 font-display text-xl font-semibold">
              Marmitas Nutrichef
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/75">
              Refeições preparadas seguindo o seu cardápio, entregues prontas
              para quem quer praticidade sem abrir mão do plano. Planos e
              pacotes flexíveis, para experimentar ou incorporar na rotina.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/marmita-nutrichef-1.png"
                  alt="Marmita Nutrichef embalada, preparada pelo Vitor Oliveira"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/marmita-nutrichef-2.png"
                  alt="Marmita Nutrichef com refeição balanceada"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-pine/20 bg-pine/5 px-7 py-6"
        >
          <p className="max-w-md text-sm leading-relaxed text-ink-700">
            Quer saber qual serviço faz mais sentido para o seu momento?
            Fale direto comigo pelo WhatsApp.
          </p>
          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-full bg-tomato px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-tomato-dark cursor-pointer"
          >
            Falar com o Vitor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
