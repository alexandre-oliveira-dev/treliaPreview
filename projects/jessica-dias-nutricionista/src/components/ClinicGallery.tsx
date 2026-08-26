"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ClinicGallery() {
  return (
    <section id="consultorio" className="bg-sand-dim py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            O consultório
          </span>
          <h2 className="font-display mt-4 text-4xl leading-[1.1] text-bark sm:text-5xl">
            Um espaço para
            <br />
            se sentir em casa
          </h2>
          <p className="mt-6 max-w-md text-lg text-bark-soft">
            No Centro de Curitiba, um ambiente pensado nos mínimos detalhes —
            madeira quente, plantas e boa luz — para que a consulta seja um
            momento tranquilo, não mais um compromisso apertado no dia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="leaf-frame relative aspect-[4/5] w-full overflow-hidden bg-bark-soft"
        >
          <Image
            src="/images/clinica-recepcao.jpg"
            alt="Recepção do consultório de Jéssica Dias, com o logotipo na parede de madeira"
            fill
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
