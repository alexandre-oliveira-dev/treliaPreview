"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, GraduationCap, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Formação e atualização",
    text: "Cuidado técnico embasado nas melhores práticas da odontologia moderna.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Cada paciente é ouvido com atenção, num ambiente leve e acolhedor.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e biossegurança",
    text: "Protocolos rígidos de higienização para o seu bem-estar e tranquilidade.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden w-full aspect-[4/5] max-w-md mx-auto shadow-xl">
            <Image
              src="/images/consultorio.jpeg"
              alt="Ambiente do consultório"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -z-10 top-8 -left-6 h-full w-full rounded-[2.5rem] bg-rose-100 max-w-md mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-rose-500">
            Sobre a profissional
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brown-800 mt-3 mb-5">
            Dra. Ana Caroline Farias
          </h2>
          <p className="text-brown-700/80 leading-relaxed mb-4">
            Cirurgiã-dentista dedicada a oferecer uma experiência odontológica
            tranquila e transformadora. Combino técnica apurada com escuta
            atenta, para que cada paciente se sinta seguro do primeiro
            contato ao sorriso final.
          </p>
          <p className="text-brown-700/80 leading-relaxed mb-8">
            Localizada no Setor Sul, em Goiânia, a clínica foi pensada para
            proporcionar conforto, discrição e cuidado em cada detalhe.
          </p>

          <div className="space-y-5">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 h-11 w-11 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-brown-800">{item.title}</p>
                  <p className="text-sm text-brown-700/70">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
