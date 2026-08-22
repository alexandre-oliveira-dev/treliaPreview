import Link from "next/link";
import { Container } from "./Container";
import { areas, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper/80">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif-display text-xl text-paper">
            Marinho <span className="text-bronze-soft">&</span> Freitas
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            {site.positioning}
          </p>
          <p className="mt-6 text-sm text-paper/60">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
            Áreas de Atuação
          </p>
          <ul className="mt-4 space-y-2">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas-de-atuacao/${area.slug}`}
                  className="text-sm text-paper/70 hover:text-bronze-soft"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
            Escritório
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/sobre" className="text-sm text-paper/70 hover:text-bronze-soft">
                Sobre o escritório
              </Link>
            </li>
            <li>
              <Link href="/socias" className="text-sm text-paper/70 hover:text-bronze-soft">
                Sócias
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-sm text-paper/70 hover:text-bronze-soft">
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-privacidade"
                className="text-sm text-paper/70 hover:text-bronze-soft"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-paper/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <p>{site.domain}</p>
        </Container>
      </div>
    </footer>
  );
}
