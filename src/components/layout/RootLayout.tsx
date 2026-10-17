import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./layout.css";
// Hooks
import { useHashScroll, useLocale } from "@/hooks";
// Components
import { LoadingSpinner, ScrollToTop } from "@barito-bahalap/components";
import { Footer, Header } from ".";

export function RootLayout() {
  const { ui } = useLocale();
  useHashScroll();

  return (
    <div className="app-shell" data-brand="tech">
      <ScrollToTop />
      <a className="skip-link" href="#main">
        {ui.skipToContent}
      </a>
      <Header />
      <main id="main" className="app-shell__main">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
