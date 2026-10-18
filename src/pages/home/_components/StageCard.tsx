// Style
import "./StageCard.css";
// Utils
import { pad2 } from "@/domain/format";

export type StageVariant = "solid" | "photo" | "paper";

interface StageCardProps {
  index: number;
  title: string;
  description: string;
  output: string;
  variant: StageVariant;
  image: string;
}

export function StageCard({
  index,
  title,
  description,
  output,
  variant,
  image,
}: StageCardProps) {
  return (
    <article className={`stage-card stage-card--${variant}`}>
      {variant === "photo" && (
        <img className="stage-card__img" src={image} alt="" loading="lazy" />
      )}
      <span className="stage-card__index">{pad2(index + 1)}</span>
      <div className="stage-card__body">
        <h3 className="stage-card__title">{title}</h3>
        <p className="stage-card__text">{description}</p>
        <p className="stage-card__output">{output}</p>
      </div>
    </article>
  );
}
