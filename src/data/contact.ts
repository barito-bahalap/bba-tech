import type { InquiryType } from "@/domain/content";

export const contactIntro = {
  eyebrow: "Contact",
  title: "Request a consultation.",
  description:
    "Describe the requirement in a few sentences. We respond with the next step and any information needed to define the scope.",
};

export const inquiryTypes: InquiryType[] = [
  { value: "new-system", label: "New system or application" },
  { value: "dashboard", label: "Dashboard or reporting" },
  { value: "automation", label: "Business process automation" },
  { value: "integration", label: "System integration or migration" },
  { value: "support", label: "Support or retainer for an existing system" },
  { value: "other", label: "Other" },
];

export const includeList = [
  "The organization and your role",
  "The process or system concerned",
  "Who will use it, and roughly how many users",
  "Existing tools or data sources involved",
  "Target timeline and any procurement requirements",
];

export const consentText =
  "I agree that my details will be used to respond to this inquiry, as described in the privacy policy.";
