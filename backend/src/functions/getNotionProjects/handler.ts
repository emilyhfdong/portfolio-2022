import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"
import { environment } from "@libs/environment"
import { middyfy } from "@libs/lambda"
import { notion } from "@libs/notion"
import { NotionProject } from "@libs/notion/types"

const getNotionProjects: ValidatedEventAPIGatewayProxyEvent<{}> = async () => {
  const database = await notion.databases.query({
    database_id: environment.databaseId,
  })

  const notionProjects = database.results as NotionProject[]

  return formatJSONResponse({
    notionProjects,
  })
}

export const handler = middyfy(getNotionProjects)
