"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

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
          ? "bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_rgba(201,151,79,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#topo"
          className="font-display text-2xl tracking-wide text-ivory"
        >
          Lorena Rosa
          <span className="text-brass">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-xs uppercase tracking-[0.14em] text-ivory-dim transition-colors hover:text-brass"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="cursor-pointer rounded-full bg-brass px-5 py-2.5 font-label text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:bg-brass-light"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-ivory md:hidden"
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
          className="flex flex-col gap-1 border-t border-brass/15 bg-ink px-5 pb-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/5 py-3 font-label text-sm uppercase tracking-[0.1em] text-ivory-dim"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 cursor-pointer rounded-full bg-brass px-5 py-3 text-center font-label text-xs uppercase tracking-[0.14em] text-ink"
          >
            Agendar avaliação
          </a>
        </motion.nav>
      )}
    </header>
  );
}
