"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function CuidadoIntegrado() {
  return (
    <section id="integrado" className="bg-forest text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none"
        >
          <div
            className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl"
            style={{ borderRadius: "38% 62% 58% 42% / 42% 38% 62% 58%" }}
          >
            <Image
              src="/images/crianca-atividade.jpg"
              alt="Criança em atividade lúdica com fichas ilustradas de alimentos"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <span className="font-hand text-2xl text-tangerine">como cuidamos</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Nutrição e psicologia na mesma sala, no mesmo plano
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/80">
            A criança não separa fome de sentimento — e a gente também não
            separa nutricionista de psicóloga. As duas áreas conversam sobre
            cada caso, então o plano alimentar leva em conta a ansiedade, o
            medo e o comportamento à mesa, não só o prato.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Avaliação inicial conjunta entre nutrição e psicologia",
              "Atividades lúdicas — fichas, jogos e brincadeiras com comida",
              "Orientação para a família aplicar em casa, sem cobrança",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-tangerine" />
                <span className="text-[15px] leading-relaxed text-paper/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
