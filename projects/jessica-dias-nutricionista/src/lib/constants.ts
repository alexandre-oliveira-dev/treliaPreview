export const SITE_URL = "https://jessica-dias-nutricionista.vercel.app";

export const ADDRESS =
  "R. Conselheiro Araújo, 434 - Centro, Curitiba - PR, 82590-300";

export const PHONE_DISPLAY = "(41) 99689-7920";
export const PHONE_TEL = "+5541996897920";
export const INSTAGRAM_HANDLE = "jessicamayaradias";
export const INSTAGRAM_URL = "https://www.instagram.com/jessicamayaradias/";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS);

export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
    message
  )}`;
}
