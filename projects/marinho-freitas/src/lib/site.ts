export const site = {
  name: "Marinho & Freitas Advogados",
  shortName: "Marinho & Freitas",
  domain: "marinhoefreitas.adv.br",
  positioning: "Advocacia estratégica, técnica e personalizada para situações que exigem segurança jurídica.",
  phoneDisplay: "(11) 98883-3557",
  whatsapp: "5511988833557",
  address: {
    line1: "Av. Paulista, 1636",
    line2: "Cerqueira César, São Paulo - SP",
  },
  founded: "mais de 10 anos de experiência",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Area = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  situations: string[];
  approach: string;
  whatsappMessage: string;
};

export const areas: Area[] = [
  {
    slug: "direito-criminal",
    name: "Direito Criminal",
    shortName: "Criminal",
    headline: "Defesa técnica e estratégica em qualquer fase do processo penal",
    description:
      "Atuamos na proteção dos direitos e garantias fundamentais do cliente, com excelência técnica, discrição e compromisso ético em todas as fases do processo penal.",
    situations: [
      "Investigação policial e inquérito",
      "Defesa em processo criminal",
      "Audiências e acompanhamento processual",
      "Medidas cautelares e urgências",
    ],
    approach:
      "Cada caso é avaliado com rigor técnico e sigilo, priorizando resposta rápida em situações emergenciais e uma defesa construída de forma estratégica desde o primeiro contato.",
    whatsappMessage: "Olá, gostaria de falar sobre uma questão de Direito Criminal.",
  },
  {
    slug: "direito-de-familia-e-sucessoes",
    name: "Direito de Família e Sucessões",
    shortName: "Família e Sucessões",
    headline: "Atendimento humano para decisões que envolvem família e patrimônio",
    description:
      "Atuamos em processos de divórcio, guarda, pensão alimentícia, partilha de bens, inventário e demais temas familiares e sucessórios, sempre com sensibilidade, ética e responsabilidade.",
    situations: [
      "Divórcio e dissolução de união estável",
      "Guarda e regulamentação de convivência",
      "Pensão alimentícia",
      "Partilha de bens e inventário",
    ],
    approach:
      "Buscamos soluções justas e eficazes, preservando o bem-estar das partes envolvidas e conduzindo cada etapa com clareza sobre o que esperar do processo.",
    whatsappMessage: "Olá, gostaria de falar sobre uma questão de Direito de Família e Sucessões.",
  },
  {
    slug: "direito-do-consumidor",
    name: "Direito do Consumidor",
    shortName: "Consumidor",
    headline: "Defesa dos seus direitos diante de práticas abusivas",
    description:
      "Defendemos os interesses de clientes diante de práticas abusivas, cobranças indevidas, descumprimento contratual e má prestação de serviços.",
    situations: [
      "Cobranças indevidas e negativação",
      "Descumprimento contratual",
      "Má prestação de serviços e produtos com defeito",
      "Práticas abusivas de fornecedores",
    ],
    approach:
      "Atuamos com rigor técnico e compromisso com a reparação dos prejuízos sofridos, buscando sempre a solução mais justa e eficaz para o cliente.",
    whatsappMessage: "Olá, gostaria de falar sobre uma questão de Direito do Consumidor.",
  },
  {
    slug: "direito-empresarial",
    name: "Direito Empresarial",
    shortName: "Empresarial",
    headline: "Assessoria jurídica estratégica para proteger e expandir seu negócio",
    description:
      "Prestamos assessoria jurídica completa para pequenas e grandes empresas, atuando em governança corporativa, contratos de alta complexidade, fusões e aquisições, compliance e gestão de riscos.",
    situations: [
      "Governança corporativa",
      "Contratos empresariais de alta complexidade",
      "Fusões e aquisições",
      "Compliance e gestão de riscos",
    ],
    approach:
      "Atuamos com rigor técnico e visão estratégica para proteger o patrimônio empresarial e apoiar a expansão dos negócios no mercado nacional e internacional.",
    whatsappMessage: "Olá, gostaria de falar sobre uma questão de Direito Empresarial.",
  },
];

export type Partner = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export const partners: Partner[] = [
  {
    slug: "larissa-freitas",
    name: "Dra. Larissa Freitas",
    role: "Sócia-fundadora",
    bio: "Sócia-fundadora do escritório, responsável pela gestão, organização e condução estratégica dos casos, com mais de 10 anos de experiência em Direito Criminal, Família, Consumidor e Empresarial.",
  },
  {
    slug: "ana-marinho",
    name: "Dra. Ana Marinho",
    role: "Sócia-fundadora",
    bio: "Sócia-fundadora do escritório, responsável pela gestão, organização e condução estratégica dos casos, com mais de 10 anos de experiência em Direito Criminal, Família, Consumidor e Empresarial.",
  },
];

export const differentiators = [
  {
    title: "Sólida experiência jurídica",
    description:
      "Com mais de 10 anos de atuação, o escritório é reconhecido pela excelência técnica e profundo conhecimento das garantias constitucionais.",
  },
  {
    title: "Atuação rápida e precisa",
    description:
      "Resposta ágil em situações emergenciais, com atuação firme e alinhada à proteção dos direitos fundamentais do cliente.",
  },
  {
    title: "Advocacia personalizada",
    description:
      "Cada demanda recebe atenção individualizada, com soluções jurídicas estruturadas conforme as particularidades do caso.",
  },
  {
    title: "Atuação ética e estratégica",
    description:
      "Presença sólida em diversas áreas do Direito, com soluções eficientes, personalizadas e seguras para cada cliente.",
  },
];

export const process = [
  {
    step: "01",
    title: "Primeiro contato",
    description: "Você descreve sua situação por WhatsApp ou formulário e recebe orientação sobre os próximos passos.",
  },
  {
    step: "02",
    title: "Análise do caso",
    description: "A equipe avalia o contexto jurídico e define a estratégia mais adequada para a sua situação.",
  },
  {
    step: "03",
    title: "Consulta",
    description: "Conversa com a advogada responsável, presencial ou virtual, para alinhar entendimento e estratégia.",
  },
  {
    step: "04",
    title: "Atuação e acompanhamento",
    description: "Condução do caso com atualização periódica sobre cada etapa do processo.",
  },
];
