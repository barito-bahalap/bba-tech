// Style
import "./ModelCard.css";
// Utils
import { pad2 } from "@/domain/format";

interface ModelCardProps {
  index: number;
  title: string;
  description: string;
}

export function ModelCard({ index, title, description }: ModelCardProps) {
  return (
    <article className="model-card">
      <strong className="model-card__index">{pad2(index + 1)}</strong>
      <h3 className="model-card__title">{title}</h3>
      <p className="model-card__text">{description}</p>
    </article>
  );
}
