import type { AWS } from "@serverless/typescript"

export const functions: AWS["functions"] = {
  getProject: {
    handler: `src/functions/getProjects/handler.handler`,
    events: [
      {
        httpApi: { method: "get", path: "/projects" },
      },
    ],
  },
  getNotionProjects: {
    handler: `src/functions/getNotionProjects/handler.handler`,
    events: [
      {
        httpApi: { method: "get", path: "/notion" },
      },
    ],
  },
}
