// Style
import "./CarouselControls.css";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  labels: { prev: string; next: string };
}

function Chevron({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function CarouselControls({
  onPrev,
  onNext,
  labels,
}: CarouselControlsProps) {
  return (
    <div className="gw-controls">
      <button
        type="button"
        className="gw-controls__btn"
        aria-label={labels.prev}
        onClick={onPrev}
      >
        <Chevron flip />
      </button>
      <button
        type="button"
        className="gw-controls__btn"
        aria-label={labels.next}
        onClick={onNext}
      >
        <Chevron />
      </button>
    </div>
  );
}
