"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { Blob } from "./Blobs";

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <Blob color="periwinkle" slow className="right-[-8%] top-6 h-64 w-64" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-flamingo-dark">
            Contato
          </p>
          <h2 className="text-balance mt-4 font-display italic text-4xl leading-tight text-ink-950 sm:text-5xl">
            Vamos cuidar do seu sorriso?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-600">
            Envie uma mensagem pelo WhatsApp ou passe no consultório, na Vila
            Belmiro. Será um prazer te receber.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink-800 hover:text-flamingo-dark"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cloud-dim text-flamingo-dark">
                <Phone size={17} />
              </span>
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink-800 hover:text-flamingo-dark"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cloud-dim text-flamingo-dark">
                <MapPin size={17} />
              </span>
              {CONTACT.address}
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink-800 hover:text-flamingo-dark"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cloud-dim text-flamingo-dark">
                <InstagramIcon size={17} />
              </span>
              {CONTACT.instagramHandle}
            </a>
          </div>

          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-cloud transition-colors hover:bg-flamingo cursor-pointer"
          >
            <MessageCircle size={18} />
            Agendar consulta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] shadow-sm shadow-ink-950/10"
        >
          <iframe
            title="Localização do consultório"
            src={CONTACT.mapsEmbed}
            className="h-80 w-full border-0 lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
