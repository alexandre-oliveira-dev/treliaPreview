"use client";

import { motion } from "motion/react";
import { RingMotif } from "./RingMotif";
import { whatsappLink } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#onde-atender", label: "Onde atender" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-white/5 bg-ink/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <RingMotif variant="icon" className="h-8 w-8" />
          <span className="font-display text-base font-semibold tracking-tight text-paper sm:text-lg">
            Murilo Trofino
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-steel transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá, Murilo! Vim pelo site e gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-signal px-4 py-2 font-body text-sm font-medium text-ink transition-transform hover:scale-105 active:scale-95 sm:px-5"
        >
          Agendar
        </a>
      </div>
    </motion.header>
  );
}
