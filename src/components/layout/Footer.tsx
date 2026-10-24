import { useMemo } from "react";
// Style
import "./Footer.css";
// Config
import { getFooterGroups } from "@/config/navigation";
// Hooks
import { useLanguageSwitch, useLocale } from "@/hooks";
// Components
import { LanguageSwitcher, SmartLink } from "@barito-bahalap/components";
import { Brand } from "./Brand";

export function Footer() {
  const { locale, site, ui } = useLocale();
  const groups = useMemo(() => getFooterGroups(locale), [locale]);
  const languageItems = useLanguageSwitch();

  return (
    <footer className="footer">
      <div className="footer__panel">
        <div className="footer__top">
          <div className="footer__about">
            <Brand logo logoFull onDark />

            <p className="footer__text">
              {site.tagline}. {site.location}.
            </p>
            <p className="footer__text">
              {site.name} {ui.footer.operatingBrand}{" "}
              <a href={site.holdingUrl} rel="noopener">
                {site.holdingName}
              </a>
              .
            </p>
          </div>

          {groups.map((group) => (
            <nav
              key={group.title}
              className="footer__group"
              aria-label={group.title}
            >
              <h2 className="footer__heading">{group.title}</h2>
              <ul className="footer__list">
                {group.links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <SmartLink href={link.href}>{link.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="stack end">
          <p className="footer__wordmark" aria-hidden="true">
            {site.shortName}
          </p>
        </div>

        <div className="footer__legal stack row middle between">
          <LanguageSwitcher
            items={languageItems}
            label={ui.language.label}
            onDark
          />
          <p>
            &copy; {new Date().getFullYear()} {site.holdingName}.{" "}
            {ui.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
