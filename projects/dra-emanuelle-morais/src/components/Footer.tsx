import { MapPin, Phone, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import WaveDivider from "./WaveDivider";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mist-dim text-ink-950">
      <WaveDivider
        fill="var(--ink-900)"
        className="pointer-events-none absolute inset-x-0 top-0 opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-display italic text-2xl leading-tight text-ink-950 sm:text-4xl">
              Até breve, no Boqueirão.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-700">
              Consultório da Dra. Emanuelle Morais — cirurgiã-dentista em
              Santos, SP. Agende sua visita e venha experimentar um
              atendimento sem pressa.
            </p>

            <a
              href={CONTACT.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-5 lg:items-end lg:text-right">
            <div className="flex items-start gap-3 lg:flex-row-reverse">
              <MapPin size={18} className="mt-0.5 shrink-0 text-coral" />
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-700 hover:text-ink-950"
              >
                {CONTACT.address}
              </a>
            </div>
            <div className="flex items-start gap-3 lg:flex-row-reverse">
              <Phone size={18} className="mt-0.5 shrink-0 text-coral" />
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-700 hover:text-ink-950"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3 lg:flex-row-reverse">
              <Clock size={18} className="mt-0.5 shrink-0 text-coral" />
              <p className="text-sm text-ink-700">
                Segunda a sexta · 9h às 19h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-ink-900/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ink-700/70">
            &copy; {new Date().getFullYear()} Dra. Emanuelle Morais —
            Odontologia. Todos os direitos reservados.
          </p>
          <span
            style={{ writingMode: "vertical-rl" }}
            className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-ink-700/40 sm:block"
          >
            Santos · SP
          </span>
        </div>
      </div>
    </footer>
  );
}
