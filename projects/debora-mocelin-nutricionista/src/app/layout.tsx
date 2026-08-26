import type { Metadata, Viewport } from "next";
import { Anton, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_URL = "https://debora-mocelin-nutricionista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Débora Mocelin | Nutrição Clínica & Metabólica em Curitiba",
    template: "%s | Dra. Débora Mocelin",
  },
  description:
    "Nutrição clínica e metabólica com a Dra. Débora Mocelin, ex-atleta e Campeã Brasileira de Fisiculturismo Natural. Emagrecimento, performance e saúde metabólica no Centro de Curitiba - PR.",
  keywords: [
    "nutricionista Curitiba",
    "nutrição clínica Curitiba",
    "nutrição esportiva Curitiba",
    "emagrecimento Curitiba",
    "Débora Mocelin",
    "nutrição metabólica",
  ],
  authors: [{ name: "Dra. Débora Mocelin" }],
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dra. Débora Mocelin | Nutrição Clínica & Metabólica",
    description:
      "Emagrecimento, performance e saúde metabólica conduzidos por uma ex-atleta Campeã Brasileira de Fisiculturismo Natural. Atendimento no Centro de Curitiba - PR.",
    url: SITE_URL,
    siteName: "Dra. Débora Mocelin Nutrição",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Débora Mocelin | Nutrição Clínica & Metabólica",
    description:
      "Emagrecimento, performance e saúde metabólica conduzidos por uma ex-atleta Campeã Brasileira de Fisiculturismo Natural.",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#241c13",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
