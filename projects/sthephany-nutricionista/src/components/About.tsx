"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="bg-espresso text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-signal">
                <Image
                  src="/images/avatar.jpg"
                  alt="Sthephany"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-light">
                Se você chegou agora
              </span>
            </div>
            <p className="mt-5 font-display italic text-2xl leading-snug text-balance text-paper sm:text-3xl">
              &ldquo;Muito prazer, eu sou a sua última nutricionista.&rdquo;
            </p>

            <div className="mt-8 space-y-4 text-paper/80 leading-relaxed">
              <p>
                Moro em Curitiba e atendo mulheres com rotina corrida — que
                fazem tudo por todos, mas que agora decidiram olhar mais
                para si mesmas. Mulheres que querem voltar a se sentir bem
                ao se olhar no espelho e, principalmente, transformar o
                corpo e a saúde.
              </p>
              <p>
                Sou movida por otimismo e sonhos, e acredito que sempre
                existe um caminho melhor do que focar no problema. Corpo
                saudável pra mim é um corpo que vive, sente e aproveita.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-bust.jpg"
                alt="Sthephany sentada perto da janela do consultório"
                fill
                sizes="(min-width: 768px) 34vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/ambiente-sala.jpeg"
                alt="Sala de atendimento acolhedora, com poltronas verdes"
                fill
                sizes="(min-width: 768px) 17vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/ambiente-difusor.jpeg"
                alt="Difusor de aromas e detalhes do consultório"
                fill
                sizes="(min-width: 768px) 17vw, 45vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
