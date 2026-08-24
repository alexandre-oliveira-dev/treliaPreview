import { renderShareImage, size, contentType } from "@/lib/og-image";

export const alt =
  "Sylvia Oliveira Advogados — Direito de Família e Cível em Santos/SP";
export { size, contentType };

export default function Image() {
  return renderShareImage();
}
