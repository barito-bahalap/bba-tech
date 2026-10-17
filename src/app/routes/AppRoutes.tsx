// Layout
import { RootLayout } from "@/components/layout";
// Pages
import HomePage from "@/pages/home/HomePage";
import WorkPage from "@/pages/work/WorkPage";
import AboutPage from "@/pages/about/AboutPage";
import CareersPage from "@/pages/careers/CareersPage";
import PrivacyPage from "@/pages/privacy/PrivacyPage";
import TermsPage from "@/pages/terms/TermsPage";
import NotFoundPage from "@/pages/404/NotFoundPage";
// i18n
import { DEFAULT_LOCALE, ENABLED_LOCALES } from "@/i18n/locales";

const pageRoutes = [
  { index: true, element: <HomePage /> },
  { path: "work", element: <WorkPage /> },
  { path: "about", element: <AboutPage /> },
  { path: "careers", element: <CareersPage /> },
  { path: "privacy", element: <PrivacyPage /> },
  { path: "terms", element: <TermsPage /> },
  { path: "*", element: <NotFoundPage /> },
];

// Indonesian is the default and has no URL prefix (/), English lives under /en.
export const appRoutes = ENABLED_LOCALES.map((code) => ({
  ...(code === DEFAULT_LOCALE ? {} : { path: code }),
  element: <RootLayout />,
  children: pageRoutes,
}));
