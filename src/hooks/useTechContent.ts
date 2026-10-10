import { caseStudies, trackRecordNote } from "@/data/caseStudies";
import {
  careersIntro,
  interestNote,
  roleAreas,
  workingModel,
} from "@/data/careers";
import {
  consentText,
  contactIntro,
  includeList,
  inquiryTypes,
} from "@/data/contact";
import {
  ctaBand,
  hero,
  homeEngagement,
  homeGovernance,
  homeIntro,
  homeServiceIds,
} from "@/data/home";
import { privacy, terms } from "@/data/legal";
import { compliance, faq, principles, securityIntro } from "@/data/security";
import { services, technologyCategories } from "@/data/services";
import { footerGroups, headerCta, mainNav, site } from "@/data/site";
import { contracting, retainerTable, stages } from "@/data/approach";

export function useSiteContent() {
  return { site, mainNav, headerCta, footerGroups };
}

export function useHomeContent() {
  const featuredServices = homeServiceIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> =>
      Boolean(service),
    );

  return {
    hero,
    homeIntro,
    featuredServices,
    caseStudies,
    homeEngagement,
    homeGovernance,
    ctaBand,
  };
}

export function useServicesContent() {
  return { services, technologyCategories, ctaBand };
}

export function useTrackRecordContent() {
  return { caseStudies, trackRecordNote, ctaBand };
}

export function useApproachContent() {
  return { stages, retainerTable, contracting, ctaBand };
}

export function useSecurityContent() {
  return { securityIntro, principles, compliance, faq, ctaBand };
}

export function useContactContent() {
  return { contactIntro, inquiryTypes, includeList, consentText };
}

export function useCareersContent() {
  return { careersIntro, workingModel, roleAreas, interestNote };
}

export function useLegalContent() {
  return { privacy, terms };
}
