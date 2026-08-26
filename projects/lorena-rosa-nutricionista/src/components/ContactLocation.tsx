"use client";

import { motion } from "motion/react";
import { AtSign, MapPin, MessageCircle, Phone } from "lucide-react";

export function ContactLocation() {
  return (
    <section id="contato" className="bg-ivory px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-label text-xs uppercase tracking-[0.28em] text-brass-deep"
          >
            Agende sua avaliação
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-3xl leading-tight text-balance sm:text-4xl"
          >
            Vamos conversar sobre o seu processo?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-md text-ink-soft leading-relaxed"
          >
            Fale direto pelo WhatsApp para tirar dúvidas ou marcar sua
            primeira consulta, presencial em BH ou online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/5531997667888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-label text-xs uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-navy"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="https://wlinky.com/nutrilorenarosa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 font-label text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-brass-deep hover:text-brass-deep"
            >
              Marcar consulta
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 rounded-2xl border border-ink/10 bg-ink p-8 text-ivory"
        >
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 shrink-0 text-brass-light" size={20} />
            <div>
              <p className="font-medium">Consultório</p>
              <p className="mt-1 text-sm text-ivory-dim">
                R. Bernardo Guimarães, 874 — Funcionários
                <br />
                Belo Horizonte - MG, 30140-081
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 shrink-0 text-brass-light" size={20} />
            <div>
              <p className="font-medium">Telefone / WhatsApp</p>
              <a
                href="https://wa.me/5531997667888"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-ivory-dim hover:text-brass-light"
              >
                (31) 99766-7888
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <AtSign className="mt-0.5 shrink-0 text-brass-light" size={20} />
            <div>
              <p className="font-medium">Instagram</p>
              <a
                href="https://www.instagram.com/nutrilorenarosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-ivory-dim hover:text-brass-light"
              >
                @nutrilorenarosa
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
