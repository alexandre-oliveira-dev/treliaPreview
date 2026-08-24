"use client";

import { motion } from "motion/react";
import InkUnderline from "./InkUnderline";
import { CONTACT, waLink } from "@/lib/contact";

const words = ["Cada", "história", "de", "família", "merece", "ser", "ouvida", "com", "cuidado."];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-6 pb-20 pt-14 sm:px-10 sm:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-wine">
            Santos — SP
          </p>

          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.08] text-ink-950 text-balance sm:text-[3.2rem] lg:text-[3.6rem]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="mr-[0.28em] inline-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 * i, ease: "easeOut" }}
              >
                {word === "cuidado." ? (
                  <InkUnderline className="italic text-wine">{word}</InkUnderline>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-ink-700">
            Escritório de advocacia em Santos, dedicado a Direito de Família
            e Sucessões e Direito Civil. Conduzimos divórcios, guardas,
            inventários e partilhas com atenção próxima a cada detalhe do
            seu caso.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-wine px-7 py-3.5 font-body text-sm font-medium text-paper shadow-sm transition-colors hover:bg-wine-dim"
            >
              Agendar uma conversa
            </a>
            <a
              href="#areas"
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-800 underline decoration-ink-800/30 underline-offset-4 transition-colors hover:text-wine"
            >
              Ver áreas de atuação
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-olive/15" aria-hidden />
          <div className="rotate-[-3deg] rounded-2xl border border-ink-950/10 bg-[#f6f4ec] p-8 shadow-[0_20px_45px_-20px_rgba(42,33,48,0.35)]">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neutral">
              Ref. atendimento
            </p>
            <p className="mt-6 font-display text-2xl italic leading-snug text-ink-900">
              &ldquo;A gente não escolhe o momento de precisar de um
              advogado. Mas pode escolher quem vai ouvir a sua história
              antes de falar em processo.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-ink-950/10 pt-5">
              <span className="font-display text-sm italic text-ink-800">
                Sylvia Oliveira
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-neutral">
                OAB/SP
              </span>
            </div>
          </div>
          <div
            className="absolute -bottom-5 -right-4 rotate-[6deg] rounded-xl border border-ink-950/10 bg-wine/10 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-wine-dim shadow-sm"
            aria-hidden
          >
            {CONTACT.addressLine.split(",")[2]?.trim() ?? "Santos - SP"}
          </div>
        </div>
      </div>
    </section>
  );
}
