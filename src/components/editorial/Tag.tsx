// Style
import "./Tag.css";

interface TagProps {
  label: string;
  tone?: "light" | "dark";
}

export function Tag({ label, tone = "light" }: TagProps) {
  return <span className={`gw-tag gw-tag--${tone}`}>{label}</span>;
}
