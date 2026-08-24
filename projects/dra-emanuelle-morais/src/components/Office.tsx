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

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="consultorio"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-ink-900 py-28 text-paper sm:py-36"
    >
      <motion.div
        style={{ y: imageY }}
        aria-hidden="true"
        className="absolute inset-x-0 -top-[12%] -bottom-[12%]"
      >
        <Image
          src="/images/office-v2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950/75" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-seafoam"
        >
          O consultório
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 font-display text-3xl leading-tight text-balance sm:text-5xl"
        >
          Um ambiente pensado para acalmar antes mesmo da consulta começar.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-paper/15 bg-paper/5 px-5 py-6 backdrop-blur-sm"
            >
              <p className="font-display text-3xl text-coral">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-paper/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
