import Image from "next/image";
import Reveal from "./Reveal";

export default function Escritorio() {
  return (
    <section id="escritorio" className="bg-paper-dim px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              className="absolute -inset-5 -z-10 rotate-2 rounded-[1.75rem] border border-wine/20"
              aria-hidden
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-950/10 shadow-[0_20px_45px_-20px_rgba(42,33,48,0.35)]">
              <Image
                src="/sylvia-oliveira-escritorio.png"
                alt="Sylvia Oliveira em seu escritório de advocacia em Santos"
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-wine">
            O escritório
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-950 text-balance sm:text-4xl">
            Uma advocacia pensada para pessoas, não para processos.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink-700">
            O Sylvia Oliveira Advogados nasceu em Santos com um princípio
            simples: por trás de cada processo existe uma família reorganizando
            a própria vida. Praticamos uma advocacia moderna, que defende
            direitos sem perder de vista o desgaste emocional de quem está do
            outro lado da mesa.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-700">
            Atuamos com atendimento próximo — explicando cada etapa em
            linguagem clara, sem juridiquês — e com o rigor técnico que um
            divórcio, um inventário ou uma partilha exigem.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-950/10 pt-8 sm:max-w-md">
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-neutral">
                Sede
              </dt>
              <dd className="mt-1 font-display italic text-ink-900">Santos, SP</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-neutral">
                Áreas
              </dt>
              <dd className="mt-1 font-display italic text-ink-900">Família · Sucessões · Cível</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
