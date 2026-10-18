// Style
import "./CaseFeature.css";
// Components
import { Tag } from "@/components";
// Types
import type { CaseStudy } from "@/domain/content";

interface CaseFeatureProps {
  study: CaseStudy;
  image: string;
}

export function CaseFeature({ study, image }: CaseFeatureProps) {
  return (
    <article className="case-feature">
      <img className="case-feature__img" src={image} alt="" loading="lazy" />
      <div className="case-feature__body">
        <Tag label={study.category} tone="dark" />
        <h3 className="case-feature__title">{study.name}</h3>
        <p className="case-feature__meta">
          {study.client}, {study.location}
        </p>
        <p className="case-feature__text">{study.context}</p>
        <p className="case-feature__text">{study.solution}</p>
        {study.outcome && (
          <p className="case-feature__outcome">{study.outcome}</p>
        )}
      </div>
    </article>
  );
}
