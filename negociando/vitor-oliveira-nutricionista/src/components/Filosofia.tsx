"use client";

import { motion } from "framer-motion";
import PlateMark from "./PlateMark";

export default function Filosofia() {
  return (
    <section id="abordagem" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          <PlateMark className="mx-auto h-10 w-auto text-pine" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-8 font-display text-2xl font-medium leading-snug text-ink-950 text-balance sm:text-3xl lg:text-4xl"
        >
          &ldquo;Uma nutrição com propósito, respeito,{" "}
          <span className="text-tomato">ciência</span> e afeto.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-600"
        >
          Formado em Nutrição e apaixonado por gastronomia, uno o rigor
          técnico da ciência da nutrição à sensibilidade de quem também sabe
          cozinhar — para montar planos que respeitam seu paladar, sua rotina
          e seus objetivos de metabolismo e emagrecimento.
        </motion.p>
      </div>
    </section>
  );
}
