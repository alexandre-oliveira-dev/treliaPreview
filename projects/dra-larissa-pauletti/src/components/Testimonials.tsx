"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "A extração do meu dente do siso foi muito mais tranquila do que eu imaginava. A Dra. Larissa explicou tudo antes e eu nem senti o medo que tinha na véspera.",
    author: "J. M.",
  },
  {
    quote:
      "Adiei o siso por anos com medo. Hoje me arrependo de não ter feito antes — o atendimento foi cuidadoso do início ao fim, sem pressa nenhuma.",
    author: "T. A.",
  },
  {
    quote:
      "Fui muito bem cuidada na recuperação também, com todas as orientações claras. Recomendo para quem tem pavor de dentista, como eu.",
    author: "C. R.",
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (paused || reduceMotion) return;
    timerRef.current = setInterval(next, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="depoimentos"
      className="relative py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark">
          Quem já passou por aqui
        </p>

        <div
          className="relative mt-10 min-h-[200px] sm:min-h-[160px]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Depoimentos de pacientes"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${count}`}
            >
              <p className="text-balance font-display text-2xl italic leading-snug text-ink-950 sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-clay-dark">
                {current.author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Depoimento anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-sand-dim hover:text-clay-dark cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.author}
                aria-label={`Ver depoimento ${i + 1} de ${count}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors cursor-pointer ${
                  i === index ? "bg-clay-dark" : "bg-ink-950/15"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Próximo depoimento"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-sand-dim hover:text-clay-dark cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="sr-only" aria-live="polite">
          Mostrando depoimento {index + 1} de {count}
        </p>
      </div>
    </section>
  );
}
