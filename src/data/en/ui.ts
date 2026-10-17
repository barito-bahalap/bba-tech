import type { UiContent } from "@/domain/content";

export const uiContent: UiContent = {
  skipToContent: "Skip to content",
  menu: {
    open: "Menu",
    close: "Close",
    primaryNav: "Primary",
    mobileNav: "Mobile",
  },
  language: { label: "Language" },
  footer: {
    operatingBrand: "is an operating brand of",
    rights: "All rights reserved.",
  },
  caseLabels: {
    client: "Client",
    context: "Context",
    solution: "Solution",
    role: "BBT role",
    engagement: "Engagement",
    outcome: "Outcome",
  },
  form: {
    labels: {
      name: "Name",
      organization: "Organization",
      orgType: "Organization type (optional)",
      role: "Role",
      email: "Email",
      inquiryType: "Inquiry type",
      timeline: "Timeline (optional)",
      message: "Requirement",
      select: "Select",
    },
    errors: {
      name: "Enter your name.",
      organization: "Enter your organization.",
      email: "Enter a valid email address.",
      inquiryType: "Select an inquiry type.",
      message: "Describe the requirement in at least 20 characters.",
      consent: "Consent is required to send this inquiry.",
    },
    submit: "Prepare email",
    statusIdle:
      "This form prepares an email in your own mail application. Nothing is sent until you send it.",
    statusPrepared:
      "Your email application should now open with the inquiry. Send the email to complete the request.",
    mail: {
      subjectPrefix: "BBT",
      name: "Name",
      organization: "Organization",
      orgType: "Organization type",
      role: "Role",
      email: "Email",
      inquiryType: "Inquiry type",
      timeline: "Timeline",
    },
  },
  notFound: {
    seoTitle: "Page not found",
    code: "404",
    title: "Page not found.",
    sub: "The address you followed is unavailable or has moved.",
    homeCta: "Back to home",
  },
};
