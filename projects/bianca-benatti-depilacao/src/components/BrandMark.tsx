import { Butterfly } from "@/components/Logo";

export default function BrandMark({
  size = "md",
}: {
  size?: "sm" | "md";
}) {
  const dims = {
    sm: { butterfly: "h-6 w-7", script: "text-xl", caps: "text-[9px]" },
    md: { butterfly: "h-8 w-9", script: "text-2xl", caps: "text-xs" },
  }[size];

  return (
    <span className="flex items-center gap-2">
      <Butterfly className={`${dims.butterfly} text-gold-dark`} />
      <span className="flex flex-col leading-none">
        <span className={`script-mark ${dims.script} text-gold-dark`}>
          Bianca
        </span>
        <span
          className={`font-display ${dims.caps} uppercase tracking-[0.3em] text-brown-800`}
        >
          Benatti Depilação
        </span>
      </span>
    </span>
  );
}
