"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { Blob } from "./Blobs";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-cloud">
      <Blob color="flamingo" className="right-[-8%] top-[-10%] h-72 w-72 opacity-30" />
      <Blob
        color="periwinkle"
        reverse
        className="left-[-6%] bottom-[-14%] h-64 w-64 opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8"
      >
        <p className="text-balance font-display italic text-3xl leading-snug sm:text-4xl">
          Marcar uma consulta é simples: uma mensagem e a gente cuida do
          resto.
        </p>
        <a
          href={CONTACT.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-flamingo px-7 py-3.5 text-sm font-semibold text-cloud shadow-lg shadow-flamingo/30 transition-transform hover:scale-[1.03] cursor-pointer"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
