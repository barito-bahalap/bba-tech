// Style
import "./RetainerCard.css";
// Types
import type { TableContent } from "@/domain/content";

interface RetainerCardProps {
  table: TableContent;
}

export function RetainerCard({ table }: RetainerCardProps) {
  return (
    <div className="retainer-card">
      <p className="retainer-card__caption">{table.caption}</p>
      <ul className="retainer-card__rows">
        {table.rows.map((row) => (
          <li className="retainer-card__row" key={row.join("|")}>
            {row.map((cell, index) => (
              <span
                key={table.columns[index] ?? index}
                className={
                  index === 0
                    ? "retainer-card__cell retainer-card__cell--lead"
                    : "retainer-card__cell"
                }
              >
                {cell}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
