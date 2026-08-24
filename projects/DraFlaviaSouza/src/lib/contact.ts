export const CONTACT = {
  whatsappNumber: "5511977657675",
  whatsappDisplay: "(11) 97765-7675",
  phoneFixed: "1123644004",
  phoneFixedDisplay: "(11) 2364-4004",
  email: "flaviajuridico10@gmail.com",
  addressLine: "Av. Penha de França, 655 - Sala 1 - Penha, São Paulo - SP",
  mapsQuery: "Av. Penha de França, 655, Sala 1, Penha, São Paulo - SP",
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
