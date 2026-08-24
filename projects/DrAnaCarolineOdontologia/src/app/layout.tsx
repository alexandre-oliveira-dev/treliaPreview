import type { Metadata, Viewport } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const SITE_URL = "https://anacarolinefarias.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Ana Caroline Farias | Cirurgiã-Dentista em Goiânia",
    template: "%s | Dra. Ana Caroline Farias",
  },
  description:
    "Consultório odontológico da Dra. Ana Caroline Farias em Goiânia - GO. Atendimento humanizado, estética dental, clínica geral e muito mais. Agende sua consulta.",
  keywords: [
    "dentista Goiânia",
    "Ana Caroline Farias",
    "odontologia Setor Sul",
    "clínica odontológica Goiânia",
    "cirurgiã-dentista Goiânia",
  ],
  authors: [{ name: "Dra. Ana Caroline Farias" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Ana Caroline Farias | Cirurgiã-Dentista",
    description:
      "Atendimento odontológico humanizado em Goiânia - GO. Agende sua consulta pelo WhatsApp.",
    url: SITE_URL,
    siteName: "Dra. Ana Caroline Farias",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Ana Caroline Farias | Cirurgiã-Dentista",
    description:
      "Atendimento odontológico humanizado em Goiânia - GO. Agende sua consulta pelo WhatsApp.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7e9e3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf3ef] text-[#4a342c]">
        {children}
      </body>
    </html>
  );
}
