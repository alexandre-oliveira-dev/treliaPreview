import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://leticiagomes.adv.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Letícia Gomes Advocacia | Direito de Família e Sucessões em Santos",
    template: "%s | Letícia Gomes Advocacia",
  },
  description:
    "Advocacia especializada em Direito de Família e Sucessões em Santos/SP. Divórcio, guarda, pensão alimentícia e inventário com atendimento próximo e humanizado. Agende pelo WhatsApp.",
  keywords: [
    "advogada de família Santos",
    "advogada divórcio Santos",
    "pensão alimentícia advogada",
    "guarda de filhos advogada",
    "inventário advogada Santos",
    "Letícia Gomes advocacia",
  ],
  authors: [{ name: "Letícia Gomes Advocacia" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Letícia Gomes Advocacia",
    title: "Letícia Gomes Advocacia | Direito de Família e Sucessões em Santos",
    description:
      "Proteja o seu patrimônio, sua família e seus direitos. Atendimento presencial em Santos/SP ou online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Letícia Gomes Advocacia | Direito de Família e Sucessões em Santos",
    description:
      "Proteja o seu patrimônio, sua família e seus direitos. Atendimento presencial em Santos/SP ou online.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1b1d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
