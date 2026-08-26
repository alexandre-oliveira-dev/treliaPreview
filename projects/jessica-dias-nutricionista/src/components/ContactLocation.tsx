"use client";

import { motion } from "motion/react";
import { MapPin, Phone, AtSign, ArrowUpRight } from "lucide-react";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "@/lib/constants";

const CARDS = [
  {
    href: `tel:${PHONE_TEL}`,
    external: false,
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: PHONE_DISPLAY,
  },
  {
    href: INSTAGRAM_URL,
    external: true,
    icon: AtSign,
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
  },
  {
    href: MAPS_URL,
    external: true,
    icon: MapPin,
    label: "Endereço",
    value: ADDRESS,
  },
];

export function ContactLocation() {
  return (
    <section id="contato" className="bg-bark py-24 text-sand sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Agende sua consulta
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-balance text-4xl leading-[1.1] sm:text-5xl">
            O primeiro passo é
            <br />
            marcar um horário
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="group flex cursor-pointer flex-col justify-between gap-8 border-t-2 border-l-2 border-gold/30 bg-sand/[0.03] p-7 transition-colors hover:border-gold hover:bg-sand/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <Icon size={26} strokeWidth={1.5} className="text-olive-light" />
                  <ArrowUpRight
                    size={18}
                    className="text-sand/40 transition-colors group-hover:text-gold"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sand/60">
                    {card.label}
                  </p>
                  <p className="font-display mt-1 text-xl leading-snug sm:text-2xl">
                    {card.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-bark transition-colors hover:bg-sand"
        >
          Chamar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
