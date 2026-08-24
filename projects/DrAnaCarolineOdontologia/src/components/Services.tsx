"use client";

import { motion } from "framer-motion";
import {
  Smile,
  Sparkle,
  Activity,
  Stethoscope,
  Baby,
  ShieldPlus,
} from "lucide-react";

const SERVICES = [
  {
    icon: Smile,
    title: "Estética Dental",
    text: "Lentes, facetas e harmonização do sorriso com resultados naturais.",
  },
  {
    icon: Sparkle,
    title: "Clareamento Dental",
    text: "Técnicas seguras para um sorriso mais branco e uniforme.",
  },
  {
    icon: Activity,
    title: "Ortodontia",
    text: "Alinhamento dental com aparelhos fixos ou alinhadores estéticos.",
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    text: "Restaurações, tratamento de canal e cuidados odontológicos completos.",
  },
  {
    icon: ShieldPlus,
    title: "Prevenção",
    text: "Limpeza, profilaxia e acompanhamento periódico da saúde bucal.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    text: "Atendimento gentil e especializado para os pequenos pacientes.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-rose-50/60">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-rose-500">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brown-800 mt-3">
            Cuidados pensados para você
          </h2>
          <p className="text-brown-700/70 mt-4">
            Um atendimento completo, do preventivo ao estético, sempre com
            atenção individual a cada paciente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border border-rose-100"
            >
              <div className="h-12 w-12 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center mb-5 group-hover:bg-brown-700 group-hover:text-rose-50 transition-colors">
                <service.icon size={22} />
              </div>
              <h3 className="font-display text-xl text-brown-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-brown-700/70 leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
