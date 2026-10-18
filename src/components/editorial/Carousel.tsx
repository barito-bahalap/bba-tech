import type { ReactNode, RefObject } from "react";
// Style
import "./Carousel.css";
// Components
import { CarouselControls } from "./CarouselControls";

interface CarouselProps {
  trackRef: RefObject<HTMLDivElement | null>;
  onPrev: () => void;
  onNext: () => void;
  labels: { prev: string; next: string; region: string };
  lead?: ReactNode;
  children: ReactNode;
}

export function Carousel({
  trackRef,
  onPrev,
  onNext,
  labels,
  lead,
  children,
}: CarouselProps) {
  return (
    <div className="gw-carousel">
      <div className="gw-carousel__bar">
        <div className="gw-carousel__lead">{lead}</div>
        <CarouselControls onPrev={onPrev} onNext={onNext} labels={labels} />
      </div>
      <div
        ref={trackRef}
        className="gw-carousel__track"
        role="region"
        aria-label={labels.region}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}
