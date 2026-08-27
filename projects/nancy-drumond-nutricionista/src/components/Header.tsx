"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5531988326828?text=Oi%2C%20Nancy!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento.";

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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-plum/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" className="font-display text-ivory text-xl tracking-wide">
          Nancy <span className="text-rosegold">Drumond</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-lilac-dim hover:text-rosegold-light transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-rosegold px-5 py-2.5 text-sm font-semibold text-plum hover:bg-rosegold-light transition-colors cursor-pointer"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="md:hidden text-ivory p-2 -mr-2 cursor-pointer"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:hidden bg-plum border-t border-white/10 overflow-hidden"
        >
          <div className="px-5 py-5 flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-lilac-dim hover:text-rosegold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-rosegold px-5 py-3 text-sm font-semibold text-plum"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
