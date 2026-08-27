export const CONTACT = {
  clinicName: "Consultório Odontológico Marly Cital & Gabrielle Brianêz",
  dentists: [
    { name: "Dra. Marly Caroline P.Z.Cital", detail: "Cirurgiã-dentista" },
    {
      name: "Dra. Gabrielle Taveira Brianêz",
      detail: "Cirurgiã-dentista, pós-graduada em Endodontia · CROSP 119.595",
    },
  ],
  phoneDisplay: "(17) 99251-8263",
  phoneWhatsApp: "5517992518263",
  addressLine1: "Rua 28, 2723A - Aeroporto",
  addressLine2: "Barretos - SP, 14783-231",
  instagram: "https://www.instagram.com/dragabrielletbrianez/",
  siteUrl: "https://marly-gabrielle-odontologia.vercel.app",
} as const;

export function whatsAppLink(message: string) {
  return `https://wa.me/${CONTACT.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
