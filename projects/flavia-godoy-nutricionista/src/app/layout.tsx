import type { Metadata, Viewport } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://flavia-godoy-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flavia Godoy | Nutricionista Esportiva em Belo Horizonte",
    template: "%s | Flavia Godoy Nutricionista",
  },
  description:
    "Nutrição esportiva com Flavia Godoy em Belo Horizonte. Há 20 anos transformando vidas com performance sustentável, atendimento presencial e online.",
  keywords: [
    "nutricionista esportiva Belo Horizonte",
    "nutricionista Centro BH",
    "performance sustentável",
    "Flavia Godoy nutricionista",
    "nutrição esportiva",
  ],
  authors: [{ name: "Flavia Godoy" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Flavia Godoy | Nutrição Esportiva",
    description:
      "Há 20 anos transformando vidas. Nutrição esportiva com performance sustentável em Belo Horizonte.",
    url: SITE_URL,
    siteName: "Flavia Godoy Nutrição",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavia Godoy | Nutrição Esportiva",
    description:
      "Há 20 anos transformando vidas. Nutrição esportiva com performance sustentável em Belo Horizonte.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2626",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-petrol text-stone">
        {children}
      </body>
    </html>
  );
}
