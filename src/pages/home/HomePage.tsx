// Style
import "./HomePage.css";
// Hooks
import { useHomeContent, useSiteContent } from "@/hooks";
// Components
import { Button, CaseStudyCard, Checklist, CtaBand } from "@/components";
import { InfoCard, PageHero, SEO, Section, SectionHeader } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { homeSchema } from "@/domain/schema";

export default function HomePage() {
  const { site, seoBase } = useSiteContent();
  const {
    hero,
    homeIntro,
    featuredServices,
    caseStudies,
    homeEngagement,
    homeGovernance,
    ctaBand,
  } = useHomeContent();

  return (
    <>
      <SEO
        {...seoBase}
        title={site.tagline}
        description={site.description}
        path="/"
        structuredData={homeSchema(site)}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        actions={
          <>
            <Button href={hero.primaryCta.href} variant="primary" brand="tech">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              brand="tech"
            >
              {hero.secondaryCta.label}
            </Button>
          </>
        }
        aside={
          <dl className="hero-facts">
            {hero.facts.map((fact) => (
              <div className="hero-facts__row" key={fact.label}>
                <dt className="hero-facts__label">{fact.label}</dt>
                <dd className="hero-facts__value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section>
        <SectionHeader
          eyebrow={homeIntro.eyebrow}
          title={homeIntro.title}
          intro={homeIntro.description}
        />
        <div className="grid-cards grid-cards--3">
          {featuredServices.map((service) => (
            <InfoCard
              key={service.id}
              title={service.title}
              description={service.summary}
            />
          ))}
        </div>
        <p>
          <Button href="/services" variant="ghost" brand="tech">
            All services
          </Button>
        </p>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow="Track record"
          title="Systems in operation under continuing support."
          intro="Three engagements BBT is able to describe publicly."
        />
        <div className="grid-cards grid-cards--3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} compact />
          ))}
        </div>
        <p>
          <Button href="/track-record" variant="ghost" brand="tech">
            Read the full track record
          </Button>
        </p>
      </Section>

      <Section>
        <div className="grid-split">
          <SectionHeader
            eyebrow={homeEngagement.eyebrow}
            title={homeEngagement.title}
            intro={homeEngagement.description}
          />
          <div className="stack">
            <Checklist items={homeEngagement.points} />
            <p>
              <Button href="/approach" variant="ghost" brand="tech">
                Our approach
              </Button>
            </p>
          </div>
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader
            eyebrow={homeGovernance.eyebrow}
            title={homeGovernance.title}
            intro={homeGovernance.description}
          />
          <p>
            <Button href="/security" variant="outline" brand="tech">
              Security and data governance
            </Button>
          </p>
        </div>
      </Section>

      <CtaBand {...ctaBand} />
    </>
  );
}
