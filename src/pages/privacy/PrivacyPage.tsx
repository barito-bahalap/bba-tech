// Style
import "./PrivacyPage.css";
// Hooks
import { useLegalContent, useSiteContent } from "@/hooks";
// Components
import { LegalDocument, SEO } from "@/components";

export default function PrivacyPage() {
  const { site } = useSiteContent();
  const { privacy } = useLegalContent();

  return (
    <>
      <SEO
        title={`${privacy.title} | ${site.name}`}
        description={privacy.description}
        path="/privacy"
      />
      <LegalDocument
        title={privacy.title}
        updated={privacy.updated}
        sections={privacy.sections}
      />
    </>
  );
}
