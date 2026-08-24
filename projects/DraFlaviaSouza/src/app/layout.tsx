import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://flaviasouzaadvocacia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Flávia Souza Advocacia | Direito do Trabalho e Família",
    template: "%s | Flávia Souza Advocacia",
  },
  description:
    "Advocacia especializada em Direito do Trabalho e Direito de Família na Penha, São Paulo. Atendimento humanizado, convênio com a Defensoria Pública e OAB. Agende sua consulta.",
  keywords: [
    "advocacia trabalhista",
    "advogada direito de família",
    "advogada Penha São Paulo",
    "divórcio",
    "pensão alimentícia",
    "guarda de filhos",
    "rescisão trabalhista",
    "Defensoria Pública convênio OAB",
    "Flávia Souza advocacia",
  ],
  authors: [{ name: "Flávia Souza Advocacia" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Flávia Souza Advocacia",
    title: "Flávia Souza Advocacia | Direito do Trabalho e Família",
    description:
      "Transformamos conflitos em soluções jurídicas. Direito do Trabalho e Família, atendimento humanizado na Penha, São Paulo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flávia Souza Advocacia - Direito do Trabalho e Família",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flávia Souza Advocacia | Direito do Trabalho e Família",
    description:
      "Transformamos conflitos em soluções jurídicas. Atendimento humanizado na Penha, São Paulo.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e0f17",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bordo-950 text-cream">
        {children}
      </body>
    </html>
  );
}
