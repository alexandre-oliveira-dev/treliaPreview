"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Signature mark: a single hand-drawn ink stroke under an emphasized word,
 * drawn on scroll — reads as underlining the important line in a document.
 */
export default function InkUnderline({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`ink-underline ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
      <svg viewBox="0 0 340 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 16 C 70 22, 130 6, 170 12 S 280 20, 336 9" />
      </svg>
    </span>
  );
}
