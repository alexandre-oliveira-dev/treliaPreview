import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Sora } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: "400",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const SITE_URL = "https://dra-gabriela-fordelone.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Gabriela Fordelone | Cirurgiã-Dentista em Santos, SP",
    template: "%s | Dra. Gabriela Fordelone",
  },
  description:
    "Consultório odontológico da Dra. Gabriela Fordelone na Vila Belmiro, Santos - SP. Atendimento leve, acolhedor e moderno. Agende sua consulta pelo WhatsApp.",
  keywords: [
    "dentista Santos",
    "Gabriela Fordelone",
    "odontologia Vila Belmiro",
    "clínica odontológica Santos SP",
    "cirurgiã-dentista Santos",
  ],
  authors: [{ name: "Dra. Gabriela Fordelone" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Gabriela Fordelone | Cirurgiã-Dentista em Santos",
    description:
      "Atendimento odontológico leve e acolhedor na Vila Belmiro, Santos - SP. Agende sua consulta pelo WhatsApp.",
    url: SITE_URL,
    siteName: "Dra. Gabriela Fordelone",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Gabriela Fordelone | Cirurgiã-Dentista em Santos",
    description:
      "Atendimento odontológico leve e acolhedor na Vila Belmiro, Santos - SP. Agende sua consulta pelo WhatsApp.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6fb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${instrument.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f6fb] text-[#241b32]">
        {children}
      </body>
    </html>
  );
}
