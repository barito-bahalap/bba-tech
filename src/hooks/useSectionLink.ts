import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { NavLink } from "@/domain/content";

export function scrollToSectionId(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export function useSectionLink() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (e: MouseEvent, link: NavLink, resolvedHref: string) => {
    if (!link.section) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();

    const section = link.section;

    if (normalize(resolvedHref) === normalize(pathname)) {
      requestAnimationFrame(() => scrollToSectionId(section, "smooth"));
      return;
    }

    navigate(resolvedHref, { state: { scrollTo: section } });
  };
}
