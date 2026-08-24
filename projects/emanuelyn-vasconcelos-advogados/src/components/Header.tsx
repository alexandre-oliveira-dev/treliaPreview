import { waLink } from "@/lib/contact";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper/10 bg-ink-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-2xl italic text-brass-light">
            EV
          </span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.25em] text-paper/60 sm:inline">
            Advogados
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.15em] text-paper/75 md:flex">
          <a href="#servicos" className="transition-colors hover:text-brass-light">
            Serviços
          </a>
          <a href="#sobre" className="transition-colors hover:text-brass-light">
            Quem Somos
          </a>
          <a href="#contato" className="transition-colors hover:text-brass-light">
            Contato
          </a>
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-brass/60 px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-brass-light transition-colors hover:bg-brass hover:text-ink-950 sm:px-5"
        >
          Contato
        </a>
      </div>
    </header>
  );
}
