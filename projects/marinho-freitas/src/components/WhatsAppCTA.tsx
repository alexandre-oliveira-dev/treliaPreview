"use client";

import { trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

export function WhatsAppCTA({
  message,
  context,
  children,
  variant = "primary",
  className = "",
}: {
  message: string;
  context: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";
  const styles = {
    primary: "bg-ink text-paper hover:bg-ink-soft",
    secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
    ghost: "text-ink underline underline-offset-4 decoration-bronze hover:text-bronze",
  };

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { context })}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
