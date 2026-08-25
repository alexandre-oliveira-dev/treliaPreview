"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity } from "lucide-react";
import { SPECIALTIES } from "@/lib/contact";

const ICONS = {
  ortodontia: Sparkles,
  endodontia: Activity,
} as const;

export function Specialties() {
  return (
    <section className="bg-blush-soft px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-display text-3xl italic text-ink sm:text-4xl"
        >
          Duas especialidades, um único cuidado
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SPECIALTIES.map((item, index) => {
            const Icon = ICONS[item.key];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-5 rounded-3xl border border-border bg-blush p-8 sm:p-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <h3 className="font-display text-2xl italic text-ink">
                  {item.title}
                </h3>
                <p className="font-body leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
