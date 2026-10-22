import type { MainContent } from "@/domain/content";

export const mainEn: MainContent = {
  site: {
    name: "Barito Bahalap Tech",
    shortName: "BBT",
    tagline: "Software for organizations",
    description:
      "Barito Bahalap Tech (BBT) builds dashboards, internal applications, platforms, and automation for corporations, state-owned enterprises, and public institutions. From scratch to live, then maintained.",
    url: "https://tech.baritobahalap.com",
    locale: "en_US",
    holdingName: "Barito Bahalap Agency",
    holdingUrl: "https://baritobahalap.com",
    location: "Palangka Raya, Central Kalimantan, Indonesia",
    email: "info@baritobahalap.com",
    founder: "Basilius Tengang",
    foundingYear: 2026,
  },

  hero: {
    eyebrow: "Barito Bahalap Tech",
    title: "Still doing it by hand? We'll turn it into a system.",
    description:
      "We build operational dashboards, delivery platforms for local markets, and organizational portals. From idea to live, and we keep maintaining it.",
    primaryCta: {
      label: "Contact us",
      href: "/",
      section: "consultation",
    },
    secondaryCta: { label: "View portfolio", href: "/work" },
    facts: [
      {
        label: "We build",
        value: "Dashboards, apps, platforms, automation, custom software",
      },
      {
        label: "Clients",
        value:
          "Corporations, state-owned enterprises, organizations, individuals",
      },
      { label: "Based in", value: "Palangka Raya, Central Kalimantan" },
    ],
  },

  services: {
    intro: {
      eyebrow: "Services",
      title: "What we can build for you.",
      description:
        "From a single dashboard to a system that connects many parts of an organization. Once it's live, we keep maintaining it.",
    },
    items: [
      {
        id: "enterprise-systems",
        title: "Enterprise and internal systems",
        summary:
          "Systems that follow the way your organization works, with user roles and approval flows built in.",
      },
      {
        id: "operational-dashboards",
        title: "Operational dashboards",
        summary:
          "All the key data on one screen. Reports put themselves together without manual compilation.",
      },
      {
        id: "business-automation",
        title: "Business process automation",
        summary:
          "Repetitive administrative work is handled by the system, so your team can focus on other things.",
      },
      {
        id: "custom-software",
        title: "Custom software",
        summary:
          "Applications and platforms built to order when off-the-shelf products are not a good fit.",
      },
      {
        id: "support-retainers",
        title: "Maintenance",
        summary:
          "Systems that are already running keep getting fixed and improved as your needs change.",
      },
    ],
  },

  caseStudies: {
    intro: {
      eyebrow: "Work",
      title: "Already live in production.",
      description: "Three systems we can show openly.",
    },
    items: [
      {
        id: "rso2-telkom-dashboard",
        name: "RSO2 Telkom Dashboard",
        client: "PT Telkom Indonesia",
        location: "Surabaya, East Java",
        category: "Operational dashboard and report automation",
        context:
          "The client needed a single dashboard to monitor and manage operational information.",
        solution:
          "An analytics and operations dashboard built around the client's internal workflows and data. Reporting runs automatically.",
        role: "System design, development, and maintenance by BBT.",
        engagement:
          "Recurring retainer for ongoing development and maintenance.",
        status: "Live",
      },
      {
        id: "e-palugada",
        name: "E-Palugada",
        client: "E-Palugada",
        location: "Kasongan, Central Kalimantan",
        category: "Custom delivery platform",
        context:
          "National delivery platforms have limited reach in Kasongan. The local market needed a solution of its own.",
        solution:
          "A web-based delivery platform designed around the character and needs of the local market.",
        role: "System design and development by BBT.",
        engagement:
          "Recurring retainer for ongoing development and maintenance.",
        status: "Live",
      },
      {
        id: "ampi-kalteng",
        name: "AMPI Kalteng Official Website",
        client: "DPD AMPI Kalteng",
        location: "Palangka Raya, Central Kalimantan",
        category: "Organizational information and management platform",
        context:
          "The organization needed one place to manage its information, programs, publications, and interaction with the public.",
        solution:
          "A web platform covering organizational information, programs, news, documents, media, partner registration, and public feedback.",
        role: "System design and development by BBT.",
        engagement:
          "Recurring retainer for ongoing development and maintenance.",
        status: "Live",
        outcome:
          "Institutional information and public interaction are now managed in a single platform.",
      },
    ],
    note: "Additional references and documentation can be provided during procurement, with the client's consent.",
    cta: { label: "View all work", href: "/work" },
  },

  work: {
    seo: {
      title: "Work and track record",
      description:
        "Systems built by Barito Bahalap Tech: RSO2 Telkom Dashboard, E-Palugada, and the official AMPI Kalteng website.",
    },
    intro: {
      eyebrow: "Work",
      title: "Three systems we built and maintain.",
      description:
        "Each entry covers what we did, BBT's role, and what happens after handover.",
    },
    overview: {
      intro: { eyebrow: "Overview", title: "Three systems at a glance." },
      caption: "Work overview",
      columns: ["Project", "Client", "Category", "Status"],
    },
    detailsIntro: { eyebrow: "Details", title: "Project details." },
    patternsTitle: "What stays the same on every project",
    patterns: [
      {
        title: "Built around how the client works",
        description:
          "Systems are fitted to the client's processes, roles, and data. Clients don't have to change how they work to suit the system.",
      },
      {
        title: "Clear scope",
        description:
          "Work is delivered against an agreed scope and acceptance criteria.",
      },
      {
        title: "Continues after completion",
        description:
          "After handover, development and maintenance carry on at a regular rhythm.",
      },
    ],
  },

  howWeWork: {
    intro: {
      eyebrow: "How we work",
      title: "Six stages from requirements to handover.",
      description:
        "Clients always know what they will receive, when to review it, and how to approve it.",
    },
    stages: [
      {
        title: "Requirements",
        description:
          "We talk with the people involved to understand the process, the users, the data, and what success looks like.",
        output: "Requirements document and agreed scope.",
      },
      {
        title: "Architecture and design",
        description:
          "System structure, data, access rights, and interface are prepared and reviewed together before development starts.",
        output: "System architecture, data model, and interface design.",
      },
      {
        title: "Development",
        description:
          "The system is built in stages. Clients see the results at each stage, not only at the end.",
        output: "Staged deliverables and progress reports.",
      },
      {
        title: "Quality assurance",
        description:
          "We test functionality, access control, and data integrity against criteria set at the start.",
        output: "Test results and a list of resolved findings.",
      },
      {
        title: "Implementation",
        description:
          "The system is deployed to production. Data is prepared and users are onboarded together with the client's team.",
        output: "Live system and user onboarding.",
      },
      {
        title: "Handover and acceptance",
        description:
          "The system and its documentation are formally handed over. The client confirms acceptance in writing.",
        output: "Handover documentation and acceptance report.",
      },
    ],
    principlesTitle: "Security and data",
    principles: [
      {
        title: "Confidentiality",
        description:
          "Only the people working on the project can access client information.",
      },
      {
        title: "Data stays with the client",
        description:
          "Project data and materials are not shared with anyone else without the client's explicit consent.",
      },
      {
        title: "Role-based access",
        description:
          "Each user sees only the information needed for their tasks.",
      },
    ],
    compliance: {
      caption: "Compliance position",
      columns: ["Area", "Position"],
      rows: [
        [
          "Personal data protection",
          "Follows Law No. 27 of 2022 on Personal Data Protection. Data processing roles and responsibilities are set out in the agreement with the client.",
        ],
        [
          "Confidentiality",
          "Contractual confidentiality applies to all client data and documents.",
        ],
        [
          "Client security requirements",
          "Client-specific policies and review requirements can be discussed when the scope is defined.",
        ],
      ],
    },
  },

  engagement: {
    intro: {
      eyebrow: "What we can build",
      title: "Built for whoever uses it.",
      description:
        "A good system is designed from its users' point of view. These are the three directions we work in most often.",
    },
    models: [
      {
        title: "For internal teams",
        description:
          "Monitoring dashboards, approval apps, and reports that put themselves together.",
      },
      {
        title: "For customers and the public",
        description:
          "Service platforms, information portals, and online registration that are easy to use.",
      },
      {
        title: "For daily operations",
        description:
          "Automation of repetitive tasks and integration between systems so data moves on its own.",
      },
    ],
    retainer: {
      caption: "Support after handover",
      columns: ["Component", "Typical scope", "Set out in the agreement"],
      rows: [
        [
          "Maintenance",
          "Defect fixes and preventive upkeep",
          "Scope, exclusions, and response targets",
        ],
        [
          "Ongoing development",
          "Agreed changes and additions to the system",
          "Allocation, request process, and approval",
        ],
        [
          "Support",
          "A dedicated channel for questions and incident reports",
          "Service hours, channel, and response targets",
        ],
        [
          "Commercial terms",
          "A fixed periodic fee for the agreed scope",
          "Fees, term, renewal, and termination",
        ],
      ],
    },
    procurement: {
      title: "Ready for institutional procurement.",
      note: "Contracts are managed by Barito Bahalap Agency. Pricing is set per project and is not published as a fixed price list.",
      items: [
        "A written statement of work with measurable deliverables",
        "Payment terms tied to handover and formal acceptance",
        "Confidentiality terms covering client data and documents",
        "Retainer scope and service levels written into the agreement",
      ],
    },
  },

  about: {
    seo: {
      title: "About BBT",
      description:
        "Barito Bahalap Tech builds and maintains digital systems for organizations from Palangka Raya, Central Kalimantan.",
    },
    intro: {
      eyebrow: "About",
      title: "A technology team from Palangka Raya.",
    },
    paragraphs: [
      "Barito Bahalap Tech (BBT) builds the systems organizations use every day: dashboards, internal applications, automation, and integrations. We work from Palangka Raya for clients in Central Kalimantan and East Java.",
      "Every project is led directly by the Tech Delivery Lead, from architecture through handover. The team grows gradually as projects require.",
    ],
    facts: [
      { label: "Part of", value: "Barito Bahalap Agency" },
      { label: "Director", value: "Basilius Tengang" },
      { label: "Based in", value: "Palangka Raya, Central Kalimantan" },
      { label: "Founded", value: "2026" },
      {
        label: "Legal entity",
        value: "PT Barito Bahalap Agency",
      },
    ],
    valuesTitle: "How we work",
    values: [
      {
        title: "Fewer systems, well maintained",
        description:
          "We would rather build fewer systems and maintain them than take on many one-off projects.",
      },
      {
        title: "Documented handover",
        description:
          "Every system is delivered with documentation and written acceptance from the client.",
      },
      {
        title: "One technical owner",
        description:
          "The Tech Delivery Lead makes the calls on architecture, development approach, and maintenance priorities.",
      },
    ],
  },

  contact: {
    intro: {
      eyebrow: "Consultation",
      title: "Tell us what you want to build.",
      description:
        "A few sentences is enough. We'll reply with follow-up questions and next steps.",
    },
    includeTitle: "All we need",
    includeList: [
      "Your name and email address",
      "The system or problem you want to solve",
      "Your target timeline, if you have one",
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
      { value: "bumn-bumd", label: "State-owned enterprise (BUMN / BUMD)" },
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
      "I agree to my data being used to respond to this request, in line with the privacy policy.",
    emailLabel: "Email",
  },

  ctaBand: {
    title: "Have a process you want turned into a system?",
    description: "Tell us briefly. We'll reply with the next step.",
    cta: {
      label: "Contact us",
      href: "/",
      section: "consultation",
    },
  },
};
