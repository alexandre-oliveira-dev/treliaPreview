"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const REVIEWS = [
  {
    quote: "Gostei muito, profissional atenciosa e competente.",
    author: "Luciane P.",
    source: "Avaliação no Google",
    rotate: "-2deg",
  },
  {
    quote:
      "A melhor nutri, atendimento integrativo e personalizado! Maravilhosa.",
    author: "@kim_tieme",
    source: "Comentário no Instagram",
    rotate: "1.5deg",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-signal text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper/70">
              Prova social
            </span>
            <div className="mt-4 flex items-end gap-3">
              <span className="font-display text-6xl leading-none sm:text-7xl">
                {CONTACT.rating}
              </span>
              <div className="flex items-center gap-1 pb-2 text-paper">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-paper/70">
              {CONTACT.reviewCount} avaliações verificadas de pacientes
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((review, i) => (
              <motion.figure
                key={review.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ rotate: review.rotate }}
                className="ficha-tab bg-paper px-6 py-6 text-espresso shadow-xl shadow-black/15"
              >
                <blockquote className="font-display italic text-lg leading-snug text-balance">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <div className="ficha-rule mb-3 text-espresso/15" />
                  <span className="text-sm font-semibold">
                    {review.author}
                  </span>
                  <span className="block font-mono text-xs text-espresso-600">
                    {review.source}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
