"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contato" className="relative bg-paper py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600">
            Visite o consultório
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-950 text-balance sm:text-4xl">
            Marque um horário e venha nos conhecer no Boqueirão.
          </h2>

          <div className="mt-9 space-y-5">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-seafoam-dim text-ink-800">
                <MapPin size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">Endereço</p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-700 hover:text-coral"
                >
                  {CONTACT.address}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-seafoam-dim text-ink-800">
                <Phone size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  WhatsApp / Telefone
                </p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-700 hover:text-coral"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-seafoam-dim text-ink-800">
                <Clock size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  Horário de atendimento
                </p>
                <p className="text-sm text-ink-700">
                  Segunda a sexta · 9h às 19h
                </p>
              </div>
            </div>
          </div>

          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-coral cursor-pointer"
          >
            <CalendarCheck size={18} />
            Agendar pelo WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] border border-ink-900/10 shadow-lg shadow-ink-950/10"
        >
          <iframe
            src={CONTACT.mapsEmbed}
            title={`Mapa até o consultório da ${CONTACT.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full sm:h-full sm:min-h-[420px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
