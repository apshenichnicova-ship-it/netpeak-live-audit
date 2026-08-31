export interface CaseStudy {
  id: string;
  client: string;
  logoText?: string;
  logoUrl?: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  badge: string;
  link: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  verified: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  clients: string[];
  avatarUrl: string;
  tags: string[];
}

export interface Bottleneck {
  number: number;
  title: string;
  description: string;
  category: string;
  lossMetric: string;
}

export interface AuditStage {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  stepNumber: number;
  duration: string;
  title: string;
  description: string;
  tag: string;
}

export interface BookingFormData {
  email: string;
  phone: string;
  siteUrl: string;
  espSystem: string;
}
