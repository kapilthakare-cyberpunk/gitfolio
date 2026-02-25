import { Project } from "@/types";

export const projects: Project[] = [
  // ── MCP Servers & AI Integration ──────────────────────────────────────
  {
    id: "whatsapp-mcp-server",
    title: "WhatsApp MCP Server",
    description: "WhatsApp MCP server with QR code authentication, REST API endpoints, and automatic reconnection. Bridges AI assistants with WhatsApp via Baileys library.",
    tags: ["TypeScript", "Node.js", "Baileys", "MCP", "QR Auth"],
    link: "https://github.com/kapilthakare/whatsapp-mcp-server",
    category: "MCP Servers"
  },
  {
    id: "linkedin-mcp-server",
    title: "LinkedIn MCP Server",
    description: "Enables AI models to interact with LinkedIn for profile management, connection requests, and outreach automation using MCP standards.",
    tags: ["TypeScript", "MCP", "Automation", "LinkedIn API"],
    link: "https://github.com/kapilthakare/linkedin-mcp-server",
    category: "MCP Servers"
  },
  {
    id: "facebook-mcp-server",
    title: "Facebook MCP Server",
    description: "Integration layer for AI assistants to manage Facebook interactions, page management, and data retrieval through Model Context Protocol.",
    tags: ["Node.js", "MCP", "Facebook Graph API", "Social Media"],
    link: "https://github.com/kapilthakare/facebook-mcp-server",
    category: "MCP Servers"
  },
  {
    id: "telegram-mcp-npx",
    title: "Telegram MCP Server",
    description: "Telegram integration for AI assistants with message handling, group management, and broadcast capabilities via MCP.",
    tags: ["TypeScript", "MCP", "Telegram Bot API", "NPX"],
    link: "https://github.com/kapilthakare/telegram-mcp-npx",
    category: "MCP Servers"
  },
  {
    id: "mcp-servers-combined",
    title: "MCP Servers Combined",
    description: "Unified deployment of multiple MCP servers (WhatsApp, Telegram, Gmail) with PM2 process management and health monitoring dashboard.",
    tags: ["PM2", "MCP", "Multi-Service", "Dashboard"],
    link: "https://github.com/kapilthakare/mcp-servers-combined",
    category: "MCP Servers"
  },
  {
    id: "macos-automation-server",
    title: "macOS Automation MCP",
    description: "MCP server for macOS GUI automation, system integration, accessibility features, and AppleScript execution for AI assistants.",
    tags: ["TypeScript", "MCP", "macOS", "AppleScript", "Accessibility"],
    link: "https://github.com/kapilthakare/macos-automation-server",
    category: "MCP Servers"
  },

  // ── WhatsApp AI Bots ──────────────────────────────────────────────────
  {
    id: "whatsapp-ai-bot",
    title: "WhatsApp AI Bot Pro",
    description: "Professional WhatsApp AI bot with web dashboard, live monitoring, human-in-the-loop draft replies, canned templates, and analytics. Multi-provider AI with fallback.",
    tags: ["Node.js", "Baileys", "Socket.IO", "SQLite", "Web Dashboard"],
    link: "https://github.com/kapilthakare/whatsapp-ai-bot",
    category: "WhatsApp AI"
  },
  {
    id: "whatsapp-ai-autoreply",
    title: "WhatsApp AI Auto-Reply",
    description: "Intelligent auto-reply bot for WhatsApp with conversation memory, context-aware responses, and multi-API support (Gemini, Groq, Claude).",
    tags: ["Node.js", "Baileys", "AI", "Auto-Reply"],
    link: "https://github.com/kapilthakare/whatsapp-ai-autoreply",
    category: "WhatsApp AI"
  },
  {
    id: "whatsapp-mcp-connector",
    title: "WhatsApp MCP Connector",
    description: "Bridge connector for WhatsApp Business API integration with MCP servers, enabling seamless message routing and automation.",
    tags: ["TypeScript", "MCP", "WhatsApp Business API"],
    link: "https://github.com/kapilthakare/whatsapp-mcp-connector",
    category: "WhatsApp AI"
  },
  {
    id: "livekit-whatsapp-agent",
    title: "LiveKit WhatsApp Agent",
    description: "Real-time voice and video agent for WhatsApp using LiveKit framework. Handles audio/video streams with AI processing.",
    tags: ["Python", "LiveKit", "Whisper", "Real-time"],
    link: "https://github.com/kapilthakare/livekit-whatsapp-agent",
    category: "WhatsApp AI"
  },

  // ── Business Automation ───────────────────────────────────────────────
  {
    id: "inquiry-automation",
    title: "Inquiry Automation System",
    description: "AI-powered inquiry form filler. Parses customer messages (Qwen, Gemini, OpenAI, Anthropic), auto-fills forms with session management and screenshots.",
    tags: ["Node.js", "AI", "Puppeteer", "NLP", "CLI Agent"],
    link: "https://github.com/kapilthakare/inquiry-automation",
    category: "Business Tools"
  },
  {
    id: "oms-inquiry-automation",
    title: "OMS Inquiry Automation",
    description: "Order Management System integration for automated inquiry processing with image processing and quote generation.",
    tags: ["Python", "OMS", "Image Processing", "Automation"],
    link: "https://github.com/kapilthakare/oms-inquiry-automation",
    category: "Business Tools"
  },
  {
    id: "magento-automation",
    title: "Magento Order Automation",
    description: "Full-cycle Magento e-commerce automation: order processing, inventory syncing, shipment tracking, and customer notifications.",
    tags: ["Python", "Selenium", "Magento API", "E-commerce"],
    link: "https://github.com/kapilthakare/magento-automation",
    category: "Business Tools"
  },
  {
    id: "magento-order-automation",
    title: "Magento Order Placement",
    description: "Automated order placement system for Magento with rental date configuration, customer selection, and validation workflows.",
    tags: ["Python", "Magento", "Rental System", "Automation"],
    link: "https://github.com/kapilthakare/magento-order-automation",
    category: "Business Tools"
  },
  {
    id: "n8n-automation",
    title: "n8n Workflow Automation",
    description: "Self-hosted n8n automation workflows for business processes, integrations, and scheduled tasks with Docker deployment.",
    tags: ["n8n", "Docker", "Workflow", "Integration"],
    link: "https://github.com/kapilthakare/n8n-automation",
    category: "Business Tools"
  },
  {
    id: "customer-outreach",
    title: "Customer Outreach Automation",
    description: "Automated customer outreach system with personalized messaging, follow-up scheduling, and response tracking.",
    tags: ["Python", "Automation", "CRM", "Email"],
    link: "https://github.com/kapilthakare/customer-outreach",
    category: "Business Tools"
  },

  // ── LiveKit Agents & Real-time AI ─────────────────────────────────────
  {
    id: "livekit-agents",
    title: "LiveKit Agents Framework",
    description: "Real-time AI agent framework using LiveKit for voice/video agents. Build conversational, multi-modal agents that can see, hear, and understand.",
    tags: ["Python", "LiveKit", "WebRTC", "AI Agents", "Real-time"],
    link: "https://github.com/kapilthakare/livekit-agents",
    category: "LiveKit"
  },
  {
    id: "ai-gmail-agent",
    title: "AI Gmail Agent",
    description: "Intelligent Gmail agent that processes incoming emails, applies smart filters, and drafts context-aware responses using LLMs.",
    tags: ["Python", "Gmail API", "AI Agents", "Automation"],
    link: "https://github.com/kapilthakare/ai-gmail-agent",
    category: "LiveKit"
  },

  // ── Display & Calibration Tools ───────────────────────────────────────
  {
    id: "display-calibration-tool",
    title: "Display Calibration Tool",
    description: "Cross-platform display color calibration tool with web interface for managing color profiles and calibration settings.",
    tags: ["Python", "Color Science", "Web UI", "Calibration"],
    link: "https://github.com/kapilthakare/display-calibration-tool",
    category: "Tools"
  },
  {
    id: "display-calibration-tool-win11",
    title: "Display Calibration for Windows",
    description: "Windows 11 specific display calibration tool with HDR support and advanced color management features.",
    tags: ["Python", "Windows 11", "HDR", "Color Management"],
    link: "https://github.com/kapilthakare/display-calibration-tool-win11",
    category: "Tools"
  },
  {
    id: "auto-cal",
    title: "Auto-Cal",
    description: "Automatic display calibration system with sensor integration and profile generation for professional color accuracy.",
    tags: ["Python", "Auto-Calibration", "Sensors", "Profiles"],
    link: "https://github.com/kapilthakare/auto-cal",
    category: "Tools"
  },

  // ── AI & ML Tools ─────────────────────────────────────────────────────
  {
    id: "video-transcriber",
    title: "Video Transcriber",
    description: "High-performance video transcription using Whisper AI. Supports multiple languages, speaker diarization, and subtitle export.",
    tags: ["Python", "Whisper", "FFmpeg", "Transcription"],
    link: "https://github.com/kapilthakare/video-transcriber",
    category: "AI Tools"
  },
  {
    id: "ai-groq-darktable",
    title: "AI Groq + Darktable",
    description: "AI-powered photo editing assistant integrating Groq LLM with Darktable for intelligent photo adjustments and batch processing.",
    tags: ["Python", "Groq", "Darktable", "Photo Editing"],
    link: "https://github.com/kapilthakare/ai-groq-darktable",
    category: "AI Tools"
  },
  {
    id: "prime_sales_ai",
    title: "Prime Sales AI",
    description: "AI-powered sales assistant for Primes & Zooms with product recommendations, pricing optimization, and customer insights.",
    tags: ["Python", "AI", "Sales", "Analytics"],
    link: "https://github.com/kapilthakare/prime_sales_ai",
    category: "AI Tools"
  },
  {
    id: "product-suggestion-cli",
    title: "Product Suggestion CLI",
    description: "Command-line product recommendation engine using AI to match customer requirements with available inventory.",
    tags: ["Python", "CLI", "AI", "Recommendations"],
    link: "https://github.com/kapilthakare/product-suggestion-cli",
    category: "AI Tools"
  },

  // ── Developer Tools & Utilities ───────────────────────────────────────
  {
    id: "api-key-manager-enhanced",
    title: "API Key Manager",
    description: "Secure API key management system with encryption, rotation, and multi-service support for development environments.",
    tags: ["Python", "Security", "API", "Encryption"],
    link: "https://github.com/kapilthakare/api-key-manager-enhanced",
    category: "Dev Tools"
  },
  {
    id: "browser-pool-manager",
    title: "Browser Pool Manager",
    description: "Manage multiple browser instances for testing and automation with resource optimization and session isolation.",
    tags: ["Node.js", "Puppeteer", "Testing", "Automation"],
    link: "https://github.com/kapilthakare/browser-pool-manager",
    category: "Dev Tools"
  },
  {
    id: "duplicate-scanner",
    title: "Duplicate File Scanner",
    description: "Fast duplicate file finder with content hashing, preview, and safe deletion options for disk space optimization.",
    tags: ["Python", "File System", "Utility", "Scanner"],
    link: "https://github.com/kapilthakare/duplicate-scanner",
    category: "Dev Tools"
  },
  {
    id: "blackbox-mcp",
    title: "Blackbox MCP",
    description: "Code search and retrieval MCP server with support for multiple languages and intelligent code suggestions.",
    tags: ["TypeScript", "MCP", "Code Search", "AI"],
    link: "https://github.com/kapilthakare/blackbox-mcp",
    category: "Dev Tools"
  },

  // ── Mobile & Device Management ────────────────────────────────────────
  {
    id: "nanomdm-iphone-management",
    title: "nanoMDM iPhone Management",
    description: "MDM solution for iPhone fleet management with remote configuration, app deployment, and security policies.",
    tags: ["Go", "MDM", "iOS", "Device Management"],
    link: "https://github.com/kapilthakare/nanomdm-iphone-management",
    category: "Mobile"
  },
  {
    id: "apple-configurator-supervise",
    title: "Apple Configurator Supervise",
    description: "Automated Apple Configurator workflows for supervising and configuring multiple iOS devices at scale.",
    tags: ["AppleScript", "iOS", "Automation", "Supervision"],
    link: "https://github.com/kapilthakare/apple-configurator-supervise",
    category: "Mobile"
  },
  {
    id: "s23-ultra-app",
    title: "S23 Ultra Automation",
    description: "Samsung S23 Ultra automation app with custom shortcuts, Bixby routines, and device optimization features.",
    tags: ["Kotlin", "Android", "Samsung", "Automation"],
    link: "https://github.com/kapilthakare/s23-ultra-app",
    category: "Mobile"
  },

  // ── Social Media & Marketing ──────────────────────────────────────────
  {
    id: "social-media-mcps",
    title: "Social Media MCPs",
    description: "Collection of MCP servers for social media management across platforms: Instagram, Twitter, LinkedIn automation.",
    tags: ["TypeScript", "MCP", "Social Media", "Multi-Platform"],
    link: "https://github.com/kapilthakare/social-media-mcps",
    category: "Social"
  },
  {
    id: "telegram-customer-search",
    title: "Telegram Customer Search",
    description: "Telegram bot for searching and organizing customer inquiries with advanced filters and export capabilities.",
    tags: ["Python", "Telegram Bot", "Search", "CRM"],
    link: "https://github.com/kapilthakare/telegram-customer-search",
    category: "Social"
  },
  {
    id: "suremdm-automation",
    title: "SureMDM Automation",
    description: "SureMDM device management automation with dashboard for monitoring, reporting, and bulk operations.",
    tags: ["Python", "SureMDM", "Dashboard", "Automation"],
    link: "https://github.com/kapilthakare/suremdm-automation",
    category: "Social"
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
  tagline: "Building intelligent systems that bridge AI, automation, and business.",
  about: "I specialize in building robust automation tools, AI agents, MCP servers, and full-stack applications. As the head of Primes & Zooms (Photography & Cinematography Gear Rental), I leverage technology to streamline complex business operations—from inventory management to customer engagement. My work spans WhatsApp AI bots, LiveKit real-time agents, display calibration tools, and enterprise automation systems."
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Kotlin", "Swift", "AppleScript"]
  },
  {
    category: "AI & ML",
    items: ["LiveKit Agents", "Whisper", "Gemini API", "Groq", "Claude", "OpenAI", "Qwen", "NLP"]
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "FastAPI", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "MCP Servers",
    items: ["WhatsApp", "Telegram", "LinkedIn", "Facebook", "Gmail", "macOS Automation", "Blackbox"]
  },
  {
    category: "Automation",
    items: ["Baileys", "Puppeteer", "Selenium", "n8n", "PM2", "Docker", "AppleScript"]
  },
  {
    category: "Databases",
    items: ["SQLite", "PostgreSQL", "MongoDB", "Redis", "Supabase"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "AWS", "GCP", "Magento", "SureMDM", "nanoMDM"]
  },
  {
    category: "Specializations",
    items: ["Display Calibration", "Color Science", "Real-time Communication", "WebRTC", "API Design"]
  }
];

export const experience = [
  {
    role: "Head of Technology",
    company: "Primes & Zooms",
    period: "2020 - Present",
    location: "Pune & Mumbai, India",
    description: "Leading technology strategy for photography and cinematography gear rental business. Built comprehensive automation systems for inquiry processing, order management, inventory tracking, and customer communication.",
    achievements: [
      "Developed AI-powered inquiry automation reducing response time by 80%",
      "Built WhatsApp AI bot handling 1000+ customer conversations monthly",
      "Created Magento automation for seamless order processing and inventory sync",
      "Implemented display calibration tools for professional color accuracy"
    ]
  },
  {
    role: "AI & Automation Consultant",
    company: "Freelance",
    period: "2022 - Present",
    location: "Remote",
    description: "Consulting for businesses on AI integration, automation workflows, and MCP server development.",
    achievements: [
      "Built 10+ MCP servers for various platforms (WhatsApp, Telegram, LinkedIn, Facebook)",
      "Developed LiveKit real-time AI agents for voice and video applications",
      "Created custom automation solutions using n8n, Python, and Node.js"
    ]
  }
];

export const stats = [
  { label: "Projects", value: "60+" },
  { label: "MCP Servers", value: "10+" },
  { label: "AI Bots", value: "15+" },
  { label: "Years Experience", value: "5+" }
];