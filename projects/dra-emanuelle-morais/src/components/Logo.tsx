type LogoProps = {
  className?: string;
};

/**
 * Monogram mark echoing the site's coastline motif (WaveDivider / vertical
 * spine labels) — kept as inline SVG so it scales crisply in the header.
 */
export default function Logo({ className = "h-9 w-9" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Emanuelle Morais"
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="var(--paper)"
        stroke="var(--ink-900)"
        strokeWidth="1.1"
      />
      <text
        x="19"
        y="20"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-bodoni), Georgia, serif"
        fontStyle="italic"
        fontSize="18"
        fill="var(--ink-950)"
      >
        E
      </text>
      <path
        d="M7 28c3-3.5 6 3.5 9.5 0s6.5-3.5 10-0s5.5 3.2 7 1.6"
        fill="none"
        stroke="var(--coral)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
