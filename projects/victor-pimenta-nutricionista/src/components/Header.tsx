"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
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
          ? "bg-carbon/95 backdrop-blur-sm shadow-[0_1px_0_rgba(255,90,31,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#topo"
          className="font-display text-3xl tracking-wide text-chalk"
        >
          VICTOR<span className="text-ignite">.</span>PIMENTA
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-xs uppercase tracking-[0.14em] text-chalk-dim transition-colors hover:text-ignite"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531936193062"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-none bg-ignite px-5 py-2.5 font-label text-xs uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ignite-light"
          >
            Falar Agora
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-chalk md:hidden"
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
          className="flex flex-col gap-1 border-t border-ignite/20 bg-carbon px-5 pb-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-chalk/5 py-3 font-label text-sm uppercase tracking-[0.1em] text-chalk-dim"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531936193062"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 cursor-pointer bg-ignite px-5 py-3 text-center font-label text-xs uppercase tracking-[0.14em] text-carbon"
          >
            Falar no WhatsApp
          </a>
        </motion.nav>
      )}
    </header>
  );
}
