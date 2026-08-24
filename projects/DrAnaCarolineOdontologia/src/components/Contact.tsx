"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { CONTACT } from "@/lib/contact";

const ITEMS = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: CONTACT.phoneDisplay,
    href: CONTACT.whatsappMessage,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: CONTACT.address,
    href: CONTACT.mapsUrl,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-rose-50/60">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-rose-500">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-brown-800 mt-3 mb-5">
            Vamos cuidar do seu sorriso
          </h2>
          <p className="text-brown-700/80 leading-relaxed mb-9 max-w-md">
            Entre em contato e agende sua consulta. Será um prazer receber
            você em nosso consultório em Goiânia.
          </p>

          <div className="space-y-5 mb-9">
            {ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="shrink-0 h-12 w-12 rounded-full bg-white text-rose-500 flex items-center justify-center shadow-sm group-hover:bg-brown-700 group-hover:text-rose-50 transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-brown-700/60">{item.label}</p>
                  <p className="text-brown-800 font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href={CONTACT.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brown-700 text-rose-50 px-7 py-3.5 text-sm tracking-wide hover:bg-brown-800 hover:scale-[1.03] transition-all shadow-lg shadow-brown-700/20"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-[2rem] overflow-hidden shadow-xl h-80 md:h-full min-h-[320px]"
        >
          <iframe
            src={CONTACT.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do consultório"
          />
        </motion.div>
      </div>
    </section>
  );
}
