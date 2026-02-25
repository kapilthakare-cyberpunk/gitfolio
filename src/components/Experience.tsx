"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/projects";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-neutral-800 flex-1" />
          <h2 className="text-2xl font-bold text-neutral-200">Experience</h2>
          <div className="h-px bg-neutral-800 flex-1" />
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-neutral-800 hover:border-cyan-500/50 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-800 border-2 border-neutral-600 group-hover:border-cyan-400" />
              
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Briefcase size={18} />
                      <h3 className="text-xl font-bold text-neutral-100">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 mb-2">
                      <Building2 size={16} />
                      <span className="text-neutral-300">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
