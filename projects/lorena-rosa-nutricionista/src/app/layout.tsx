import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Urbanist, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://lorena-rosa-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lorena Rosa | Nutrição Clínica & Bariátrica em Belo Horizonte",
    template: "%s | Lorena Rosa Nutricionista",
  },
  description:
    "Nutrição clínica e bariátrica com Lorena Rosa (CRN9 23102) em Belo Horizonte. Emagrecimento comendo o básico, sem dietas malucas. +1200 pacientes atendidos em 7 anos de atuação.",
  keywords: [
    "nutricionista Belo Horizonte",
    "nutricionista Funcionários BH",
    "nutrição bariátrica BH",
    "emagrecimento saudável",
    "Lorena Rosa nutricionista",
    "nutrição clínica",
  ],
  authors: [{ name: "Lorena Rosa" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lorena Rosa | Nutrição Clínica & Bariátrica",
    description:
      "Emagrecer comendo o básico, sem dietas malucas. Nutrição clínica e bariátrica com Lorena Rosa (CRN9 23102) em Belo Horizonte.",
    url: SITE_URL,
    siteName: "Lorena Rosa Nutrição",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorena Rosa | Nutrição Clínica & Bariátrica",
    description:
      "Emagrecer comendo o básico, sem dietas malucas. Nutrição clínica e bariátrica em Belo Horizonte.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#15161a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${urbanist.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ivory">
        {children}
      </body>
    </html>
  );
}
