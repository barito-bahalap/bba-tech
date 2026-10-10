// Style
import "./ServicesPage.css";
// Hooks
import { useServicesContent, useSiteContent } from "@/hooks";
// Components
import { Checklist, DataTable, PageHero } from "@/components";
import { CtaBand, SEO, Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ServicesPage() {
  const { site } = useSiteContent();
  const { services, technologyCategories, ctaBand } = useServicesContent();

  return (
    <>
      <SEO
        title={`Services | ${site.name}`}
        description="Enterprise systems, operational dashboards, business automation, custom software, system integration and long-term technical support from Barito Bahalap Tech."
        path="/services"
        jsonLd={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Services"
        title="Technology services built around operations."
        description="Each service is scoped to a defined business need, delivered against agreed acceptance criteria and, where the system is operational, supported under a continuing agreement."
      />

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          tone={index % 2 === 1 ? "muted" : undefined}
        >
          <div className="grid-split">
            <SectionHeader
              title={service.title}
              description={service.summary}
            />
            <Checklist items={service.scope} />
          </div>
        </Section>
      ))}

      <Section>
        <SectionHeader
          eyebrow="Technology"
          title="Technology categories."
          description="Specific technologies are selected per engagement, taking the client's environment, policies and support model into account."
        />
        <DataTable
          caption="Technology categories"
          columns={["Category", "Approach"]}
          rows={technologyCategories.map((item) => [
            item.category,
            item.description,
          ])}
        />
      </Section>

      <CtaBand {...ctaBand} />
    </>
  );
}
