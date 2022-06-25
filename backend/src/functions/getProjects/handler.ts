import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { formatJSONResponse } from "@libs/api-gateway"
import { middyfy } from "@libs/lambda"

const hello: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {
  return formatJSONResponse({
    message: `Hello, welcome to the exciting Serverless world!`,
    event,
  })
}

export const handler = middyfy(hello)
