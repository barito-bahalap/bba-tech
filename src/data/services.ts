import type { Service } from "@/domain/content";

export const services: Service[] = [
  {
    id: "enterprise-systems",
    title: "Enterprise and internal systems",
    summary:
      "Information systems built around an organization's own workflows, roles and approval structures.",
    scope: [
      "Requirements analysis and system design",
      "Role-based access and audit-friendly records",
      "Management of documents, programs, members and operational data",
      "Administration interfaces for non-technical staff",
    ],
  },
  {
    id: "operational-dashboards",
    title: "Operational dashboards and reporting",
    summary:
      "Centralized dashboards that consolidate operational data and reduce manual reporting effort.",
    scope: [
      "Data modeling and consolidation from internal sources",
      "Analytical and monitoring views for management and operations",
      "Automated report generation",
      "Access control by unit, role or region",
    ],
  },
  {
    id: "business-automation",
    title: "Business process automation",
    summary:
      "Automation of repetitive administrative and reporting processes that currently depend on manual work.",
    scope: [
      "Process mapping and automation design",
      "Scheduled and event-driven workflows",
      "Validation and exception handling",
      "Operational logs for traceability",
    ],
  },
  {
    id: "custom-software",
    title: "Custom software",
    summary:
      "Purpose-built applications and platforms where off-the-shelf products do not fit local or organizational conditions.",
    scope: [
      "Web-based applications and platforms",
      "Solutions adapted to local market and operating conditions",
      "Responsive interfaces for desktop and mobile use",
      "Source code and documentation handed over per contract",
    ],
  },
  {
    id: "system-integration",
    title: "System integration",
    summary:
      "Connection of existing platforms, data sources and tools so that information moves without re-entry.",
    scope: [
      "Integration design and data mapping",
      "API and file-based data exchange",
      "Migration from spreadsheets and legacy tools",
      "Testing against agreed acceptance criteria",
    ],
  },
  {
    id: "ux-design",
    title: "Interface and experience design",
    summary:
      "Interface design for operational systems, focused on clarity, task completion and low training overhead.",
    scope: [
      "Workflow and screen design",
      "Design consistency across modules",
      "Usability review with the client's staff",
      "Accessibility and mobile considerations",
    ],
  },
  {
    id: "support-retainers",
    title: "Long-term technical support and retainers",
    summary:
      "Continuous maintenance, correction and enhancement of delivered systems under a defined service agreement.",
    scope: [
      "Corrective and preventive maintenance",
      "Scheduled enhancements and change requests",
      "Support channel with agreed response targets",
      "Periodic service reporting",
    ],
  },
];

export const technologyCategories = [
  {
    category: "Application layer",
    description:
      "Modern web application frameworks, typed codebases and component-based interfaces.",
  },
  {
    category: "Data layer",
    description:
      "Managed relational and document data stores with role-based access policies.",
  },
  {
    category: "Hosting and delivery",
    description: "Managed cloud hosting with automated deployment pipelines.",
  },
  {
    category: "Integration",
    description:
      "REST interfaces, scheduled data exchange and file-based import and export.",
  },
];
