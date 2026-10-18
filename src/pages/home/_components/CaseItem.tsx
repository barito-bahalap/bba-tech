// Style
import "./CaseItem.css";
// Utils
import { pad2 } from "@/domain/format";

interface CaseItemProps {
  index: number;
  name: string;
  category: string;
  active: boolean;
  onSelect: () => void;
}

export function CaseItem({
  index,
  name,
  category,
  active,
  onSelect,
}: CaseItemProps) {
  return (
    <button
      type="button"
      className={active ? "case-item is-active" : "case-item"}
      aria-pressed={active}
      onClick={onSelect}
    >
      <span className="case-item__dot" aria-hidden="true" />
      <span className="case-item__index">{pad2(index + 1)}</span>
      <span className="case-item__name">{name}</span>
      <span className="case-item__cat">{category}</span>
    </button>
  );
}
