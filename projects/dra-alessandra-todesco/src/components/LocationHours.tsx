"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, AtSign } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function LocationHours() {
  return (
    <section className="bg-blush-soft px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-border bg-blush shadow-[0_20px_60px_-30px_rgba(140,58,75,0.3)] lg:grid-cols-2"
      >
        <div className="flex flex-col gap-6 p-8 sm:p-10">
          <h2 className="font-display text-3xl italic text-ink">
            Venha nos visitar
          </h2>
          <ul className="flex flex-col gap-5 font-body text-ink-muted">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-wine" />
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:text-wine"
              >
                {CONTACT.address.full}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-wine" />
              <span className="leading-relaxed">{CONTACT.hours}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-wine" />
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:text-wine"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <AtSign aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-wine" />
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:text-wine"
              >
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-wine px-7 py-3 text-sm font-semibold text-blush transition-transform duration-200 hover:scale-[1.03] hover:bg-wine-deep active:scale-[0.98]"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
        <div className="min-h-[280px] lg:min-h-full">
          <iframe
            title="Mapa até o consultório da Dra. Alessandra Todesco"
            src={CONTACT.mapsEmbedSrc}
            loading="lazy"
            className="h-full w-full min-h-[280px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
