"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT, whatsAppLink } from "@/lib/contact";
import { FacetField } from "./FacetField";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-stone pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 border border-teal/30 bg-teal/5 px-3 py-1 text-xs font-medium tracking-wide text-teal-dark"
          >
            Barretos - SP · {CONTACT.cro}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
          >
            Odontologia que cuida da função <span className="text-teal">e</span>{" "}
            da harmonia do seu rosto.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-700 sm:text-lg"
          >
            Clínico-geral, implantes dentários, harmonização facial e
            cirurgias com a Dra. Simone Donadeli Camelo, no centro de
            Barretos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsAppLink("Olá! Vi o site e quero agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-stone transition-transform hover:scale-[1.03] hover:bg-teal-dark active:scale-[0.98] sm:text-base"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={`tel:+${CONTACT.phoneWhatsApp}`}
              className="text-sm font-medium text-ink-700 underline decoration-teal/50 decoration-2 underline-offset-4 transition-colors hover:text-teal-dark sm:text-base"
            >
              {CONTACT.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <FacetField className="absolute -inset-6 -z-10 h-[calc(100%+3rem)] w-[calc(100%+3rem)]" />
          <div className="facet-frame relative aspect-[4/5] w-full bg-ink-950">
            <Image
              src="/images/simone-retrato.png"
              alt="Dra. Simone Donadeli Camelo"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
