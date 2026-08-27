"use client";

import { motion } from "motion/react";
import { whatsAppLink } from "@/lib/contact";

const NAV = [
  { href: "#especialidade", label: "Endodontia" },
  { href: "#dentistas", label: "Dentistas" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border-2 border-ink font-display text-xs font-bold">
            MG
          </span>
          <span className="font-display text-sm font-semibold leading-tight tracking-tight sm:text-base">
            Marly Cital
            <span className="text-coral-dark"> &amp; </span>
            Gabrielle Brianêz
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-ink-700 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-coral-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsAppLink("Olá! Vi o site e quero agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-coral-dark sm:text-sm"
        >
          Agendar consulta
        </a>
      </div>
    </motion.header>
  );
}
