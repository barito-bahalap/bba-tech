// Style
import "./NotFoundPage.css";
// Hooks
import { useLocale, useSeoMeta } from "@/hooks";
// Components
import { Button, PageHero, SEO } from "@/components";

export default function NotFoundPage() {
  const { ui, href } = useLocale();
  const seo = useSeoMeta({ alternates: false });

  return (
    <>
      <SEO {...seo} title={ui.notFound.seoTitle} path={href("/")} />

      <PageHero
        eyebrow={ui.notFound.code}
        title={ui.notFound.title}
        description={ui.notFound.sub}
        actions={
          <Button href={href("/")} variant="primary" brand="tech">
            {ui.notFound.homeCta}
          </Button>
        }
      />
    </>
  );
}
