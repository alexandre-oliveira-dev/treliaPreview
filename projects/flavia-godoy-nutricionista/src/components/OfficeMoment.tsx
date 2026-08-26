"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TrackLane } from "./TrackLane";

export function OfficeMoment() {
  return (
    <section id="consultorio" className="relative bg-stone text-petrol">
      <div className="h-10 md:h-14 text-copper-deep -scale-y-100">
        <TrackLane />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-20 md:pb-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-md order-1 md:order-none"
        >
          <Image
            src="/images/flavia-consultorio.jpg"
            alt="Consultório de Flavia Godoy, com marcenaria em ripas de madeira clara"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="font-body font-bold uppercase tracking-[0.25em] text-xs text-sage-deep"
          >
            O consultório
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display uppercase text-balance mt-3 text-3xl sm:text-4xl md:text-5xl leading-[1.05]"
          >
            Um espaço pensado para conversa, não pra pressa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-petrol/70 leading-relaxed"
          >
            Atendimento no Centro de Belo Horizonte, com consultas que respeitam
            o tempo de cada paciente — presencial no consultório ou online, de
            onde você estiver.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
