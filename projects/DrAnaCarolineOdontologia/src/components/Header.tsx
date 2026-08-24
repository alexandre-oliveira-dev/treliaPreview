"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#consultorio", label: "Consultório" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf3ef]/90 backdrop-blur-md shadow-[0_2px_20px_rgba(138,95,77,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="Dra. Ana Caroline Farias"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg text-brown-700 hidden sm:block">
            Ana Caroline Farias
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-brown-700/80 hover:text-rose-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTACT.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-brown-700 text-rose-50 px-5 py-2.5 text-sm tracking-wide hover:bg-brown-800 transition-colors"
        >
          <MessageCircle size={16} />
          Agendar consulta
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-brown-700"
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#fbf3ef] border-t border-rose-200"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-brown-700 text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brown-700 text-rose-50 px-5 py-3 text-sm mt-2"
              >
                <MessageCircle size={16} />
                Agendar consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
