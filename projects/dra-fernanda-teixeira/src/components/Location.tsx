"use client";

import { motion } from "motion/react";
import { MapPin, Phone, AtSign } from "lucide-react";
import { CONTACT, whatsAppLink } from "@/lib/contact";

export function Location() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-sage-dark py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-ivory/70">
            Onde atendemos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
            Venha conhecer o consultório.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          <div className="flex items-start gap-3 rounded-2xl bg-ivory/10 p-6 text-ivory">
            <MapPin size={22} className="mt-0.5 shrink-0 text-ivory/80" />
            <div>
              <p className="font-medium">{CONTACT.addressLine1}</p>
              <p className="text-ivory/75">{CONTACT.addressLine2}</p>
            </div>
          </div>

          <a
            href={`tel:+${CONTACT.phoneWhatsApp}`}
            className="flex items-center gap-3 rounded-2xl bg-ivory/10 p-6 text-ivory transition-colors hover:bg-ivory/15"
          >
            <Phone size={22} className="shrink-0 text-ivory/80" />
            <span className="font-medium">{CONTACT.phoneDisplay}</span>
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-ivory/10 p-6 text-ivory transition-colors hover:bg-ivory/15"
          >
            <AtSign size={22} className="shrink-0 text-ivory/80" />
            <span className="font-medium">{CONTACT.instagramHandle}</span>
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={whatsAppLink("Olá! Vi o site e gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-sage-dark transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-base"
        >
          Agendar pelo WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
