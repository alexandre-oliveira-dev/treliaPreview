import Image from "next/image";
import Reveal from "@/components/Reveal";

const PRINCIPIOS = [
  {
    title: "Escuta atenta",
    text: "Cada caso começa por ouvir sua história com calma, sem pressa e sem julgamento.",
  },
  {
    title: "Clareza jurídica",
    text: "Explicações em linguagem simples sobre prazos, riscos e caminhos possíveis.",
  },
  {
    title: "Acesso à justiça",
    text: "Convênio com a Defensoria Pública e a OAB para ampliar o acesso à orientação jurídica.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-bordo-900 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal>
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-gold/30 bg-bordo-800 md:h-72 md:w-72">
            <Image
              src="/monogram.png"
              alt="Monograma Flávia Souza Advocacia"
              width={190}
              height={190}
              className="opacity-95"
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-dim">
            Sobre o escritório
          </p>
          <h2 className="font-display text-3xl leading-snug text-cream md:text-4xl">
            Direito com técnica, e cuidado com quem está do outro lado da mesa.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-cream-dim">
            A Dra. Flávia Souza atua nas áreas de Direito do Trabalho e
            Direito de Família, ajudando pessoas a transformar momentos de
            conflito, uma demissão injusta, uma separação, uma disputa de
            guarda, em decisões seguras e bem orientadas.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PRINCIPIOS.map((p) => (
              <div key={p.title} className="border-t border-gold/25 pt-4">
                <h3 className="font-display text-lg text-gold-light">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
