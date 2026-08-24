import Image from "next/image";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-bordo-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/monogram.png"
            alt="Flávia Souza Advocacia"
            width={30}
            height={30}
            className="rounded-full ring-1 ring-gold/40"
          />
          <div>
            <p className="font-display text-sm text-cream">
              Flávia Souza Advocacia
            </p>
            <p className="text-xs text-cream-dim/70">
              Direito do Trabalho e Família
            </p>
          </div>
        </div>

        <p className="text-xs text-cream-dim/60">
          {CONTACT.addressLine}
        </p>

        <p className="text-xs text-cream-dim/50">
          © {new Date().getFullYear()} Flávia Souza Advocacia. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
