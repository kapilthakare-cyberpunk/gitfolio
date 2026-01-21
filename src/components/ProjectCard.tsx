"use client";

import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-colors hover:border-neutral-700 hover:bg-neutral-900/80"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-500">
            <Folder size={20} />
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-cyan-400 transition-colors"
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300 border border-neutral-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
