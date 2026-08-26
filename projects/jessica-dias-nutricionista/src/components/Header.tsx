"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LeafMark } from "./LeafMark";
import { whatsappLink } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#metodo", label: "Método" },
  { href: "#consultorio", label: "Consultório" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-sand/95 backdrop-blur-sm shadow-[0_1px_0_rgba(37,29,21,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-2">
          <LeafMark size={22} className="text-olive" />
          <span className="font-display text-2xl text-bark">
            Jéssica Dias
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.1em] text-bark-mute transition-colors hover:text-olive-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-bark px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-sand transition-colors hover:bg-olive-deep"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-bark md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col gap-1 border-t border-bark/10 bg-sand px-5 pb-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-bark/5 py-3 text-sm font-medium uppercase tracking-[0.08em] text-bark-mute"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 cursor-pointer rounded-full bg-bark px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-sand"
          >
            Agendar consulta
          </a>
        </motion.nav>
      )}
    </header>
  );
}
