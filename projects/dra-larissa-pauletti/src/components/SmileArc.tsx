export default function SmileArc({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 48"
      preserveAspectRatio="none"
      className={`smile-arc-divider smile-arc-animate ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 6 C 100 44, 300 44, 396 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
