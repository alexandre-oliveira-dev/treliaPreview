"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarCheck, MapPin, Star } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange/30 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
            <Star size={14} className="text-brand-orange fill-brand-orange" />
            Referência em odontologia em Goiânia
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white">
            Seu sorriso está em{" "}
            <span className="text-gradient-orange">boas mãos</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Na {SITE.name}, cuidamos da sua saúde bucal com tecnologia,
            conforto e uma equipe pronta para transformar o seu sorriso.
            Agende agora sua avaliação.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink(SITE.phonePrimaryWhats)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-base font-bold text-white shadow-xl shadow-orange-900/40 transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full animate-pulse-ring" />
              <CalendarCheck size={20} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <MapPin size={20} />
              Ver localização
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/70 text-sm">
            <span>📍 Vila Jardim São Judas Tadeu, Goiânia - GO</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
            <Image
              src="/images/recepcao.jpeg"
              alt="Recepção da clínica Smartodonto"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:-left-10 rounded-2xl bg-white px-5 py-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-brand-orange-light border-2 border-white flex items-center justify-center text-xs font-bold text-brand-orange-dark"
                  >
                    ★
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-extrabold text-brand-navy leading-none">
                  Pacientes satisfeitos
                </p>
                <p className="text-xs text-brand-navy/60 mt-1">
                  Cuidado e confiança em cada consulta
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
