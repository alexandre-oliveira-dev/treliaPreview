import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, Chivo_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://victor-pimenta-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Victor Pimenta | Nutricionista Esportivo em Belo Horizonte",
    template: "%s | Victor Pimenta Nutricionista",
  },
  description:
    "Nutrição esportiva direta, sem frescura, com Victor Pimenta em Belo Horizonte. Acompanhamento VIP ou SMART, dietas simples para quem treina de verdade.",
  keywords: [
    "nutricionista esportivo Belo Horizonte",
    "nutricionista Santa Efigênia BH",
    "nutrição esportiva",
    "acompanhamento nutricional fitness",
    "Victor Pimenta nutricionista",
    "dieta para hipertrofia BH",
  ],
  authors: [{ name: "Victor Pimenta" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Victor Pimenta | Nutricionista Esportivo",
    description:
      "Dietas simples para pessoas sem frescura. Acompanhamento VIP ou SMART com Victor Pimenta, nutricionista esportivo em Belo Horizonte.",
    url: SITE_URL,
    siteName: "Victor Pimenta Nutrição Esportiva",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Pimenta | Nutricionista Esportivo",
    description:
      "Dietas simples para pessoas sem frescura. Nutrição esportiva em Belo Horizonte.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#17181c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bebas.variable} ${jakarta.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-carbon text-chalk">
        {children}
      </body>
    </html>
  );
}
