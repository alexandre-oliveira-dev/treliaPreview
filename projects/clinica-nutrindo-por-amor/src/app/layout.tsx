/**
 * Direção visual — Clínica Nutrindo por Amor
 *
 * Paleta: creme pêssego (#FFF3E6) + tinta marrom-quente (#33201A) + um único
 * acento tangerina (#FF7A45), com uma faixa escura em verde-floresta
 * (#2E4B3C) para as seções de "cuidado integrado". Sem azul corporativo.
 *
 * Tipografia: Baloo 2 (display arredondada e acolhedora) + Figtree (corpo)
 * + Caveat (anotações manuscritas, tipo bilhete de mãe/nutri) — sem serifada,
 * de propósito, para fugir do par serifada+creme já usado nos outros
 * projetos da pasta.
 *
 * Layout: hero assimétrico com foto emoldurada em blob orgânico; seção de
 * especialidades em cartões "ficha" espalhados (eco das fichas de alimentos
 * e páginas de colorir reais da clínica); faixa escura para o time
 * (psicologia + nutrição); cartões de time em estilo fichário com aba
 * colorida por área.
 *
 * Assinatura: selos/etiquetas de papel rasgado com texto manuscrito
 * (Caveat), girados, citando literalmente as fichas de alimentação
 * ilustradas usadas pela clínica de verdade.
 */
import type { Metadata, Viewport } from "next";
import { Baloo_2, Figtree, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_URL } from "@/lib/constants";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nutrindo por Amor | Nutrição e Psicologia Infantil em Curitiba",
    template: "%s | Nutrindo por Amor",
  },
  description:
    "Clínica de nutrição e psicologia infantil em Curitiba. Introdução alimentar, seletividade, obesidade infantil e terapia alimentar, com cuidado integrado para a criança e a família.",
  keywords: [
    "nutricionista infantil Curitiba",
    "seletividade alimentar",
    "psicóloga infantil Curitiba",
    "obesidade infantil",
    "introdução alimentar",
    "terapia alimentar infantil",
  ],
  authors: [{ name: "Nutrindo por Amor" }],
  openGraph: {
    title: "Nutrindo por Amor | Nutrição e Psicologia Infantil em Curitiba",
    description:
      "Cuidado integrado para crianças e famílias: introdução alimentar, seletividade, obesidade infantil e terapia alimentar.",
    url: SITE_URL,
    siteName: "Nutrindo por Amor",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrindo por Amor | Nutrição e Psicologia Infantil em Curitiba",
    description:
      "Cuidado integrado para crianças e famílias: introdução alimentar, seletividade, obesidade infantil e terapia alimentar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fff3e6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${baloo.variable} ${figtree.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
