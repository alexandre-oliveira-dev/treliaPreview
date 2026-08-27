"use client";

import { motion } from "motion/react";
import { MapPin, Phone, AtSign } from "lucide-react";
import { CONTACT, whatsAppLink } from "@/lib/contact";
import { FacetField } from "./FacetField";

export function Location() {
  return (
    <section id="localizacao" className="relative overflow-hidden bg-teal-dark py-20 sm:py-28">
      <FacetField
        viewportTriggered
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] opacity-30 sm:opacity-40"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-stone/70">
            Onde atendemos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone sm:text-4xl">
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
          <div className="facet-card-a flex items-start gap-3 bg-stone/10 p-6 text-stone">
            <MapPin size={22} className="mt-0.5 shrink-0 text-stone/80" />
            <div>
              <p className="font-medium">{CONTACT.addressLine1}</p>
              <p className="text-stone/75">{CONTACT.addressLine2}</p>
            </div>
          </div>

          <a
            href={`tel:+${CONTACT.phoneWhatsApp}`}
            className="facet-card-b flex items-center gap-3 bg-stone/10 p-6 text-stone transition-colors hover:bg-stone/15"
          >
            <Phone size={22} className="shrink-0 text-stone/80" />
            <span className="font-medium">{CONTACT.phoneDisplay}</span>
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="facet-card-a flex items-center gap-3 bg-stone/10 p-6 text-stone transition-colors hover:bg-stone/15"
          >
            <AtSign size={22} className="shrink-0 text-stone/80" />
            <span className="font-medium">@simonedonadeli</span>
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={whatsAppLink("Olá! Vi o site e quero agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-stone px-6 py-3 text-sm font-semibold text-teal-dark transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-base"
        >
          Agendar pelo WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
