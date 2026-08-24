export const SITE = {
  name: "Smartodonto",
  tagline: "A sua clínica odontológica em Goiânia",
  address:
    "Av. Afonso Pena, Qd 20 - Lt 22 - Vila Jardim São Judas Tadeu, Goiânia - GO, 74685-020",
  phonePrimaryDisplay: "(62) 9 9382-3589",
  phonePrimaryWhats: "5562993823589",
  phoneSecondaryDisplay: "(62) 9 8269-5457",
  phoneSecondaryWhats: "5562982695457",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.1501607231353!2d-49.2510785!3d-16.6192313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3e3cb893005%3A0xcb5291d2898600ae!2sSMARTODONTO!5e0!3m2!1spt-BR!2sbr!4v1787577066958!5m2!1spt-BR!2sbr",
  mapsUrl: "https://maps.app.goo.gl/?q=SMARTODONTO+Goiania",
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma avaliação na Smartodonto."
);

export function whatsappLink(number: string) {
  return `https://wa.me/${number}?text=${WHATSAPP_MESSAGE}`;
}

export const SERVICES = [
  {
    title: "Implante Dentário",
    description: "Recupere sua mordida e seu sorriso com implantes de alta durabilidade.",
    icon: "implant",
  },
  {
    title: "Ortodontia",
    description: "Aparelhos fixos e alinhadores para dentes alinhados em qualquer idade.",
    icon: "braces",
  },
  {
    title: "Clínico Geral",
    description: "Diagnóstico completo e cuidado preventivo para a saúde bucal da família.",
    icon: "stethoscope",
  },
  {
    title: "Restaurador",
    description: "Restaurações estéticas que devolvem função e beleza ao dente.",
    icon: "shield",
  },
  {
    title: "Prótese Dentária",
    description: "Próteses fixas e removíveis feitas sob medida para o seu sorriso.",
    icon: "smile",
  },
  {
    title: "Tratamento de Canal",
    description: "Endodontia moderna e indolor para salvar o dente com saúde.",
    icon: "activity",
  },
  {
    title: "Limpeza Dental",
    description: "Profilaxia profissional para prevenir cáries e problemas gengivais.",
    icon: "sparkles",
  },
  {
    title: "Facetas de Resina",
    description: "Lentes e facetas estéticas para o sorriso que você sempre quis.",
    icon: "gem",
  },
];

export const DIFFERENTIALS = [
  {
    title: "Ambiente climatizado e confortável",
    description: "Sala de espera moderna, iluminação aconchegante e cadeiras premium.",
  },
  {
    title: "Equipe especializada",
    description: "Profissionais capacitados em todas as áreas da odontologia.",
  },
  {
    title: "Tecnologia de ponta",
    description: "Equipamentos modernos para diagnósticos precisos e tratamentos seguros.",
  },
  {
    title: "Atendimento humanizado",
    description: "Seu sorriso está em boas mãos, do primeiro contato ao pós-tratamento.",
  },
];
