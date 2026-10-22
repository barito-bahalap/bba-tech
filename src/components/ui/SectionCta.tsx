// Style
import "./sections.css";
// Hooks
import { useSectionLink } from "@/hooks";
// Components
import { Button, Section, SectionHeader } from "@/components";
// Utils
import { SECTION_ALT_TONE } from "@/data/layout";
import type { NavLink } from "@/domain/content";

export interface SectionCtaProps {
  title: string;
  description: string;
  cta: NavLink;
}

export function SectionCta({ title, description, cta }: SectionCtaProps) {
  const onSectionClick = useSectionLink();

  return (
    <Section tone={SECTION_ALT_TONE}>
      <div className="grid-split">
        <SectionHeader title={title} intro={description} />
        <div className="stack row center fit">
          <Button
            label={cta.label}
            href={cta.href}
            variant="primary"
            brand="tech"
            onClick={(e) => onSectionClick(e, cta, cta.href)}
          />
        </div>
      </div>
    </Section>
  );
}
