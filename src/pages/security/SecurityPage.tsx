// Style
import "./SecurityPage.css";
// Hooks
import { useSecurityContent, useSiteContent } from "@/hooks";
// Components
import { Accordion, DataTable, InfoCard, PageHero } from "@/components";
import { CtaBand, SEO, Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function SecurityPage() {
  const { site } = useSiteContent();
  const { securityIntro, principles, compliance, faq, ctaBand } =
    useSecurityContent();

  return (
    <>
      <SEO
        title={`Security and data governance | ${site.name}`}
        description="How Barito Bahalap Tech handles confidentiality, data isolation, access control and personal data protection under Law No. 27 of 2022."
        path="/security"
        jsonLd={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ])}
      />

      <PageHero
        eyebrow={securityIntro.eyebrow}
        title={securityIntro.title}
        description={securityIntro.description}
      />

      <Section>
        <div className="grid-cards">
          {principles.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Compliance position"
          title="What we state, and what we do not claim."
        />
        <DataTable
          caption="Compliance position"
          columns={compliance.columns}
          rows={compliance.rows}
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Questions"
          title="Frequently asked questions."
        />
        <Accordion items={faq} />
      </Section>

      <CtaBand {...ctaBand} />
    </>
  );
}
