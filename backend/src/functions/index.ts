import type { AWS } from "@serverless/typescript"

export const functions: AWS["functions"] = {
  scrapeWord: {
    handler: `src/functions/getProjects/handler.handler`,
    timeout: 900,
    events: [
      {
        http: { method: "GET", path: "projects" },
      },
    ],
  },
}
