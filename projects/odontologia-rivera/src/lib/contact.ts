export const CONTACT = {
  dentistName: "Dra. Jessica Rivera de Melo",
  cro: "CRO/PR 25.539",
  clinicName: "Odontologia Rivera",
  phoneDisplay: "(41) 99519-5343",
  phoneE164: "5541995195343",
  email: "contato.riveraodontologia@gmail.com",
  addressLine: "Rua Professor Leonel Moro, 27 - sala 04 - Xaxim",
  addressCity: "Curitiba - PR, 81710-250",
  instagram: "https://www.instagram.com/odontologiarivera",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Rua+Professor+Leonel+Moro,+27+Xaxim+Curitiba+PR+81710-250",
  get whatsappMessage() {
    const text = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta na Odontologia Rivera."
    );
    return `https://wa.me/${this.phoneE164}?text=${text}`;
  },
};

export const SPECIALTIES = [
  {
    title: "Endodontia",
    description:
      "Tratamento de canal com foco em conforto e preservação do dente — especialidade da Dra. Jessica.",
    featured: true,
  },
  {
    title: "Clínica geral",
    description: "Cuidado completo para adultos e crianças, consulta a consulta.",
  },
  {
    title: "Estética e restauradora",
    description: "Facetas, restaurações e clareamento para um sorriso natural.",
  },
  {
    title: "Prevenção e limpeza",
    description: "Profilaxia e orientação para manter a saúde bucal em dia.",
  },
  {
    title: "Periodontia",
    description: "Tratamento de gengivas e prevenção de doenças periodontais.",
  },
  {
    title: "Prótese dentária",
    description: "Próteses fixas e removíveis pensadas para função e naturalidade.",
  },
  {
    title: "Cirurgia oral",
    description: "Extrações e pequenas cirurgias com acompanhamento próximo.",
  },
  {
    title: "Ortodontia",
    description: "Alinhamento dos dentes para crianças e adultos.",
  },
  {
    title: "Implantodontia",
    description: "Reposição de dentes perdidos com implantes duradouros.",
  },
  {
    title: "Harmonização orofacial",
    description: "Procedimentos estéticos complementares ao sorriso.",
  },
] as const;
