import Reveal from "@/components/Reveal";
import { CONTACT, waLink } from "@/lib/contact";

export default function Contato() {
  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    CONTACT.mapsQuery
  )}&z=16&output=embed`;

  return (
    <section id="contato" className="bg-bordo-900 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-dim">
            Vamos conversar
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-snug text-cream md:text-4xl">
            Agende uma conversa e entenda seus próximos passos.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-6">
              <a
                href={waLink(
                  "Olá, Dra. Flávia! Gostaria de agendar uma consulta."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-gold/25 bg-bordo-800 px-6 py-5 transition-colors hover:border-gold/50"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-gold-dim">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-display text-lg text-cream">
                    {CONTACT.whatsappDisplay}
                  </p>
                </div>
                <span className="text-gold-light">→</span>
              </a>

              <a
                href={`tel:+${CONTACT.phoneFixed}`}
                className="flex items-center justify-between rounded-xl border border-gold/25 bg-bordo-800 px-6 py-5 transition-colors hover:border-gold/50"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-gold-dim">
                    Telefone fixo
                  </p>
                  <p className="mt-1 font-display text-lg text-cream">
                    {CONTACT.phoneFixedDisplay}
                  </p>
                </div>
                <span className="text-gold-light">→</span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center justify-between rounded-xl border border-gold/25 bg-bordo-800 px-6 py-5 transition-colors hover:border-gold/50"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-gold-dim">
                    E-mail
                  </p>
                  <p className="mt-1 font-display text-lg text-cream break-all">
                    {CONTACT.email}
                  </p>
                </div>
                <span className="text-gold-light">→</span>
              </a>

              <div className="rounded-xl border border-gold/25 bg-bordo-800 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.1em] text-gold-dim">
                  Endereço
                </p>
                <p className="mt-1 leading-relaxed text-cream">
                  {CONTACT.addressLine}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-xl border border-gold/25">
              <iframe
                title="Localização do escritório Flávia Souza Advocacia"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
