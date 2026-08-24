"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: "+10", label: "anos cuidando de sorrisos" },
  { value: "100%", label: "biossegurança em cada etapa" },
  { value: "5★", label: "experiência acolhedora" },
];

export default function Office() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="consultorio" ref={sectionRef} className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600"
        >
          O consultório
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink-950 text-balance sm:text-5xl"
        >
          Um ambiente pensado para acalmar antes mesmo da consulta começar.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-lg shadow-ink-950/10 lg:mx-0"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-x-0 -top-[6%] -bottom-[6%]"
            >
              <Image
                src="/images/office-v2.jpg"
                alt="Recepção do consultório da Dra. Emanuelle Morais, com balcão de madeira e poltronas"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-white/60 px-5 py-5 shadow-sm shadow-ink-950/5"
              >
                <p className="font-display text-3xl text-coral">{stat.value}</p>
                <p className="text-sm text-ink-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
