import { renderShareImage, size, contentType } from "@/lib/og-image";

export const alt =
  "Letícia Gomes Advocacia — Direito de Família e Sucessões em Santos/SP";
export { size, contentType };

export default async function Image() {
  return renderShareImage();
}
