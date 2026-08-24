export function Butterfly({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* upper wings */}
      <path
        d="M60 38 C52 18 32 8 18 12 C6 15 2 30 10 40 C18 50 42 50 60 38 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M60 38 C68 18 88 8 102 12 C114 15 118 30 110 40 C102 50 78 50 60 38 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* lower wings */}
      <path
        d="M60 42 C54 46 40 54 34 66 C29 76 34 84 44 82 C52 80 58 62 60 48 Z"
        fill="currentColor"
        opacity="0.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M60 42 C66 46 80 54 86 66 C91 76 86 84 76 82 C68 80 62 62 60 48 Z"
        fill="currentColor"
        opacity="0.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* body */}
      <path
        d="M60 20 C63 20 65 23 65 27 C65 40 62 60 60 78 C58 60 55 40 55 27 C55 23 57 20 60 20 Z"
        fill="currentColor"
      />
      {/* antennae */}
      <path
        d="M59 21 C56 15 52 12 48 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M61 21 C64 15 68 12 72 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  markClassName = "",
  size = "md",
}: {
  className?: string;
  markClassName?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: { butterfly: "h-6 w-8", script: "text-lg", caps: "text-[9px]" },
    md: { butterfly: "h-9 w-12", script: "text-3xl", caps: "text-xs" },
    lg: { butterfly: "h-12 w-16", script: "text-4xl", caps: "text-sm" },
  }[size];

  return (
    <div
      className={`flex flex-col items-center px-6 text-center ${className}`}
    >
      <Butterfly className={`${dims.butterfly} ${markClassName}`} />
      <span className={`script-mark mt-2 ${dims.script} leading-tight`}>
        Bianca Benatti
      </span>
      <span
        className={`mt-1 ${dims.caps} font-display uppercase tracking-[0.35em]`}
      >
        Depilação
      </span>
    </div>
  );
}
