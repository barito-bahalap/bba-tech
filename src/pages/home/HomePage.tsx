// Style
import "./HomePage.css";
// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import {
  Button,
  CaseStudyCard,
  Checklist,
  ConsultationSection,
  DataTableVariant,
  InfoCard,
  KeyValueList,
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
  const { locale, content, site, ui, href } = useLocale();
  const seo = useSeoMeta();
  const {
    hero,
    services,
    caseStudies,
    howWeWork,
    engagement,
    about,
    workWithUs,
  } = content;

  return (
    <>
      <SEO
        {...seo}
        title={site.tagline}
        description={site.description}
        path={href("/")}
        structuredData={homeSchema(site, LOCALES[locale].htmlLang)}
      />

      {/* 1. Hero */}
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

      {/* 2. Services */}
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

      {/* 3. Case studies */}
      <PageAnchor id="case-studies">
        <Section tone={SECTION_ALT_TONE}>
          <SectionHeader
            eyebrow={caseStudies.intro.eyebrow}
            title={caseStudies.intro.title}
            intro={caseStudies.intro.description}
          />
          <div className="stack">
            {caseStudies.items.map((study) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                labels={ui.caseLabels}
              />
            ))}
            <p className="form-note">{caseStudies.note}</p>
          </div>
        </Section>
      </PageAnchor>

      {/* 4. How we work */}
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

      {/* 5. Engagement models */}
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

      {/* 6. About */}
      <PageAnchor id="about">
        <Section tone={SECTION_ALT_TONE}>
          <div className="grid-split">
            <div className="stack">
              <SectionHeader
                eyebrow={about.intro.eyebrow}
                title={about.intro.title}
              />
              {about.paragraphs.map((paragraph) => (
                <p className="prose-block" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <KeyValueList items={about.facts} />
          </div>
        </Section>
      </PageAnchor>

      {/* 7. Consultation form */}
      <ConsultationSection />

      {/* 8. Work with us */}
      <PageAnchor id="careers">
        <Section>
          <div className="grid-split">
            <SectionHeader
              eyebrow={workWithUs.intro.eyebrow}
              title={workWithUs.intro.title}
              intro={workWithUs.intro.description}
            />
            <div className="stack">
              <h3>{workWithUs.areasTitle}</h3>
              <Checklist items={workWithUs.areas} />
              <p className="prose-block">{workWithUs.note}</p>
              <p>
                <Button
                  href={`mailto:${site.email}?subject=${encodeURIComponent(workWithUs.mailSubject)}`}
                  variant="outline"
                  brand="tech"
                >
                  {workWithUs.cta}
                </Button>
              </p>
            </div>
          </div>
        </Section>
      </PageAnchor>
    </>
  );
}
