import clsx from "clsx";

type BlobProps = {
  className?: string;
  color?: "flamingo" | "periwinkle" | "butter";
  reverse?: boolean;
  slow?: boolean;
};

const COLOR_MAP = {
  flamingo: "bg-flamingo-light/50",
  periwinkle: "bg-periwinkle/70",
  butter: "bg-butter/70",
};

export function Blob({ className, color = "periwinkle", reverse, slow }: BlobProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "blob absolute -z-10 blur-2xl",
        COLOR_MAP[color],
        reverse && "blob-reverse",
        slow && "blob-slow",
        className
      )}
    />
  );
}

/* SVG clipPath used to mask photos into the signature organic shape
   instead of a rounded rectangle. Rendered once, referenced by class
   `.portrait-blob` wherever a photo needs the treatment. */
export function BlobClipDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <clipPath id="gf-blob-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.02 C0.66,0.02 0.82,0.09 0.9,0.24 C0.98,0.39 0.97,0.58 0.88,0.72 C0.79,0.86 0.62,0.95 0.46,0.96 C0.3,0.97 0.13,0.91 0.06,0.76 C0.0,0.61 0.02,0.42 0.12,0.28 C0.22,0.14 0.34,0.02 0.5,0.02 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
