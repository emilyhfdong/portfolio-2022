import * as env from "env-var"

export const environment = {
  notionToken: env.get("NOTION_TOKEN").required().asString(),
  databaseId: env.get("NOTION_DATABASE_ID").required().asString(),
}
