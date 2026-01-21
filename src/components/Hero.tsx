"use client";

import { motion } from "framer-motion";
import { bio, socialLinks } from "@/data/projects";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-cyan-400 font-medium tracking-tight mb-4 block">
          Hi, my name is
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          {bio.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-400 mb-8">
          {bio.tagline}
        </h2>
        <p className="max-w-xl text-lg text-neutral-400 leading-relaxed mb-12">
          {bio.about}
        </p>

        <div className="flex gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href={socialLinks.email}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
