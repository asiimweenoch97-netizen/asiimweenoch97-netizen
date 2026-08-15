export interface ProjectItem {
  id: string;
  title: string;
  category: 'software' | 'video';
  subcategory: string;
  description: string;
  detailedNotes?: string;
  techTags: string[];
  metrics?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  videoDuration?: string;
  videoAspect?: string;
  videoTools?: string[];
  editingHighlights?: string[];
  videoEmbedUrl?: string;
  thumbnailUrl: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  highlights: string[];
  clientOutcome?: string;
}

export interface StackCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    category: string;
    years: string;
    highlight?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Asiimwe Enoch",
  role: "Software Engineer & Video Editor",
  location: "Kampala, Uganda 🇺🇬",
  status: "Available for Remote & Local Roles",
  email: "asiimweenoch97@gmail.com",
  bio: "I am a Software Engineer with 2 years of engineering experience and a Video Editor based in Uganda. I specialize in building user-friendly AI chatbots, modern web applications, and crafting engaging video content with Adobe Premiere Pro and After Effects.",
  valueProp: "Building intelligent AI chat systems, modern web applications, and high-impact video content that drives real engagement.",
  stats: [
    { label: "Years Engineering", value: "2 Years" },
    { label: "AI & Web Solutions", value: "12+" },
    { label: "Video Projects Produced", value: "45+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-chatbots",
    title: "AI Chatbot & Intelligent Support",
    iconName: "Bot",
    tagline: "Automated Answers, Smart Assistance & AI Workflows",
    description: "Designing easy-to-use AI assistants and smart chat tools that automatically answer customer questions, assist users, and handle repetitive tasks with fast, accurate responses.",
    highlights: [
      "Custom AI Assistant Setup for Websites & Businesses",
      "Instant Knowledge Base Q&A (Upload PDFs or Documents)",
      "Multi-Language Support (English, Luganda & More)",
      "24/7 Automated Customer Guidance & Lead Capture",
      "Seamless Integration into Existing Websites"
    ],
    clientOutcome: "Delivers 24/7 instant automated customer responses with over 95% accuracy, freeing up team time."
  },
  {
    id: "web-engineering",
    title: "Modern Web Application Development",
    iconName: "Code2",
    tagline: "Fast, Mobile-Friendly & Accessible Web Platforms",
    description: "Building modern, fast-loading, and responsive websites and web applications tailored for businesses, analytics dashboards, and interactive digital products.",
    highlights: [
      "Responsive Websites that Work Great on Mobile & Desktop",
      "Fast Page Load Times & High Search Engine Ranking",
      "Secure User Portals, Dashboards & Data Analytics",
      "Clean, Professional Visual Design & Intuitive Navigation",
      "Continuous Support & Modern Cloud Deployment"
    ],
    clientOutcome: "Provides high-performing digital experiences with 100% mobile responsiveness and sub-second load speeds."
  },
  {
    id: "video-editing",
    title: "Professional Video Editing & Post-Production",
    iconName: "Film",
    tagline: "Adobe Premiere Pro, After Effects & Visual Storytelling",
    description: "Creating captivating video content, product demos, social media reels, and documentary films using Adobe Premiere Pro with professional color, motion graphics, and crisp audio.",
    highlights: [
      "Adobe Premiere Pro (Precision Editing, Pacing & Transitions)",
      "Adobe After Effects (Motion Graphics & Animated Titles)",
      "Product Launch Videos & SaaS Walkthrough Reels",
      "Cinematic Color Enhancement & Clear Sound Design",
      "Multi-Format Video Exports (16:9 YouTube & 9:16 Shorts/TikTok)"
    ],
    clientOutcome: "Transforms raw video footage into polished, high-engaging visual media ready for commercial publication."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "wrcc-time-tracking",
    title: "WRCC Time Tracking System",
    category: "software",
    subcategory: "Enterprise Productivity System",
    description: "Custom staff time tracking and attendance web application engineered for WRCC, featuring automated shift logging, timesheet reports, and project tracking.",
    detailedNotes: "Streamlines organizational attendance and project tracking with automated time logs, activity analytics, and real-time dashboard reports.",
    techTags: ["Time Tracking", "Workforce Management", "Web Application", "Analytics"],
    metrics: "Enterprise Time System • Real-Time Timesheets",
    liveDemoUrl: "https://wrcc-media-time-tracking-system-390564500151.europe-west2.run.app",
    thumbnailUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "big-closet-ug",
    title: "B-I-G Closet Uganda - E-Commerce Fashion Platform",
    category: "software",
    subcategory: "E-Commerce Web Application",
    description: "Modern e-commerce platform and online fashion store for B-I-G Closet Uganda, featuring product showcases, smooth shopping experience, and instant customer inquiries.",
    detailedNotes: "Built as a high-performance fashion portal with clean visual galleries, mobile-first navigation, and direct order integration for shoppers across Uganda.",
    techTags: ["E-Commerce", "React & Web App", "Fashion Catalog", "Mobile Shopping"],
    metrics: "Live E-Commerce Platform • 100% Mobile Responsive",
    liveDemoUrl: "https://b-i-g-closetug.aistudio.app",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

export const TECH_STACK_DATA: StackCategory[] = [
  {
    title: "Core Engineering Tools",
    iconName: "Cpu",
    skills: [
      { name: "Python", level: "Expert", category: "Backend & AI", years: "2 yrs", highlight: "AI Services, Data Processing & Workflows" },
      { name: "TypeScript & JavaScript", level: "Expert", category: "Web Applications", years: "2 yrs", highlight: "Interactive Web Apps & UI Logic" },
      { name: "SQL & Databases", level: "Advanced", category: "Data Storage", years: "2 yrs", highlight: "PostgreSQL, Secure Data Records" },
      { name: "HTML5 & CSS3", level: "Expert", category: "Web Layouts", years: "2 yrs", highlight: "Responsive, Accessible Web Designs" }
    ]
  },
  {
    title: "Frontend & Web Design",
    iconName: "Layout",
    skills: [
      { name: "React & Next.js", level: "Expert", category: "Web Frameworks", years: "2 yrs", highlight: "Modern, Fast Web Interfaces" },
      { name: "Tailwind CSS", level: "Expert", category: "Styling & Layout", years: "2 yrs", highlight: "Clean, Responsive Modern UI" },
      { name: "Smooth Animations", level: "Advanced", category: "User Experience", years: "2 yrs", highlight: "Interactive Page Transitions" }
    ]
  },
  {
    title: "AI & Smart Automation",
    iconName: "Brain",
    skills: [
      { name: "Google Gemini AI", level: "Expert", category: "Generative AI", years: "2 yrs", highlight: "Multi-language AI Chatbots & Q&A" },
      { name: "OpenAI Technologies", level: "Expert", category: "Generative AI", years: "2 yrs", highlight: "Automated Document Assistants" },
      { name: "Smart Document Search", level: "Advanced", category: "AI Architecture", years: "2 yrs", highlight: "Instant Document Q&A & Search" }
    ]
  },
  {
    title: "Video Production & Editing",
    iconName: "Video",
    skills: [
      { name: "Adobe Premiere Pro", level: "Expert", category: "Video Editing", years: "2+ yrs", highlight: "Timeline Pacing, Multi-cam Editing, Pacing" },
      { name: "Adobe After Effects", level: "Advanced", category: "Motion Graphics", years: "2 yrs", highlight: "Animated Titles, On-screen Graphics" },
      { name: "Color Enhancement", level: "Advanced", category: "Post-Production", years: "2 yrs", highlight: "Lumetri Color & Tone Balancing" },
      { name: "Audio Mixing & Polish", level: "Advanced", category: "Sound Design", years: "2 yrs", highlight: "Vocal Clarity & Background Music" }
    ]
  }
];
