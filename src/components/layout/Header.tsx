import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Style
import "./language-switch.css";
// Config
import { getHeaderCta, getMainNav } from "@/config/navigation";
// Hooks
import { useLanguageSwitch, useLocale, useSectionLink } from "@/hooks";
// Components
import { Button, SmartLink } from "@barito-bahalap/components";
import { Brand } from "./Brand";
// Types
import type { NavLink } from "@/domain/content";

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

function LanguageSwitch({ label }: { label: string }) {
  const languages = useLanguageSwitch();

  return (
    <nav className="site-header__lang" aria-label={label}>
      {languages.map((item) => (
        <Link
          key={item.code}
          to={item.href}
          lang={item.lang}
          hrefLang={item.lang}
          aria-current={item.active ? "true" : undefined}
          title={item.label}
          className={
            item.active
              ? "site-header__lang-link is-active"
              : "site-header__lang-link"
          }
        >
          {item.short}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  const { locale, site, ui, href } = useLocale();
  const { key, pathname } = useLocation();
  const onSectionClick = useSectionLink();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === key;
  const nav = getMainNav(locale);
  const cta = getHeaderCta(locale);

  const isActive = ({ href: target, section }: NavLink) =>
    !section && normalize(href(target)) === normalize(pathname);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Brand name={site.name} shortName={site.shortName} />

        <nav className="site-header__nav" aria-label={ui.menu.primaryNav}>
          {nav.map((item) => (
            <SmartLink
              key={item.label}
              href={href(item.href)}
              onClick={(e) => onSectionClick(e, item, href(item.href))}
              className="site-header__link"
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <LanguageSwitch label={ui.language.label} />

        <div className="site-header__cta">
          <Button
            href={href(cta.href)}
            variant="primary"
            brand="tech"
            onClick={(e) => onSectionClick(e, cta, href(cta.href))}
          >
            {cta.label}
          </Button>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpenedAt(open ? null : key)}
        >
          <span className="site-header__toggle-label">
            {open ? ui.menu.close : ui.menu.open}
          </span>
        </button>
      </div>

      <div id="mobile-drawer" className="site-header__drawer" hidden={!open}>
        <nav
          className="container site-header__drawer-nav"
          aria-label={ui.menu.mobileNav}
        >
          {nav.map((item) => (
            <SmartLink
              key={item.label}
              href={href(item.href)}
              onClick={(e) => {
                onSectionClick(e, item, href(item.href));
                setOpenedAt(null);
              }}
              className="site-header__drawer-link"
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </SmartLink>
          ))}
          <Button
            href={href(cta.href)}
            variant="primary"
            brand="tech"
            onClick={(e) => {
              onSectionClick(e, cta, href(cta.href));
              setOpenedAt(null);
            }}
          >
            {cta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
