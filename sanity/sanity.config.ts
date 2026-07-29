import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId ?? "your-project-id",
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.listItem()
              .title("About Page")
              .child(
                S.document().schemaType("aboutPage").documentId("aboutPage"),
              ),
            S.divider(),
            S.documentTypeListItem("person").title("People"),
            S.documentTypeListItem("event").title("Events"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
