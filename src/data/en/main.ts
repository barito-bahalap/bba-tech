import type { MainContent } from "@/domain/content";

// TODO(consent): Telkom, AMPI Kalteng and E-Palugada need written permission
// before launch. If Telkom has not approved being named, replace `client` with
// "A national state-owned telecommunications enterprise" and `location` with "East Java".
// TODO(verify): confirm each status and the retainer wording below.
// TODO(placeholder): about.facts "Legal entity" must be filled before launch.

export const mainEn: MainContent = {
  site: {
    name: "Barito Bahalap Tech",
    shortName: "BBT",
    tagline: "Digital infrastructure and enterprise systems",
    description:
      "Barito Bahalap Tech (BBT) designs, builds and maintains enterprise systems, operational dashboards and business automation for corporations, state-owned enterprises and public institutions, supported by long-term service agreements.",
    url: "https://tech.baritobahalap.com",
    locale: "en_US",
    holdingName: "Barito Bahalap Agency",
    holdingUrl: "https://baritobahalap.com",
    location: "Palangka Raya, Central Kalimantan, Indonesia",
    email: "info@baritobahalap.com",
    founder: "Basilius Tengang",
    foundingYear: 2026,
  },

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Case studies", href: "/#case-studies" },
    { label: "How we work", href: "/#how-we-work" },
    { label: "About", href: "/#about" },
    { label: "Careers", href: "/#careers" },
  ],

  headerCta: { label: "Request a consultation", href: "/#consultation" },

  footerGroups: [
    {
      title: "Company",
      links: [
        { label: "Services", href: "/#services" },
        { label: "Case studies", href: "/#case-studies" },
        { label: "How we work", href: "/#how-we-work" },
        { label: "Engagement models", href: "/#engagement" },
        { label: "About", href: "/#about" },
        { label: "Careers", href: "/#careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms of use", href: "/terms" },
      ],
    },
    {
      title: "Contact",
      links: [{ label: "Request a consultation", href: "/#consultation" }],
    },
  ],

  hero: {
    eyebrow: "Barito Bahalap Tech",
    title:
      "Digital infrastructure for organizations that run on reliable systems.",
    description:
      "We design, build and maintain enterprise systems, operational dashboards and business automation for corporations, state-owned enterprises and public institutions. Every system is delivered under a clear scope and supported over the long term.",
    primaryCta: { label: "Request a consultation", href: "/#consultation" },
    secondaryCta: { label: "View case studies", href: "/#case-studies" },
    facts: [
      { label: "Focus", value: "Enterprise and internal systems" },
      { label: "Engagement", value: "Project delivery with retainer support" },
      { label: "Based in", value: "Palangka Raya, Central Kalimantan" },
    ],
  },

  services: {
    intro: {
      eyebrow: "Services",
      title: "Technology services built around operations.",
      description:
        "Each service is scoped to a defined business need, delivered against agreed acceptance criteria and, where the system is operational, supported under a continuing agreement.",
    },
    items: [
      {
        id: "enterprise-systems",
        title: "Enterprise and internal systems",
        summary:
          "Information systems built around your organization's own workflows, roles and approval structures.",
      },
      {
        id: "operational-dashboards",
        title: "Operational dashboards and reporting",
        summary:
          "Centralized dashboards that consolidate operational data and reduce manual reporting effort.",
      },
      {
        id: "business-automation",
        title: "Business process automation",
        summary:
          "Automation of repetitive administrative and reporting processes that currently depend on manual work.",
      },
      {
        id: "custom-software",
        title: "Custom software",
        summary:
          "Purpose-built applications and platforms where off-the-shelf products do not fit local or organizational conditions.",
      },
      {
        id: "system-integration",
        title: "System integration",
        summary:
          "Connection of existing platforms, data sources and tools so that information moves without re-entry.",
      },
      {
        id: "support-retainers",
        title: "Long-term technical support and retainers",
        summary:
          "Continuous maintenance, correction and enhancement of delivered systems under a defined service agreement.",
      },
    ],
  },

  caseStudies: {
    intro: {
      eyebrow: "Case studies",
      title: "Systems in operation under continuing support.",
      description: "Three engagements BBT is able to describe publicly.",
    },
    items: [
      {
        id: "rso2-telkom-dashboard",
        name: "RSO2 Telkom Dashboard",
        client: "PT Telkom Indonesia (Regional 3)",
        location: "Surabaya, East Java",
        category: "Operational dashboard and report automation",
        context:
          "A need for a dashboard to support the central monitoring and management of operational information.",
        solution:
          "An analytical and operational dashboard designed around the client's internal workflows and data requirements, together with automated reporting.",
        role: "System design, development and maintenance by BBT.",
        engagement:
          "Recurring retainer for continued development and maintenance.",
        status: "In active operation",
      },
      {
        id: "e-palugada",
        name: "E-Palugada",
        client: "E-Palugada",
        location: "Kasongan, Central Kalimantan",
        category: "Custom delivery platform",
        context:
          "National-scale delivery platforms offer limited coverage in the Kasongan area, creating a need for a solution suited to the local market.",
        solution:
          "A web-based delivery platform designed specifically for the characteristics and requirements of the local market.",
        role: "System design and development by BBT.",
        engagement:
          "Recurring retainer for continued development and maintenance.",
        status: "In active operation",
      },
      {
        id: "ampi-kalteng",
        name: "Official Website AMPI Kalteng",
        client: "AMPI Kalimantan Tengah",
        location: "Central Kalimantan",
        category: "Organizational information and management platform",
        context:
          "A need for a central platform to manage organizational information, work programs, publications and public interaction.",
        solution:
          "An all-in-one web platform covering organizational information, programs, news, documents, media, partnership registration and public submissions.",
        role: "System design and development by BBT.",
        engagement:
          "Recurring retainer for continued development and maintenance.",
        status: "Delivered",
        outcome:
          "A single platform through which the organization manages institutional information and public interaction digitally.",
      },
    ],
    note: "The projects listed here are the engagements BBT is able to describe publicly. Further references and project documentation can be provided during procurement, subject to client consent.",
  },

  howWeWork: {
    intro: {
      eyebrow: "How we work",
      title: "Defined stages, documented governance.",
      description:
        "Each engagement follows the same stages, so the client knows what will be delivered, when it will be reviewed and how it will be accepted.",
    },
    stages: [
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
    ],
    principlesTitle: "Security and data governance",
    principles: [
      {
        title: "Confidentiality",
        description:
          "Client information and project documents are accessed only by personnel directly involved in the engagement, and confidentiality terms are set out in each contract.",
      },
      {
        title: "Data isolation",
        description:
          "Project data and client materials are stored and accessed within BBT. They are not shared with other BBA operating units unless the client gives explicit approval.",
      },
      {
        title: "Access control",
        description:
          "Systems are designed with role-based access so that each user sees only the information their function requires.",
      },
      {
        title: "Defined accountability",
        description:
          "Technical decisions on architecture, development approach and maintenance priorities rest with the BBT Delivery Lead. Contracts, finance and legal compliance are overseen at holding level.",
      },
    ],
    compliance: {
      caption: "Compliance position",
      columns: ["Area", "Position"],
      rows: [
        [
          "Personal data protection",
          "Handled in line with Law No. 27 of 2022 on Personal Data Protection. Processing roles and responsibilities are set out in the client agreement.",
        ],
        [
          "Confidentiality",
          "Contractual confidentiality applies to client data and documents, including between BBA operating units.",
        ],
        [
          "Certifications",
          "BBT does not currently hold or claim any formal security certification.",
        ],
        [
          "Client security requirements",
          "Client-specific policies and review requirements can be addressed during scoping.",
        ],
      ],
    },
  },

  engagement: {
    intro: {
      eyebrow: "Engagement models",
      title: "From delivery to continuity.",
      description:
        "A project establishes the system. A retainer keeps it accurate, secure and aligned with how the organization works, without opening a new procurement cycle for every change.",
    },
    models: [
      {
        title: "Project",
        description:
          "A new system or a major change, with written scope, deliverables and acceptance criteria.",
      },
      {
        title: "Retainer",
        description:
          "Continued maintenance and development of an operating system, for a fixed periodic fee covering an agreed scope.",
      },
      {
        title: "Support with SLA",
        description:
          "Support for a system already in operation, with a channel, service hours and response targets agreed in writing.",
      },
    ],
    retainer: {
      caption: "Retainer structure",
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
    },
    procurement: {
      title: "Prepared for institutional procurement.",
      note: "Contracts and commercial relationships are managed at holding level by Barito Bahalap Agency to keep standards consistent. Pricing is scoped per engagement and is not published as a fixed list.",
      items: [
        "Written scope of work with measurable deliverables",
        "Milestones linked to formal handover and acceptance",
        "Confidentiality terms covering client data and documents",
        "Retainer scope and service levels documented in the agreement",
        "Support for client-specific procurement and administrative requirements",
      ],
    },
  },

  about: {
    intro: {
      eyebrow: "About",
      title: "The technology division of Barito Bahalap Agency.",
    },
    paragraphs: [
      "Barito Bahalap Tech (BBT) is the operating brand of Barito Bahalap Agency for technology and digital infrastructure, based in Palangka Raya, Central Kalimantan.",
      "BBT is currently small and led directly by its founder, who is responsible for the architecture, development and handover of every project. The team grows gradually as engagements require.",
      "We prefer to build fewer systems and maintain them well, rather than deliver many one-off projects.",
    ],
    facts: [
      { label: "Operating brand of", value: "Barito Bahalap Agency" },
      { label: "Founder", value: "Basilius Tengang" },
      { label: "Based in", value: "Palangka Raya, Central Kalimantan" },
      { label: "Established", value: "2026" },
      {
        label: "Legal entity",
        value: "[FILL BEFORE LAUNCH: legal form and registration status]",
      },
    ],
  },

  contact: {
    intro: {
      eyebrow: "Consultation",
      title: "Request a consultation.",
      description:
        "Describe the requirement in a few sentences. We respond with the next step and any information needed to define the scope.",
    },
    includeTitle: "What to include",
    includeList: [
      "The organization and your role",
      "The process or system concerned",
      "Who will use it, and roughly how many users",
      "Existing tools or data sources involved",
      "Target timeline and approximate budget range, if any",
      "Procurement route, if known (direct appointment, tender, etc.)",
    ],
    inquiryTypes: [
      { value: "new-system", label: "New system or application" },
      { value: "dashboard", label: "Dashboard or reporting" },
      { value: "automation", label: "Business process automation" },
      { value: "integration", label: "System integration or migration" },
      {
        value: "support",
        label: "Support or retainer for an existing system",
      },
      { value: "other", label: "Other" },
    ],
    orgTypes: [
      { value: "bumn-bumd", label: "State-owned / regional-owned enterprise" },
      { value: "government", label: "Government / public institution" },
      { value: "corporate", label: "Corporate / private sector" },
      { value: "association", label: "Organization / association" },
      { value: "other", label: "Other" },
    ],
    timelines: [
      { value: "urgent", label: "Urgent (under 1 month)" },
      { value: "1-3-months", label: "1 to 3 months" },
      { value: "3-6-months", label: "3 to 6 months" },
      { value: "planning", label: "Still planning" },
    ],
    consentText:
      "I agree that my details will be used to respond to this inquiry, as described in the privacy policy.",
    emailLabel: "Email",
  },

  workWithUs: {
    intro: {
      eyebrow: "Careers",
      title: "Work with us.",
      description:
        "BBT is at an early stage and grows its team gradually as engagements require. There are no open positions at this time.",
    },
    areasTitle: "Areas where we grow",
    areas: [
      "Software development",
      "Quality assurance and deployment",
      "Interface and experience design",
      "Delivery and solution architecture",
    ],
    note: "If your experience fits one of these areas, you are welcome to introduce yourself. Introductions are reviewed when a relevant need arises.",
    cta: "Introduce yourself",
    mailSubject: "BBT careers: expression of interest",
  },
};
