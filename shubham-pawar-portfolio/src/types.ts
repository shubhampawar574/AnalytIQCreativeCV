export interface TimelineItem {
  id: string;
  year: string;
  period?: string;
  title: string;
  subtitle: string;
  category: 'education' | 'experience' | 'leadership' | 'achievement';
  metric?: string;
  description: string;
  bullets: string[];
  skills: string[];
  location?: string;
}

export interface SAPMetric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  iconName: string;
  category: string;
}

export interface SAPPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  metricsHighlighted: string[];
  icon: string;
}

export interface CapabilityNode {
  id: string;
  title: string;
  category: 'Problem Solving' | 'Stakeholder Management' | 'Leadership' | 'Analytics' | 'Communication';
  steps: string[];
  cvProofTitle: string;
  cvProofDetail: string;
  impactMetric?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  organization?: string;
  period?: string;
  problem: string;
  approachBullets: string[];
  pipelineSteps: string[];
  results: string[];
  tags: string[];
  type: 'academic' | 'internship';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  location?: string;
  highlights: string[];
  status?: 'Current' | 'Completed';
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  context: string;
  description: string;
  category: 'Exam' | 'Corporate' | 'Sports';
  highlightBadge?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  footfallOrScale?: string;
  summary: string;
  responsibilities: string[];
  impactMetrics: string[];
}

export interface CertificationCourse {
  id: string;
  title: string;
  provider?: string;
  topics: string[];
  frameworks: string[];
  icon: string;
}

export interface SkillCategory {
  categoryName: 'Business' | 'Technology' | 'Analytics' | 'Professional';
  skills: { name: string; tag: string; icon?: string }[];
}

export interface SportySkill {
  sportSkill: string;
  businessAnalogy: string;
  cvContext: string;
  icon: string;
}
