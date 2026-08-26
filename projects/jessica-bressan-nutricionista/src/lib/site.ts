export const WHATSAPP_NUMBER = "5541996548761";
export const WHATSAPP_DISPLAY = "(41) 99654-8761";
export const INSTAGRAM_HANDLE = "@nutrijessicabressan";
export const INSTAGRAM_URL = "https://www.instagram.com/nutrijessicabressan/";
export const ADDRESS_LINE1 = "Av. João Gualberto, 1673 - Sl 25";
export const ADDRESS_LINE2 = "Juvevê, Curitiba - PR, 80030-001";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Av. João Gualberto, 1673 - Sl 25, Juvevê, Curitiba - PR, 80030-001");

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
