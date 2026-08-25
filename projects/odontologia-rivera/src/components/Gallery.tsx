"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PHOTOS = [
  {
    src: "/images/sala-recepcao.jpeg",
    alt: "Sala administrativa da Odontologia Rivera, com certificados e diplomas na parede",
    caption: "Estrutura organizada, do agendamento ao acompanhamento",
  },
  {
    src: "/images/atendimento-consultorio.jpeg",
    alt: "Dra. Jessica Rivera de Melo durante um atendimento no consultório",
    caption: "Consultório equipado para procedimentos do dia a dia",
  },
  {
    src: "/images/dra-jessica-retrato.jpeg",
    alt: "Dra. Jessica Rivera de Melo sorrindo, segurando um modelo odontológico",
    caption: "Dra. Jessica Rivera de Melo, CRO/PR 25.539",
  },
];

export default function Gallery() {
  return (
    <section id="consultorio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark">
            O consultório
          </span>
          <h2 className="mt-3 font-display text-3xl italic text-ink-950 sm:text-4xl">
            Um espaço pensado para o seu conforto
          </h2>
        </motion.div>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {PHOTOS.map((photo, i) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="relative w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl shadow-lg shadow-ink-950/10 sm:w-[46%] lg:w-[32%]"
          >
            <div className="relative h-80 w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 78vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm font-medium text-linen">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
