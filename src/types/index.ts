// Navigation types
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

// Project types
export interface TechBadge {
  label: string;
  color?: "default" | "blue" | "green" | "orange" | "purple" | "red" | "yellow";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  featured?: boolean;
  status: "live" | "in-progress" | "archived";
  architectureTags: string[];
  techStack: TechBadge[];
  githubUrl?: string;
  liveUrl?: string;
  systemDesign?: SystemDesignFlow;
  metrics?: ProjectMetric[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

// System Design types
export interface SystemDesignFlow {
  title: string;
  nodes: FlowNode[];
  description?: string;
}

export interface FlowNode {
  id: string;
  label: string;
  sublabel?: string;
  type: "input" | "process" | "database" | "output" | "service" | "event";
  children?: string[];
}

// Tech Stack types
export interface TechCategory {
  id: string;
  label: string;
  icon: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  level?: "expert" | "proficient" | "learning";
  icon?: string;
}

// Experience types
export interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  type: "work" | "project" | "education" | "milestone";
  period: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

// Contact types
export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  type: "email" | "github" | "linkedin" | "resume";
}

// Dashboard metric types
export interface DashboardMetric {
  label: string;
  value: string;
  icon: string;
  description?: string;
}

// Currently building types
export interface CurrentFocus {
  id: string;
  title: string;
  description: string;
  status: "active" | "planning" | "learning";
  progress?: number;
}
