"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(SITE.phonePrimaryWhats)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl animate-pulse-ring"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-[#25D366]" />
    </motion.a>
  );
}
