"use client";

import { motion } from "motion/react";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

const WHATSAPP_URL =
  "https://wa.me/5531988896106?text=Oi%2C%20Flavia!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento.";

const ADDRESS = "Rua dos Guajajaras, 880 - Sl 706 - Centro, Belo Horizonte - MG, 30180-000";

export function ContactLocation() {
  return (
    <section id="contato" className="bg-petrol py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="font-body font-bold uppercase tracking-[0.25em] text-xs text-copper-light"
            >
              Contato
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display uppercase text-balance mt-3 text-3xl sm:text-4xl md:text-5xl text-stone leading-[1.05]"
            >
              Vamos marcar sua avaliação
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-stone-dim max-w-md leading-relaxed"
            >
              Chama no WhatsApp e conta o que você busca — o resto a gente
              conversa na consulta.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-base font-semibold text-petrol hover:bg-copper-light transition-colors cursor-pointer"
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
            className="rounded-md border border-white/10 bg-petrol-soft p-7 md:p-9 flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-copper shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-stone-dim">
                  Endereço
                </p>
                <p className="mt-1 text-stone leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={22} className="text-copper shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-stone-dim">
                  Telefone
                </p>
                <a
                  href="tel:+5531988896106"
                  className="mt-1 inline-block text-stone hover:text-copper-light transition-colors cursor-pointer"
                >
                  (31) 98889-6106
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <InstagramIcon size={22} className="text-copper shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-stone-dim">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/flaviagodoynutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-stone hover:text-copper-light transition-colors cursor-pointer"
                >
                  @flaviagodoynutri
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
