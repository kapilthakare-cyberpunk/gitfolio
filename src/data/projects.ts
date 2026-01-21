import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-gmail-agent",
    title: "AI Gmail Agent",
    description: "An intelligent agent that processes incoming emails, applies smart filters, and drafts context-aware responses using LLMs.",
    tags: ["Python", "Gmail API", "AI Agents", "Automation"],
    link: "#",
    category: "AI & Automation"
  },
  {
    id: "whatsapp-mcp-server",
    title: "WhatsApp MCP Server",
    description: "A Model Context Protocol (MCP) server that bridges AI assistants with WhatsApp via the Baileys library for seamless messaging integration.",
    tags: ["TypeScript", "Node.js", "Baileys", "MCP"],
    link: "#",
    category: "Integration"
  },
  {
    id: "linkedin-mcp-server",
    title: "LinkedIn MCP Server",
    description: "Enables AI models to interact with LinkedIn for profile management and outreach automation using MCP standards.",
    tags: ["TypeScript", "MCP", "Automation", "LinkedIn API"],
    link: "#",
    category: "Integration"
  },
  {
    id: "facebook-mcp-server",
    title: "Facebook MCP Server",
    description: "Integration layer for AI assistants to manage Facebook interactions and data through the Model Context Protocol.",
    tags: ["Node.js", "MCP", "Social Media"],
    link: "#",
    category: "Integration"
  },
  {
    id: "inquiry-automation",
    title: "Inquiry Automation System",
    description: "Automated quote generation engine for camera rentals. Parses natural language requests and generates precise PDF/Text quotes.",
    tags: ["Python", "Gemini API", "NLP", "Business Logic"],
    link: "#",
    category: "Business Tool"
  },
  {
    id: "video-transcriber",
    title: "Video Transcriber",
    description: "High-performance video transcription tool leveraging advanced AI models for accurate speech-to-text conversion.",
    tags: ["Python", "AI", "Whisper", "FFmpeg"],
    link: "#",
    category: "Utility"
  },
  {
    id: "magento-automation",
    title: "Magento Order Automation",
    description: "Full-cycle automation for Magento e-commerce platforms, from order processing to inventory syncing.",
    tags: ["Python", "Selenium", "Magento API"],
    link: "#",
    category: "E-commerce"
  },
  {
    id: "display-calibration-tool",
    title: "Display Calibration Tool",
    description: "A modern web interface for managing display color profiles and calibration settings, ensuring color accuracy.",
    tags: ["React", "Vite", "Tailwind CSS", "Color Science"],
    link: "#",
    category: "Frontend"
  }
];

export const socialLinks = {
  github: "https://github.com/kapilthakare",
  linkedin: "https://linkedin.com/in/kapilthakare",
  twitter: "https://twitter.com/kapilthakare",
  email: "mailto:contact@primesandzooms.com"
};

export const bio = {
  name: "Kapil Thakare",
  title: "Software Engineer & Entrepreneur",
  tagline: "Building intelligent systems that bridge the gap between hardware and software.",
  about: "I specialize in building robust automation tools, AI agents, and full-stack applications. As the head of Primes & Zooms, I leverage technology to streamline complex business operations, from inventory management to customer engagement."
};