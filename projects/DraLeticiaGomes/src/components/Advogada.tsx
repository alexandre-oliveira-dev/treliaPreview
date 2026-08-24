import Reveal from "@/components/Reveal";
import Monogram from "@/components/Monogram";
import { waLink } from "@/lib/contact";

const CREDENCIAIS = [
  "Mestranda em Direito",
  "Especialista em Direito de Família e Sucessões",
  "Membro do Instituto Brasileiro de Direito de Família (IBDFAM)",
  "Membro da Comissão de Direito de Família da OAB",
  "Fundadora da LGS Advocacia Especializada",
];

export default function Advogada() {
  return (
    <section id="advogada" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[0.4fr_0.6fr] md:gap-16 md:px-8">
        <Reveal>
          <Monogram className="h-16 w-16 text-clay" />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-clay-dim">
              Conheça a sua advogada
            </p>
            <h2 className="mt-4 font-display text-3xl italic text-ink-950 sm:text-4xl">
              Dra. Letícia Gomes
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-4">
              {CREDENCIAIS.map((item) => (
                <li key={item} className="flex gap-3 text-ink-800/85">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={waLink("Olá, Dra. Letícia! Gostaria de conhecer o seu trabalho.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full border border-ink-950/15 px-7 py-3.5 text-sm uppercase tracking-[0.06em] text-ink-800 transition-colors hover:border-clay/60 hover:text-clay-dim"
            >
              Falar com a advogada
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
