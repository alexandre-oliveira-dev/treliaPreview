import BrandMark from "@/components/BrandMark";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <BrandMark size="sm" />

        <p className="text-xs text-brown-700/70">{CONTACT.addressLine}</p>

        <p className="text-xs text-brown-700/60">
          © {new Date().getFullYear()} Bianca Benatti Depilação. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
