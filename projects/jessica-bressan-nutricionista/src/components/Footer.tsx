import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/site";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink py-16 text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-tight">Jéssica Bressan</p>
            <p className="mt-2 text-sm text-paper/60">
              Nutricionista · CRN em Curitiba/PR
            </p>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-paper/60">
            <p className="text-lime">Contato</p>
            <a
              href={whatsappLink("Oi Jéssica! Vi o site e quero saber mais.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block normal-case tracking-normal text-paper transition-colors hover:text-lime"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block normal-case tracking-normal text-paper transition-colors hover:text-lime"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-paper/60">
            <p className="text-lime">Endereço</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block normal-case tracking-normal text-paper transition-colors hover:text-lime"
            >
              {ADDRESS_LINE1}
              <br />
              {ADDRESS_LINE2}
            </a>
          </div>
        </div>

        <p className="mt-14 text-[11px] text-paper/40">
          © {new Date().getFullYear()} Jéssica Bressan Nutrição. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
