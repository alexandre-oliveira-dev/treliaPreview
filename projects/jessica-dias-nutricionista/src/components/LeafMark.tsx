type LeafMarkProps = {
  className?: string;
  size?: number;
};

/**
 * Marca autoral em forma de gota-folha, referência direta ao logotipo "j'"
 * real da cliente (folha verde-oliva com ponta mostarda). Reaproveitada como
 * bullet, divisor e selo ao longo do site.
 */
export function LeafMark({ className, size = 20 }: LeafMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 20C4 11.1634 11.1634 4 20 4C20 12.8366 12.8366 20 4 20Z"
        fill="currentColor"
      />
      <path
        d="M6 18C11 13 15 9 19 5"
        stroke="var(--sand)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
