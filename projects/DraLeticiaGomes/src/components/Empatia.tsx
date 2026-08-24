import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/contact";

const ITEMS = [
  "Ter finalmente a pensão justa que reconhece todo o esforço que você tem feito sozinha.",
  "Um divórcio que traz justiça ao que você passou e abre caminho para um novo começo.",
  "A tranquilidade de garantir a guarda do seu filho e regulamentar as visitas, criando um futuro seguro e cheio de amor.",
  "Um inventário resolvido sem as dificuldades que um momento tão delicado traz.",
];

export default function Empatia() {
  return (
    <section className="bg-ink-950 py-20 text-paper md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-clay-light">
            Estamos com você
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl italic leading-tight sm:text-4xl">
            Imagine transformar essa realidade.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="flex gap-5 border-b border-paper/10 pb-8 last:border-none">
                <span className="font-display text-2xl italic text-clay-light">
                  0{i + 1}
                </span>
                <p className="text-lg leading-relaxed text-paper/90">
                  Imagine {item.charAt(0).toLowerCase() + item.slice(1)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <a
            href={waLink("Olá, Dra. Letícia! Quero transformar a minha realidade.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink-950"
          >
            Falar com a advogada
          </a>
        </Reveal>
      </div>
    </section>
  );
}
