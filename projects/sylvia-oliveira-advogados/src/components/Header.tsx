import { waLink } from "@/lib/contact";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-950/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-xl italic text-ink-900">
            Sylvia Oliveira
          </span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neutral sm:inline">
            Advogados
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink-800 md:flex">
          <a href="#areas" className="transition-colors hover:text-wine">
            Áreas
          </a>
          <a href="#escritorio" className="transition-colors hover:text-wine">
            Escritório
          </a>
          <a href="#conteudo" className="transition-colors hover:text-wine">
            Conteúdo
          </a>
          <a href="#contato" className="transition-colors hover:text-wine">
            Contato
          </a>
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink-900 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-wine sm:px-5"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
