import Reveal from "./Reveal";
import { CONTACT, mapsEmbedSrc, mapsLink, telLink, waLink } from "@/lib/contact";

export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-ink-950 px-6 py-24 text-paper sm:px-10 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-wine-light">
            Contato
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-balance sm:text-4xl">
            Marque uma conversa antes de decidir qualquer coisa.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-paper/70">
            A primeira conversa é para entender o seu caso — não para vender
            um processo. Ligue ou passe no escritório em Santos.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-wine px-7 py-3.5 font-body text-sm font-medium text-paper transition-colors hover:bg-wine-light"
            >
              Chamar no WhatsApp
            </a>
            <a
              href={telLink()}
              className="font-mono text-xs uppercase tracking-[0.15em] text-paper/70 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-wine-light"
            >
              ou ligar para {CONTACT.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-8 border-t border-paper/15 pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper/50">
                WhatsApp
              </dt>
              <dd className="mt-1 font-display text-lg italic">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-wine-light">
                  {CONTACT.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper/50">
                Telefone
              </dt>
              <dd className="mt-1 font-display text-lg italic">
                <a href={telLink()} className="hover:text-wine-light">
                  {CONTACT.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper/50">
                E-mail
              </dt>
              <dd className="mt-1 font-display text-lg italic">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-wine-light">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper/50">
                Endereço
              </dt>
              <dd className="mt-1 max-w-xs font-body leading-relaxed text-paper/85">
                <a href={mapsLink()} className="hover:text-wine-light" target="_blank" rel="noopener noreferrer">
                  {CONTACT.addressFull}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={mapsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 block overflow-hidden rounded-2xl border border-paper/15 lg:ml-12"
            aria-label="Abrir localização no Google Maps"
          >
            <div className="relative h-56 w-full">
              <iframe
                src={mapsEmbedSrc()}
                title="Mapa — Sylvia Oliveira Advogados, Santos/SP"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale invert-[92%] contrast-[85%] transition-transform duration-500 group-hover:scale-105"
                style={{ border: 0 }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-paper/10" />
            </div>
            <span className="flex items-center justify-between bg-ink-900 px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper/60">
              Ver rota até o escritório
              <span aria-hidden>↗</span>
            </span>
          </a>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-paper/10 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper/40">
        <p>Sylvia Oliveira Advogados — Santos, SP</p>
      </div>
    </section>
  );
}
