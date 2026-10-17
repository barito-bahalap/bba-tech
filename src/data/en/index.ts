import { mainEn } from "./main";
import { privacy, terms } from "./legal";
import { uiContent } from "./ui";
// Types
import type { ContentBundle } from "@/i18n/types";

export const enContent: ContentBundle = {
  ...mainEn,
  privacy,
  terms,
  ui: uiContent,
};
