// Style
import "./PrincipleBox.css";
// Utils
import { pad2 } from "@/domain/format";

interface PrincipleBoxProps {
  index: number;
  title: string;
  description: string;
}

export function PrincipleBox({ index, title, description }: PrincipleBoxProps) {
  return (
    <article className="principle">
      <span className="principle__index">{pad2(index + 1)}</span>
      <h3 className="principle__title">{title}</h3>
      <p className="principle__text">{description}</p>
    </article>
  );
}
