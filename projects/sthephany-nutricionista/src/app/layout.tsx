import type { Metadata, Viewport } from "next";
import { Newsreader, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://sthephany-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sthephany | Nutricionista em Curitiba - Emagrecimento Feminino",
    template: "%s | Nutricionista Sthephany",
  },
  description:
    "Nutricionista em Curitiba especialista em emagrecimento feminino, saúde da mulher, longevidade e performance. Atendimento presencial e online. Agende pelo WhatsApp.",
  keywords: [
    "nutricionista Curitiba",
    "nutricionista emagrecimento feminino",
    "nutricionista Santa Quitéria Curitiba",
    "Sthephany nutricionista",
    "acompanhamento nutricional online",
  ],
  authors: [{ name: "Nutricionista Sthephany" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sthephany | Nutricionista em Curitiba - Emagrecimento Feminino",
    description:
      "Acompanhamento nutricional para mulheres focado em emagrecimento, saúde, longevidade e performance. Presencial em Curitiba ou online.",
    url: SITE_URL,
    siteName: "Nutricionista Sthephany",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sthephany | Nutricionista em Curitiba - Emagrecimento Feminino",
    description:
      "Acompanhamento nutricional para mulheres focado em emagrecimento, saúde, longevidade e performance. Presencial em Curitiba ou online.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f0e4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${workSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-espresso">
        {children}
      </body>
    </html>
  );
}
