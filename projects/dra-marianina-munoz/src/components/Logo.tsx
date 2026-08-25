export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Dra. Marianina Muñoz"
    >
      <rect x="1" y="1" width="38" height="38" rx="4" fill="var(--charcoal-950)" />
      <rect
        x="3.5"
        y="3.5"
        width="33"
        height="33"
        rx="2"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.75"
      />
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), serif"
        fontStyle="italic"
        fontSize="20"
        fill="var(--gold-light)"
      >
        M
      </text>
    </svg>
  );
}
