"use client";

import { motion } from "motion/react";
import { MapPin, Phone, AtSign, ArrowUpRight } from "lucide-react";

const ADDRESS =
  "R. João Negrão, 380 - Sl 42, 4º Andar - Centro, Curitiba - PR, 80010-200";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("R. João Negrão, 380 - Centro, Curitiba - PR, 80010-200");

export function ContactLocation() {
  return (
    <section id="contato" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-ochre-light">
            Agende sua avaliação
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-balance text-5xl uppercase leading-[0.92] sm:text-6xl">
            Seu resultado começa
            <br />
            na próxima consulta
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <motion.a
            href="tel:+554130241015"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group flex cursor-pointer flex-col justify-between gap-8 rounded-2xl border border-paper/12 bg-paper/[0.04] p-7 transition-colors hover:border-coral/50 hover:bg-paper/[0.07]"
          >
            <div className="flex items-center justify-between">
              <Phone size={26} strokeWidth={1.5} className="text-ochre-light" />
              <ArrowUpRight
                size={18}
                className="text-paper/40 transition-colors group-hover:text-coral"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-paper/60">
                Telefone
              </p>
              <p className="font-display mt-1 text-2xl">(41) 3024-1015</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/nutrideboramocelin/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="group flex cursor-pointer flex-col justify-between gap-8 rounded-2xl border border-paper/12 bg-paper/[0.04] p-7 transition-colors hover:border-coral/50 hover:bg-paper/[0.07]"
          >
            <div className="flex items-center justify-between">
              <AtSign size={26} strokeWidth={1.5} className="text-ochre-light" />
              <ArrowUpRight
                size={18}
                className="text-paper/40 transition-colors group-hover:text-coral"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-paper/60">
                Instagram
              </p>
              <p className="font-display mt-1 text-2xl">nutrideboramocelin</p>
            </div>
          </motion.a>

          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
            className="group flex cursor-pointer flex-col justify-between gap-8 rounded-2xl border border-paper/12 bg-paper/[0.04] p-7 transition-colors hover:border-coral/50 hover:bg-paper/[0.07]"
          >
            <div className="flex items-center justify-between">
              <MapPin size={26} strokeWidth={1.5} className="text-ochre-light" />
              <ArrowUpRight
                size={18}
                className="text-paper/40 transition-colors group-hover:text-coral"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-paper/60">
                Endereço
              </p>
              <p className="mt-1 text-lg leading-snug text-paper/90">
                {ADDRESS}
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
