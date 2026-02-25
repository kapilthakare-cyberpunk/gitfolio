"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Layers, Server, Zap, Database, Terminal, Star } from "lucide-react";
import { skills } from "@/data/projects";

const skillIcons: Record<string, React.ReactNode> = {
  "Languages": <Code2 size={20} />,
  "AI & ML": <Brain size={20} />,
  "Frameworks": <Layers size={20} />,
  "MCP Servers": <Server size={20} />,
  "Automation": <Zap size={20} />,
  "Databases": <Database size={20} />,
  "Tools & Platforms": <Terminal size={20} />,
  "Specializations": <Star size={20} />
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-neutral-800 flex-1" />
          <h2 className="text-2xl font-bold text-neutral-200">Skills & Expertise</h2>
          <div className="h-px bg-neutral-800 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-400">
                {skillIcons[skillGroup.category] || <Code2 size={20} />}
                <h3 className="font-semibold text-neutral-200">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300 border border-neutral-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
