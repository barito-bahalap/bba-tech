// Style
import "./RetainerSection.css";
// Components
import { Tag } from "@/components";
import { RetainerCard } from "./RetainerCard";
// Types
import type { MainContent } from "@/domain/content";

interface RetainerSectionProps {
  id: string;
  content: MainContent["engagement"];
  image: string;
}

export function RetainerSection({ id, content, image }: RetainerSectionProps) {
  const { intro, retainer, procurement } = content;

  return (
    <section id={id} className="retainer">
      <div className="gw-wrap retainer__inner">
        <div className="retainer__visual">
          <img className="retainer__img" src={image} alt="" loading="lazy" />
          <div className="retainer__float">
            <RetainerCard table={retainer} />
          </div>
        </div>

        <div className="retainer__copy">
          <Tag label={intro.eyebrow} tone="dark" />
          <h2 className="retainer__title">{intro.title}</h2>
          {intro.description && (
            <p className="retainer__lead">{intro.description}</p>
          )}
          <h3 className="retainer__subtitle">{procurement.title}</h3>
          <p className="retainer__lead">{procurement.note}</p>
          <ul className="retainer__list">
            {procurement.items.map((item) => (
              <li className="retainer__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
