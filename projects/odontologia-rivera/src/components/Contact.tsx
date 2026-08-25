"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/contact";

function InstagramIcon({ size = 19 }: { size?: number }) {
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
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contact() {
  const mapsEmbed =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Rua Professor Leonel Moro, 27, Xaxim, Curitiba - PR, 81710-250"
    ) +
    "&output=embed";

  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-dark">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl italic text-ink-950 sm:text-4xl">
            Agende sua consulta
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-700">
            Estamos no Xaxim, em Curitiba, prontos para cuidar do seu
            sorriso.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linen-dim text-clay-dark">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Endereço
                </p>
                <a
                  href={CONTACT.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-600 hover:text-clay-dark"
                >
                  {CONTACT.addressLine}, {CONTACT.addressCity}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linen-dim text-clay-dark">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Telefone / WhatsApp
                </p>
                <a
                  href={CONTACT.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-600 hover:text-clay-dark"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linen-dim text-clay-dark">
                <Mail size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">E-mail</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-ink-600 hover:text-clay-dark"
                >
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linen-dim text-clay-dark">
                <InstagramIcon />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">
                  Instagram
                </p>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-600 hover:text-clay-dark"
                >
                  @odontologiarivera
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
            title="Localização da Odontologia Rivera"
            src={mapsEmbed}
            className="h-[320px] w-full sm:h-[420px] lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
