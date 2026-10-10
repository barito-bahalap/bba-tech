import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// Style
import "./layout.css";
// Components
import { LoadingSpinner, ScrollToTop } from "@barito-bahalap/components";
import { Footer, Header } from ".";

export function RootLayout() {
  return (
    <div className="app-shell" data-brand="tech">
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
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
