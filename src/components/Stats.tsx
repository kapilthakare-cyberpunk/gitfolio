"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/projects";

export default function Stats() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-neutral-900/80 transition-all"
          >
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
