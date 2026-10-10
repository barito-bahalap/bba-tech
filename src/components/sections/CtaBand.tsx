// Style
import "./sections.css";
// Components
import { Button } from "@/components";

export interface CtaBandProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div className="cta-band__copy">
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{description}</p>
        </div>
        <div className="cta-band__actions">
          <Button href={primary.href} variant="light" brand="tech">
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="outline-light" brand="tech">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
