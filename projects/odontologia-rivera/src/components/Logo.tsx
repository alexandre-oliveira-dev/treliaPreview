export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Odontologia Rivera"
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="var(--clay)"
        stroke="var(--clay-dark)"
        strokeWidth="1"
      />
      <circle
        cx="20"
        cy="20"
        r="14.5"
        fill="none"
        stroke="var(--linen)"
        strokeWidth="1"
        strokeDasharray="2.5 3"
        opacity="0.75"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="18"
        fill="var(--linen)"
      >
        R
      </text>
    </svg>
  );
}
