"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ENDERECO,
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  whatsappLink,
} from "@/lib/constants";

export default function Local() {
  return (
    <section id="local" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div
            className="relative aspect-[3/4] w-full overflow-hidden shadow-xl"
            style={{ borderRadius: "48% 52% 40% 60% / 55% 45% 55% 45%" }}
          >
            <Image
              src="/images/retrato-consultorio.jpg"
              alt="Profissional da clínica no consultório"
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-hand text-2xl text-berry">venha nos visitar</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Atendimento presencial em Curitiba
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4 rounded-2xl bg-paper p-5 shadow-sm">
              <span className="mt-0.5 text-tangerine">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.24 11.3 6.5 11.55a1.4 1.4 0 0 0 2 0c.26-.25 6.5-6.3 6.5-11.55C19.5 5.36 16.14 2 12 2zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-ink">{ENDERECO.linha1}</p>
                <p className="text-ink/60">{ENDERECO.linha2}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-tangerine px-6 py-3.5 text-base font-semibold text-paper shadow-md shadow-tangerine/25 transition-colors hover:bg-tangerine-dark"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-forest/20 px-6 py-3.5 text-base font-semibold text-forest transition-colors hover:border-forest/40"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
