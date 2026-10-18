import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
// Style
import "./Header.css";
// Config
import { getHeaderCta, getMainNav } from "@/config/navigation";
// Hooks
import { useLocale, useSectionLink } from "@/hooks";
import { useHeaderDrawer, useLanguageSwitch } from "@/hooks";
// Components
import { Button, SmartLink } from "@barito-bahalap/components";
import { LanguageSwitcher } from "@barito-bahalap/components";
import { Brand } from "./Brand";
// Types
import type { NavLink } from "@/domain/content";

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function Header() {
  const { locale, site, ui, href } = useLocale();
  const { pathname } = useLocation();
  const onSectionClick = useSectionLink();
  const languageItems = useLanguageSwitch();
  const { open, triggerRef, closeRef, openDrawer, closeDrawer, dismissDrawer } =
    useHeaderDrawer();
  const nav = getMainNav(locale);
  const cta = getHeaderCta(locale);

  const isActive = ({ href: target, section }: NavLink) =>
    !section && normalize(href(target)) === normalize(pathname);

  return (
    <header className="header">
      <div className="header__inner">
        <Brand name={site.name} href={href("/")} onDark />

        <nav className="header__nav" aria-label={ui.menu.primaryNav}>
          {nav.map((item) => (
            <SmartLink
              key={item.label}
              href={href(item.href)}
              onClick={(e) => onSectionClick(e, item, href(item.href))}
              className="header__link"
              aria-current={isActive(item) ? "page" : undefined}
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        <div className="header__end">
          <div className="header__lang">
            <LanguageSwitcher
              items={languageItems}
              label={ui.language.label}
              onDark
            />
          </div>
          <div className="header__cta">
            <Button
              href={href(cta.href)}
              variant="accent"
              brand="tech"
              onClick={(e) => onSectionClick(e, cta, href(cta.href))}
            >
              {cta.label}
            </Button>
          </div>
          <button
            ref={triggerRef}
            type="button"
            className="header__trigger"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={openDrawer}
          >
            {ui.menu.open}
          </button>
        </div>
      </div>

      {open &&
        createPortal(
          <div
            id="mobile-drawer"
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={ui.menu.mobileNav}
          >
            <div className="drawer__bar">
              <Brand name={site.name} href={href("/")} onDark />
              <button
                ref={closeRef}
                type="button"
                className="header__trigger"
                onClick={dismissDrawer}
              >
                {ui.menu.close}
              </button>
            </div>
            <nav className="drawer__nav" aria-label={ui.menu.mobileNav}>
              {nav.map((item) => (
                <SmartLink
                  key={item.label}
                  href={href(item.href)}
                  className="drawer__link"
                  aria-current={isActive(item) ? "page" : undefined}
                  onClick={(e) => {
                    onSectionClick(e, item, href(item.href));
                    closeDrawer();
                  }}
                >
                  {item.label}
                </SmartLink>
              ))}
            </nav>
            <div className="drawer__foot">
              <LanguageSwitcher
                items={languageItems}
                label={ui.language.label}
                onDark
              />
              <Button
                href={href(cta.href)}
                variant="accent"
                brand="tech"
                fullWidth
                onClick={(e) => {
                  onSectionClick(e, cta, href(cta.href));
                  closeDrawer();
                }}
              >
                {cta.label}
              </Button>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
