export type IndustryRole = 
  | 'frontend-dev'
  | 'product-designer'
  | 'fullstack-eng'
  | 'cro-specialist'
  | 'creative-dev'
  | 'custom';

export type DesignAesthetic = 
  | 'minimalist-text'
  | 'editorial-typographic'
  | 'dark-tech'
  | 'clean-saas'
  | 'high-impact-visual';

export type TechnicalSkill = 
  | 'code-scratch-astro'
  | 'code-scratch-next'
  | 'drag-drop-framer'
  | 'drag-drop-webflow'
  | 'hybrid-react';

export interface UserConfig {
  role: IndustryRole;
  customRole: string;
  aesthetic: DesignAesthetic;
  skillLevel: TechnicalSkill;
  userName: string;
  keyAchievement: string;
  targetAudience: string;
}

export interface HeroVariation {
  id: number;
  label: string;
  tagline: string;
  headline: string;
  valueProp: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  psychologyNote: string;
}

export interface CaseStudyTemplate {
  context: string;
  metadata: {
    role: string;
    timeline: string;
    tools: string[];
    deliverables: string[];
  };
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    qualitativeProxy: string;
  }[];
}

export interface StackCategory {
  category: string;
  description: string;
  items: {
    name: string;
    proficiencyContext: string;
    yearsOrProjects: string;
    tag?: string;
  }[];
}
