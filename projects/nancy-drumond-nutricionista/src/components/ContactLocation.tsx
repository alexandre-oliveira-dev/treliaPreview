"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Globe, ArrowRight } from "lucide-react";
import { CycleRing } from "./CycleRing";

const WHATSAPP_URL =
  "https://wa.me/5531988326828?text=Oi%2C%20Nancy!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento.";

const ADDRESS = "R. São Paulo, 893 - Centro, Belo Horizonte - MG, 30133-170";

export function ContactLocation() {
  return (
    <section id="contato" className="relative bg-plum py-20 md:py-28 overflow-hidden">
      <CycleRing className="absolute -right-24 -top-24 w-80 h-80 text-rosegold opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="font-body font-bold uppercase tracking-[0.25em] text-xs text-rosegold-light"
            >
              Contato
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-balance mt-3 text-3xl sm:text-4xl md:text-5xl text-ivory leading-[1.1]"
            >
              Vamos marcar sua consulta
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-lilac-dim max-w-md leading-relaxed"
            >
              Chama no WhatsApp e conta como você está se sentindo — o resto a
              gente conversa na consulta.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-rosegold px-7 py-3.5 text-base font-semibold text-plum hover:bg-rosegold-light transition-colors cursor-pointer"
            >
              Falar no WhatsApp
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="rounded-md border border-white/10 bg-plum-soft p-7 md:p-9 flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-rosegold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-lilac-dim">
                  Endereço
                </p>
                <p className="mt-1 text-ivory leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={22} className="text-rosegold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-lilac-dim">
                  Telefone
                </p>
                <a
                  href="tel:+5531988326828"
                  className="mt-1 inline-block text-ivory hover:text-rosegold-light transition-colors cursor-pointer"
                >
                  (31) 98832-6828
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe size={22} className="text-rosegold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-lilac-dim">
                  Site oficial
                </p>
                <a
                  href="https://www.nutrinancydrumond.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-ivory hover:text-rosegold-light transition-colors cursor-pointer"
                >
                  nutrinancydrumond.com.br
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
