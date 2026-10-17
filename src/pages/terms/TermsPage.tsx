// Style
import "./TermsPage.css";
// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import { LegalDocument, SEO } from "@/components";

export default function TermsPage() {
  const { content, href } = useLocale();
  const seo = useSeoMeta();
  const { terms } = content;

  return (
    <>
      <SEO
        {...seo}
        title={terms.title}
        description={terms.description}
        path={href("/terms")}
      />
      <LegalDocument
        title={terms.title}
        updated={terms.updated}
        sections={terms.sections}
      />
    </>
  );
}
