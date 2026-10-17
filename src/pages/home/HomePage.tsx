// Style
import "./HomePage.css";
// Hooks
import { useLocale, useSectionLink, useSeoMeta } from "@/hooks";
// Components
import {
  Button,
  Checklist,
  ConsultationSection,
  DataTableVariant,
  InfoCard,
  PageAnchor,
  PageHero,
  ProcessSteps,
  SEO,
  Section,
  SectionHeader,
} from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { LOCALES } from "@/i18n/locales";
import { homeSchema } from "@/domain/schema";

export default function HomePage() {
  const { locale, content, site, href } = useLocale();
  const seo = useSeoMeta();
  const onSectionClick = useSectionLink();
  const { hero, services, caseStudies, howWeWork, engagement } = content;

  return (
    <>
      <SEO
        {...seo}
        title={site.tagline}
        description={site.description}
        path={href("/")}
        structuredData={homeSchema(site, LOCALES[locale].htmlLang)}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        actions={
          <>
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              brand="tech"
              onClick={(e) =>
                onSectionClick(e, hero.primaryCta, hero.primaryCta.href)
              }
            >
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

      <PageAnchor id="services">
        <Section>
          <SectionHeader
            eyebrow={services.intro.eyebrow}
            title={services.intro.title}
            intro={services.intro.description}
          />
          <div className="grid-cards grid-cards--3">
            {services.items.map((service) => (
              <InfoCard
                key={service.id}
                title={service.title}
                description={service.summary}
              />
            ))}
          </div>
        </Section>
      </PageAnchor>

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow={caseStudies.intro.eyebrow}
          title={caseStudies.intro.title}
          intro={caseStudies.intro.description}
        />
        <div className="stack">
          <div className="grid-cards grid-cards--3">
            {caseStudies.items.map((study) => (
              <InfoCard
                key={study.id}
                title={study.name}
                description={`${study.category}. ${study.status}.`}
              />
            ))}
          </div>
          <p>
            <Button href={caseStudies.cta.href} variant="outline" brand="tech">
              {caseStudies.cta.label}
            </Button>
          </p>
        </div>
      </Section>

      <PageAnchor id="how-we-work">
        <Section>
          <SectionHeader
            eyebrow={howWeWork.intro.eyebrow}
            title={howWeWork.intro.title}
            intro={howWeWork.intro.description}
          />
          <ProcessSteps steps={howWeWork.stages} />
        </Section>
        <Section tone={SECTION_ALT_TONE}>
          <SectionHeader title={howWeWork.principlesTitle} />
          <div className="grid-cards">
            {howWeWork.principles.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <DataTableVariant
            caption={howWeWork.compliance.caption}
            columns={howWeWork.compliance.columns}
            rows={howWeWork.compliance.rows}
          />
        </Section>
      </PageAnchor>

      <PageAnchor id="engagement">
        <Section>
          <SectionHeader
            eyebrow={engagement.intro.eyebrow}
            title={engagement.intro.title}
            intro={engagement.intro.description}
          />
          <div className="grid-cards grid-cards--3">
            {engagement.models.map((model) => (
              <InfoCard
                key={model.title}
                title={model.title}
                description={model.description}
              />
            ))}
          </div>
          <DataTableVariant
            caption={engagement.retainer.caption}
            columns={engagement.retainer.columns}
            rows={engagement.retainer.rows}
          />
          <div className="grid-split">
            <SectionHeader
              title={engagement.procurement.title}
              intro={engagement.procurement.note}
            />
            <Checklist items={engagement.procurement.items} />
          </div>
        </Section>
      </PageAnchor>

      <ConsultationSection />
    </>
  );
}
