import type { RefObject } from "react";
// Style
import "./ModelsSection.css";
// Components
import { Carousel } from "@/components";
import { ModelCard } from "./ModelCard";
// Types
import type { TitledItem } from "@/domain/content";

interface ModelsSectionProps {
  title: string;
  models: TitledItem[];
  trackRef: RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
  labels: { prev: string; next: string; region: string };
}

export function ModelsSection({
  title,
  models,
  trackRef,
  onPrev,
  onNext,
  labels,
}: ModelsSectionProps) {
  return (
    <section className="models">
      <div className="gw-wrap models__inner">
        <h2 className="models__title">{title}</h2>
        <Carousel
          trackRef={trackRef}
          onPrev={onPrev}
          onNext={onNext}
          labels={labels}
        >
          {models.map((model, index) => (
            <ModelCard
              key={model.title}
              index={index}
              title={model.title}
              description={model.description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
