import { MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import FadeIn from "@/components/FadeIn";
import { CONTACT, waLink } from "@/lib/contact";

export default function Contato() {
  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    CONTACT.mapsQuery
  )}&z=16&output=embed`;

  return (
    <section id="contato" className="bg-cream-dim py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-dark">
            Vamos agendar
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-snug text-brown-900 md:text-4xl">
            Reserve seu horário e venha cuidar de você.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <a
                href={waLink("Olá, Bianca! Gostaria de agendar um horário.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-gold/25 bg-cream px-6 py-5 transition-colors hover:border-gold/60"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle
                    size={22}
                    strokeWidth={1.6}
                    className="text-gold-dark"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-gold-dark">
                      WhatsApp
                    </p>
                    <p className="mt-1 font-display text-lg text-brown-900">
                      {CONTACT.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <span className="text-gold-dark">→</span>
              </a>

              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-gold/25 bg-cream px-6 py-5 transition-colors hover:border-gold/60"
              >
                <div className="flex items-center gap-4">
                  <InstagramIcon size={22} className="text-gold-dark" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-gold-dark">
                      Instagram
                    </p>
                    <p className="mt-1 font-display text-lg text-brown-900">
                      {CONTACT.instagramHandle}
                    </p>
                  </div>
                </div>
                <span className="text-gold-dark">→</span>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-gold/25 bg-cream px-6 py-5">
                <MapPin
                  size={22}
                  strokeWidth={1.6}
                  className="mt-0.5 text-gold-dark"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-gold-dark">
                    Endereço
                  </p>
                  <p className="mt-1 leading-relaxed text-brown-900">
                    {CONTACT.addressLine}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-xl border border-gold/25">
              <iframe
                title="Localização do estúdio Bianca Benatti Depilação"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
