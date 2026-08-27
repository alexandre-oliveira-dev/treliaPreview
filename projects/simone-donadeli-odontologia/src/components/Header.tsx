"use client";

import { motion } from "motion/react";
import { CONTACT, whatsAppLink } from "@/lib/contact";

const NAV = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Consultório" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-ink-950/10 bg-stone/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-teal font-display text-sm font-bold text-stone facet-card-b">
            SD
          </span>
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
            Simone Donadeli
            <span className="block text-[11px] font-normal text-ink-500">
              {CONTACT.cro}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-ink-700 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-teal-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsAppLink("Olá! Vi o site e quero agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-teal px-4 py-2 text-xs font-semibold text-stone transition-colors hover:bg-teal-dark sm:text-sm"
        >
          Agendar avaliação
        </a>
      </div>
    </motion.header>
  );
}
