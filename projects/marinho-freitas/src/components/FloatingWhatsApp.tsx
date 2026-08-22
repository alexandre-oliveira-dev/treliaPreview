"use client";

import { motion } from "motion/react";
import { trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink("Olá, gostaria de falar com o escritório.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { context: "floating_button" })}
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping motion-safe:opacity-40" />
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="relative h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.611 1.902 6.484L4 29l7.71-1.867A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16.001 3Zm0 21.75a9.7 9.7 0 0 1-4.94-1.35l-.354-.21-4.575 1.107 1.225-4.463-.23-.366A9.72 9.72 0 0 1 6.25 15c0-5.376 4.375-9.75 9.751-9.75S25.75 9.624 25.75 15 21.377 24.75 16.001 24.75Zm5.335-7.29c-.293-.146-1.734-.856-2.003-.953-.269-.098-.464-.146-.66.146-.196.293-.757.953-.928 1.148-.171.196-.342.22-.635.073-.293-.147-1.235-.455-2.352-1.45-.869-.775-1.456-1.732-1.627-2.025-.171-.293-.018-.451.128-.597.132-.131.293-.342.44-.513.147-.171.196-.293.293-.489.098-.196.049-.366-.024-.513-.073-.146-.66-1.591-.904-2.18-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.513.073-.782.366-.269.293-1.026 1.002-1.026 2.444 0 1.442 1.05 2.836 1.196 3.032.147.196 2.067 3.157 5.008 4.428.7.302 1.246.483 1.672.618.702.223 1.342.192 1.848.117.564-.084 1.734-.709 1.979-1.393.244-.684.244-1.27.171-1.393-.073-.122-.269-.196-.562-.342Z" />
      </svg>
    </motion.a>
  );
}
