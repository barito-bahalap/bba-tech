// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import {
  InfoCard,
  KeyValueList,
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

export default function AboutPage() {
  const { content, site, href } = useLocale();
  const seo = useSeoMeta();
  const { about, ctaBand } = content;
  const [lead, ...rest] = about.paragraphs;

  return (
    <>
      <SEO
        {...seo}
        title={about.seo.title}
        description={about.seo.description}
        path={href("/about")}
        structuredData={breadcrumbSchema(site, [
          { name: site.name, path: href("/") },
          { name: about.seo.title, path: href("/about") },
        ])}
      />

      <PageHero
        eyebrow={about.intro.eyebrow}
        title={about.intro.title}
        description={lead}
      />

      <Section>
        <div className="grid-split">
          <div className="stack">
            {rest.map((paragraph) => (
              <p className="prose-block" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <KeyValueList items={about.facts} />
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader title={about.valuesTitle} />
        <div className="grid-cards grid-cards--3">
          {about.values.map((item) => (
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
