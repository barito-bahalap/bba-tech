export interface NavLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: NavLink[];
}

export interface SiteIdentity {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  holdingName: string;
  holdingUrl: string;
  location: string;
  email: string;
  founder: string;
  foundingYear: number;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  facts: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  scope: string[];
}

export interface CaseStudy {
  id: string;
  name: string;
  client: string;
  location: string;
  category: string;
  context: string;
  solution: string;
  role: string;
  engagement: string;
  status: string;
  outcome?: string;
}

export interface EngagementStage {
  title: string;
  description: string;
  output: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

export interface InquiryType {
  value: string;
  label: string;
}

export interface ContactValues {
  name: string;
  organization: string;
  role: string;
  email: string;
  inquiryType: string;
  message: string;
  consent: boolean;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
