import Image from "next/image";
import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-paper-dim px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              className="absolute -inset-4 -z-10 rounded-sm border border-brass/30"
              aria-hidden
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-[0_25px_50px_-25px_rgba(11,15,14,0.5)]">
              <Image
                src="/advogada.jpg"
                alt="Dra. Emanuelyn Vasconcelos"
                fill
                sizes="(min-width: 1024px) 26rem, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-brass-dim">
            Quem somos
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl italic leading-tight text-ink-950 sm:text-4xl">
            Dra. Emanuelyn Vasconcelos
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700">
            Advogada inscrita na OAB/SP nº 518.977, com atuação especializada
            em Direito Bancário e Defesa do Consumidor. Atua em todo o Brasil
            assessorando consumidores e empresas na resolução de conflitos com
            bancos e instituições financeiras, oferecendo soluções
            estratégicas tanto na esfera administrativa quanto judicial.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-700">
            Seu trabalho é pautado pela análise técnica de contratos,
            identificação de cláusulas abusivas, negociação de dívidas e
            defesa em ações judiciais, sempre com foco na proteção do
            patrimônio e na garantia dos direitos de seus clientes.
          </p>

          <blockquote className="mt-8 max-w-xl border-l-2 border-brass pl-6 font-display text-xl italic leading-snug text-petrol">
            &ldquo;Cada caso é conduzido de forma personalizada, com
            atendimento próximo, transparente e comprometido em todas as
            etapas do processo.&rdquo;
          </blockquote>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-950/10 pt-8 sm:max-w-md">
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-neutral">
                Inscrição
              </dt>
              <dd className="mt-1 font-display italic text-ink-900">
                OAB/SP 518.977
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-neutral">
                Atuação
              </dt>
              <dd className="mt-1 font-display italic text-ink-900">
                Todo o Brasil
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
