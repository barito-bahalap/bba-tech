import type { FooterGroup, NavLink } from "@barito-bahalap/types";
import type { LocaleCode } from "@/i18n/locales";

const text = {
  divisions: { en: "Divisions", id: "Divisi" },
  work: { en: "Work", id: "Karya" },
  process: { en: "Process", id: "Proses" },
  about: { en: "About", id: "Tentang" },
  careers: { en: "Careers", id: "Karier" },
  contact: { en: "Contact Us", id: "Hubungi Kami" },
  company: { en: "Company", id: "Perusahaan" },
  legal: { en: "Legal", id: "Legal" },
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
    link("divisions", "/", l, "divisions"),
    link("work", "/", l, "work"),
    link("process", "/", l, "engage"),
    link("about", "/about", l),
    link("careers", "/careers", l),
  ];
}

export function getHeaderCta(locale: string): NavLink {
  return link("contact", "/", pick(locale), "contact");
}

export function getFooterGroups(locale: string): FooterGroup[] {
  const l = pick(locale);
  return [
    {
      title: text.company[l],
      links: [
        link("divisions", "/", l, "divisions"),
        link("about", "/about", l),
        link("careers", "/careers", l),
        link("contact", "/", l, "contact"),
      ],
    },
    {
      title: text.legal[l],
      links: [link("privacy", "/privacy", l), link("terms", "/terms", l)],
    },
  ];
}
