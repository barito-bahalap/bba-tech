import type { HeroContent } from "@/domain/content";

export const hero: HeroContent = {
  eyebrow: "Barito Bahalap Tech",
  title:
    "Digital infrastructure for organizations that run on reliable systems.",
  description:
    "We design, build and maintain enterprise systems, operational dashboards and business automation for corporations, state-owned enterprises and public institutions. Every system is delivered under a clear scope and supported over the long term.",
  primaryCta: { label: "Request a consultation", href: "/contact" },
  secondaryCta: { label: "View track record", href: "/track-record" },
  facts: [
    { label: "Focus", value: "Enterprise and internal systems" },
    { label: "Engagement", value: "Project delivery with retainer support" },
    { label: "Based in", value: "Palangka Raya, Central Kalimantan" },
  ],
};

export const homeIntro = {
  eyebrow: "What we do",
  title: "Systems that support daily operations, maintained after go-live.",
  description:
    "BBT works with organizations that need dependable internal systems rather than one-off websites. Scope, ownership and support terms are defined in contract before work begins.",
};

export const homeServiceIds = [
  "enterprise-systems",
  "operational-dashboards",
  "business-automation",
  "custom-software",
  "system-integration",
  "support-retainers",
];

export const homeEngagement = {
  eyebrow: "Engagement model",
  title: "From delivery to continuity.",
  description:
    "A project establishes the system. A retainer keeps it accurate, secure and aligned with how the organization works, without opening a new procurement cycle for every change.",
  points: [
    "Defined scope, deliverables and acceptance criteria",
    "Structured handover with documentation",
    "Retainer scope and service levels agreed in writing",
    "Contracting and compliance managed at holding level",
  ],
};

export const homeGovernance = {
  eyebrow: "Governance",
  title: "Operated under a documented governance framework.",
  description:
    "BBT is an operating brand of Barito Bahalap Agency. Client data, teams and decisions are handled within BBT and are not shared with other BBA operating units without the client's explicit approval.",
};

export const ctaBand = {
  title:
    "Discuss a system, a reporting need or an existing platform that needs support.",
  description:
    "Share a short description of the requirement. We respond with the next step and the information needed to scope it.",
  primary: { label: "Request a consultation", href: "/contact" },
  secondary: { label: "Review our approach", href: "/approach" },
};
