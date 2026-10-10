// Style
import "./TrackRecordPage.css";
// Hooks
import { useSiteContent, useTrackRecordContent } from "@/hooks";
// Components
import { PageHero, SEO, Section, CaseStudyCard, CtaBand } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function TrackRecordPage() {
  const { site } = useSiteContent();
  const { caseStudies, trackRecordNote, ctaBand } = useTrackRecordContent();

  return (
    <>
      <SEO
        title={`Track record | ${site.name}`}
        description="Selected engagements delivered by Barito Bahalap Tech: RSO2 Telkom Dashboard, E-Palugada and the AMPI Kalteng official website."
        path="/track-record"
        jsonLd={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Track record", path: "/track-record" },
        ])}
      />

      <PageHero
        eyebrow="Track record"
        title="Delivered systems, maintained over time."
        description="BBT's confirmed engagements, each delivered under a defined scope and continued under a recurring retainer."
      />

      <Section>
        <div className="stack">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
          <p className="form-note">{trackRecordNote}</p>
        </div>
      </Section>

      <CtaBand {...ctaBand} />
    </>
  );
}
