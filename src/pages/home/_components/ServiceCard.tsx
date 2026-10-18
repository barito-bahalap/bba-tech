// Style
import "./ServiceCard.css";
// Utils
import { pad2 } from "@/domain/format";

interface ServiceCardProps {
  index: number;
  title: string;
  summary: string;
  image: string;
  wide?: boolean;
}

export function ServiceCard({
  index,
  title,
  summary,
  image,
  wide = false,
}: ServiceCardProps) {
  return (
    <article
      className={wide ? "service-card service-card--wide" : "service-card"}
    >
      <img className="service-card__img" src={image} alt="" loading="lazy" />
      <div className="service-card__body">
        <span className="service-card__index">{pad2(index + 1)}</span>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__text">{summary}</p>
      </div>
    </article>
  );
}
