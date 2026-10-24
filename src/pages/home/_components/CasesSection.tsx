// Style
import "./CasesSection.css";
// Components
import { Button, Tag } from "@/components";
import { CaseFeature } from "./CaseFeature";
import { CaseItem } from "./CaseItem";
// Utils
import { pickAt } from "@/domain/format";
// Types
import type { MainContent } from "@/domain/content";

interface CasesSectionProps {
  content: MainContent["caseStudies"];
  images: string[];
  selected: number;
  onSelect: (index: number) => void;
  ctaHref: string;
}

export function CasesSection({
  content,
  images,
  selected,
  onSelect,
  ctaHref,
}: CasesSectionProps) {
  const { intro, items, note, cta } = content;
  const active = pickAt(items, selected);

  return (
    <section className="cases">
      <div className="gw-wrap cases__inner">
        <div className="cases__head">
          <Tag label={intro.eyebrow} />
          <h2 className="cases__title">{intro.title}</h2>
        </div>

        <div className="cases__grid">
          <CaseFeature
            study={active}
            image={pickAt(images, selected)}
            alt={intro.title}
          />
          <div className="cases__list">
            {items.map((study, index) => (
              <CaseItem
                key={study.id}
                index={index}
                name={study.name}
                category={study.category}
                active={index === selected}
                onSelect={() => onSelect(index)}
              />
            ))}
            <p className="cases__note">{note}</p>
            <Button
              label={cta.label}
              href={ctaHref}
              variant="primary"
              brand="tech"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
