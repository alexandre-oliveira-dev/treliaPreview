export const CONTACT = {
  whatsappNumber: "5511957493531",
  whatsappDisplay: "(11) 95749-3531",
  email: "contato@leticiagomes.adv.br",
  addressLine: "Av. Anna Costa, 275, Cj. 12, Gonzaga, Santos - SP",
  mapsQuery: "Avenida Anna Costa, 275, Gonzaga, Santos - SP",
  cnpj: "59.072.155/0001-86",
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
