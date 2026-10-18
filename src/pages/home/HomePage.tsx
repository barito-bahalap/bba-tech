// Style
import "./HomePage.css";
// Hooks
import { useSeoMeta, useSelectedIndex } from "@/hooks";
import { useCarousel, useLocale, useSectionLink } from "@/hooks";
// Components
import { ConsultationSection, SEO } from "@/components";
import { CasesSection, FeatureSection, HeroSection } from "./_components";
import { ModelsSection, PlatformSection, RetainerSection } from "./_components";
// Data
import { CAROUSEL_LABELS } from "@/data/layout";
import { placeholders } from "@/data/placeholders";
// Utils
import { LOCALES } from "@/i18n/locales";
import { homeSchema } from "@/domain/schema";

export default function HomePage() {
  const { locale, content, site, href } = useLocale();
  const seo = useSeoMeta();
  const onSectionClick = useSectionLink();
  const { hero, services, caseStudies, howWeWork, engagement } = content;
  const {
    trackRef: servicesRef,
    prev: servicesPrev,
    next: servicesNext,
  } = useCarousel();
  const {
    trackRef: modelsRef,
    prev: modelsPrev,
    next: modelsNext,
  } = useCarousel();
  const { index: caseIndex, select: selectCase } = useSelectedIndex();
  const labels = CAROUSEL_LABELS[locale === "en" ? "en" : "id"];

  return (
    <>
      <SEO
        {...seo}
        title={site.tagline}
        description={site.description}
        path={href("/")}
        structuredData={homeSchema(site, LOCALES[locale].htmlLang)}
      />

      <HeroSection
        hero={hero}
        image={placeholders.hero}
        primaryHref={href(hero.primaryCta.href)}
        secondaryHref={href(hero.secondaryCta.href)}
        onPrimaryClick={(e) =>
          onSectionClick(e, hero.primaryCta, href(hero.primaryCta.href))
        }
      />

      <FeatureSection
        id="services"
        intro={services.intro}
        items={services.items}
        images={placeholders.services}
        trackRef={servicesRef}
        onPrev={servicesPrev}
        onNext={servicesNext}
        labels={labels}
      />

      <PlatformSection
        id="how-we-work"
        content={howWeWork}
        images={placeholders.stages}
      />

      <CasesSection
        content={caseStudies}
        images={placeholders.cases}
        selected={caseIndex}
        onSelect={selectCase}
        ctaHref={href(caseStudies.cta.href)}
      />

      <RetainerSection
        id="engagement"
        content={engagement}
        image={placeholders.retainer}
      />

      <ModelsSection
        title={engagement.intro.title}
        models={engagement.models}
        trackRef={modelsRef}
        onPrev={modelsPrev}
        onNext={modelsNext}
        labels={labels}
      />

      <ConsultationSection />
    </>
  );
}
