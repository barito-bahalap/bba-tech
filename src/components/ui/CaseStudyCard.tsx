// Style
import "./sections.css";
// Components
import { Badge, KeyValueList } from "@/components";
// Utils
import type { CaseLabels, CaseStudy } from "@/domain/content";

export interface CaseStudyCardProps {
  study: CaseStudy;
  labels: CaseLabels;
}

export function CaseStudyCard({ study, labels }: CaseStudyCardProps) {
  const items = [
    { label: labels.client, value: `${study.client}, ${study.location}` },
    { label: labels.context, value: study.context },
    { label: labels.solution, value: study.solution },
    { label: labels.role, value: study.role },
    { label: labels.engagement, value: study.engagement },
    ...(study.outcome ? [{ label: labels.outcome, value: study.outcome }] : []),
  ];

  return (
    <article className="case-card" id={study.id}>
      <div className="case-card__head">
        <p className="case-card__category">{study.category}</p>
        <h3 className="case-card__title">{study.name}</h3>
        <Badge>{study.status}</Badge>
      </div>
      <KeyValueList items={items} />
    </article>
  );
}
