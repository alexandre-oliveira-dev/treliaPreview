import Image from "next/image";
import { CONTACT, waLink } from "@/lib/contact";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gold/15 bg-bordo-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/monogram.png"
            alt="Flávia Souza Advocacia"
            width={38}
            height={38}
            className="rounded-full ring-1 ring-gold/40"
            priority
          />
          <span className="font-display text-lg tracking-wide text-cream">
            Flávia Souza
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.12em] text-cream-dim transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Olá, Dra. Flávia! Gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gold/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-gold-light transition-colors hover:bg-gold hover:text-bordo-950 md:px-5 md:py-2.5 md:text-sm"
        >
          {CONTACT.whatsappDisplay}
        </a>
      </div>
    </header>
  );
}
