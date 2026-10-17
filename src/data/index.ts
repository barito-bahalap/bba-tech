import type { LocaleCode } from "@/i18n/locales";
import type { ContentBundle } from "@/i18n/types";
import { enContent } from "./en";
import { idContent } from "./id";

const bundles: Partial<Record<LocaleCode, ContentBundle>> = {
  id: idContent,
  en: enContent,
};

export function getContent(locale: LocaleCode): ContentBundle {
  return bundles[locale] ?? idContent;
}
