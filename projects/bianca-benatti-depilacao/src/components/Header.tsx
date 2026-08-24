"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import InstagramIcon from "@/components/InstagramIcon";
import BrandMark from "@/components/BrandMark";
import { CONTACT, waLink } from "@/lib/contact";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-gold/20 bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.1em] text-brown-700 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden text-brown-700 transition-colors hover:text-gold-dark sm:block"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={waLink("Olá, Bianca! Gostaria de agendar um horário.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brown-900 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-cream transition-colors hover:bg-gold-dark md:px-5 md:py-2.5 md:text-sm"
          >
            Agendar
          </a>
        </div>
      </div>
    </motion.header>
  );
}
