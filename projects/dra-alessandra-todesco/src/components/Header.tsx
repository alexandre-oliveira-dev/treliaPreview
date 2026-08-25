import { CONTACT } from "@/lib/contact";
import { ToothFlourish } from "./ToothFlourish";

export function Header() {
  return (
    <header className="absolute top-0 z-30 flex w-full items-center justify-between px-6 py-6 sm:px-10">
      <a href="#top" className="flex items-center gap-2 text-ink">
        <ToothFlourish className="h-7 w-10 text-wine" />
        <span className="font-display text-xl italic tracking-wide">
          Alessandra Todesco
        </span>
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden rounded-full border border-wine/35 px-5 py-2 text-sm font-medium text-wine-deep transition-colors duration-200 hover:bg-wine hover:text-blush sm:inline-flex"
      >
        Agendar consulta
      </a>
    </header>
  );
}
