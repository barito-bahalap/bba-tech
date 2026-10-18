import type { MouseEvent } from "react";
// Style
import "./HeroSection.css";
// Components
import { Button, Tag } from "@/components";
import { HeroFacts } from "./HeroFacts";
// Types
import type { HeroContent } from "@/domain/content";

interface HeroSectionProps {
  hero: HeroContent;
  image: string;
  primaryHref: string;
  secondaryHref: string;
  onPrimaryClick: (e: MouseEvent) => void;
}

export function HeroSection({
  hero,
  image,
  primaryHref,
  secondaryHref,
  onPrimaryClick,
}: HeroSectionProps) {
  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <Tag label={hero.eyebrow} />
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__lead">{hero.description}</p>
          <div className="hero__actions">
            <Button
              label={hero.primaryCta.label}
              href={primaryHref}
              variant="primary"
              brand="tech"
              onClick={onPrimaryClick}
            />
            <Button
              label={hero.secondaryCta.label}
              href={secondaryHref}
              variant="ink"
              brand="tech"
            />
          </div>
        </div>

        <div className="hero__media">
          <img src={image} alt="" loading="eager" />
        </div>
      </section>

      <div className="hf__wrapper">
        <HeroFacts facts={hero.facts} />
      </div>
    </>
  );
}
