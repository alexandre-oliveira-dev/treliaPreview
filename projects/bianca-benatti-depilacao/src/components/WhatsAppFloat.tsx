"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Olá, Bianca! Gostaria de agendar um horário.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar no WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/15"
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className="hidden sm:inline">Agendar</span>
    </motion.a>
  );
}
