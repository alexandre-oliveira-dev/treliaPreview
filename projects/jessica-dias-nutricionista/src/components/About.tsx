"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LeafMark } from "./LeafMark";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="leaf-frame-alt relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-bark-soft lg:max-w-none"
        >
          <Image
            src="/images/clinica-consultorio.jpg"
            alt="Sala de atendimento de Jéssica Dias, com mesa de madeira e ambiente acolhedor"
            fill
            sizes="(min-width: 1024px) 32rem, 24rem"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            <LeafMark size={14} className="text-olive" />
            Sobre a Jéssica
          </span>
          <h2 className="font-display mt-4 text-4xl leading-[1.1] text-bark sm:text-5xl">
            Comida deveria
            <br />
            aproximar, não pesar
          </h2>

          <div className="mt-7 space-y-5 text-lg text-bark-soft">
            <p>
              Jéssica Dias atende em Curitiba com um jeito de nutrir que foge
              do discurso de dieta restritiva: escuta a rotina real de cada
              paciente, entende preferências e dificuldades, e monta um plano
              que cabe na vida — não o contrário.
            </p>
            <p>
              O consultório, no Centro de Curitiba, foi pensado para deixar a
              consulta confortável do início ao fim. E quem prefere não sair
              de casa também é bem-vindo: o acompanhamento acontece
              presencial ou 100% online, com o mesmo cuidado.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-6 border-t border-bark/10 pt-7 sm:grid-cols-3">
            {["Presencial", "Online", "Acompanhamento contínuo"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold uppercase leading-tight tracking-[0.06em] text-bark-mute"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
