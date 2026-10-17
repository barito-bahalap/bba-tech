import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./layout.css";
// Hooks
import { useLocale } from "@/hooks";
// Components
import {
  LoadingSpinner,
  ScrollToSection,
  ScrollToTop,
} from "@barito-bahalap/components";
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
      <main id="main" className="app-shell__main">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
