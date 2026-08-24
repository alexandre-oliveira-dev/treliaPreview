import Image from "next/image";
import { CONTACT, waLink } from "@/lib/contact";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-bordo-950 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[640px] w-[640px] -translate-y-1/2 opacity-[0.07] md:-right-10"
      >
        <Image
          src="/monogram.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:px-8">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gold-dim">
            Advocacia Trabalhista &amp; Família
          </p>
          <h1 className="font-display text-balance text-4xl leading-[1.15] text-cream sm:text-5xl md:text-6xl">
            Transformamos conflitos <br className="hidden md:block" />
            em <span className="text-gold-light">soluções jurídicas</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim md:text-lg">
            Atendimento próximo e humanizado em causas trabalhistas e de
            família, com o rigor técnico que cada história merece.
            Conveniada à Defensoria Pública e à OAB, na Penha, São Paulo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink(
                "Olá, Dra. Flávia! Gostaria de agendar uma consulta."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-bordo-950 transition-transform hover:scale-[1.03] hover:bg-gold-light"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#areas"
              className="rounded-full border border-cream-dim/30 px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-cream transition-colors hover:border-gold/60 hover:text-gold-light"
            >
              Áreas de atuação
            </a>
          </div>

          <p className="mt-8 text-sm text-cream-dim/80">
            {CONTACT.addressLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
