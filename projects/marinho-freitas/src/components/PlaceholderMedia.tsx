"use client";

import { motion } from "motion/react";

export function PlaceholderMedia({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-ink ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-bronze-soft) 0px, var(--color-bronze-soft) 1px, transparent 1px, transparent 14px)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
      />
      <p className="relative px-6 text-center text-xs uppercase tracking-[0.2em] text-paper/50">
        {label}
        <br />
        <span className="text-paper/30">Foto profissional a inserir</span>
      </p>
    </div>
  );
}
