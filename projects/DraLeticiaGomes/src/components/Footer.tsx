import Monogram from "@/components/Monogram";

export default function Footer() {
  return (
    <footer className="bg-paper py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-xs text-ink-800/60 md:px-8">
        <Monogram className="h-6 w-6 text-clay" />
        <p>
          Letícia Gomes Advocacia de Família e Sucessões — CNPJ
          59.072.155/0001-86 © Todos os direitos reservados.
        </p>
        <p className="max-w-xl">
          Este site não faz parte do Google LLC nem do Facebook Inc. e não
          oferecemos nenhum tipo de serviço oficial do governo. Trabalhamos
          exclusivamente com serviços jurídicos.
        </p>
      </div>
    </footer>
  );
}
