import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Style
import "./language-switch.css";
// Hooks
import { useLanguageSwitch, useLocale } from "@/hooks";
// Components
import { Button, SmartLink } from "@barito-bahalap/components";
import { Brand } from "./Brand";

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
  const { site, content, ui } = useLocale();
  const { nav, headerCta } = content;
  // location.key changes on every navigation (including hash links), so the
  // mobile drawer closes after tapping an in-page anchor.
  const { key } = useLocation();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === key;

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Brand name={site.name} shortName={site.shortName} />

        <nav className="site-header__nav" aria-label={ui.menu.primaryNav}>
          {nav.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="site-header__link"
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <LanguageSwitch label={ui.language.label} />

        <div className="site-header__cta">
          <Button href={headerCta.href} variant="primary" brand="tech">
            {headerCta.label}
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
              key={item.href}
              href={item.href}
              className="site-header__drawer-link"
            >
              {item.label}
            </SmartLink>
          ))}
          <Button href={headerCta.href} variant="primary" brand="tech">
            {headerCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
