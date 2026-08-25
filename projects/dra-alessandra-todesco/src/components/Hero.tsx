"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/contact";
import { Header } from "./Header";
import { ToothFlourish } from "./ToothFlourish";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-blush">
      <ToothFlourish className="pointer-events-none absolute -left-16 top-1/3 h-64 w-96 text-mauve-light/70" />
      <ToothFlourish className="pointer-events-none absolute -right-10 bottom-0 h-48 w-72 rotate-180 text-mauve-light/50" />

      <Header />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28 lg:pt-40">
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-wine"
          >
            {CONTACT.role} · {CONTACT.city}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl italic leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Cuidado dental com a atenção de quem entende de família.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md font-body text-base leading-relaxed text-ink-muted"
          >
            Mãe, esposa e cirurgiã-dentista — a Dra. Alessandra Todesco traz
            para o consultório a mesma paciência e cuidado que oferece em
            casa, unindo especialização em Endodontia e Ortodontia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <span className="rounded-full border border-wine/35 px-4 py-1.5 text-sm font-medium text-wine-deep">
              Ortodontia
            </span>
            <span className="rounded-full border border-wine/35 px-4 py-1.5 text-sm font-medium text-wine-deep">
              Endodontia
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-4"
          >
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-wine px-7 py-3 text-sm font-semibold text-blush transition-transform duration-200 hover:scale-[1.03] hover:bg-wine-deep active:scale-[0.98]"
            >
              Agendar pelo WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[320px] sm:w-[320px]"
        >
          {/* Hand-drawn-style ring — a signature flourish that also frames the modestly-sized photo so it never has to be upscaled past its native resolution */}
          <svg
            viewBox="0 0 320 320"
            className="absolute inset-0 h-full w-full text-mauve"
            aria-hidden="true"
          >
            <circle
              cx="160"
              cy="160"
              r="152"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2 10"
            />
          </svg>

          <div className="relative h-[230px] w-[230px] overflow-hidden rounded-full shadow-[0_25px_50px_-20px_rgba(36,27,34,0.4)] sm:h-[264px] sm:w-[264px]">
            <Image
              src="/images/retrato-dra-alessandra.jpg"
              alt="Dra. Alessandra Todesco, cirurgiã-dentista, sorrindo de braços cruzados vestindo jaleco branco"
              fill
              priority
              quality={95}
              sizes="264px"
              className="object-cover object-[50%_20%]"
            />
            {/* Softens the flat wall/flash-shadow of the source photo and ties it to the wine palette */}
            <div className="absolute inset-0 bg-gradient-to-br from-wine/10 via-transparent to-ink/10 mix-blend-multiply" />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_10px_rgba(36,27,34,0.18)]" />
          </div>

          <span className="absolute -bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-wine text-blush shadow-[0_10px_25px_-10px_rgba(36,27,34,0.5)]">
            <ToothFlourish className="h-6 w-8" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
