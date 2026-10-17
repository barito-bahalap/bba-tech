import type { ReactNode } from "react";

// Scroll target for section navigation. The offset keeps the sticky header
// from covering the section heading.
export function PageAnchor({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <div id={id} style={{ scrollMarginTop: "5.5rem" }}>
      {children}
    </div>
  );
}
