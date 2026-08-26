"use client";

import { motion } from "motion/react";
import { MapPin, AtSign, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function LocationHours() {
  return (
    <section id="contato" className="bg-paper-dim">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-dark">
            Consultório
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-espresso sm:text-4xl">
            Atendo em Santa Quitéria,
            <span className="italic"> Curitiba.</span>
          </h2>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-signal-dark" />
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-relaxed text-espresso-600 hover:text-espresso"
              >
                {CONTACT.address}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-signal-dark" />
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-relaxed text-espresso-600 hover:text-espresso"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <AtSign
                size={18}
                className="mt-0.5 shrink-0 text-signal-dark"
              />
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-relaxed text-espresso-600 hover:text-espresso"
              >
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>

          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-signal-dark cursor-pointer"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="ficha-tab overflow-hidden border border-espresso/10"
        >
          <iframe
            title="Localização do consultório da nutricionista Sthephany"
            src={CONTACT.mapsEmbed}
            loading="lazy"
            className="h-80 w-full grayscale-[15%] sm:h-full"
            style={{ minHeight: 320, border: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
