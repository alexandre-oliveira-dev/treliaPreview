// Direção visual: advocacia bancária/defesa do consumidor — grafite-obsidiana
// fria (não bordô, não navy, não marrom) com acento latão/dourado (extraído do
// monograma real "EV") e petróleo escuro como cor de apoio, evocando um
// "dossiê financeiro". Tipografia Cormorant Garamond (display editorial) +
// IBM Plex Sans (corpo, mood bancário/confiável). Assinatura visual: hero com
// corte diagonal e seção de serviços em formato de dossiê numerado com trilho
// vertical dourado — evita a paleta bordô+dourado da DraFlaviaSouza, o
// wine+olive/grid de referências da sylvia-oliveira-advogados e o
// navy+Fraunces da marinho-freitas.
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.emanuelynvasconcelos.adv.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Emanuelyn Vasconcelos Advogados | Direito Bancário e Defesa do Consumidor",
    template: "%s | Emanuelyn Vasconcelos Advogados",
  },
  description:
    "Escritório especializado em Direito Bancário e Defesa do Consumidor. Revisão de contratos, contestação de juros abusivos, exclusão do nome do SPC/Serasa e defesa em golpes bancários. Atuação em todo o Brasil.",
  keywords: [
    "advogada direito bancário",
    "revisão de contrato bancário",
    "juros abusivos",
    "negativação indevida SPC Serasa",
    "golpe bancário advogada",
    "Emanuelyn Vasconcelos Advogados",
    "advogada Santos SP",
  ],
  authors: [{ name: "Emanuelyn Vasconcelos Advogados" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Emanuelyn Vasconcelos Advogados",
    title:
      "Emanuelyn Vasconcelos Advogados | Direito Bancário e Defesa do Consumidor",
    description:
      "Defesa estratégica contra práticas abusivas de instituições financeiras, com atuação em todo o Brasil.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emanuelyn Vasconcelos Advogados | Direito Bancário e Defesa do Consumidor",
    description:
      "Defesa estratégica contra práticas abusivas de instituições financeiras, com atuação em todo o Brasil.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${plexSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
