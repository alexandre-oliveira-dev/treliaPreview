import {
  ENDERECO,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-forest text-paper/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-bold text-paper">
            Nutrindo por Amor
          </p>
          <p className="mt-1 text-sm text-paper/70">
            Nutrição e Psicologia Infantil · Curitiba
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-paper/80 sm:text-right">
          <p>{ENDERECO.linha1}</p>
          <p>{ENDERECO.linha2}</p>
          <div className="mt-2 flex gap-4 sm:justify-end">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-tangerine"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-tangerine"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10 px-5 py-4 text-center text-xs text-paper/50 sm:px-8">
        © {new Date().getFullYear()} Nutrindo por Amor. Todos os direitos reservados.
      </div>
    </footer>
  );
}
