"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT, whatsAppLink } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-ivory pt-10 sm:pt-14"
    >
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-0 lg:px-0">
        <div className="flex flex-col justify-center py-6 lg:py-24 lg:pl-8 lg:pr-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sage/30 bg-sage/5 px-3 py-1 text-xs font-medium tracking-wide text-sage-dark"
          >
            Bairro Fortaleza · Barretos - SP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {CONTACT.displayName}, cuidando do seu sorriso com{" "}
            <span className="italic text-sage-dark">calma</span> e atenção.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Atendimento odontológico cuidadoso e individualizado, num
            consultório pensado para deixar cada visita mais tranquila — no
            bairro Fortaleza, em Barretos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsAppLink("Olá! Vi o site e gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sage px-6 py-3 text-sm font-semibold text-ivory transition-transform hover:scale-[1.03] hover:bg-sage-dark active:scale-[0.98] sm:text-base"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={`tel:+${CONTACT.phoneWhatsApp}`}
              className="text-sm font-medium text-ink-soft underline decoration-sage/50 decoration-2 underline-offset-4 transition-colors hover:text-sage-dark sm:text-base"
            >
              {CONTACT.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[32rem]"
        >
          <Image
            src="/images/consultorio.jpeg"
            alt="Consultório odontológico da Dra. Fernanda Teixeira, com parede de mármore e luminária dourada"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory via-ivory/0 to-transparent lg:block lg:w-24" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ivory/70 to-transparent lg:hidden" />
          <p className="absolute bottom-4 right-4 rounded-full bg-ink/40 px-3 py-1 text-[11px] font-medium tracking-wide text-ivory backdrop-blur-sm">
            Conheça o consultório
          </p>
        </motion.div>
      </div>
    </section>
  );
}
