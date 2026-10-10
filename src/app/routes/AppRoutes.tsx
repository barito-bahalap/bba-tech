// Layout
import { Outlet } from "react-router-dom";
import { RootLayout } from "@/components/layout";
// Pages
import HomePage from "@/pages/home/HomePage";
import ServicesPage from "@/pages/services/ServicesPage";
import TrackRecordPage from "@/pages/track-record/TrackRecordPage";
import AboutPage from "@/pages/about/AboutPage";
import CareersPage from "@/pages/careers/CareersPage";
import PrivacyPage from "@/pages/privacy/PrivacyPage";
import TermsPage from "@/pages/terms/TermsPage";
import ApproachPage from "@/pages/approach/ApproachPage";
import SecurityPage from "@/pages/security/SecurityPage";
import ContactPage from "@/pages/contact/ContactPage";
import NotFoundPage from "@/pages/404/NotFoundPage";

export const appRoutes = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "track-record", element: <TrackRecordPage /> },
      { path: "approach", element: <ApproachPage /> },
      { path: "security", element: <SecurityPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    element: <Outlet />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
];
