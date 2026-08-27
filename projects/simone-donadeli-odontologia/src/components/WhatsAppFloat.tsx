"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { whatsAppLink } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsAppLink("Olá! Vi o site e quero agendar uma avaliação.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center bg-teal text-stone shadow-lg shadow-ink-950/20 facet-card-b sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </motion.a>
  );
}
