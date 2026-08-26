"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, AtSign } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, whatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Nutrição · Centro de Curitiba
          </span>

          <h1 className="font-display mt-5 text-balance text-5xl leading-[1.05] text-bark sm:text-6xl lg:text-[3.75rem]">
            Nutrição que
            <br />
            <span className="text-olive-deep">transforma</span> a
            <br />
            sua relação com
            <br />
            a comida.
          </h1>

          <p className="mt-7 max-w-md text-balance text-lg text-bark-soft">
            Acompanhamento nutricional próximo e sem fórmula pronta, com a
            Jéssica Dias — para emagrecer, comer melhor e cuidar da saúde
            digestiva com leveza, não com restrição.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-olive-deep px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-sand transition-colors hover:bg-bark"
            >
              Agendar consulta
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-bark-mute transition-colors hover:text-olive-deep"
            >
              <AtSign size={16} />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="leaf-frame-hero relative aspect-[4/5] w-full overflow-hidden bg-bark-soft">
            <Image
              src="/images/jessica-retrato.jpg"
              alt="Jéssica Dias, nutricionista em Curitiba, sorrindo"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 24rem"
              className="object-cover object-[55%_16%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bark/45 via-transparent to-transparent" />
          </div>
          <div className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full bg-gold/35 blur-2xl sm:h-32 sm:w-32" />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-olive-light/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
