export const CONTACT = {
  whatsappNumber: "5511976239090",
  whatsappDisplay: "(11) 97623-9090",
  instagramHandle: "@biancabenattidepilacao",
  instagramUrl: "https://instagram.com/biancabenattidepilacao",
  addressLine:
    "Avenida Manuel Pimentel, 176 - Sapopemba, São Paulo - SP, 03983-020",
  mapsQuery:
    "Avenida Manuel Pimentel, 176, Sapopemba, São Paulo - SP, 03983-020",
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
