"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#metodologia", label: "Método" },
  { href: "#clinica", label: "Clínica" },
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
          ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_rgba(36,28,19,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#topo"
          className="font-display text-2xl tracking-wide text-ink uppercase"
        >
          Mocelin
          <span className="text-coral">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="cursor-pointer rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-coral"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-ink md:hidden"
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
          className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-5 pb-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/5 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 cursor-pointer rounded-full bg-ink px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.14em] text-paper"
          >
            Agendar avaliação
          </a>
        </motion.nav>
      )}
    </header>
  );
}
