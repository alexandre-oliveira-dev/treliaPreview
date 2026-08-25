import type { Metadata, Viewport } from "next";
import { Cormorant, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://dra-alessandra-todesco.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Alessandra Todesco | Ortodontia e Endodontia em Sorocaba",
    template: "%s | Dra. Alessandra Todesco",
  },
  description:
    "Consultório da Dra. Alessandra Vaz Todesco na Jardim Vergueiro, Sorocaba - SP. Especialista em Endodontia e pós-graduada em Ortodontia, com atendimento acolhedor. Agende pelo WhatsApp.",
  keywords: [
    "dentista Sorocaba",
    "endodontia Sorocaba",
    "tratamento de canal Sorocaba",
    "ortodontia Sorocaba",
    "Alessandra Todesco",
    "aparelho dental Sorocaba",
  ],
  authors: [{ name: "Dra. Alessandra Vaz Todesco" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Alessandra Todesco | Ortodontia e Endodontia em Sorocaba",
    description:
      "Atendimento humano e especializado em Endodontia e Ortodontia, na Jardim Vergueiro, Sorocaba - SP.",
    url: SITE_URL,
    siteName: "Dra. Alessandra Todesco",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Alessandra Todesco | Ortodontia e Endodontia em Sorocaba",
    description:
      "Atendimento humano e especializado em Endodontia e Ortodontia, na Jardim Vergueiro, Sorocaba - SP.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf3f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-blush text-ink">
        {children}
      </body>
    </html>
  );
}
