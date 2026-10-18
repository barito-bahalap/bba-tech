// Style
import "./Brand.css";
// Components
import { SmartLink } from "@barito-bahalap/components";

export interface BrandProps {
  name: string;
  href: string;
  onDark?: boolean;
}

export function Brand({ name, href, onDark = false }: BrandProps) {
  return (
    <SmartLink
      href={href}
      className={onDark ? "brand brand--on-dark" : "brand"}
      aria-label={`${name}, home`}
    >
      <span className="brand__dot" aria-hidden="true" />
      <span className="brand__name">{name}</span>
    </SmartLink>
  );
}
