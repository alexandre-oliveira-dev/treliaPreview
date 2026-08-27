export const CONTACT = {
  name: "Simone Donadeli Camelo",
  cro: "CRO 109-184",
  phoneDisplay: "(17) 99616-3694",
  phoneWhatsApp: "5517996163694",
  addressLine1: "Av. Vinte e Sete, 1351 - Centro",
  addressLine2: "Barretos - SP, 14780-340",
  instagram: "https://www.instagram.com/simonedonadeli/",
  siteUrl: "https://simone-donadeli-odontologia.vercel.app",
} as const;

export function whatsAppLink(message: string) {
  return `https://wa.me/${CONTACT.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
