"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2rem] border border-clay/25 bg-linen-dim p-8 shadow-lg shadow-ink-950/5 sm:p-10"
        >
          <span className="wax-seal absolute -top-6 left-8 flex h-14 w-14 items-center justify-center bg-clay text-linen shadow-lg">
            <span className="font-display italic text-2xl">R</span>
          </span>

          <p className="font-display text-2xl italic leading-relaxed text-ink-900 sm:text-3xl">
            &ldquo;Exercer a odontologia com amor e empatia cria um vínculo
            afetivo de confiança com os pacientes — ouvindo suas
            preocupações e expectativas, e acolhendo seus medos e
            inseguranças.&rdquo;
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-clay-dark">
            Dra. Jessica Rivera de Melo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl shadow-ink-950/10 sm:h-80">
            <Image
              src="/images/atendimento-consultorio.jpeg"
              alt="Dra. Jessica Rivera de Melo atendendo uma paciente no consultório"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>

          <h2 className="mt-8 font-display text-3xl italic text-ink-950">
            Cuidado técnico, presença humana
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-700">
            Graduada pela UFPR e especialista em Endodontia pelo ILAPEO
            (Instituto Latino-Americano de Pesquisa e Ensino Odontológico),
            a Dra. Jessica também se atualiza em odontologia estética e
            restauradora — unindo técnica apurada a um atendimento atencioso,
            do primeiro contato ao pós-tratamento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
