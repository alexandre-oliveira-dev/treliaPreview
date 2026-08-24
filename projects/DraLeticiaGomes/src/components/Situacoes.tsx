"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/contact";

const SITUACOES = [
  {
    title: "Divórcio e União Estável",
    text: "Condução do fim do relacionamento com estratégia e cuidado, seja de forma consensual ou litigiosa, protegendo seus direitos em cada etapa.",
  },
  {
    title: "Partilha de Bens",
    text: "Levantamento e divisão justa do patrimônio construído durante a relação, evitando prejuízos e desgastes desnecessários.",
  },
  {
    title: "Guarda e Convivência",
    text: "Definição de guarda e regime de visitas priorizando o melhor interesse da criança e a segurança da rotina familiar.",
  },
  {
    title: "Investigação de Paternidade",
    text: "Reconhecimento de vínculo e garantia de direitos filiais, com condução sensível de um processo delicado.",
  },
  {
    title: "Alimentos",
    text: "Fixação, revisão ou exoneração de pensão alimentícia com base técnica sólida e atenção à realidade de cada família.",
  },
  {
    title: "Inventário e Planejamento Sucessório",
    text: "Condução de inventários e estratégias de sucessão e benefícios do INSS, com agilidade e transparência em um momento delicado.",
  },
];

export default function Situacoes() {
  const [open, setOpen] = useState(0);

  return (
    <section id="situacoes" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay-dim">
            Áreas de atuação
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl italic text-ink-950 sm:text-4xl">
            Qual situação você deseja solucionar?
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink-950/10 border-y border-ink-950/10">
          {SITUACOES.map((situacao, i) => {
            const isOpen = open === i;
            return (
              <div key={situacao.title}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl italic text-ink-950 sm:text-2xl">
                    {situacao.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink-950/20 text-lg text-clay-dim"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-base leading-relaxed text-ink-800/85">
                        {situacao.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <a
            href={waLink("Olá, Dra. Letícia! Quero falar sobre a minha situação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-clay"
          >
            Clique para falar com a advogada
          </a>
        </Reveal>
      </div>
    </section>
  );
}
