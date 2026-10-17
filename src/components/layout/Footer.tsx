// Hooks
import { useLocale } from "@/hooks";
// Components
import { SmartLink } from "@barito-bahalap/components";
import { Brand } from "./Brand";

export function Footer() {
  const { site, content, ui } = useLocale();
  const { footerGroups } = content;

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <Brand name={site.name} shortName={site.shortName} />
          <p className="site-footer__text">
            {site.tagline}. {site.location}.
          </p>
          <p className="site-footer__text">
            {site.name} {ui.footer.operatingBrand}{" "}
            <a href={site.holdingUrl} rel="noopener">
              {site.holdingName}
            </a>
            .
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav
            key={group.title}
            className="site-footer__group"
            aria-label={group.title}
          >
            <h2 className="site-footer__heading">{group.title}</h2>
            <ul className="site-footer__list">
              {group.links.map((link) => (
                <li key={link.href}>
                  <SmartLink href={link.href}>{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container site-footer__legal">
        <p>
          &copy; {new Date().getFullYear()} {site.holdingName}.{" "}
          {ui.footer.rights}
        </p>
      </div>
    </footer>
  );
}
