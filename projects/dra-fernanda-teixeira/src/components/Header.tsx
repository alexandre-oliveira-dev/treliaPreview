"use client";

import { motion } from "motion/react";
import { CONTACT, whatsAppLink } from "@/lib/contact";
import { LeafMark } from "./LeafDivider";

const NAV = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#consultorio", label: "Consultório" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sage text-ivory">
            <LeafMark className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base">
            {CONTACT.displayName}
            <span className="block text-[11px] font-normal text-ink-faint">
              {CONTACT.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-sage-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsAppLink("Olá! Vi o site e gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sage px-4 py-2 text-xs font-semibold text-ivory transition-colors hover:bg-sage-dark sm:text-sm"
        >
          Agendar consulta
        </a>
      </div>
    </motion.header>
  );
}
