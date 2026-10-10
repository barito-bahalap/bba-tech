import type { FaqItem } from "@/domain/content";

export const securityIntro = {
  eyebrow: "Security and data governance",
  title: "Client data is handled on a need-to-know basis.",
  description:
    "BBT operates within the governance framework of Barito Bahalap Agency. The principles below describe how client information, access and responsibilities are managed.",
};

export const principles = [
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
];

export const compliance = {
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
};

export const faq: FaqItem[] = [
  {
    question: "Who has access to our data?",
    answer:
      "Only the BBT personnel assigned to the engagement, under the confidentiality terms of the contract. Access is limited to what the work requires.",
  },
  {
    question: "Is our information shared with other BBA operating units?",
    answer:
      "No. Client information is not passed to other BBA operating units unless the client gives explicit approval.",
  },
  {
    question: "Who owns the system and the data after delivery?",
    answer:
      "Ownership of deliverables, source code and data is set out in the contract for each engagement and confirmed at handover.",
  },
  {
    question: "Can BBT work within our own security policies?",
    answer:
      "Yes. Client policies and review requirements are identified during requirements gathering and reflected in the scope.",
  },
];
