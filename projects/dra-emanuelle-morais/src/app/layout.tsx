import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const SITE_URL = "https://dra-emanuelle-morais.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Emanuelle Morais | Cirurgiã-Dentista em Santos, SP",
    template: "%s | Dra. Emanuelle Morais",
  },
  description:
    "Consultório odontológico da Dra. Emanuelle Morais no Boqueirão, Santos - SP. Atendimento humanizado, estética dental e clínica geral. Agende sua consulta pelo WhatsApp.",
  keywords: [
    "dentista Santos",
    "Emanuelle Morais",
    "odontologia Boqueirão",
    "clínica odontológica Santos SP",
    "cirurgiã-dentista Santos",
  ],
  authors: [{ name: "Dra. Emanuelle Morais" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Emanuelle Morais | Cirurgiã-Dentista em Santos",
    description:
      "Atendimento odontológico humanizado no Boqueirão, Santos - SP. Agende sua consulta pelo WhatsApp.",
    url: SITE_URL,
    siteName: "Dra. Emanuelle Morais",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Emanuelle Morais | Cirurgiã-Dentista em Santos",
    description:
      "Atendimento odontológico humanizado no Boqueirão, Santos - SP. Agende sua consulta pelo WhatsApp.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf8f0] text-[#1a3733]">
        {children}
      </body>
    </html>
  );
}
