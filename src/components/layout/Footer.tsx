// Style
import "./Footer.css";
// Config
import { getFooterGroups } from "@/config/navigation";
// Hooks
import { useLocale } from "@/hooks";
// Components
import { SmartLink } from "@barito-bahalap/components";
import { Brand } from "./Brand";

export function Footer() {
  const { locale, site, ui, href } = useLocale();
  const groups = getFooterGroups(locale);

  return (
    <footer className="footer">
      <div className="footer__panel">
        <div className="footer__top">
          <div className="footer__about">
            <Brand name={site.name} href={href("/")} onDark />
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
                  <li key={link.href}>
                    <SmartLink href={link.href}>{link.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="footer__wordmark" aria-hidden="true">
          {site.shortName}
        </p>

        <p className="footer__legal">
          &copy; {new Date().getFullYear()} {site.holdingName}.{" "}
          {ui.footer.rights}
        </p>
      </div>
    </footer>
  );
}
