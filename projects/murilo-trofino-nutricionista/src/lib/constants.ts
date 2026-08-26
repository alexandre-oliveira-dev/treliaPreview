export const SITE_URL = "https://murilo-trofino-nutricionista.vercel.app";

export const WHATSAPP_NUMBER = "5541996697297";
export const WHATSAPP_DISPLAY = "(41) 99669-7297";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const CONSULTORIO = {
  nome: "Consultório particular",
  endereco:
    "Av. Cândido de Abreu, 526 - Torre A - Sala 1304 - Centro Cívico, Curitiba - PR, 80530-000",
  extra: null as string | null,
};

export const ACADEMIA = {
  nome: "Academia Ph.D Sports Cajuru Filipinas",
  endereco: "R. Filipinas, 65, Cajuru, Curitiba - PR, 82960-180",
  extra: "Com estacionamento",
};

export const HORARIOS = {
  semana: "Segunda a Sexta · 6h30 – 21h30",
  sabado: "Sábado · 6h30 – 18h30",
};

export type Servico = {
  titulo: string;
  descricao: string;
};

export const SERVICOS: Servico[] = [
  {
    titulo: "Consulta Nutricional",
    descricao:
      "Ponto de partida: avaliação completa da rotina, hábitos e objetivos para montar a primeira estratégia alimentar.",
  },
  {
    titulo: "Plano de Acompanhamento",
    descricao:
      "Retornos bimestrais ou mensais para ajustar o plano conforme a resposta do corpo e a rotina real do dia a dia.",
  },
  {
    titulo: "Consultoria de Treino e Alimentação",
    descricao:
      "Nutrição alinhada ao treino — periodização alimentar pensada junto com a carga e o objetivo físico.",
  },
  {
    titulo: "Programa Ansiedade e Comer Consciente",
    descricao:
      "Abordagem específica para quem come por ansiedade — reconstruindo uma relação mais tranquila com a comida.",
  },
  {
    titulo: "Consulta Online",
    descricao:
      "Atendimento por videochamada com a mesma profundidade da consulta presencial, para qualquer lugar do Brasil.",
  },
];
