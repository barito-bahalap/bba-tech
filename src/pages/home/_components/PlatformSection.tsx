// Style
import "./PlatformSection.css";
// Components
import { DataTableVariant, Tag } from "@/components";
import { PrincipleBox } from "./PrincipleBox";
import { StageCard, type StageVariant } from "./StageCard";
// Utils
import { pickAt } from "@/domain/format";
// Types
import type { MainContent } from "@/domain/content";

interface PlatformSectionProps {
  id: string;
  content: MainContent["howWeWork"];
  images: string[];
}

const VARIANTS: StageVariant[] = ["solid", "photo", "paper"];

export function PlatformSection({ id, content, images }: PlatformSectionProps) {
  const { intro, principles, principlesTitle, stages, compliance } = content;

  return (
    <section id={id} className="platform">
      <div className="gw-wrap platform__inner">
        <div className="platform__top">
          <div className="platform__head">
            <Tag label={intro.eyebrow} />
            <h2 className="platform__title">{intro.title}</h2>
            {intro.description && (
              <p className="platform__lead">{intro.description}</p>
            )}
          </div>
          <div className="platform__principles">
            <h3 className="platform__subtitle">{principlesTitle}</h3>
            <div className="platform__grid">
              {principles.map((item, index) => (
                <PrincipleBox
                  key={item.title}
                  index={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="platform__stages">
          {stages.map((stage, index) => (
            <StageCard
              key={stage.title}
              index={index}
              title={stage.title}
              description={stage.description}
              output={stage.output}
              variant={pickAt(VARIANTS, index)}
              image={pickAt(images, index)}
            />
          ))}
        </div>

        <DataTableVariant
          caption={compliance.caption}
          columns={compliance.columns}
          rows={compliance.rows}
        />
      </div>
    </section>
  );
}
