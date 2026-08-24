import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartodonto.com.br";
const TITLE = "Smartodonto | A sua clínica odontológica em Goiânia";
const DESCRIPTION =
  "Smartodonto: implantes, ortodontia, clínico geral, próteses, canal, limpeza e facetas em Goiânia. Agende sua avaliação pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Smartodonto",
  },
  description: DESCRIPTION,
  keywords: [
    "dentista Goiânia",
    "clínica odontológica Goiânia",
    "implante dentário Goiânia",
    "ortodontia Goiânia",
    "Smartodonto",
  ],
  authors: [{ name: "Smartodonto" }],
  applicationName: "Smartodonto",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Smartodonto",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#16232f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
