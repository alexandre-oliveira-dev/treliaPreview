import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";

const PRINCIPIOS = [
  {
    title: "Higiene rigorosa",
    text: "Materiais descartáveis e protocolos de higienização em cada atendimento.",
  },
  {
    title: "Atendimento individual",
    text: "Um horário por vez, com atenção total à sua pele e ao seu conforto.",
  },
  {
    title: "Técnica e acolhimento",
    text: "Cera de alta qualidade e uma escuta atenta para cada tipo de pele.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-cream-dim py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <FadeIn>
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-gold/30 bg-cream text-gold-dark shadow-sm md:h-72 md:w-72">
            <Logo size="lg" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-dark">
            Sobre o estúdio
          </p>
          <h2 className="font-display text-3xl leading-snug text-brown-900 md:text-4xl">
            Um espaço só seu para renovar a autoestima.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-brown-700">
            No estúdio Bianca Benatti Depilação, cada atendimento é pensado
            para o seu bem-estar: da recepção à cera, tudo com cuidado,
            técnica e um ambiente reservado e confortável, em Sapopemba, São
            Paulo.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PRINCIPIOS.map((p) => (
              <div key={p.title} className="border-t border-gold/30 pt-4">
                <h3 className="font-display text-lg text-gold-dark">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-700">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
