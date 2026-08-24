"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Star } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gold-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs tracking-widest uppercase text-rose-500 mb-6">
            <Sparkles size={14} />
            Sorrisos com cuidado e delicadeza
          </div>

          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] text-brown-800">
            Seu sorriso merece um{" "}
            <span className="italic text-rose-500">cuidado especial</span>
          </h1>

          <p className="mt-6 text-brown-700/80 text-base md:text-lg max-w-md leading-relaxed">
            Atendimento odontológico humanizado em Goiânia, unindo técnica,
            tecnologia e acolhimento em cada consulta com a Dra. Ana Caroline
            Farias.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brown-700 text-rose-50 px-7 py-3.5 text-sm tracking-wide hover:bg-brown-800 hover:scale-[1.03] transition-all shadow-lg shadow-brown-700/20"
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-brown-700/30 text-brown-700 px-7 py-3.5 text-sm tracking-wide hover:bg-white/60 transition-colors"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-10 flex items-center gap-1.5 text-rose-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm text-brown-700/70">
              Pacientes satisfeitos em Goiânia
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[22rem] w-[22rem] md:h-[26rem] md:w-[26rem] rounded-full bg-gradient-to-br from-rose-100 via-rose-200 to-gold-300/40 animate-float-slow" />
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-brown-700/20 w-72 h-96 md:w-80 md:h-[26rem]">
            <Image
              src="/images/consultorio.jpeg"
              alt="Consultório da Dra. Ana Caroline Farias"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 animate-float"
          >
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-display text-sm text-brown-800 leading-none">
                Ana Caroline Farias
              </p>
              <p className="text-[11px] text-brown-700/60 mt-1">
                Cirurgiã-Dentista
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
