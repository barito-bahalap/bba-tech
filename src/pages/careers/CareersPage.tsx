// Style
import "./CareersPage.css";
// Hooks
import { useCareersContent, useSiteContent } from "@/hooks";
// Components
import { Button, Checklist, PageHero } from "@/components";
import { SEO, Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function CareersPage() {
  const { site } = useSiteContent();
  const { careersIntro, workingModel, roleAreas, interestNote } =
    useCareersContent();

  return (
    <>
      <SEO
        title={`Careers | ${site.name}`}
        description="Working at Barito Bahalap Tech: how the team works and the areas in which it grows."
        path="/careers"
        jsonLd={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />

      <PageHero
        eyebrow={careersIntro.eyebrow}
        title={careersIntro.title}
        description={careersIntro.description}
      />

      <Section>
        <div className="grid-split">
          <SectionHeader eyebrow="Working model" title="How the team works." />
          <Checklist items={workingModel} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid-split">
          <SectionHeader eyebrow="Areas" title="Where the team grows." />
          <div className="stack">
            <Checklist items={roleAreas} />
            <p className="prose-block">{interestNote}</p>
            <p>
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent("BBT careers: expression of interest")}`}
                variant="outline"
                brand="tech"
              >
                Introduce yourself
              </Button>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
