import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section id="projects" className="py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-neutral-800 flex-1" />
          <h2 className="text-2xl font-bold text-neutral-200">Featured Projects</h2>
          <div className="h-px bg-neutral-800 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-neutral-500">
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Kapil Thakare. All rights reserved.</p>
      </footer>
    </div>
  );
}