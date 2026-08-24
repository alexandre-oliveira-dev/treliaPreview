"use client";

import { motion, type Variants } from "framer-motion";
import {
  Activity,
  Gem,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  implant: Shield,
  braces: Smile,
  stethoscope: Stethoscope,
  shield: Shield,
  smile: Smile,
  activity: Activity,
  sparkles: Sparkles,
  gem: Gem,
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">
            Tratamentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Tudo que o seu sorriso precisa
          </h2>
          <p className="mt-4 text-brand-navy/60">
            Soluções completas em odontologia, do preventivo ao estético, com
            a qualidade que você merece.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-navy/5 transition-shadow hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-bold text-brand-navy text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-brand-navy/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
