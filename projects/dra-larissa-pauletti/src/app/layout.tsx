import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://dra-larissa-pauletti.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Larissa Pauletti | Especialista em Siso em Sorocaba",
    template: "%s | Dra. Larissa Pauletti",
  },
  description:
    "Consultório da Dra. Larissa Pauletti na Av. Itavuvu, Sorocaba - SP. Especialista em extração de dente do siso, com atendimento individual, tranquilo e acolhedor. Agende pelo WhatsApp.",
  keywords: [
    "dentista Sorocaba",
    "extração de siso Sorocaba",
    "Larissa Pauletti",
    "arrancar dente do siso",
    "clínica odontológica Sorocaba",
  ],
  authors: [{ name: "Dra. Larissa Pauletti" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Larissa Pauletti | Especialista em Siso em Sorocaba",
    description:
      "Atendimento individual e acolhedor, com foco em extração de siso tranquila e segura, na Av. Itavuvu, Sorocaba - SP.",
    url: SITE_URL,
    siteName: "Dra. Larissa Pauletti",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Larissa Pauletti | Especialista em Siso em Sorocaba",
    description:
      "Atendimento individual e acolhedor, com foco em extração de siso tranquila e segura, na Av. Itavuvu, Sorocaba - SP.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-ink-950">
        {children}
      </body>
    </html>
  );
}
