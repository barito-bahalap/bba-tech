import type { ReactNode } from "react";

// Anchor target for in-page navigation (/#services etc.). Offsets the scroll
// so the sticky header does not cover the section heading.
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
