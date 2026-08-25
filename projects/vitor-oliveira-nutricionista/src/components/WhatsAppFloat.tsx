"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 shadow-xl shadow-black/20 cursor-pointer"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm font-medium">
        Agendar consulta
      </span>
    </motion.a>
  );
}
