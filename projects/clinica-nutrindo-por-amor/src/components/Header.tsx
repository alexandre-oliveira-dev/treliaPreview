"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";

const LINKS = [
  { href: "#especialidades", label: "Cuidamos de" },
  { href: "#integrado", label: "Como cuidamos" },
  { href: "#time", label: "Time" },
  { href: "#local", label: "Endereço" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(51,32,26,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-display font-bold text-forest">
            Nutrindo <span className="text-tangerine">por Amor</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-ink/80">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-tangerine-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-transform hover:scale-[1.03] hover:bg-forest-light active:scale-[0.98]"
        >
          {WHATSAPP_DISPLAY}
        </a>
      </div>
    </motion.header>
  );
}
