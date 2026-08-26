export const SITE_URL = "https://clinica-nutrindo-por-amor-bice.vercel.app";

export const WHATSAPP_NUMBER = "554195299805";
export const WHATSAPP_DISPLAY = "(41) 99529-9805";
export const INSTAGRAM_HANDLE = "@clinicanutrindoporamor";
export const INSTAGRAM_URL = "https://www.instagram.com/clinicanutrindoporamor/";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const ENDERECO = {
  linha1: "Rua 24 de Maio, 412 - Rebouças",
  linha2: "Curitiba - PR, 80220-060",
  mapsQuery: "Rua 24 de Maio, 412, Rebouças, Curitiba - PR, 80220-060",
};

export type Especialidade = {
  titulo: string;
  descricao: string;
};

export const ESPECIALIDADES: Especialidade[] = [
  {
    titulo: "Introdução Alimentar",
    descricao:
      "Os primeiros contatos do bebê com a comida, do jeito certo — sem pressa e sem susto, construindo autonomia à mesa desde cedo.",
  },
  {
    titulo: "Seletividade Alimentar",
    descricao:
      "Para quando o cardápio da criança encolheu. Trabalho conjunto de nutrição e psicologia para ampliar aceitação sem virar briga.",
  },
  {
    titulo: "Obesidade Infantil",
    descricao:
      "Cuidado com o peso da criança que também cuida da autoestima dela — mudança de hábito em família, sem dieta restritiva ou culpa.",
  },
  {
    titulo: "Terapia Alimentar",
    descricao:
      "Quando a relação com a comida carrega ansiedade, recusa ou controle. Escuta psicológica para reconstruir esse vínculo com calma.",
  },
];

export type ProfissionalArea = "nutricao" | "psicologia";

export type Profissional = {
  nome: string;
  area: ProfissionalArea;
  cargo: string;
};

export const TIME: Profissional[] = [
  { nome: "Fernanda", area: "psicologia", cargo: "Psicóloga infantil" },
  { nome: "Mariana", area: "psicologia", cargo: "Psicóloga infantil" },
  { nome: "Giulia", area: "nutricao", cargo: "Nutricionista infantil" },
  { nome: "Bárbara", area: "nutricao", cargo: "Nutricionista infantil" },
  { nome: "Evelin", area: "nutricao", cargo: "Nutricionista infantil" },
  { nome: "Kali", area: "nutricao", cargo: "Nutricionista infantil" },
];
