"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/consultorio-atendimento.jpg"
              alt="Dra. Marianina Muñoz atendendo uma paciente em seu consultório"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-gold/30 bg-ivory px-5 py-4 shadow-xl shadow-charcoal-950/10 sm:-right-8">
            <Award className="text-gold-dark" size={26} />
            <p className="max-w-[9rem] text-xs font-medium leading-snug text-charcoal-700">
              Certificações e especializações em odontologia
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Sobre a Dra. Marianina
          </span>
          <h2 className="mt-4 font-display text-3xl italic text-charcoal-950 sm:text-4xl">
            Cuidado técnico, atendimento acolhedor
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal-700">
            Com 23 anos de trajetória em odontologia, a Dra. Marianina Muñoz
            reúne experiência clínica e especializações que permitem cuidar
            de cada paciente de forma completa — do check-up de rotina aos
            procedimentos mais delicados — em um consultório pensado para
            transmitir confiança e conforto.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal-700">
            No Capão Raso, em Curitiba, o consultório funciona com
            atendimento de emergência 24 horas, para que nenhum paciente
            precise esperar para resolver uma dor ou urgência odontológica.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-charcoal-950/10 pt-6">
            <div>
              <dt className="font-display text-3xl italic text-gold-dark">
                23+
              </dt>
              <dd className="text-xs uppercase tracking-wide text-charcoal-600">
                Anos de experiência
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl italic text-gold-dark">
                24h
              </dt>
              <dd className="text-xs uppercase tracking-wide text-charcoal-600">
                Emergência odontológica
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
