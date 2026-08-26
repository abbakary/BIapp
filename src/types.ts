export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Executive' | 'Finance' | 'Supply Chain & Sales' | 'Healthcare' | 'Corporate Training' | 'Retail & Supply Chain' | string;
  impactBadge: string;
  description?: string;
  imageUrl?: string;
  daxSnippet?: {
    name: string;
    code: string;
    description: string;
  };
  schemaSummary?: {
    factTable: string;
    dimensionTables: string[];
    refreshRate: string;
    cardinality: string;
  };
  tags: string[];
  clientIndustry: string;
  deliveryTime: string;
  problem: string;
  solution: string;
  results: string[];
  kpis: {
    label: string;
    value: string;
    trend: string;
    isPositive: boolean;
  }[];
  chartType: 'sales' | 'finance' | 'supply' | 'health' | 'workforce' | string;
  demoData: {
    filterOptions: string[];
    defaultFilter: string;
    metricSeries: {
      name: string;
      value: number;
      target: number;
      secondary?: number;
    }[];
  };
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingData {
  id?: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  organization: string;
  companySize: string;
  currentDataStack: string[];
  projectScope: string;
  createdAt?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  metric: string;
}
