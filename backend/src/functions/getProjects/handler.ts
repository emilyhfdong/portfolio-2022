import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"
import { environment } from "@libs/environment"
import { middyfy } from "@libs/lambda"
import { notion } from "@libs/notion"
import { NotionProject } from "@libs/notion/types"

const getProjects: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  const database = await notion.databases.query({
    database_id: environment.databaseId,
  })

  const notionProjects = database.results as NotionProject[]

  const projects = notionProjects
    .filter(
      (p) =>
        p.properties["background colour"].rich_text.length &&
        !p.properties.hide.checkbox
    )
    .sort(
      (a, b) =>
        new Date(b.properties.date.date.start).getTime() -
        new Date(a.properties.date.date.start).getTime()
    )
    .map((p) => ({
      id: p.id,
      emoji: p.icon.emoji,
      backgroundColor:
        p.properties["background colour"].rich_text[0].plain_text,
      name: p.properties.name.title[0].plain_text,
      tech: p.properties.tech.multi_select,
      url: p.properties.url.url,
      dateCreated: p.properties.date.date.start,
      screenshots: p.properties.screenshot.files.map((file) => file.file.url),
      github: p.properties["github link"].url,
      summary: p.properties.summary.rich_text[0]?.plain_text,
      motivation: p.properties.motivation.rich_text[0]?.plain_text,
    }))

  return formatJSONResponse({
    projects,
  })
}

export const handler = middyfy(getProjects)
