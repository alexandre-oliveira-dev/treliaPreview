"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Area } from "@/lib/site";

export function AreaCard({ area, index }: { area: Area; index: number }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
      <Link
        href={`/areas-de-atuacao/${area.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-paper p-8 transition-colors duration-200 hover:border-graphite"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-3 -top-6 font-serif-display text-8xl text-ink/[0.04] transition-colors group-hover:text-graphite/[0.06]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative">
          <span className="font-serif-display text-sm text-graphite">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-serif-display text-xl text-ink">{area.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-body/70">{area.description}</p>
        </div>
        <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-graphite">
          Conhecer a área
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
