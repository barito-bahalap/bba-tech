// Style
import "./PrivacyPage.css";
// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import { LegalDocument, SEO } from "@/components";

export default function PrivacyPage() {
  const { content, href } = useLocale();
  const seo = useSeoMeta();
  const { privacy } = content;

  return (
    <>
      <SEO
        {...seo}
        title={privacy.title}
        description={privacy.description}
        path={href("/privacy")}
      />
      <LegalDocument
        title={privacy.title}
        updated={privacy.updated}
        sections={privacy.sections}
      />
    </>
  );
}
