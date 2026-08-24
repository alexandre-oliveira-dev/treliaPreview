// Direção visual: advocacia de família/cível com registro de "dossiê afetivo" —
// papel esverdeado-acinzentado, tinta ameixa-carvão, acento vinho, verde-oliva.
// Tipografia Spectral (display serifado editorial) + Work Sans (corpo) +
// IBM Plex Mono (referências tipo "Ref. 01/03"). Assinatura: traço de tinta
// desenhado à mão sob palavras-chave. Evita paleta/fontes já usadas em
// marinho-freitas (navy+serif) e DraLeticiaGomes (Fraunces/teal-terracota).
import type { Metadata, Viewport } from "next";
import { Spectral, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://www.sylviaoliveira.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sylvia Oliveira Advogados | Direito de Família e Cível em Santos",
    template: "%s | Sylvia Oliveira Advogados",
  },
  description:
    "Escritório de advocacia em Santos/SP, atuando em Direito de Família e Sucessões e Direito Civil. Divórcio, guarda, inventário e partilha com atendimento próximo e atencioso.",
  keywords: [
    "advogada Santos",
    "advogada de família Santos",
    "advogada inventário Santos",
    "advogada divórcio Santos",
    "direito civil Santos",
    "Sylvia Oliveira Advogados",
  ],
  authors: [{ name: "Sylvia Oliveira Advogados" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Sylvia Oliveira Advogados",
    title: "Sylvia Oliveira Advogados | Direito de Família e Cível em Santos",
    description:
      "Atendimento atencioso e solucionador em Direito de Família e Sucessões e Direito Civil, em Santos/SP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvia Oliveira Advogados | Direito de Família e Cível em Santos",
    description:
      "Atendimento atencioso e solucionador em Direito de Família e Sucessões e Direito Civil, em Santos/SP.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a2130",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spectral.variable} ${workSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
