import { MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, whatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Logo className="text-2xl" light />
          <p className="mt-3 max-w-sm text-sm text-white/50">
            {SITE.tagline}. Cuidando do seu sorriso com excelência e carinho.
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/60">
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-orange shrink-0" />
            {SITE.address}
          </p>
          <a
            href={whatsappLink(SITE.phonePrimaryWhats)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-orange transition-colors w-fit"
          >
            <Phone size={16} className="text-brand-orange shrink-0" />
            {SITE.phonePrimaryDisplay} · {SITE.phoneSecondaryDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-10 pt-6 border-t border-white/10 text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
