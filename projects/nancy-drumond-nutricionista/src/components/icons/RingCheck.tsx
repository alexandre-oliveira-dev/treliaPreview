type RingCheckProps = {
  size?: number;
  className?: string;
};

export function RingCheck({ size = 28, className }: RingCheckProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M9 14.2l3.2 3.2L19 10.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
