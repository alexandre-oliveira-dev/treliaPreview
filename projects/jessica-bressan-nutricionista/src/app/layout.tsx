import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_URL = "https://jessica-bressan-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jéssica Bressan | Nutricionista em Curitiba - Emagrecimento Feminino",
    template: "%s | Nutricionista Jéssica Bressan",
  },
  description:
    "Nutricionista em Curitiba (Juvevê) especialista em emagrecimento feminino e saúde da mulher. Criadora do método Eu+Magra, com mais de 1500 alunas. Agende pelo WhatsApp.",
  keywords: [
    "nutricionista Curitiba",
    "nutricionista Juvevê",
    "nutricionista emagrecimento feminino",
    "Jéssica Bressan nutricionista",
    "método Eu+Magra",
    "acompanhamento nutricional online",
  ],
  authors: [{ name: "Nutricionista Jéssica Bressan" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jéssica Bressan | Nutricionista em Curitiba - Emagrecimento Feminino",
    description:
      "Emagrecimento sem firula, comendo de tudo. Método Eu+Magra com mais de 1500 alunas. Atendimento em Curitiba (Juvevê) e online.",
    url: SITE_URL,
    siteName: "Nutricionista Jéssica Bressan",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jéssica Bressan | Nutricionista em Curitiba - Emagrecimento Feminino",
    description:
      "Emagrecimento sem firula, comendo de tudo. Método Eu+Magra com mais de 1500 alunas. Atendimento em Curitiba (Juvevê) e online.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#17150f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${archivoBlack.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
