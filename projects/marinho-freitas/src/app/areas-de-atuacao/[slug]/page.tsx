import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { areas, partners } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.name,
    description: area.description,
    alternates: { canonical: `/areas-de-atuacao/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <Link
              href="/areas-de-atuacao"
              className="text-xs font-medium uppercase tracking-widest text-bronze hover:text-ink"
            >
              ← Áreas de Atuação
            </Link>
            <h1 className="mt-4 font-serif-display text-3xl leading-tight text-ink md:text-4xl">
              {area.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body/80">
              {area.description}
            </p>
            <div className="mt-8">
              <WhatsAppCTA message={area.whatsappMessage} context={`area_${area.slug}_hero`}>
                Falar sobre {area.shortName}
              </WhatsAppCTA>
            </div>
          </div>
          <PlaceholderMedia label={area.name} className="aspect-[4/3] w-full" />
        </Container>
      </section>

      <section className="border-b border-line bg-paper-alt/60 py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Situações comuns" title="Quando procurar essa área" />
            <ul className="mt-8 space-y-4">
              {area.situations.map((situation) => (
                <li key={situation} className="flex gap-3 border-b border-line pb-4 text-sm text-body/80">
                  <span className="text-bronze">—</span>
                  {situation}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Nossa abordagem" title="Como conduzimos o seu caso" />
            <p className="mt-8 text-sm leading-relaxed text-body/80">{area.approach}</p>
            <div className="mt-10 border border-line bg-paper p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-bronze">
                Profissionais responsáveis
              </p>
              <p className="mt-3 text-sm text-body/80">
                {partners.map((p) => p.name).join(" e ")}, sócias-fundadoras do escritório.
              </p>
              <Link href="/socias" className="mt-4 inline-block text-sm font-medium text-ink hover:text-bronze">
                Conhecer as sócias →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 md:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-serif-display text-2xl leading-tight text-ink md:text-3xl">
            Fale agora com o escritório sobre a sua situação em {area.shortName.toLowerCase()}
          </h2>
          <WhatsAppCTA message={area.whatsappMessage} context={`area_${area.slug}_footer`}>
            Falar com Advogado Online
          </WhatsAppCTA>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs font-medium uppercase tracking-widest text-bronze">
            Outras áreas de atuação
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/areas-de-atuacao/${other.slug}`}
                className="rounded-full border border-line px-5 py-2 text-sm text-ink-soft transition-colors hover:border-bronze hover:text-bronze"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
