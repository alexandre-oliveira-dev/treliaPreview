export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Dra. Gabriela Fordelone"
    >
      <path
        d="M20 2C29 1 37 9 38 19c1 10-6 19-16 19S1 30 2 19C3 9 11 3 20 2Z"
        fill="var(--flamingo)"
      />
      <text
        x="50%"
        y="57%"
        textAnchor="middle"
        fontFamily="var(--font-instrument), serif"
        fontStyle="italic"
        fontSize="20"
        fill="var(--cloud)"
      >
        Gf
      </text>
    </svg>
  );
}
