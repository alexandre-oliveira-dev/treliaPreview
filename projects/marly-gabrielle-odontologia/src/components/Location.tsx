"use client";

import { motion } from "motion/react";
import { MapPin, Phone, AtSign } from "lucide-react";
import { CONTACT, whatsAppLink } from "@/lib/contact";
import { CornerFrame } from "./CornerFrame";

export function Location() {
  return (
    <section id="localizacao" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-coral-light">
            Fig. 04 — Onde atendemos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Consultório no bairro Aeroporto.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          <CornerFrame color="var(--paper)" className="flex items-start gap-3 bg-paper/5 p-6 text-paper">
            <MapPin size={22} className="mt-0.5 shrink-0 text-paper/80" />
            <div>
              <p className="font-medium">{CONTACT.addressLine1}</p>
              <p className="text-paper/70">{CONTACT.addressLine2}</p>
            </div>
          </CornerFrame>

          <CornerFrame color="var(--paper)" className="flex bg-paper/5 p-6">
            <a
              href={`tel:+${CONTACT.phoneWhatsApp}`}
              className="flex items-center gap-3 text-paper transition-colors hover:text-coral-light"
            >
              <Phone size={22} className="shrink-0 text-paper/80" />
              <span className="font-medium">{CONTACT.phoneDisplay}</span>
            </a>
          </CornerFrame>

          <CornerFrame color="var(--paper)" className="flex bg-paper/5 p-6">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-paper transition-colors hover:text-coral-light"
            >
              <AtSign size={22} className="shrink-0 text-paper/80" />
              <span className="font-medium">@dragabrielletbrianez</span>
            </a>
          </CornerFrame>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={whatsAppLink("Olá! Vi o site e quero agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-base"
        >
          Agendar pelo WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
