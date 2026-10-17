import { footerGroups } from "@barito-bahalap/config";
import { mainId } from "./main";
import { privacy, terms } from "./legal";
import { uiContent } from "./ui";
// Types
import type { ContentBundle } from "@/i18n/types";

export const idContent: ContentBundle = {
  ...mainId,
  privacy,
  terms,
  ui: uiContent,
  footerGroups,
};
