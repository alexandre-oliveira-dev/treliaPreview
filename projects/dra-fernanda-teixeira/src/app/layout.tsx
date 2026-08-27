import type { Metadata } from "next";
import { Petrona, Public_Sans } from "next/font/google";
import { CONTACT } from "@/lib/contact";
import "./globals.css";

// Direção visual: ver AGENTS.md — paleta marfim/mármore quente + verde-sálvia
// como único acento, Petrona + Public Sans, assinatura em traço orgânico de
// folha/gota (divisor de seção).

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const title = `${CONTACT.displayName} | Cirurgiã-Dentista em Barretos-SP`;
const description =
  "Consultório odontológico da Dra. Fernanda Teixeira, no bairro Fortaleza, em Barretos-SP. Atendimento cuidadoso e individualizado, em ambiente clean e acolhedor.";

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: CONTACT.siteUrl,
    siteName: CONTACT.displayName,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${petrona.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
