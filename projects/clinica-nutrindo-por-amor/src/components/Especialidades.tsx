"use client";

import { motion } from "motion/react";
import { ESPECIALIDADES } from "@/lib/constants";

const ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];
const OFFSETS = ["lg:mt-0", "lg:mt-8", "lg:mt-2", "lg:mt-10"];

export default function Especialidades() {
  return (
    <section id="especialidades" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-xl">
        <span className="font-hand text-2xl text-berry">do que cuidamos</span>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
          Quatro fichas, um único cuidado
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">
          Cada criança chega até a gente por um motivo diferente. A nutrição e
          a psicologia entram juntas em todos eles.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ESPECIALIDADES.map((esp, i) => (
          <motion.div
            key={esp.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative rounded-[28px] border border-ink/8 bg-paper p-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md ${OFFSETS[i]} ${ROTATIONS[i]} hover:rotate-0`}
          >
            <span className="font-hand text-lg text-forest/60">
              0{i + 1}
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-ink">
              {esp.titulo}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
              {esp.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
