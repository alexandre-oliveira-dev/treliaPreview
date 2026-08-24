import { renderShareImage, size, contentType } from "@/lib/og-image";

export const alt =
  "Emanuelyn Vasconcelos Advogados — Direito Bancário e Defesa do Consumidor";
export { size, contentType };

export default function Image() {
  return renderShareImage();
}
