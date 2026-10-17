import { useLocation } from "react-router-dom";
import {
  DEFAULT_LOCALE,
  ENABLED_LOCALES,
  LOCALES,
  localizeHref,
  stripLocalePrefix,
} from "@/i18n/locales";
import { useLocale } from "./useLocale";

interface SeoMetaOptions {
  alternates?: boolean;
}

// Spread into <SEO {...seo} title=... path=... />.
// NOTE: `locale` and `alternates` mirror bba-corporate's useSeoMeta. If the
// kit's <SEO> in your installed version does not accept them, drop them here.
export function useSeoMeta({ alternates = true }: SeoMetaOptions = {}) {
  const { pathname } = useLocation();
  const { site } = useLocale();
  const base = stripLocalePrefix(pathname);

  return {
    siteName: site.name,
    siteUrl: site.url,
    locale: site.locale,
    description: site.description,
    alternates: alternates
      ? [
          ...ENABLED_LOCALES.map((code) => ({
            hrefLang: LOCALES[code].htmlLang,
            path: localizeHref(base, code),
          })),
          { hrefLang: "x-default", path: localizeHref(base, DEFAULT_LOCALE) },
        ]
      : [],
  };
}
