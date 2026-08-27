export const CONTACT = {
  name: "Fernanda Teixeira",
  fullName: "Fernanda Rodrigues Teixeira",
  displayName: "Dra. Fernanda Teixeira",
  role: "Cirurgiã-Dentista",
  phoneDisplay: "(17) 99116-9669",
  phoneWhatsApp: "5517991169669",
  addressLine1: "Av. Cinco, 640",
  addressLine2: "Fortaleza, Barretos - SP, 14780-230",
  instagram: "https://www.instagram.com/dra.fernandaateixeira/",
  instagramHandle: "@dra.fernandaateixeira",
  siteUrl: "https://dra-fernanda-teixeira.vercel.app",
} as const;

export function whatsAppLink(message: string) {
  return `https://wa.me/${CONTACT.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}
