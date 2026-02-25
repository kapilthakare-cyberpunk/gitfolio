"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <Stats />

      {/* Projects Section with Filter */}
      <section id="projects" className="py-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-neutral-800 flex-1" />
          <h2 className="text-2xl font-bold text-neutral-200">Featured Projects</h2>
          <div className="h-px bg-neutral-800 flex-1" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-cyan-500 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </section>

      <Skills />

      <Experience />

      <footer className="py-12 text-center text-sm text-neutral-500 border-t border-neutral-800 mt-20">
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Kapil Thakare. All rights reserved.</p>
      </footer>
    </div>
  );
}