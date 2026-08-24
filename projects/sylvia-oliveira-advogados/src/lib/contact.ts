export const CONTACT = {
  phoneDisplay: "(13) 3221-9163",
  phoneTel: "+551332219163",
  whatsappNumber: "5513997293526",
  whatsappDisplay: "(13) 99729-3526",
  email: "contato@sylviaoliveira.com.br",
  addressLine: "Av. Anna Costa, 100, Cj. 11, Vila Mathias, Santos - SP",
  addressFull:
    "Av. Anna Costa, 100 - Conjunto 11 - Vila Mathias, Santos - SP, 11060-000",
  mapsQuery: "Avenida Anna Costa, 100, Vila Mathias, Santos - SP",
};

export function telLink() {
  return `tel:${CONTACT.phoneTel}`;
}

export function waLink(
  message = "Olá, Sylvia! Gostaria de agendar uma conversa sobre o meu caso."
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
