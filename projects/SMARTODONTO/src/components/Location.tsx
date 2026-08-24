"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/constants";

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Onde estamos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Venha nos visitar em Goiânia
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4 items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-bold text-brand-navy">Endereço</p>
                <p className="text-sm text-brand-navy/60 mt-1 max-w-sm">
                  {SITE.address}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold text-brand-navy">Telefone / WhatsApp</p>
                <p className="text-sm text-brand-navy/60 mt-1">
                  {SITE.phonePrimaryDisplay} · {SITE.phoneSecondaryDisplay}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-bold text-brand-navy">Atendimento</p>
                <p className="text-sm text-brand-navy/60 mt-1">
                  Segunda a sexta, com horários flexíveis. Fale conosco para agendar.
                </p>
              </div>
            </div>
          </div>

          <a
            href={whatsappLink(SITE.phonePrimaryWhats)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="min-h-[360px] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-brand-navy/5"
        >
          <iframe
            src={SITE.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 360 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Localização da Smartodonto no Google Maps"
          />
        </motion.div>
      </div>
    </section>
  );
}
