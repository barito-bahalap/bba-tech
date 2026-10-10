// Style
import "./NotFoundPage.css";
// Hooks
import { useSiteContent } from "@/hooks";
// Components
import { Button, EmptyState, SEO } from "@/components";

export default function NotFoundPage() {
  const { site } = useSiteContent();

  return (
    <>
      <SEO
        title={`Page not found | ${site.name}`}
        description="The requested page could not be found."
        path="/404"
        noindex
      />
      <EmptyState
        title="Page not found"
        description="The address may be incorrect or the page may have moved."
        action={
          <Button href="/" variant="primary" brand="tech">
            Return home
          </Button>
        }
      />
    </>
  );
}
