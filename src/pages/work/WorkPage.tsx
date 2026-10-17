// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import {
  CaseStudyCard,
  DataTableVariant,
  InfoCard,
  PageHero,
  SEO,
  Section,
  SectionCta,
  SectionHeader,
} from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function WorkPage() {
  const { content, site, ui, href } = useLocale();
  const seo = useSeoMeta();
  const { work, caseStudies, ctaBand } = content;

  const rows = caseStudies.items.map((study) => [
    study.name,
    `${study.client}, ${study.location}`,
    study.category,
    study.status,
  ]);

  return (
    <>
      <SEO
        {...seo}
        title={work.seo.title}
        description={work.seo.description}
        path={href("/work")}
        structuredData={breadcrumbSchema(site, [
          { name: site.name, path: href("/") },
          { name: work.seo.title, path: href("/work") },
        ])}
      />

      <PageHero
        eyebrow={work.intro.eyebrow}
        title={work.intro.title}
        description={work.intro.description}
      />

      <Section>
        <SectionHeader
          eyebrow={work.overview.intro.eyebrow}
          title={work.overview.intro.title}
        />
        <DataTableVariant
          caption={work.overview.caption}
          columns={work.overview.columns}
          rows={rows}
        />
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow={work.detailsIntro.eyebrow}
          title={work.detailsIntro.title}
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

      <Section>
        <SectionHeader title={work.patternsTitle} />
        <div className="grid-cards grid-cards--3">
          {work.patterns.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <SectionCta
        title={ctaBand.title}
        description={ctaBand.description}
        cta={ctaBand.cta}
      />
    </>
  );
}
