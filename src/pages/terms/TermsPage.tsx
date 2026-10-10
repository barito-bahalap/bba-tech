// Style
import "./TermsPage.css";
// Hooks
import { useLegalContent, useSiteContent } from "@/hooks";
// Components
import { LegalDocument, SEO } from "@/components";

export default function TermsPage() {
  const { site } = useSiteContent();
  const { terms } = useLegalContent();

  return (
    <>
      <SEO
        title={`${terms.title} | ${site.name}`}
        description={terms.description}
        path="/terms"
      />
      <LegalDocument
        title={terms.title}
        updated={terms.updated}
        sections={terms.sections}
      />
    </>
  );
}
