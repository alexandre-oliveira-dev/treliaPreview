import Reveal from "@/components/Reveal";
import { CONTACT, waLink } from "@/lib/contact";

export default function Contato() {
  return (
    <section id="contato" className="bg-ink-950 py-20 text-paper md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay-light">
            Fale conosco agora
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl italic sm:text-4xl">
            Agora é hora de dar o primeiro passo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-paper/80">
            Atendimento presencial ou 100% online. Clicando no botão verde, o
            atendimento é imediato.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={waLink("Olá, Dra. Letícia! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-[#25D366] px-9 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-ink-950"
          >
            Falar no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-2 text-sm text-paper/70">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-clay-light">
              {CONTACT.email}
            </a>
            <span>{CONTACT.whatsappDisplay}</span>
            <span>{CONTACT.addressLine}</span>
            <span>CNPJ {CONTACT.cnpj}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
