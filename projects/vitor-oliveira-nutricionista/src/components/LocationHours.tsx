"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, AtSign, Clock3 } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function LocationHours() {
  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-tomato-dark">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            Vamos montar seu plano
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-600">
            Atendo na Bela Vista, em São Paulo, e também por videochamada
            para quem prefere consulta on-line.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-dim text-pine-dark">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Endereço
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pine-dark hover:text-pine"
                >
                  {CONTACT.address}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-dim text-pine-dark">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  WhatsApp
                </p>
                <a
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pine-dark hover:text-pine"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-dim text-pine-dark">
                <Clock3 size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Horário
                </p>
                <p className="text-sm text-ink-600">{CONTACT.hours}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-dim text-pine-dark">
                <AtSign size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Instagram
                </p>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pine-dark hover:text-pine"
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
          className="overflow-hidden rounded-[2rem] border border-ink-950/10"
        >
          <iframe
            title="Localização do consultório do Vitor Oliveira"
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
