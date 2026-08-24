import FadeIn from "@/components/FadeIn";
import { waLink } from "@/lib/contact";

const SERVICOS = [
  {
    title: "Rosto",
    text: "Buço, sobrancelha e queixo com precisão e cera adequada para peles sensíveis.",
    itens: ["Buço", "Design de sobrancelha", "Queixo e laterais do rosto"],
  },
  {
    title: "Virilha",
    text: "Do modelo cavada à egípcia, no ritmo e conforto que você escolher.",
    itens: ["Virilha cavada", "Virilha egípcia", "Virilha completa"],
  },
  {
    title: "Pernas e braços",
    text: "Pele lisa por mais tempo, com técnica que reduz o desconforto.",
    itens: ["Meia perna", "Perna inteira", "Braços"],
  },
  {
    title: "Axilas",
    text: "Depilação rápida e cuidadosa para o dia a dia.",
    itens: ["Axilas com cera quente", "Pele calma pós-depilação"],
  },
  {
    title: "Costas e abdômen",
    text: "Atendimento também para peles e áreas mais delicadas.",
    itens: ["Costas", "Abdômen", "Combos personalizados"],
  },
  {
    title: "Depilação masculina",
    text: "Serviços de depilação a cera também para o público masculino.",
    itens: ["Costas e ombros", "Peito e abdômen", "Sobrancelha"],
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-dark">
            Depilação a cera
          </p>
          <h2 className="font-display max-w-2xl text-3xl leading-snug text-brown-900 md:text-4xl">
            Serviços
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICOS.map((servico, i) => (
            <FadeIn key={servico.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-gold/20 bg-cream-dim p-7 transition-colors hover:border-gold/50">
                <h3 className="font-display text-xl text-gold-dark">
                  {servico.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown-700">
                  {servico.text}
                </p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-gold/20 pt-5 text-sm text-brown-700">
                  {servico.itens.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(
                    `Olá, Bianca! Gostaria de agendar: ${servico.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-gold-dark transition-colors hover:text-brown-900"
                >
                  Agendar →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
