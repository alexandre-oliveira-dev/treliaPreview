import type { Metadata, Viewport } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://dra-marianina-munoz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Marianina Muñoz | Odontologia 24h em Curitiba",
    template: "%s | Dra. Marianina Muñoz",
  },
  description:
    "Consultório odontológico da Dra. Marianina Muñoz no Capão Raso, Curitiba - PR. 23 anos de experiência, todas as especialidades e emergência odontológica 24 horas. Agende pelo WhatsApp.",
  keywords: [
    "dentista Curitiba",
    "Marianina Muñoz",
    "odontologia Capão Raso",
    "emergência odontológica 24 horas Curitiba",
    "clínica odontológica Curitiba PR",
  ],
  authors: [{ name: "Dra. Marianina Muñoz" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Marianina Muñoz | Odontologia 24h em Curitiba",
    description:
      "23 anos de experiência, todas as especialidades em um só lugar e emergência odontológica 24h no Capão Raso, Curitiba - PR.",
    url: SITE_URL,
    siteName: "Dra. Marianina Muñoz",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Marianina Muñoz | Odontologia 24h em Curitiba",
    description:
      "23 anos de experiência, todas as especialidades em um só lugar e emergência odontológica 24h no Capão Raso, Curitiba - PR.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf6f0] text-[#1b1712]">
        {children}
      </body>
    </html>
  );
}
