type WaveDividerProps = {
  fill: string;
  flip?: boolean;
  className?: string;
};

/**
 * Signature motif: the Santos coastline horizon line, reused (in different
 * colors/orientations) between sections instead of hard edges/cards.
 */
export default function WaveDivider({
  fill,
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`wave-divider ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,64 C240,110 360,10 600,40 C840,70 960,116 1200,72 C1320,50 1380,42 1440,48 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
