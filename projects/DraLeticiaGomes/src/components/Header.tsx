"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/contact";
import Monogram from "@/components/Monogram";

const LINKS = [
  { href: "#situacoes", label: "Áreas de atuação" },
  { href: "#advogada", label: "A advogada" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(12,27,29,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-ink-950">
          <Monogram className="h-7 w-7 text-clay" />
          <span className="font-display text-lg italic leading-none">
            Letícia Gomes
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-800/80 transition-colors hover:text-clay"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Olá, Dra. Letícia! Gostaria de falar sobre o meu caso.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-clay"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
