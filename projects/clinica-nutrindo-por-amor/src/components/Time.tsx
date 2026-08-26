"use client";

import { motion } from "motion/react";
import { TIME } from "@/lib/constants";

export default function Time() {
  return (
    <section id="time" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-xl">
        <span className="font-hand text-2xl text-berry">quem cuida</span>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
          Um time, duas especialidades
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">
          Psicólogas e nutricionistas dedicadas à infância, cada uma com sua
          aba — mas todas no mesmo fichário de cuidado.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {TIME.map((pessoa, i) => {
          const isPsico = pessoa.area === "psicologia";
          return (
            <motion.div
              key={pessoa.nome}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-ink/8 bg-paper px-5 py-6 shadow-sm"
            >
              <span
                className={`absolute right-0 top-0 rounded-bl-xl px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-paper ${
                  isPsico ? "bg-berry" : "bg-forest"
                }`}
              >
                {isPsico ? "Psico" : "Nutri"}
              </span>
              <p className="font-display text-lg font-bold text-ink">
                {pessoa.nome}
              </p>
              <p className="mt-1 text-sm text-ink/60">{pessoa.cargo}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
