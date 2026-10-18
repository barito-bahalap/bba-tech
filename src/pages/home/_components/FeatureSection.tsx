import type { RefObject } from "react";
// Style
import "./FeatureSection.css";
// Components
import { Carousel, Tag } from "@/components";
import { ServiceCard } from "./ServiceCard";
// Types
import type { SectionIntro, Service } from "@/domain/content";

interface FeatureSectionProps {
  id: string;
  intro: SectionIntro;
  items: Service[];
  images: string[];
  trackRef: RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
  labels: { prev: string; next: string; region: string };
}

export function FeatureSection({
  id,
  intro,
  items,
  images,
  trackRef,
  onPrev,
  onNext,
  labels,
}: FeatureSectionProps) {
  return (
    <section id={id} className="feature">
      <div className="gw-wrap feature__inner">
        <div className="feature__head">
          <Tag label={intro.eyebrow} />
          <h2 className="feature__title">{intro.title}</h2>
        </div>
        <Carousel
          trackRef={trackRef}
          onPrev={onPrev}
          onNext={onNext}
          labels={labels}
          lead={intro.description}
        >
          {items.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              title={service.title}
              summary={service.summary}
              image={images[index % images.length]}
              wide={index === 0}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
