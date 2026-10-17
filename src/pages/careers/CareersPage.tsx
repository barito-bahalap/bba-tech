// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import { Button, Checklist, PageHero, SEO, Section } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function CareersPage() {
  const { content, site, href } = useLocale();
  const seo = useSeoMeta();
  const { careers } = content;

  return (
    <>
      <SEO
        {...seo}
        title={careers.seo.title}
        description={careers.seo.description}
        path={href("/careers")}
        structuredData={breadcrumbSchema(site, [
          { name: site.name, path: href("/") },
          { name: careers.seo.title, path: href("/careers") },
        ])}
      />

      <PageHero
        eyebrow={careers.intro.eyebrow}
        title={careers.intro.title}
        description={careers.intro.description}
      />

      <Section>
        <div className="grid-split">
          <div className="stack">
            <h2>{careers.areasTitle}</h2>
            <Checklist items={careers.areas} />
          </div>
          <div className="stack">
            <h2>{careers.includeTitle}</h2>
            <Checklist items={careers.include} />
            <p className="prose-block">{careers.note}</p>
            <p>
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent(careers.mailSubject)}`}
                variant="outline"
                brand="tech"
              >
                {careers.cta}
              </Button>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
