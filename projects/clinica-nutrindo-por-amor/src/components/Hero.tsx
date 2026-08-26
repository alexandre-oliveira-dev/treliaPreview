"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { whatsappLink, INSTAGRAM_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-32 h-80 w-80 rounded-full bg-tangerine/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-forest/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full bg-forest/10 px-4 py-1.5 text-sm font-semibold text-forest">
            Nutrição + Psicologia Infantil · Curitiba
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.08] font-bold text-ink sm:text-6xl sm:leading-[1.05]">
            Onde a hora da comida vira um momento de{" "}
            <span className="text-tangerine">amor</span>, não de guerra.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Cuidado integrado para crianças e famílias: introdução alimentar,
            seletividade, obesidade infantil e terapia alimentar — nutrição e
            psicologia trabalhando juntas, no mesmo time.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-tangerine px-7 py-3.5 text-base font-semibold text-paper shadow-md shadow-tangerine/25 transition-colors hover:bg-tangerine-dark"
            >
              Marcar consulta pelo WhatsApp
            </motion.a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-forest/20 px-7 py-3.5 text-base font-semibold text-forest transition-colors hover:border-forest/40"
            >
              Ver no Instagram
            </a>
          </div>

          <p className="mt-8 text-sm text-ink/50">
            6 profissionais entre nutrição e psicologia · Rebouças, Curitiba
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 bg-forest-light/25"
            style={{ borderRadius: "42% 58% 63% 37% / 41% 45% 55% 59%" }}
          />
          <div
            className="relative aspect-[4/5] w-full overflow-hidden shadow-xl"
            style={{ borderRadius: "62% 38% 35% 65% / 55% 45% 55% 45%" }}
          >
            <Image
              src="/images/nutri-fichas-alimentares.jpg"
              alt="Nutricionista da clínica organizando fichas ilustradas de alimentos com uma criança"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -8, y: 10 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-4 -left-6 rounded-2xl bg-paper px-5 py-3 shadow-lg sm:-left-10"
          >
            <p className="font-hand text-2xl leading-none text-berry">
              ficha a ficha, com carinho
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
