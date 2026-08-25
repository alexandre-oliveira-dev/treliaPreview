"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, AtSign, Clock3 } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl italic text-charcoal-950 sm:text-4xl">
            Agende sua consulta
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal-700">
            Estamos no Capão Raso, em Curitiba, prontos para atender você a
            qualquer hora.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-dim text-gold-dark">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal-950">
                  Endereço
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal-600 hover:text-gold-dark"
                >
                  {CONTACT.address}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-dim text-gold-dark">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal-950">
                  Telefone / WhatsApp
                </p>
                <a
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal-600 hover:text-gold-dark"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-dim text-gold-dark">
                <Clock3 size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal-950">
                  Horário
                </p>
                <p className="text-sm text-charcoal-600">
                  Emergência odontológica 24 horas, todos os dias
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-dim text-gold-dark">
                <AtSign size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal-950">
                  Instagram
                </p>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal-600 hover:text-gold-dark"
                >
                  {CONTACT.instagramHandle}
                </a>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-charcoal-950/10"
        >
          <iframe
            title="Localização do consultório da Dra. Marianina Muñoz"
            src={CONTACT.mapsEmbed}
            className="h-[320px] w-full sm:h-[420px] lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
