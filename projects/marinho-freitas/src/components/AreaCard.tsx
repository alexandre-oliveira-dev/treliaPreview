import Link from "next/link";
import { Area } from "@/lib/site";

export function AreaCard({ area, index }: { area: Area; index: number }) {
  return (
    <Link
      href={`/areas-de-atuacao/${area.slug}`}
      className="group relative flex flex-col justify-between border border-line bg-paper p-8 transition-colors duration-200 hover:border-bronze"
    >
      <div>
        <span className="font-serif-display text-sm text-bronze">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-4 font-serif-display text-xl text-ink">{area.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-body/70">{area.description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-bronze">
        Conhecer a área
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
