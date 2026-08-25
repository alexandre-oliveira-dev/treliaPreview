import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://odontologia-rivera.vercel.app";
const TITLE = "Odontologia Rivera | Dra. Jessica Rivera de Melo em Curitiba";
const DESCRIPTION =
  "Consultório odontológico da Dra. Jessica Rivera de Melo (CRO/PR 25.539) no Xaxim, Curitiba - PR. Endodontia, estética dental, clínica geral e mais. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Odontologia Rivera",
  },
  description: DESCRIPTION,
  keywords: [
    "dentista Curitiba",
    "dentista Xaxim",
    "Odontologia Rivera",
    "Jessica Rivera de Melo",
    "endodontia Curitiba",
    "clínica odontológica Xaxim",
  ],
  authors: [{ name: "Dra. Jessica Rivera de Melo" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description:
      "Endodontia, estética dental e clínica geral com atendimento humanizado no Xaxim, Curitiba - PR. Agende sua consulta pelo WhatsApp.",
    url: SITE_URL,
    siteName: "Odontologia Rivera",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Endodontia, estética dental e clínica geral com atendimento humanizado no Xaxim, Curitiba - PR.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf3ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf3ea] text-[#241d16]">
        {children}
      </body>
    </html>
  );
}
