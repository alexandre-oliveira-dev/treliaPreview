"use client";

import { motion } from "motion/react";
import { AtSign, MapPin, MessageCircle, Phone } from "lucide-react";

export function ContactLocation() {
  return (
    <section id="contato" className="bg-carbon px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-label text-xs uppercase tracking-[0.28em] text-ignite"
          >
            Bora começar
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-4xl leading-[0.98] tracking-wide text-balance text-chalk sm:text-5xl"
          >
            CHEGA DE DIETA SEM DIREÇÃO.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-md leading-relaxed text-chalk-dim"
          >
            Fala direto no WhatsApp pra tirar dúvida ou já entrar no SMART. Se
            preferir o VIP, é só avisar que te coloco na lista de espera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/5531936193062"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 bg-ignite px-7 py-3.5 font-label text-xs uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ignite-light"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/ovictorpimenta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 border border-chalk/20 px-7 py-3.5 font-label text-xs uppercase tracking-[0.14em] text-chalk transition-colors hover:border-ignite hover:text-ignite"
            >
              Instagram
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 border border-chalk/10 bg-carbon-soft p-8"
        >
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 shrink-0 text-ignite" size={20} />
            <div>
              <p className="font-medium text-chalk">Consultório</p>
              <p className="mt-1 text-sm text-chalk-dim">
                R. Rio Grande do Norte, 23 — Santa Efigênia
                <br />
                Belo Horizonte - MG, 30130-130
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 shrink-0 text-ignite" size={20} />
            <div>
              <p className="font-medium text-chalk">Telefone / WhatsApp</p>
              <a
                href="https://wa.me/5531936193062"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-chalk-dim hover:text-ignite"
              >
                (31) 93619-3062
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <AtSign className="mt-0.5 shrink-0 text-ignite" size={20} />
            <div>
              <p className="font-medium text-chalk">Instagram</p>
              <a
                href="https://www.instagram.com/ovictorpimenta"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-chalk-dim hover:text-ignite"
              >
                @ovictorpimenta
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
