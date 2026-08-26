"use client";

import { motion } from "motion/react";
import { whatsappLink } from "@/lib/site";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#topo" className="font-display text-sm tracking-tight sm:text-base">
          Jéssica Bressan
        </a>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-clay md:flex">
          <a href="#metodo" className="transition-colors hover:text-ink">
            Método
          </a>
          <a href="#diferenciais" className="transition-colors hover:text-ink">
            Diferenciais
          </a>
          <a href="#espaco" className="transition-colors hover:text-ink">
            Espaço
          </a>
          <a href="#contato" className="transition-colors hover:text-ink">
            Contato
          </a>
        </nav>
        <a
          href={whatsappLink("Oi Jéssica! Quero saber mais sobre o método Eu+Magra.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-forest"
        >
          Agendar
        </a>
      </div>
    </motion.header>
  );
}
