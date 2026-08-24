// TODO: substituir pelo número de WhatsApp real da Dra. Emanuelyn antes de publicar.
export const CONTACT = {
  whatsappNumber: "5513900000000",
  whatsappDisplay: "(13) 90000-0000",
  email: "contato@emanuelynvasconcelos.adv.br",
  addressLine: "Av. Senador Feijó, 686 - Conjunto 901 - Vila Matias, Santos - SP",
  addressFull:
    "Av. Senador Feijó, 686 - Conjunto 901 - Vila Matias, Santos - SP, 11015-504",
  mapsQuery: "Avenida Senador Feijó, 686, Vila Matias, Santos - SP",
  hours: "Seg à Sáb, 09h às 18h",
  oab: "OAB/SP nº 518.977",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

export function waLink(
  message = "Olá, Dra. Emanuelyn! Gostaria de conversar sobre o meu caso."
) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.mapsQuery
  )}`;
}

export function mapsEmbedSrc() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.mapsQuery
  )}&output=embed`;
}
