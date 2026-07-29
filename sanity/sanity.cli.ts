import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./env";

export default defineCliConfig({
  api: {
    projectId: projectId ?? "your-project-id",
    dataset,
  },
});
