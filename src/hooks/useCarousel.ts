import { useRef } from "react";

export function useCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return {
    trackRef,
    prev: () => scroll(-1),
    next: () => scroll(1),
  };
}
