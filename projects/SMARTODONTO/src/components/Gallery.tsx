"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  { src: "/images/fachada.jpeg", alt: "Fachada da clínica Smartodonto em Goiânia" },
  { src: "/images/recepcao.jpeg", alt: "Sala de espera moderna da Smartodonto" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-brand-navy relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Conheça a clínica
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Um ambiente pensado para o seu conforto
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
