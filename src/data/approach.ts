import type { EngagementStage } from "@/domain/content";

export const stages: EngagementStage[] = [
  {
    title: "Requirements identification",
    description:
      "Structured sessions with the client's stakeholders to document processes, users, data sources, constraints and success criteria.",
    output: "Requirements document and agreed scope.",
  },
  {
    title: "Architecture and design",
    description:
      "System architecture, data model, access model and interface design are prepared and reviewed with the client before development starts.",
    output: "Architecture overview, data model and interface design.",
  },
  {
    title: "Development",
    description:
      "Iterative development against the agreed scope, with working increments reviewed by the client during the build.",
    output: "Working system increments and progress reports.",
  },
  {
    title: "Quality assurance",
    description:
      "Functional, access-control and data-integrity testing against the acceptance criteria defined at the start of the engagement.",
    output: "Test results and a list of resolved findings.",
  },
  {
    title: "Implementation",
    description:
      "Deployment to the production environment, data preparation and user onboarding in coordination with the client's team.",
    output: "Live system and user onboarding.",
  },
  {
    title: "Handover and acceptance",
    description:
      "Formal handover of the system and documentation, and written acceptance by the client against the agreed criteria.",
    output: "Handover documentation and acceptance record.",
  },
];

export const retainerTable = {
  columns: ["Component", "Typical coverage", "Defined in the agreement"],
  rows: [
    [
      "Maintenance",
      "Correction of defects and preventive upkeep of the system",
      "Scope, exclusions and response targets",
    ],
    [
      "Enhancements",
      "Agreed changes and additions to the delivered system",
      "Allocation, request process and approval",
    ],
    [
      "Support",
      "A named channel for questions and incident reports",
      "Hours, channel and response targets",
    ],
    [
      "Reporting",
      "Periodic summary of work performed and open items",
      "Frequency and format",
    ],
    [
      "Commercial terms",
      "Fixed periodic fee for the agreed scope",
      "Fee, term, renewal and termination",
    ],
  ],
};

export const contracting = {
  eyebrow: "Procurement and contracting",
  title: "Prepared for institutional procurement.",
  description:
    "Contracts and commercial relationships are managed at holding level by Barito Bahalap Agency to keep standards consistent. Pricing is scoped per engagement and is not published as a fixed list.",
  items: [
    "Written scope of work with measurable deliverables",
    "Milestones linked to formal handover and acceptance",
    "Confidentiality terms covering client data and documents",
    "Retainer scope and service levels documented in the agreement",
    "Support for client-specific procurement and administrative requirements",
  ],
};
