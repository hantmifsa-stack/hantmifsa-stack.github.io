export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  motto?: string;
  avatarUrl?: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  experienceYears: number;
  completedProjects: number;
  clientSatisfaction: number;
  openSourceContributions: number;
}

export type ProjectCategory = 'semua' | 'edukasi-informatika' | 'laravel-mysql' | 'fullstack-api' | 'saas-system';

export interface ModelGuruSection {
  title: string;
  badge: string;
  content: string;
  points: string[];
}

export interface FilosofiSection {
  title: string;
  quote: string;
  corePrinciple: string;
  description: string;
  pillars: {
    title: string;
    explanation: string;
  }[];
}

export interface RefleksiAspect {
  dimension: string;
  title: string;
  strengths: string[];
  weaknesses: string[];
  keyInsight: string;
}

export interface RencanaTindakLanjutItem {
  area: string;
  action: string;
  targetMethod: string;
  expectedOutcome: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  laravelVersion: string;
  database: string;
  architectureHighlights: string[];
  role: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  level: 'Mahir' | 'Menengah' | 'Berpengalaman';
  description: string;
  tags?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education' | 'certification';
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
  popularBadge?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectRelation: string;
}
