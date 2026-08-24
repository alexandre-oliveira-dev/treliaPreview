import { CalendarCheck, ShieldCheck, Heart, Sparkles } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const ITENS = [
  {
    icon: ShieldCheck,
    title: "Higiene em primeiro lugar",
    text: "Materiais descartáveis e ambiente sempre higienizado a cada atendimento.",
  },
  {
    icon: CalendarCheck,
    title: "Horário marcado",
    text: "Sem correria: cada cliente tem seu horário reservado e atenção exclusiva.",
  },
  {
    icon: Heart,
    title: "Cuidado de verdade",
    text: "Escuta atenta ao seu tipo de pele para o resultado mais confortável possível.",
  },
  {
    icon: Sparkles,
    title: "Pele lisa por mais tempo",
    text: "Cera de qualidade que respeita a pele e prolonga o resultado.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-brown-900 py-24 text-cream">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-light">
            Por que escolher o estúdio
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-snug text-cream md:text-4xl">
            Diferenciais
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {ITENS.map(({ icon: Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4">
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-gold-light"
                />
                <h3 className="font-display text-lg text-cream">{title}</h3>
                <p className="text-sm leading-relaxed text-cream/70">
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
