"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function RealPhoto({
  src,
  alt,
  className = "",
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden bg-ink ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-paper/80">{caption}</p>
        </div>
      )}
    </motion.div>
  );
}
