"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { DIFFERENTIALS } from "@/lib/constants";

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/fachada.jpeg"
              alt="Fachada da clínica Smartodonto"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-6 -right-4 sm:right-4 rounded-2xl bg-brand-orange px-6 py-5 text-white shadow-xl"
          >
            <p className="text-3xl font-extrabold leading-none">+1000</p>
            <p className="text-xs font-semibold mt-1 opacity-90">
              sorrisos transformados
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Por que a Smartodonto
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Cuidado de verdade, do jeito que você merece
          </h2>

          <div className="mt-10 space-y-6">
            {DIFFERENTIALS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange-light text-brand-orange">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">{d.title}</h3>
                  <p className="text-sm text-brand-navy/60 mt-1">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
