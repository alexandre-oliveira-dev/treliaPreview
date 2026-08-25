"use client";

import { motion } from "framer-motion";
import { SPECIALTIES } from "@/lib/contact";

export default function Specialties() {
  return (
    <section id="especialidades" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark">
            Especialidades
          </span>
          <h2 className="mt-3 font-display text-3xl italic text-ink-950 sm:text-4xl">
            Cuidado completo, em um só endereço
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense">
          {SPECIALTIES.map((item, i) => {
            const featured = "featured" in item && item.featured;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: "backOut" }}
                className={`rounded-3xl border p-6 transition-colors ${
                  featured
                    ? "border-clay/40 bg-clay text-linen shadow-lg shadow-clay/25 lg:col-span-2 lg:row-span-2"
                    : "border-ink-950/10 bg-linen-dim text-ink-950 hover:border-clay/40"
                }`}
              >
                <h3
                  className={`font-display text-xl italic ${
                    featured ? "text-2xl text-linen sm:text-3xl" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    featured ? "text-linen/90 sm:text-base" : "text-ink-600"
                  }`}
                >
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
