import type { UiContent } from "@/domain/content";

export const uiContent: UiContent = {
  skipToContent: "Skip to main content",
  menu: {
    open: "Menu",
    close: "Close menu",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
  },
  language: { label: "Language" },
  footer: {
    operatingBrand: "is an operating unit of",
    rights: "All rights reserved.",
  },
  caseLabels: {
    client: "Client",
    context: "Context",
    solution: "Solution",
    role: "BBT's role",
    engagement: "Engagement",
    outcome: "Outcome",
  },
  form: {
    labels: {
      name: "Name",
      organization: "Organization",
      orgType: "Organization type (optional)",
      role: "Job title",
      email: "Email",
      inquiryType: "Inquiry type",
      timeline: "Expected timeline (optional)",
      message: "Your requirements",
      select: "Select",
    },
    errors: {
      name: "Enter your name.",
      organization: "Enter your organization name.",
      email: "Enter a valid email address.",
      inquiryType: "Select an inquiry type.",
      message: "Describe your requirements in at least 20 characters.",
      consent: "Check the consent box to continue.",
    },
    submit: "Prepare email",
    statusIdle:
      "This form prepares an email in your email application. No data is sent until you send the email.",
    statusPrepared:
      "Your email application will open with this inquiry. Send the email to complete your request.",
    mail: {
      subjectPrefix: "BBT",
      name: "Name",
      organization: "Organization",
      orgType: "Organization type",
      role: "Job title",
      email: "Email",
      inquiryType: "Inquiry type",
      timeline: "Expected timeline",
    },
  },
  notFound: {
    seoTitle: "Page Not Found",
    code: "404",
    title: "Page not found.",
    sub: "The page you're looking for doesn't exist or has been moved.",
    homeCta: "Back to home",
  },
};
