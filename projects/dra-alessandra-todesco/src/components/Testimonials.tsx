"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/contact";

export function Testimonials() {
  return (
    <section className="bg-blush px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-display text-3xl italic text-ink sm:text-4xl"
        >
          Quem já passou por aqui
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((item, index) => (
            <motion.figure
              key={item.author}
              initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`rounded-2xl border border-border bg-blush-soft p-8 shadow-sm ${
                index % 2 === 0 ? "sm:translate-y-3" : "sm:-translate-y-3"
              }`}
            >
              <Quote aria-hidden="true" className="h-6 w-6 text-mauve" />
              <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-ink">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-body text-sm font-medium text-ink-muted">
                {item.author}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
