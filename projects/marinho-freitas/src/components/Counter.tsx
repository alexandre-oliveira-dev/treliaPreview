"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <motion.span className="font-serif-display text-3xl text-ink">
      <span ref={ref}>0</span>
      {suffix}
    </motion.span>
  );
}
