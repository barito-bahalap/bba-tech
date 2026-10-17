export interface NavLink {
  label: string;
  href: string;
  section?: string;
}

export interface FooterGroup {
  title: string;
  links: NavLink[];
}

export interface PageSeo {
  title: string;
  description: string;
}

export interface SiteIdentity {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
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

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
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

export interface CaseLabels {
  client: string;
  context: string;
  solution: string;
  role: string;
  engagement: string;
  outcome: string;
}

export interface EngagementStage {
  title: string;
  description: string;
  output: string;
}

export interface TableContent {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalPageContent {
  title: string;
  description: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}

export interface Option {
  value: string;
  label: string;
}

export type InquiryType = Option;

export interface ContactValues {
  name: string;
  organization: string;
  orgType: string;
  role: string;
  email: string;
  inquiryType: string;
  timeline: string;
  message: string;
  consent: boolean;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export interface FormCopy {
  labels: {
    name: string;
    organization: string;
    orgType: string;
    role: string;
    email: string;
    inquiryType: string;
    timeline: string;
    message: string;
    select: string;
  };
  errors: {
    name: string;
    organization: string;
    email: string;
    inquiryType: string;
    message: string;
    consent: string;
  };
  submit: string;
  statusIdle: string;
  statusPrepared: string;
  mail: {
    subjectPrefix: string;
    name: string;
    organization: string;
    orgType: string;
    role: string;
    email: string;
    inquiryType: string;
    timeline: string;
  };
}

export interface UiContent {
  skipToContent: string;
  menu: { open: string; close: string; primaryNav: string; mobileNav: string };
  language: { label: string };
  footer: { operatingBrand: string; rights: string };
  caseLabels: CaseLabels;
  form: FormCopy;
  notFound: {
    seoTitle: string;
    code: string;
    title: string;
    sub: string;
    homeCta: string;
  };
}

export interface MainContent {
  site: SiteIdentity;
  hero: HeroContent;
  services: { intro: SectionIntro; items: Service[] };
  caseStudies: {
    intro: SectionIntro;
    items: CaseStudy[];
    note: string;
    cta: NavLink;
  };
  work: {
    seo: PageSeo;
    intro: SectionIntro;
    overview: { intro: SectionIntro; caption: string; columns: string[] };
    detailsIntro: SectionIntro;
    patternsTitle: string;
    patterns: TitledItem[];
  };
  howWeWork: {
    intro: SectionIntro;
    stages: EngagementStage[];
    principlesTitle: string;
    principles: TitledItem[];
    compliance: TableContent;
  };
  engagement: {
    intro: SectionIntro;
    models: TitledItem[];
    retainer: TableContent;
    procurement: { title: string; note: string; items: string[] };
  };
  about: {
    seo: PageSeo;
    intro: SectionIntro;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    valuesTitle: string;
    values: TitledItem[];
  };
  contact: {
    intro: SectionIntro;
    includeTitle: string;
    includeList: string[];
    inquiryTypes: Option[];
    orgTypes: Option[];
    timelines: Option[];
    consentText: string;
    emailLabel: string;
  };
  careers: {
    seo: PageSeo;
    intro: SectionIntro;
    areasTitle: string;
    areas: string[];
    includeTitle: string;
    include: string[];
    note: string;
    cta: string;
    mailSubject: string;
  };
  ctaBand: { title: string; description: string; cta: NavLink };
}

export interface TechContent extends MainContent {
  privacy: LegalPageContent;
  terms: LegalPageContent;
  ui: UiContent;
  footerGroups: FooterGroup[];
}
