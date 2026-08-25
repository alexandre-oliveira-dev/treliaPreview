type ToothFlourishProps = {
  className?: string;
};

export function ToothFlourish({ className }: ToothFlourishProps) {
  return (
    <svg
      viewBox="0 0 220 140"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M78 34c-14-10-34-8-40 6-6 14 2 30 12 40 8 8 10 20 8 32-1 7 8 10 12 4 6-9 8-21 6-31"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M84 30c8-14 26-18 38-10 12 8 14 24 8 38-5 12-4 26 3 36 4 6-3 12-9 8-10-7-16-19-16-31"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M96 108c18 10 40 6 52-8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      <circle cx="150" cy="98" r="2.4" fill="currentColor" />
    </svg>
  );
}
