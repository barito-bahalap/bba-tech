import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./RootLayout.css";
// Hooks
import { useLocale } from "@/hooks";
// Components
import { LoadingSpinner } from "@barito-bahalap/components";
import { ScrollToSection, ScrollToTop } from "@barito-bahalap/components";
import { Footer, Header } from ".";

export function RootLayout() {
  const { ui } = useLocale();

  return (
    <div className="app-shell" data-brand="tech">
      <ScrollToTop />
      <a className="skip-link" href="#main">
        {ui.skipToContent}
      </a>
      <Header />
      <ScrollToSection />
      <div className="app-frame">
        <main id="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
