"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "@/lib/contact";

export function Credentials() {
  return (
    <section className="bg-blush-soft px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-display text-3xl italic text-ink sm:text-4xl"
        >
          Trajetória e formação
        </motion.h2>
        <ol className="relative border-l border-border pl-8">
          {CREDENTIALS.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[35px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-wine ring-4 ring-blush-soft" />
              <h3 className="font-display text-xl italic text-ink">
                {item.title}
              </h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-ink-muted">
                {item.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
