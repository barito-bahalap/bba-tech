// Style
import "./HeroFacts.css";

interface HeroFactsProps {
  facts: { label: string; value: string }[];
}

export function HeroFacts({ facts }: HeroFactsProps) {
  return (
    <dl className="hero-facts">
      {facts.map((fact) => (
        <div className="hero-facts__row" key={fact.label}>
          <dt className="hero-facts__label">{fact.label}</dt>
          <dd className="hero-facts__value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
