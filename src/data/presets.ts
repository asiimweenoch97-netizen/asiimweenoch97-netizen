import { UserConfig, HeroVariation, CaseStudyTemplate, StackCategory } from '../types';

export const ROLE_PRESETS: Record<string, {
  defaultName: string;
  roleTitle: string;
  targetAudience: string;
  keyAchievement: string;
  recommendedStack: {
    noCodeOption: { name: string; rationale: string; pros: string[]; cons: string[] };
    developerOption: { name: string; rationale: string; pros: string[]; cons: string[] };
    verdict: string;
  };
  heroVariations: HeroVariation[];
  aboutNarrative: {
    paragraph1: string;
    paragraph2: string;
  };
  stackCategories: StackCategory[];
  caseStudyTemplate: CaseStudyTemplate;
}> = {
  'frontend-dev': {
    defaultName: 'Asiimwe Enoch',
    roleTitle: 'Senior Front-End Engineer & UI Specialist',
    targetAudience: 'Tech leads, VP of Engineering, Design System heads at scaleups & unicorns',
    keyAchievement: 'Re-architected core dashboard bundle size by 62%, improving LCP by 1.8s for 2.5M monthly users.',
    recommendedStack: {
      noCodeOption: {
        name: 'Framer / Webflow',
        rationale: 'Fast to publish visual layouts without backend infrastructure.',
        pros: ['Rapid iteration speed', 'Built-in CMS & responsive breakpoints', 'Smooth scroll & canvas animations'],
        cons: ['Limited custom DOM control', 'Vendor lock-in', 'Cannot easily showcase component library code']
      },
      developerOption: {
        name: 'Astro or Next.js 15 + Tailwind CSS + Motion',
        rationale: 'Shows mastery of modern web architecture, zero-JS hydration baseline, and 100/100 Lighthouse performance.',
        pros: ['Sub-second page loads (SSG/ISR)', 'Complete control over DOM & accessibility', 'Directly host live component playgrounds'],
        cons: ['Requires manual deployment pipeline setup', 'Takes 10-15h initial dev time vs 4h in Framer']
      },
      verdict: 'DEVELOPER OPTION (Astro + Tailwind). As a Senior Front-End Engineer, your portfolio IS your proof of craftsmanship. Serving static HTML with 100/100 Lighthouse scores proves technical rigor before a recruiter even reads your case studies.'
    },
    heroVariations: [
      {
        id: 1,
        label: 'Metric & Speed Driven (Conversion Focused)',
        tagline: 'SENIOR FRONT-END ENGINEER',
        headline: 'I build resilient web architectures that load in under 200ms and convert visitors into buyers.',
        valueProp: 'Bridging high-fidelity UI design with performance-obsessed React & TypeScript implementation.',
        subtitle: 'Specializing in design systems, micro-frontend performance, and accessible web application interfaces for high-growth tech platforms.',
        primaryCta: 'Explore Selected Work',
        secondaryCta: 'View Architecture Case Studies',
        psychologyNote: 'Establishes technical credibility immediately with hard speed thresholds and business conversion intent.'
      },
      {
        id: 2,
        label: 'Craft & Design System Focus (Editorial Elegance)',
        tagline: 'UI/UX & FRONT-END ARCHITECT',
        headline: 'Crafting pixel-perfect interface systems with surgical TypeScript precision.',
        valueProp: 'Eliminating the gap between complex Figma design files and production-grade React component libraries.',
        subtitle: 'Over 7 years architecting design systems, micro-interactions, and accessible web standards used by millions.',
        primaryCta: 'View Case Studies',
        secondaryCta: 'Download Resume',
        psychologyNote: 'Appeals directly to Design Directors and Design System leads looking for code-design harmony.'
      },
      {
        id: 3,
        label: 'Direct & Concise High-Hook (3-Second Scan)',
        tagline: 'FRONT-END DEVELOPER',
        headline: 'Figma to Production Code. Fast, Accessible, Uncompromising.',
        valueProp: 'I transform complex product requirements into lightweight, high-converting digital web products.',
        subtitle: 'Currently available for staff-level roles and select architectural advisory projects.',
        primaryCta: 'Get in Touch',
        secondaryCta: 'See Live Demos',
        psychologyNote: 'Minimalist friction, ideal for fast-scanning recruiters with 15 seconds per portfolio.'
      }
    ],
    aboutNarrative: {
      paragraph1: 'I started my engineering journey at the intersection of aesthetic design and browser architecture. Over the last 6+ years, I have helped venture-backed scaleups build web applications that deliver desktop-like fluid responsiveness without sacrificing accessibility or SEO performance. My core engineering philosophy revolves around zero unnecessary runtime weight, strict type safety, and component systems that scale gracefully across multi-developer teams.',
      paragraph2: 'When I am not auditing Web Vitals or crafting fluid micro-interactions, I contribute to open-source UI libraries and mentor junior front-end developers. My long-term goal is to lead front-end architecture teams that set industry benchmarks for web speed, design system adoption, and user conversion.'
    },
    stackCategories: [
      {
        category: 'Core Front-End Engine',
        description: 'Daily drivers for production web application development',
        items: [
          { name: 'TypeScript', proficiencyContext: 'Strict typing, generic design systems, API contracts', yearsOrProjects: '5+ Years', tag: 'Core' },
          { name: 'React 19 / Next.js', proficiencyContext: 'Server Components, App Router, Suspense boundaries', yearsOrProjects: '6+ Years', tag: 'Core' },
          { name: 'Astro', proficiencyContext: 'Content-driven SSG, Island Architecture, zero-JS default', yearsOrProjects: '3+ Years', tag: 'Speed' },
          { name: 'Tailwind CSS v4', proficiencyContext: 'Utility architecture, custom design tokens, container queries', yearsOrProjects: '5+ Years', tag: 'Styling' }
        ]
      },
      {
        category: 'State & UI Animation',
        description: 'Libraries for interactive visual feedback & data flow',
        items: [
          { name: 'Motion (Framer Motion)', proficiencyContext: 'Layout animations, gesture feedback, physics springs', yearsOrProjects: '4 Years', tag: 'UX' },
          { name: 'Zustand / TanStack Query', proficiencyContext: 'Client state & async server-state caching', yearsOrProjects: '4 Years', tag: 'State' },
          { name: 'Radix UI / Headless UI', proficiencyContext: 'WAI-ARIA accessible headless primitives', yearsOrProjects: '3 Years', tag: 'A11y' }
        ]
      },
      {
        category: 'Build & Quality Assurance',
        description: 'Tooling that enforces speed, coverage, and stability',
        items: [
          { name: 'Vite & esbuild', proficiencyContext: 'Sub-second dev server startup & tree-shaken bundling', yearsOrProjects: '4 Years' },
          { name: 'Playwright & Vitest', proficiencyContext: 'End-to-end integration flows & visual regression tests', yearsOrProjects: '3 Years' },
          { name: 'Lighthouse & Web Vitals', proficiencyContext: 'Core Web Vitals auditing, LCP & CLS optimization', yearsOrProjects: '5 Years', tag: 'SEO' }
        ]
      }
    ],
    caseStudyTemplate: {
      context: 'Core Payment Flow Overhaul for Enterprise SaaS Platform',
      metadata: {
        role: 'Lead Front-End Architect',
        timeline: '10 Weeks (Q3 2025)',
        tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Playwright', 'Stripe Elements'],
        deliverables: ['Custom Payment Stepper', 'Zero-CLS Layout', 'Design System Payment Primitives']
      },
      challenge: 'The legacy multi-step checkout flow suffered from a 3.4s Largest Contentful Paint (LCP) and severe Cumulative Layout Shift (CLS) caused by asynchronous widget loading, leading to an estimated 18% cart drop-off during checkout.',
      solution: 'Re-engineered the checkout flow using React Server Components and static skeleton hydration. Refactored dynamic Stripe widget scripts to lazy-load on hover, implemented container queries for zero-shift responsiveness, and introduced a 1-click quick-checkout drawer.',
      impactMetrics: [
        { label: 'Largest Contentful Paint', value: '1.1s (67% reduction)', qualitativeProxy: 'Eliminated loading spinners and flash of unstyled content during payment step.' },
        { label: 'Checkout Conversion', value: '+14.2% lift', qualitativeProxy: 'Significantly reduced user friction during cart authorization.' },
        { label: 'Core Web Vitals Score', value: '99/100 Mobile', qualitativeProxy: 'Passed all Google Chrome UX Report thresholds across desktop and mobile.' }
      ]
    }
  },
  'product-designer': {
    defaultName: 'Morgan Chen',
    roleTitle: 'Principal Product & Systems Designer',
    targetAudience: 'Heads of Product, VPs of Design, Founders building high-complexity B2B or Consumer apps',
    keyAchievement: 'Led end-to-end UX redesign for fintech onboarding that increased 7-day user activation by 31%.',
    recommendedStack: {
      noCodeOption: {
        name: 'Framer',
        rationale: 'Framer allows designers to publish canvas-accurate layouts with native spring animations, CMS, and zero code overhead.',
        pros: ['Figma layer import', 'Pixel-perfect typography control', 'Custom scroll transforms and interactive component states'],
        cons: ['Sub-optimal for complex developer portfolio demos requiring live code sandboxes']
      },
      developerOption: {
        name: 'Astro + Tailwind CSS',
        rationale: 'Great if you want custom interactive design prototypes embedded in your case studies.',
        pros: ['Full control', 'Zero monthly platform fees', 'Integrate interactive iframe prototypes easily'],
        cons: ['Steeper setup curve for non-engineers']
      },
      verdict: 'NO-CODE OPTION (Framer). For Product Designers, your visual hierarchy, typography, motion polish, and case study narrative structure matter 10x more than raw hand-coded HTML setup.'
    },
    heroVariations: [
      {
        id: 1,
        label: 'Outcome & System Focused',
        tagline: 'PRODUCT & DESIGN SYSTEMS',
        headline: 'Designing intuitive product experiences that turn complex workflows into effortless user habits.',
        valueProp: 'Combining user research, design systems, and business strategy to launch software people love using.',
        subtitle: 'Over 8 years transforming intricate SaaS platforms into scalable, human-centered web & mobile interfaces.',
        primaryCta: 'View Case Studies',
        secondaryCta: 'Read Design Philosophy',
        psychologyNote: 'Connects design output directly to user habits and business scalability.'
      },
      {
        id: 2,
        label: 'Minimalist Editorial Visual',
        tagline: 'SENIOR PRODUCT DESIGNER',
        headline: 'Clarity over clutter. Function over fluff.',
        valueProp: 'I partner with founders and product teams to craft digital interfaces with radical clarity.',
        subtitle: 'Specializing in B2B enterprise dashboards, onboarding optimization, and multi-brand design tokens.',
        primaryCta: 'Explore Selected Work',
        secondaryCta: 'Book a Strategy Call',
        psychologyNote: 'Appeals to founders and design directors seeking mature, unpretentious UX leadership.'
      },
      {
        id: 3,
        label: 'Interactive Storytelling Hook',
        tagline: 'UX/UI & INTERACTION DESIGN',
        headline: 'From messy user problems to high-converting product realities.',
        valueProp: 'Data-informed interaction designer focused on frictionless user journeys and design-to-engineering handoff.',
        subtitle: 'Based in San Francisco. Available for senior product design advisory and full-time leadership roles.',
        primaryCta: 'See Case Studies',
        secondaryCta: 'Download Deck',
        psychologyNote: 'Builds trust through data-informed methodology and seamless developer collaboration.'
      }
    ],
    aboutNarrative: {
      paragraph1: 'I view product design as an exercise in empathy, data analysis, and structural subtraction. Throughout my career, I have worked alongside cross-functional engineering and product teams to solve sticky UX problems across fintech, enterprise SaaS, and health-tech platforms. My design process begins with asking deep structural questions about user motivation and business metrics before moving to high-fidelity canvas wireframes.',
      paragraph2: 'Beyond crafting interface components, I specialize in building sustainable design systems that accelerate team velocity and enforce UI consistency across platforms. I believe the best design feels invisible—guiding users toward their goals without cognitive strain.'
    },
    stackCategories: [
      {
        category: 'Design & Prototyping Tools',
        description: 'Industry-standard design canvas & prototyping environments',
        items: [
          { name: 'Figma & Variables', proficiencyContext: 'Auto-layout 5.0, tokens, multi-mode themes, component specs', yearsOrProjects: '7+ Years', tag: 'Core' },
          { name: 'Framer / Webflow', proficiencyContext: 'Interactive web prototyping, micro-interactions, CMS design', yearsOrProjects: '4 Years', tag: 'Web' },
          { name: 'Protopie & Origami', proficiencyContext: 'High-fidelity mobile gesture & hardware prototypes', yearsOrProjects: '3 Years' }
        ]
      },
      {
        category: 'Research & Product Strategy',
        description: 'Methods for validating user needs & measuring product usability',
        items: [
          { name: 'User Testing & Maze', proficiencyContext: 'Unmoderated usability testing, heatmaps, card sorting', yearsOrProjects: '5 Years', tag: 'Research' },
          { name: 'Mixpanel & FullStory', proficiencyContext: 'Product analytics, funnel drop-off audit, click maps', yearsOrProjects: '4 Years', tag: 'Data' },
          { name: 'Jobs-To-Be-Done (JTBD)', proficiencyContext: 'User persona mapping, journey mapping, task analysis', yearsOrProjects: '6 Years' }
        ]
      }
    ],
    caseStudyTemplate: {
      context: 'Redesigning SaaS Team Onboarding Workspace',
      metadata: {
        role: 'Lead Product Designer',
        timeline: '12 Weeks',
        tools: ['Figma', 'Maze', 'Mixpanel', 'Framer'],
        deliverables: ['Self-Serve Onboarding Flow', 'Design System Onboarding Components', 'Interactive Prototype']
      },
      challenge: 'New enterprise users reported feeling overwhelmed during setup, causing a 42% drop-off before inviting team members.',
      solution: 'Introduced a progressive onboarding wizard with contextual tooltips, role-based setup paths, and real-time team invitation cards.',
      impactMetrics: [
        { label: '7-Day Activation Rate', value: '+31% increase', qualitativeProxy: 'Users reached key workspace milestone in under 3 minutes.' },
        { label: 'Time-to-First-Value', value: 'Reduced by 55%', qualitativeProxy: 'Eliminated 4 unnecessary form steps during initial signup.' },
        { label: 'User Satisfaction (CSAT)', value: '4.8 / 5.0', qualitativeProxy: 'Qualitative testing showed high user enthusiasm for guided setup.' }
      ]
    }
  },
  'fullstack-eng': {
    defaultName: 'David Vance',
    roleTitle: 'Full-Stack Software Engineer & Product Builder',
    targetAudience: 'Engineering Managers, CTOs, Founders looking for end-to-end product delivery',
    keyAchievement: 'Architected and scaled a multi-tenant SaaS backend handling 50k requests/sec at 99.99% uptime.',
    recommendedStack: {
      noCodeOption: {
        name: 'Webflow + Weweb',
        rationale: 'Quick, but completely hides your full-stack capabilities (databases, APIs, security).',
        pros: ['Visually appealing'],
        cons: ['Fails to show backend skills']
      },
      developerOption: {
        name: 'Next.js 15 (App Router) + Tailwind CSS + PostgreSQL/Firebase + Cloud Run',
        rationale: 'Matches your actual daily stack. Demonstrates full-stack capability with live working API routes and dynamic data.',
        pros: ['Demonstrates real full-stack architecture', 'Showcases API integration, auth, and database skills', 'High speed & SEO'],
        cons: ['Requires maintaining server routes and dev setup']
      },
      verdict: 'DEVELOPER OPTION (Next.js 15 / React + Node API). Building your portfolio with real server-side API routes, database integrations, and high-performance front-end interfaces directly validates your full-stack title.'
    },
    heroVariations: [
      {
        id: 1,
        label: 'Full Lifecycle Product Engineer',
        tagline: 'FULL-STACK ENGINEER',
        headline: 'From database schema to smooth pixels. I build production web applications end-to-end.',
        valueProp: 'Combining robust Node/Go/Postgres backend infrastructure with fast React & Tailwind front-end interfaces.',
        subtitle: 'Specializing in multi-tenant SaaS architecture, cloud infrastructure, and responsive web products.',
        primaryCta: 'Explore Full-Stack Work',
        secondaryCta: 'View System Architecture',
        psychologyNote: 'Reassures engineering leaders that you possess both backend depth and front-end polish.'
      },
      {
        id: 2,
        label: 'Startup & Founder Partner',
        tagline: 'SENIOR SOFTWARE ENGINEER',
        headline: 'Turning complex business ideas into scalable, secure software products.',
        valueProp: 'I help tech companies scope, architect, and deploy full-stack web applications with high speed.',
        subtitle: 'Experienced with AWS, Docker, Next.js, GraphQL, PostgreSQL, and high-concurrency microservices.',
        primaryCta: 'View Selected Projects',
        secondaryCta: 'Contact Me',
        psychologyNote: 'Targeted at founders seeking zero-to-one product engineering lead.'
      },
      {
        id: 3,
        label: 'Technical Depth & Speed',
        tagline: 'FULL-STACK DEVELOPER',
        headline: 'Clean architecture. Zero tech debt. Scalable code.',
        valueProp: 'Engineering reliable REST & GraphQL APIs, resilient database schemas, and modern responsive UIs.',
        subtitle: 'Available for full-time senior engineering roles and contract technical advisory.',
        primaryCta: 'Read Case Studies',
        secondaryCta: 'GitHub Profile',
        psychologyNote: 'Direct, developer-to-developer messaging emphasizing code quality and reliability.'
      }
    ],
    aboutNarrative: {
      paragraph1: 'I am a full-stack engineer who thrives in the space where systems engineering meets product UX. Over the past 7 years, I have architected web platforms from early zero-to-one prototypes through scaling phases supporting tens of thousands of active concurrent sessions. I care deeply about writing clean, maintainable code, designing scalable database models, and building bulletproof deployment pipelines.',
      paragraph2: 'My technical stack spans modern TypeScript across front and back ends, relational PostgreSQL / Firestore databases, cloud containers (Docker / Cloud Run / AWS), and CI/CD automation. I believe great full-stack engineers don\'t just write code—they simplify business complexity and deliver measurable ROI.'
    },
    stackCategories: [
      {
        category: 'Backend & Cloud Infrastructure',
        description: 'Server frameworks, databases, and container runtime environments',
        items: [
          { name: 'Node.js / Express / Go', proficiencyContext: 'REST APIs, microservices, websockets, worker queues', yearsOrProjects: '6+ Years', tag: 'Backend' },
          { name: 'PostgreSQL & Firestore', proficiencyContext: 'Relational database schema design, indexing, transactions', yearsOrProjects: '5+ Years', tag: 'Database' },
          { name: 'Docker & Cloud Run / AWS', proficiencyContext: 'Containerization, serverless hosting, IAM security', yearsOrProjects: '4 Years', tag: 'DevOps' }
        ]
      },
      {
        category: 'Front-End Architecture',
        description: 'Client-side UI engineering & state synchronization',
        items: [
          { name: 'React 19 / TypeScript', proficiencyContext: 'Type-safe client applications, custom hooks, SSR', yearsOrProjects: '6+ Years', tag: 'Frontend' },
          { name: 'Tailwind CSS', proficiencyContext: 'Responsive styling, custom theme tokens', yearsOrProjects: '5 Years' },
          { name: 'GraphQL / TanStack Query', proficiencyContext: 'Data caching, optimist UI updates, batching', yearsOrProjects: '4 Years' }
        ]
      }
    ],
    caseStudyTemplate: {
      context: 'Real-Time Analytics Pipeline & Dashboard Infrastructure',
      metadata: {
        role: 'Lead Full-Stack Engineer',
        timeline: '14 Weeks',
        tools: ['Node.js', 'PostgreSQL', 'React', 'Tailwind', 'Docker', 'Redis'],
        deliverables: ['Real-Time Event Ingestion API', 'Interactive Analytics Dashboard', 'Redis Caching Tier']
      },
      challenge: 'Legacy analytics dashboard query times exceeded 8 seconds during peak hours, causing DB locks and server timeouts.',
      solution: 'Redesigned event table indexing, introduced Redis pub/sub for live stream updates, and refactored the frontend dashboard with virtualized data lists.',
      impactMetrics: [
        { label: 'Average Query Latency', value: '180ms (from 8.2s)', qualitativeProxy: 'Dashboard renders instantaneously without loading spinners.' },
        { label: 'System Concurrency', value: '10x increase', qualitativeProxy: 'Handled peak traffic spikes during major product product launches effortlessly.' },
        { label: 'Infrastructure Costs', value: '38% monthly savings', qualitativeProxy: 'Optimized server instance sizes and database query efficiency.' }
      ]
    }
  },
  'cro-specialist': {
    defaultName: 'Elena Rostova',
    roleTitle: 'Growth Engineer & Conversion Rate Specialist',
    targetAudience: 'CMOs, VPs of Growth, E-commerce Directors, B2B Marketing Leads',
    keyAchievement: 'Engineered A/B testing framework that generated $1.4M in incremental annual recurring revenue.',
    recommendedStack: {
      noCodeOption: {
        name: 'Webflow / Framer + VWO',
        rationale: 'Ideal for rapid landing page iterations, visual editing, and running multivariate tests without dev sprint delays.',
        pros: ['Rapid landing page deployment', 'Easy analytics tracking integration', 'Visual editor for marketing team'],
        cons: ['Slightly higher DOM complexity']
      },
      developerOption: {
        name: 'Astro / Next.js + Tailwind CSS',
        rationale: 'Maximum control over Core Web Vitals and custom event telemetry.',
        pros: ['Sub-second landing page speed', 'Complete control over experiment code', 'Zero script bloat'],
        cons: ['Requires developer bandwidth for copy/layout tweaks']
      },
      verdict: 'NO-CODE OR ASTRO (Framer or Astro). Your competitive edge is speed of experimentation and messaging hierarchy. Choose Framer for rapid weekly visual tests, or Astro for technical growth engineering.'
    },
    heroVariations: [
      {
        id: 1,
        label: 'Revenue & Data Centric Hook',
        tagline: 'GROWTH & CONVERSION ARCHITECT',
        headline: 'I turn silent web traffic into predictable recurring revenue.',
        valueProp: 'Data-driven growth engineer specializing in landing page optimization, funnel analysis, and conversion copywriting.',
        subtitle: 'Generated over $4.2M in cumulative revenue lift through systematic UX experimentation and messaging positioning.',
        primaryCta: 'View Conversion Case Studies',
        secondaryCta: 'Audit My Landing Page',
        psychologyNote: 'Instantly frames your value in financial upside and measurable ROI.'
      },
      {
        id: 2,
        label: 'Scientific Experimentation Hook',
        tagline: 'CRO & LANDING PAGE SPECIALIST',
        headline: 'Stop guessing. Start testing. Convert more visitors.',
        valueProp: 'Transforming underperforming websites into high-velocity customer acquisition engines.',
        subtitle: 'Combining cognitive psychology, conversion copywriting, and rapid front-end prototyping.',
        primaryCta: 'See Real Test Results',
        secondaryCta: 'Schedule Strategy Review',
        psychologyNote: 'Appeals to marketing leads frustrated by subjective opinion-based design.'
      },
      {
        id: 3,
        label: 'Full-Funnel Growth Hook',
        tagline: 'GROWTH ENGINEER',
        headline: 'High-converting copy. Lightning-fast pages. Uncompromising ROI.',
        valueProp: 'I help tech companies optimize their key acquisition funnels from ad click to signed contract.',
        subtitle: 'Specializing in B2B SaaS, DTC e-commerce checkout optimization, and lead generation funnels.',
        primaryCta: 'Explore Case Studies',
        secondaryCta: 'Get Free Funnel Breakdown',
        psychologyNote: 'Positions you as a full-funnel partner rather than just a designer.'
      }
    ],
    aboutNarrative: {
      paragraph1: 'I bridge the gap between creative web design and quantitative growth engineering. Over the past 6 years, I have audited, redesigned, and optimized digital funnels for enterprise SaaS and high-volume e-commerce brands. My methodology replaces guesswork with structured hypothesis testing, behavior heatmapping, and rigorous conversion copywriting.',
      paragraph2: 'I believe high conversion rate is never an accident—it is the natural result of clear messaging hierarchy, zero UX friction, ultra-fast page speeds, and continuous user feedback loops. My goal is to help ambitious brands maximize every dollar spent on customer acquisition.'
    },
    stackCategories: [
      {
        category: 'Experimentation & Analytics Engine',
        description: 'Tools for measuring user behavior and running split-tests',
        items: [
          { name: 'Optimizely / VWO / PostHog', proficiencyContext: 'Multi-variate testing, feature flags, statistical significance', yearsOrProjects: '5 Years', tag: 'Testing' },
          { name: 'Google Analytics 4 & Mixpanel', proficiencyContext: 'Funnel drop-off tracking, custom event tagging, attribution', yearsOrProjects: '6 Years', tag: 'Analytics' },
          { name: 'Hotjar & Clarity', proficiencyContext: 'Session recordings, rage-click analysis, scroll heatmaps', yearsOrProjects: '5 Years', tag: 'UX' }
        ]
      },
      {
        category: 'Landing Page & Build Tech',
        description: 'Tools for rapid high-converting landing page execution',
        items: [
          { name: 'Framer / Webflow', proficiencyContext: 'High-converting responsive landing page development', yearsOrProjects: '4 Years', tag: 'NoCode' },
          { name: 'Astro / Tailwind CSS', proficiencyContext: 'Ultra-fast static landing pages with zero JS overhead', yearsOrProjects: '3 Years', tag: 'Dev' }
        ]
      }
    ],
    caseStudyTemplate: {
      context: 'B2B SaaS Free-Trial Landing Page Optimization',
      metadata: {
        role: 'Lead CRO Strategist',
        timeline: '6 Weeks',
        tools: ['PostHog', 'Hotjar', 'Framer', 'Google Analytics 4'],
        deliverables: ['Hero Section Messaging Test', 'Social Proof Wall', 'Interactive Pricing Calculator']
      },
      challenge: 'The existing SaaS landing page suffered from a low 2.1% visitor-to-trial conversion rate due to confused headline positioning and hidden CTA buttons.',
      solution: 'Rewrote hero section headline to focus on immediate ROI, restructured social proof above the fold, and introduced an interactive ROI calculator widget.',
      impactMetrics: [
        { label: 'Free-Trial Conversion', value: '4.8% (128% lift)', qualitativeProxy: 'More than doubled daily signup volume without increasing ad spend.' },
        { label: 'Average Time on Page', value: '+42 seconds', qualitativeProxy: 'Visitors engaged deeply with the interactive ROI calculator.' },
        { label: 'Bounce Rate', value: 'Reduced by 24%', qualitativeProxy: 'Clearer visual framing instantly resonated with target ICP.' }
      ]
    }
  }
};
