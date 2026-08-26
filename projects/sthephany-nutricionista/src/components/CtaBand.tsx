"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CONTACT } from "@/lib/contact";

export default function CtaBand() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24 lg:px-16">
        <div className="grid gap-10 rounded-3xl bg-espresso px-6 py-12 text-paper sm:px-10 md:grid-cols-[1.3fr_0.9fr] md:items-center md:gap-4 md:px-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-light">
              Corpo saudável é um corpo que vive
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-balance sm:text-4xl">
              Pronta para se sentir bem
              <span className="italic"> ao se olhar no espelho?</span>
            </h2>
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-black/20 transition-colors hover:bg-signal-dark cursor-pointer"
            >
              Agendar minha avaliação
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/red-accent.jpg"
              alt="Sthephany, nutricionista, em retrato de estúdio"
              fill
              sizes="(min-width: 768px) 30vw, 80vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
