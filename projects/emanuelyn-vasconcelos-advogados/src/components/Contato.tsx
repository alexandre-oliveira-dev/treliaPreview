import Reveal from "./Reveal";
import { CONTACT, mapsEmbedSrc, mapsLink, waLink } from "@/lib/contact";

export default function Contato() {
  return (
    <section id="contato" className="bg-ink-950 px-6 py-24 text-paper sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-brass-light">
            Entre em contato
          </p>
          <h2 className="mt-4 max-w-lg text-balance font-display text-3xl italic leading-tight sm:text-4xl">
            A primeira conversa é para entender o seu caso.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/70">
            Fale agora pelo WhatsApp ou acompanhe as redes sociais para
            entender melhor como atuamos.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-brass px-7 py-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-brass-light"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-[0.72rem] font-medium uppercase tracking-[0.15em] text-paper/70">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass-light"
            >
              Instagram
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brass-light"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-8 border-t border-paper/15 pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-paper/50">
                Endereço
              </dt>
              <dd className="mt-1 max-w-xs leading-relaxed text-paper/85">
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass-light"
                >
                  {CONTACT.addressFull}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-paper/50">
                Horário de funcionamento
              </dt>
              <dd className="mt-1 font-display text-lg italic">
                {CONTACT.hours}
              </dd>
            </div>
          </dl>

          <a
            href={mapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 block overflow-hidden rounded-sm border border-paper/15 lg:ml-12"
            aria-label="Abrir localização no Google Maps"
          >
            <div className="relative h-56 w-full">
              <iframe
                src={mapsEmbedSrc()}
                title="Mapa — Emanuelyn Vasconcelos Advogados, Santos/SP"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale invert-[92%] contrast-[85%] transition-transform duration-500 group-hover:scale-105"
                style={{ border: 0 }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-paper/10" />
            </div>
            <span className="flex items-center justify-between bg-ink-900 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-paper/60">
              Ver rota até o escritório
              <span aria-hidden>↗</span>
            </span>
          </a>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-paper/10 pt-8 text-[0.65rem] uppercase tracking-[0.15em] text-paper/40">
        <p>Emanuelyn Vasconcelos Advogados — {CONTACT.oab} — Santos, SP</p>
      </div>
    </section>
  );
}
