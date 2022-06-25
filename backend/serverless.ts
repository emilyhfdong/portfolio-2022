import { functions } from "./src/functions"
import type { AWS } from "@serverless/typescript"

const serverlessConfiguration: AWS = {
  service: "portfolio",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    httpApi: {
      cors: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      NOTION_TOKEN: "${ssm:/${self:service}/notion-token}",
      NOTION_DATABASE_ID: "${ssm:/${self:service}/database-id}",
    },
  },
  functions,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
}

module.exports = serverlessConfiguration
