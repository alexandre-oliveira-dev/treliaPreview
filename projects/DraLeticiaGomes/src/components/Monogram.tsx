export default function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 18 V90 H70"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
      />
      <path
        d="M98 34 V60 A32 32 0 1 1 66 28 H86"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
