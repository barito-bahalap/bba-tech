// Style
import "./sections.css";
// Components
import { Badge, KeyValueList } from "@/components";
// Utils
import type { CaseStudy } from "@/domain/content";

export interface CaseStudyCardProps {
  study: CaseStudy;
  compact?: boolean;
}

export function CaseStudyCard({ study, compact = false }: CaseStudyCardProps) {
  const items = compact
    ? [
        { label: "Client", value: study.client },
        { label: "Engagement", value: study.engagement },
      ]
    : [
        { label: "Client", value: `${study.client}, ${study.location}` },
        { label: "Context", value: study.context },
        { label: "Solution", value: study.solution },
        { label: "BBT role", value: study.role },
        { label: "Engagement", value: study.engagement },
        ...(study.outcome ? [{ label: "Outcome", value: study.outcome }] : []),
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
