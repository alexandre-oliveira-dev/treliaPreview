"use client";

import { motion } from "motion/react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export function ProvaSocial() {
  return (
    <section className="bg-ink py-24 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime">Resultados reais</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl">
              +1500 alunas já passaram pelo método Eu+Magra. Os relatos estão no Instagram.
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-lime px-6 py-3 font-mono text-sm uppercase tracking-widest text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            Ver depoimentos {INSTAGRAM_HANDLE}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
