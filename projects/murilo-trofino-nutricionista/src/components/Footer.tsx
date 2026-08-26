import { RingMotif } from "./RingMotif";
import { CONSULTORIO, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <RingMotif variant="icon" className="h-7 w-7" />
          <span className="font-display text-base font-semibold text-paper">
            Murilo Trofino
          </span>
        </div>

        <div className="space-y-1 font-body text-sm text-steel">
          <p>{CONSULTORIO.endereco}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-medium text-paper transition-colors hover:text-signal"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 font-mono text-[0.7rem] text-steel/60 sm:px-8">
        © {new Date().getFullYear()} Murilo Trofino Nutricionista. Nutrição
        esportiva em Curitiba-PR.
      </p>
    </footer>
  );
}
