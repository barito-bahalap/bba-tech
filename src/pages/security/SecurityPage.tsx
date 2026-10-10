// Style
import "./SecurityPage.css";
// Hooks
import { useSecurityContent, useSiteContent } from "@/hooks";
// Components
import { Accordion, DataTableVariant, InfoCard, PageHero } from "@/components";
import { SEO, Section, SectionHeader, CtaBand } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function SecurityPage() {
  const { site, seoBase } = useSiteContent();
  const { securityIntro, principles, compliance, faq, ctaBand } =
    useSecurityContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="Security and data governance"
        description="How Barito Bahalap Tech handles confidentiality, data isolation, access control and personal data protection under Law No. 27 of 2022."
        path="/security"
        structuredData={breadcrumbSchema(site, [
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

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow="Compliance position"
          title="What we state, and what we do not claim."
        />
        <DataTableVariant
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
