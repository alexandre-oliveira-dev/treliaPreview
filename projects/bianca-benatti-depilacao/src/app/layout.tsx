import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, Playball } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playball = Playball({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://biancabenattidepilacao.com.br";
const TITLE = "Bianca Benatti Depilação | Estúdio de Depilação em Sapopemba";
const DESCRIPTION =
  "Estúdio de depilação a cera em Sapopemba, São Paulo. Depilação facial e corporal com cuidado, técnica e acolhimento. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITLE,
    template: "%s | Bianca Benatti Depilação",
  },
  description: DESCRIPTION,
  keywords: [
    "depilação Sapopemba",
    "depilação a cera São Paulo",
    "estúdio de depilação São Paulo",
    "depilação feminina",
    "depilação buço sobrancelha",
    "Bianca Benatti depilação",
  ],
  authors: [{ name: "Bianca Benatti Depilação" }],
  applicationName: "Bianca Benatti Depilação",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Bianca Benatti Depilação",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf6ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${manrope.variable} ${playball.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-brown-900">
        {children}
      </body>
    </html>
  );
}
