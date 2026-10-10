// Style
import "./ApproachPage.css";
// Hooks
import { useApproachContent, useSiteContent } from "@/hooks";
// Components
import { Checklist, DataTable, PageHero, ProcessSteps } from "@/components";
import { SEO, Section, SectionHeader } from "@/components";
import { CtaBand } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ApproachPage() {
  const { site } = useSiteContent();
  const { stages, retainerTable, contracting, ctaBand } = useApproachContent();

  return (
    <>
      <SEO
        title={`Approach and engagement model | ${site.name}`}
        description="How Barito Bahalap Tech delivers systems: six defined stages from requirements to acceptance, followed by retainer-based support."
        path="/approach"
        jsonLd={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Approach", path: "/approach" },
        ])}
      />

      <PageHero
        eyebrow="Approach"
        title="A structured delivery model with clear acceptance points."
        description="Each engagement follows the same stages, so the client knows what will be delivered, when it will be reviewed and how it will be accepted."
      />

      <Section>
        <SectionHeader
          eyebrow="Delivery"
          title="Six stages from requirement to acceptance."
        />
        <ProcessSteps steps={stages} />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Retainer"
          title="Continuing support after go-live."
          description="For operational systems, BBT offers a retainer so that maintenance and further development continue without a new procurement process for each change."
        />
        <DataTable
          caption="Retainer structure"
          columns={retainerTable.columns}
          rows={retainerTable.rows}
        />
      </Section>

      <Section>
        <div className="grid-split">
          <SectionHeader
            eyebrow={contracting.eyebrow}
            title={contracting.title}
            description={contracting.description}
          />
          <Checklist items={contracting.items} />
        </div>
      </Section>

      <CtaBand {...ctaBand} />
    </>
  );
}
