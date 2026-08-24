"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Sparkles } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { Blob, BlobClipDefs } from "./Blobs";

const CHIPS = [
  { icon: Sparkles, label: "Atendimento leve e humanizado" },
  { icon: MapPin, label: "Vila Belmiro, Santos" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <BlobClipDefs />
      <Blob color="periwinkle" className="left-[-8%] top-16 h-72 w-72" />
      <Blob
        color="butter"
        reverse
        slow
        className="right-[2%] bottom-0 h-64 w-64"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-flamingo-dark"
          >
            Odontologia em Santos, SP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance mt-4 font-display italic text-5xl leading-[1.08] text-ink-950 sm:text-6xl"
          >
            Um sorriso leve começa com um cuidado de verdade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-600"
          >
            A Dra. Gabriela Fordelone une técnica e delicadeza para cuidar do
            seu sorriso na Vila Belmiro, Santos. Consultas tranquilas, sem
            pressa e sem sustos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-flamingo px-6 py-3.5 text-sm font-semibold text-cloud shadow-lg shadow-flamingo/30 transition-transform hover:scale-[1.03] cursor-pointer"
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="text-sm font-semibold text-ink-800 underline decoration-flamingo-light decoration-2 underline-offset-4 hover:text-flamingo-dark"
            >
              Ver tratamentos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {CHIPS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-cloud-dim px-4 py-2 text-xs font-medium text-ink-700 shadow-sm shadow-ink-950/5"
              >
                <Icon size={14} className="text-flamingo-dark" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <Blob
            color="flamingo"
            className="left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 opacity-60"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait.jpg"
            alt="Dra. Gabriela Fordelone sorrindo"
            className="portrait-blob relative h-full w-full object-cover shadow-2xl shadow-ink-950/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
