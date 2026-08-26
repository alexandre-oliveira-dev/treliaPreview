"use client";

import Image from "next/image";
import { motion } from "motion/react";

const PHOTOS = [
  {
    src: "/images/clinica-sala-espera.jpg",
    alt: "Sala de espera da clínica Mocelin Nutrição, com poltronas e quadros",
  },
  {
    src: "/images/clinica-recepcao.jpg",
    alt: "Recepção da clínica Mocelin Nutrição, parede amarela com o logo Mocelin",
  },
];

export function ClinicGallery() {
  return (
    <section id="clinica" className="bg-paper-dim py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-coral-deep">
            O ambiente
          </span>
          <h2 className="font-display mt-4 text-5xl uppercase leading-[0.92] text-ink sm:text-6xl">
            Um consultório
            <br />
            para respirar
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            No 4º andar, ao lado do estacionamento Top Park, no Centro de
            Curitiba — um espaço pensado para consulta calma, sem pressa de
            corredor de hospital.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className={`relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink-soft ${
                i === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 28rem, 90vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
