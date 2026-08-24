"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import WaveDivider from "./WaveDivider";

const TICKER_ITEMS = [
  "Atendimento humanizado",
  "Estética dental",
  "Boqueirão, Santos",
  "Clínica geral & ortodontia",
  "Agende pelo WhatsApp",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-paper pt-24 lg:pt-0"
    >
      <motion.div
        style={{ y: blobY }}
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-seafoam-dim blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative lg:flex lg:min-h-[92svh] lg:items-center">
        {/* Portrait — torn coastline edge instead of a rounded card */}
        <div className="hero-clip relative h-[46vh] w-full overflow-hidden sm:h-[52vh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[57%]">
          <motion.div
            style={{ y: photoY }}
            className="absolute inset-x-0 -top-[14%] -bottom-[14%] lg:-top-[10%] lg:-bottom-[10%]"
          >
            <Image
              src="/images/portrait-hero-v2.jpg"
              alt="Dra. Emanuelle Morais, cirurgiã-dentista, sorrindo em frente a ilustrações de coral"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 57vw"
              className="object-cover object-[62%_18%]"
            />
          </motion.div>
          {/* mobile: blend bottom edge into paper */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-paper lg:hidden" />
          {/* desktop: blend left edge into paper so text can sit over it */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-paper via-paper/45 to-transparent lg:block" />
        </div>

        {/* Vertical spine label — signature detail, desktop only */}
        <div className="pointer-events-none absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:gap-4">
          <span className="h-10 w-px bg-ink-900/20" />
          <span
            style={{ writingMode: "vertical-rl" }}
            className="rotate-180 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ink-700"
          >
            Boqueirão · Santos, SP
          </span>
          <span className="h-10 w-px bg-ink-900/20" />
        </div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 px-6 pt-9 pb-6 sm:px-10 lg:max-w-lg lg:py-0 lg:pl-24 lg:pr-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600 lg:hidden">
            Boqueirão · Santos, SP
          </p>

          <h1 className="mt-4 font-display text-[2.5rem] leading-[1.05] text-ink-950 text-balance sm:text-6xl lg:mt-6 lg:text-[3.35rem]">
            Um sorriso com a{" "}
            <em className="text-coral not-italic font-medium">leveza</em> da
            orla de Santos.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700 sm:text-lg">
            A Dra. Emanuelle Morais recebe você no Boqueirão com odontologia
            humanizada, estética dental e tecnologia — para cuidar do seu
            sorriso com calma, precisão e carinho.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-coral/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <CalendarCheck size={18} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#sobre"
              className="text-sm font-semibold text-ink-800 underline decoration-coral/50 decoration-2 underline-offset-4 hover:text-coral"
            >
              Conhecer a Dra. Emanuelle
            </a>
          </div>
        </motion.div>
      </div>

      {/* Boardwalk ticker — replaces the generic floating rating badge */}
      <div className="relative z-10 mt-2 overflow-hidden border-y border-ink-900/10 lg:mt-10">
        <div className="marquee-track flex gap-10 whitespace-nowrap py-3">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/75"
              >
                {item}
                <span className="text-coral">•</span>
              </span>
            )
          )}
        </div>
      </div>

      <div className="relative">
        <WaveDivider fill="var(--mist)" />
      </div>
    </section>
  );
}
