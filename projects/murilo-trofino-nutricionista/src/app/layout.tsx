import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Murilo Trofino | Nutricionista Esportivo em Curitiba",
  description:
    "Nutricionista esportivo em Curitiba-PR. Estratégia alimentar personalizada, sem dietas restritivas, com acompanhamento contínuo entre consultas. Atendimento presencial e online.",
  keywords: [
    "nutricionista esportivo curitiba",
    "nutricionista curitiba",
    "nutrição esportiva",
    "consulta nutricional online",
    "murilo trofino",
  ],
  authors: [{ name: "Murilo Trofino" }],
  openGraph: {
    title: "Murilo Trofino | Nutricionista Esportivo em Curitiba",
    description:
      "Estratégia alimentar personalizada para quem treina. Sem dietas restritivas, com acompanhamento contínuo. Atendimento presencial em Curitiba-PR e online.",
    url: SITE_URL,
    siteName: "Murilo Trofino Nutricionista",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murilo Trofino | Nutricionista Esportivo em Curitiba",
    description:
      "Estratégia alimentar personalizada para quem treina. Sem dietas restritivas, com acompanhamento contínuo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink">{children}</body>
    </html>
  );
}
