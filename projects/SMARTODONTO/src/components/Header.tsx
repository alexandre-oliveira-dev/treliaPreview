"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, whatsappLink } from "@/lib/constants";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Clínica" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#top">
          <Logo className="text-2xl sm:text-3xl" light={!scrolled} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-brand-orange ${
                scrolled ? "text-brand-navy/80" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:+${SITE.phonePrimaryWhats}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-brand-orange ${
              scrolled ? "text-brand-navy/80" : "text-white/80"
            }`}
          >
            <Phone size={16} />
            {SITE.phonePrimaryDisplay}
          </a>
          <a
            href={whatsappLink(SITE.phonePrimaryWhats)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 hover:bg-brand-orange-dark"
          >
            Agendar avaliação
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-brand-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white shadow-lg mt-2 overflow-hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-brand-navy font-semibold border-b border-brand-navy/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(SITE.phonePrimaryWhats)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-bold text-white"
            >
              Agendar avaliação
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
