type FacetDividerProps = {
  from: string;
  to: string;
  flip?: boolean;
};

/**
 * Divisor facetado (fratura irregular), variação em linha do motivo de
 * assinatura FacetField — separa seções em vez de uma régua reta.
 */
export function FacetDivider({ from, to, flip = false }: FacetDividerProps) {
  return (
    <div
      className="relative h-10 sm:h-14 w-full overflow-hidden"
      style={{ backgroundColor: from, transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <polygon
          points="0,40 0,18 40,26 90,10 150,30 210,6 270,24 330,4 400,20 400,40"
          fill={to}
        />
      </svg>
    </div>
  );
}
