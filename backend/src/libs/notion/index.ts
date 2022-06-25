import { Client } from "@notionhq/client"
import { environment } from "../environment"

export const notion = new Client({
  auth: environment.notionToken,
})
