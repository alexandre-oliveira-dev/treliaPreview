export default function PlateMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      className={`plate-mark-animate ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="30"
        cy="30"
        r="22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 18v14a4 4 0 0 0 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 18c-3 0-5 3-5 7s2 7 5 7v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M68 30h112"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 11"
      />
    </svg>
  );
}
