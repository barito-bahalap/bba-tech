import type { FooterGroup, NavLink } from "@/domain/content";
import type { LocaleCode } from "@/i18n/locales";

const text = {
  services: { en: "Services", id: "Layanan" },
  work: { en: "Work", id: "Karya" },
  process: { en: "How we work", id: "Cara Kerja" },
  engagement: { en: "Engagement models", id: "Model Kerja Sama" },
  about: { en: "About", id: "Tentang" },
  careers: { en: "Careers", id: "Karier" },
  contact: { en: "Request a consultation", id: "Ajukan Konsultasi" },
  company: { en: "Company", id: "Perusahaan" },
  legal: { en: "Legal", id: "Legal" },
  contactGroup: { en: "Contact", id: "Kontak" },
  privacy: { en: "Privacy Policy", id: "Kebijakan Privasi" },
  terms: { en: "Terms of Use", id: "Ketentuan Penggunaan" },
} as const satisfies Record<string, Record<LocaleCode, string>>;

const pick = (locale: string): LocaleCode => (locale === "en" ? "en" : "id");

function link(
  key: keyof typeof text,
  href: string,
  locale: LocaleCode,
  section?: string,
): NavLink {
  return { label: text[key][locale], href, section };
}

export function getMainNav(locale: string): NavLink[] {
  const l = pick(locale);
  return [
    link("services", "/", l, "services"),
    link("work", "/work", l),
    link("process", "/", l, "how-we-work"),
    link("about", "/about", l),
    link("careers", "/careers", l),
  ];
}

export function getHeaderCta(locale: string): NavLink {
  return link("contact", "/", pick(locale), "consultation");
}

export function getFooterGroups(locale: string): FooterGroup[] {
  const l = pick(locale);
  return [
    {
      title: text.company[l],
      links: [
        link("services", "/", l, "services"),
        link("work", "/work", l),
        link("process", "/", l, "how-we-work"),
        link("engagement", "/", l, "engagement"),
        link("about", "/about", l),
        link("careers", "/careers", l),
      ],
    },
    {
      title: text.legal[l],
      links: [link("privacy", "/privacy", l), link("terms", "/terms", l)],
    },
    {
      title: text.contactGroup[l],
      links: [link("contact", "/", l, "consultation")],
    },
  ];
}
