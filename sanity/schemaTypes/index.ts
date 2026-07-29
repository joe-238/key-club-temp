import type { SchemaTypeDefinition } from "sanity";
import aboutPage from "./aboutPage";
import event from "./event";
import person from "./person";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, person, event, aboutPage],
};
