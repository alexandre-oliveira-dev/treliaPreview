"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ADDRESS_LINE1, ADDRESS_LINE2, MAPS_URL } from "@/lib/site";

export function Espaco() {
  return (
    <section id="espaco" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-clay">O espaço</p>
            <h2 className="mt-4 max-w-lg font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Consultório em Juvevê, feito pra você se sentir bem.
            </h2>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-clay underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            {ADDRESS_LINE1}, {ADDRESS_LINE2}
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-clay/10"
          >
            <Image
              src="/images/espaco-recepcao.jpg"
              alt="Corredor de recepção do consultório da nutricionista Jéssica Bressan em Curitiba"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-clay/10 sm:mt-10"
          >
            <Image
              src="/images/espaco-sala-espera.jpg"
              alt="Sala de espera acolhedora do consultório da nutricionista Jéssica Bressan"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
