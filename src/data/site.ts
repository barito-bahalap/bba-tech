import type { FooterGroup, NavLink, SiteIdentity } from "@/domain/content";

export const site: SiteIdentity = {
  name: "Barito Bahalap Tech",
  shortName: "BBT",
  tagline: "Digital infrastructure and enterprise systems",
  description:
    "Barito Bahalap Tech (BBT) designs, builds and maintains enterprise systems, operational dashboards and business automation for corporations, state-owned enterprises and public institutions, supported by long-term service agreements.",
  url: "https://tech.baritobahalap.com",
  holdingName: "Barito Bahalap Agency",
  holdingUrl: "https://baritobahalap.com",
  location: "Palangka Raya, Central Kalimantan, Indonesia",
  email: "contact@tech.baritobahalap.com",
  founder: "Basilius Tengang",
  foundingYear: 2026,
};

export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Track record", href: "/track-record" },
  { label: "Approach", href: "/approach" },
  { label: "Security", href: "/security" },
  { label: "Careers", href: "/careers" },
];

export const headerCta: NavLink = {
  label: "Request a consultation",
  href: "/contact",
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Track record", href: "/track-record" },
      { label: "Approach", href: "/approach" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Security and data governance", href: "/security" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Request a consultation", href: "/contact" }],
  },
];
