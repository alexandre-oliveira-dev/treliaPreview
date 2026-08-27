"use client";

import { motion } from "motion/react";
import { CONTACT } from "@/lib/contact";
import { CornerFrame } from "./CornerFrame";

function initials(name: string) {
  return name
    .replace(/^Dra\.\s*/i, "")
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function Dentists() {
  return (
    <section id="dentistas" className="bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-coral-dark">
            Fig. 02 — Quem atende
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Duas profissionais, no mesmo consultório.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT.dentists.map((dentist, i) => (
            <motion.div
              key={dentist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <CornerFrame className="flex h-full flex-col gap-6 bg-paper p-8">
                <span className="font-display text-4xl font-semibold text-ink/15">
                  {initials(dentist.name)}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {dentist.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {dentist.detail}
                  </p>
                </div>
              </CornerFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
